export type Level = {
	title: string;
	color: string;
	icon: 'down' | 'up';
	bmi: number[];
	yourBmi?: number;
};

export const levels: Level[] = [
	{ title: 'Underweight', color: '#96a3ab', icon: 'down', bmi: [0, 18.5] },
	{ title: 'Normal', color: '#0ead69', icon: 'up', bmi: [18.6, 24.9] },
	{ title: 'Overweight', color: '#e2b039', icon: 'down', bmi: [25, 30] },
	{ title: 'Obese', color: '#c3423f', icon: 'down', bmi: [30.1, 99] },
];

export const calculateBmi = (height: number, weight: number) => {
	const bmi = weight / (height * height);

	for (let i in levels) {
		if (bmi >= levels[i].bmi[0] && bmi < levels[i].bmi[1]) {
			let levelCopy: Level = { ...levels[i] };
			levelCopy.yourBmi = parseFloat(bmi.toFixed(2));
			return levelCopy;
		}
	}

	return null;
};
