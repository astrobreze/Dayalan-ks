import React, { useState, useEffect } from 'react';
import { User } from 'firebase/auth';
import { initAuth, googleSignIn, logout } from '../services/googleAuth';
import { createMeetSpace, MeetSpace } from '../services/googleMeet';

interface GoogleMeetSchedulerProps {
  sessionTitle?: string;
  className?: string;
  onMeetCreated?: (meet: MeetSpace) => void;
}

export const GoogleMeetScheduler: React.FC<GoogleMeetSchedulerProps> = ({
  sessionTitle = 'Sacred Vedic & KP Consultation',
  className = '',
  onMeetCreated,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isSigningIn, setIsSigningIn] = useState<boolean>(false);
  const [isCreating, setIsCreating] = useState<boolean>(false);
  const [createdMeet, setCreatedMeet] = useState<MeetSpace | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = initAuth(
      (currentUser) => {
        setUser(currentUser);
        setIsAuthenticated(true);
      },
      () => {
        setUser(null);
        setIsAuthenticated(false);
      }
    );
    return () => unsubscribe();
  }, []);

  const handleSignIn = async () => {
    setIsSigningIn(true);
    setErrorMsg(null);
    try {
      const res = await googleSignIn();
      if (res) {
        setUser(res.user);
        setIsAuthenticated(true);
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Google sign-in was cancelled or failed.');
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleSignOut = async () => {
    await logout();
    setUser(null);
    setIsAuthenticated(false);
    setCreatedMeet(null);
  };

  const handleCreateMeet = async () => {
    setIsCreating(true);
    setErrorMsg(null);
    try {
      const space = await createMeetSpace();
      setCreatedMeet(space);
      if (onMeetCreated) {
        onMeetCreated(space);
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || 'Failed to create Google Meet space.');
    } finally {
      setIsCreating(false);
    }
  };

  const handleCopyLink = () => {
    if (createdMeet?.meetingUri) {
      navigator.clipboard.writeText(createdMeet.meetingUri);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className={`p-5 sm:p-6 rounded-2xl bg-[#171b26] border border-[#f2ca50]/30 shadow-xl text-left ${className}`}>
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#4d4635]/30">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#262a35] border border-[#f2ca50]/40 flex items-center justify-center text-[#f2ca50]">
            <span className="material-symbols-outlined text-2xl">video_camera_front</span>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-serif text-lg font-semibold text-[#dfe2f1]">
                Google Meet Video Sanctuary
              </h3>
              <span className="px-2 py-0.5 rounded bg-[#f2ca50]/20 text-[#f2ca50] text-[10px] uppercase font-bold tracking-wider">
                Official 1P
              </span>
            </div>
            <p className="text-xs text-[#d0c5af]">
              Instantly provision private Google Meet conference spaces for your 1-on-1 reading.
            </p>
          </div>
        </div>

        {/* User Auth Pill / Status */}
        {isAuthenticated && user && (
          <div className="flex items-center gap-2 self-start sm:self-auto bg-[#0a0e18] px-3 py-1.5 rounded-full border border-[#4d4635]/30">
            {user.photoURL ? (
              <img src={user.photoURL} alt={user.displayName || 'Google User'} className="w-5 h-5 rounded-full" />
            ) : (
              <span className="material-symbols-outlined text-sm text-[#f2ca50]">account_circle</span>
            )}
            <span className="text-xs text-[#dfe2f1] font-medium max-w-[140px] truncate">
              {user.displayName || user.email}
            </span>
            <button
              onClick={handleSignOut}
              className="text-[10px] text-[#99907c] hover:text-[#f2ca50] ml-1 uppercase font-semibold cursor-pointer"
            >
              Sign out
            </button>
          </div>
        )}
      </div>

      {errorMsg && (
        <div className="mt-4 p-3 rounded-lg bg-red-950/40 border border-red-700/50 text-xs text-red-200 flex items-start gap-2">
          <span className="material-symbols-outlined text-base text-red-400">error</span>
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Main Action Area */}
      <div className="mt-5">
        {!isAuthenticated ? (
          <div className="flex flex-col items-center text-center p-6 bg-[#0a0e18]/80 rounded-xl border border-[#4d4635]/20 gap-4">
            <p className="text-xs sm:text-sm text-[#d0c5af] max-w-md leading-relaxed">
              Sign in with your Google Account to create and access your personalized Google Meet consultation room for <strong className="text-[#f2ca50]">{sessionTitle}</strong>.
            </p>

            {/* Official Google Sign-In Button */}
            <button
              onClick={handleSignIn}
              disabled={isSigningIn}
              className="inline-flex items-center gap-3 px-5 py-2.5 rounded-lg bg-white text-gray-800 font-medium text-xs sm:text-sm hover:bg-gray-100 transition-all shadow-md cursor-pointer disabled:opacity-50"
            >
              <svg className="w-4 h-4" viewBox="0 0 48 48">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              <span>{isSigningIn ? 'Connecting with Google...' : 'Sign in with Google for Meet'}</span>
            </button>
            <span className="text-[10px] text-[#99907c]">
              Authorized for Google Meet spaces creation and management
            </span>
          </div>
        ) : !createdMeet ? (
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-[#0a0e18]/80 rounded-xl border border-[#4d4635]/20">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs uppercase tracking-wider text-[#f2ca50] font-semibold">
                Ready to Generate Space
              </span>
              <p className="text-xs text-[#d0c5af]">
                Click below to provision an official Google Meet room encrypted with Google infrastructure.
              </p>
            </div>
            <button
              onClick={handleCreateMeet}
              disabled={isCreating}
              className="px-5 py-3 rounded-lg bg-[#f2ca50] text-[#3c2f00] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#d4af37] transition-all flex items-center gap-2 cursor-pointer disabled:opacity-50 whitespace-nowrap"
            >
              <span className="material-symbols-outlined text-base">
                {isCreating ? 'sync' : 'add_link'}
              </span>
              <span>{isCreating ? 'Generating Room...' : 'Create Google Meet Room'}</span>
            </button>
          </div>
        ) : (
          <div className="p-5 bg-[#0a0e18] rounded-xl border border-[#f2ca50]/50 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[#4d4635]/30">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-xs uppercase tracking-widest text-emerald-400 font-bold">
                  Active Google Meet Space Created
                </span>
              </div>
              <span className="text-[11px] text-[#99907c] font-mono">
                Code: {createdMeet.meetingCode || createdMeet.name.split('/').pop()}
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="flex-1 px-3.5 py-2.5 bg-[#171b26] rounded-lg border border-[#4d4635]/30 font-mono text-xs text-[#dfe2f1] select-all truncate">
                {createdMeet.meetingUri}
              </div>
              <button
                onClick={handleCopyLink}
                className="px-4 py-2.5 rounded-lg bg-[#262a35] hover:bg-[#313540] text-[#dfe2f1] text-xs font-semibold uppercase tracking-wider border border-[#4d4635]/40 transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <span className="material-symbols-outlined text-base text-[#f2ca50]">
                  {copied ? 'done' : 'content_copy'}
                </span>
                <span>{copied ? 'Copied Link!' : 'Copy Link'}</span>
              </button>
              <a
                href={createdMeet.meetingUri}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-[#f2ca50] hover:bg-[#d4af37] text-[#3c2f00] text-xs font-bold uppercase tracking-wider shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer text-center"
              >
                <span>Launch Google Meet</span>
                <span className="material-symbols-outlined text-base">open_in_new</span>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-[11px] text-[#99907c] pt-1">
              <span>This room is reserved for your private consultation with Astrologer Dhayalan K S.</span>
              <button
                onClick={handleCreateMeet}
                className="text-[#f2ca50] hover:underline self-start sm:self-auto cursor-pointer"
              >
                Generate another room
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
