import { getAccessToken } from './googleAuth';

export interface MeetSpace {
  name: string;
  meetingUri: string;
  meetingCode: string;
  config?: {
    accessType?: string;
    entryPointAccess?: string;
  };
  activeConference?: {
    conferenceRecord?: string;
  };
}

/**
 * Creates a dedicated Google Meet space for a private Vedic astrology consultation session.
 * Uses the Google Meet REST API v2 (`https://meet.googleapis.com/v2/spaces`).
 */
export async function createMeetSpace(): Promise<MeetSpace> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('User is not authenticated with Google. Please sign in to create a Google Meet space.');
  }

  const response = await fetch('https://meet.googleapis.com/v2/spaces', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      config: {
        accessType: 'OPEN',
      },
    }),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    console.error('Google Meet space creation failed:', errorData);
    throw new Error(
      errorData.error?.message || `Failed to create Google Meet space (Status: ${response.status})`
    );
  }

  const data = await response.json();
  return data as MeetSpace;
}

/**
 * Retrieves details of an existing Google Meet space.
 */
export async function getMeetSpace(spaceName: string): Promise<MeetSpace> {
  const token = await getAccessToken();
  if (!token) {
    throw new Error('User is not authenticated with Google. Please sign in to access Google Meet.');
  }

  const response = await fetch(`https://meet.googleapis.com/v2/${spaceName}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(
      errorData.error?.message || `Failed to get Google Meet space details (Status: ${response.status})`
    );
  }

  const data = await response.json();
  return data as MeetSpace;
}
