import { stagger, cubicBezier } from "framer-motion";

type sequenceType = [string, { [key: string]: any }, { [key: string]: any }][];

export const kotakIn: sequenceType = [
	[".kotak", { scaleY: 0 }, { duration: 0 }],
	[
		".kotak",
		{ scaleY: 1 },
		{
			duration: 0.3,
			delay: stagger(0.15),
			ease: cubicBezier(0.32, 0, 0.67, 0),
		},
	],
	[
		".kotak",
		{ y: "100%" },
		{ duration: 0.3, ease: cubicBezier(0.33, 1, 0.68, 1) },
	],
	[".fuck", { scaleY: 0 }, { duration: 0 }],
];

export const kotakOut: sequenceType = [
	[
		".kotak",
		{ y: "0%" },
		{
			duration: 0.3,
			delay: stagger(0.15),
			ease: cubicBezier(0.32, 0, 0.67, 0),
		},
	],
	[
		".kotak",
		{ y: "-100%" },
		{ duration: 0.3, ease: cubicBezier(0.33, 1, 0.68, 1) },
	],
];
