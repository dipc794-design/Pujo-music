export interface Track {
  id: string;
  title: string;
  artist: string;
  film?: string;
  year?: string;
  duration: number; // in seconds
  videoId: string;
}

export interface Playlist {
  id: string;
  name: string;
  subtitle: string;
  tracks: Track[];
}
