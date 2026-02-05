import { json } from "@sveltejs/kit";

export interface Lanyard {
  success: boolean;
  data: {
    kv: Record<string, string>;
    spotify: {
      track_id: string;
      song: string;
      artist: string;
      album_art_url: string;
      album: string;
      timestamps: {
        start: number;
        end: number;
      };
    } | null;
    discord_user: {
      username: string;
      global_name: string;
      discriminator: string;
      id: string;
      avatar: string | null;
      avatar_decoration_data: {
        asset: string | null;
      };
    };
    discord_status: "online" | "idle" | "dnd" | "offline";
    activities: Array<{
      emoji: any;
      name: string;
      type: number;
      state?: string;
      details?: string;
      application_id?: string;
    }>;
  };
}

// TODO subscribe to lanyard websocket
// TODO socket.io send to client
export async function GET() {
  const res = await fetch(
    "https://api.lanyard.rest/v1/users/763864687481323620",
  );

  if (!res.ok) {
    return json(
      { error: "Failed to fetch Lanyard data" },
      { status: res.status },
    );
  }

  const lanyard: Lanyard = await res.json();
  return json(lanyard);
}
