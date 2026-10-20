export interface Game {
	title: string;
	/** One line shown under the title on the tile. */
	description: string;
	url: string;
	/** 16:10 artwork in /public/games. */
	cover: string;
	tags: string[];
	/** Backdrop behind the cover while it loads; match the artwork's darkest tone. */
	color: string;
}

/** Newest first. To add a game, drop a 1600×1000 cover in /public/games and add an entry here. */
export const games: Game[] = [
	{
		title: "Hollowmarch",
		description:
			"A two-player lane card game in the spirit of Gwent. Four factions, hand-drawn SVG art, play with a friend using a room code.",
		url: "https://hm.stoyanovalex.com",
		cover: "/games/hollowmarch.svg",
		tags: ["Card game", "2 players", "Browser"],
		color: "#0d1220",
	},
];
