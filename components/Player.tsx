"use client";

import useGetSongById from "@/hooks/useGetSongById";
import useLoadSongUrl from "@/hooks/useLoadSongUrl";
import usePlayer from "@/hooks/usePlayer";
import PlayerContent from "./PlayerContent";

interface PlayerProps { }

const Player = () => {
	const player = usePlayer();
	console.log("🚀 ~ file: Player.tsx:11 ~ Player ~ player:", player)

	const { song } = useGetSongById(player.activeId);
	console.log("🚀 ~ file: Player.tsx:13 ~ Player ~ song:", song)

	const songUrl = useLoadSongUrl(song!);
	console.log("🚀 ~ file: Player.tsx:15 ~ Player ~ songUrl:", songUrl)

	if (!song || !songUrl || !player.activeId) {
		return null;
	}

	return (
		<div className="
			fixed
			bottom-0
			bg-black
			w-full
			py-2
			h-[80px]
			px-4
		">
			<PlayerContent
				key={songUrl}
				song={song}
				songUrl={songUrl}
			/>
		</div>
	);
};

export default Player;