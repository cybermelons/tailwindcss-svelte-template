import { DateTime } from 'luxon';

function getSeasonFromMonth(month: number) {
	if (month >= 0 && month <= 2) {
		return 'Winter';
	} else if (month >= 3 && month <= 5) {
		return 'Spring';
	} else if (month >= 6 && month <= 8) {
		return 'Summer';
	} else {
		return 'Fall';
	}
}

function formatDateShort(date: string) {
	return new Date(date).toLocaleDateString('en-US', {
		month: 'short',
		year: 'numeric'
	});
}

export function formatWorkDate(dateStartString: string, dateEndString: string) {
	const dateStart = DateTime.fromJSDate(new Date(dateStartString));
	const dateEnd = DateTime.fromJSDate(new Date(dateEndString));
	const dateDelta = dateEnd.diff(dateStart);

	if (dateDelta.as('months') <= 4) {
		// just one season
		const year = dateStart.year;
		const season = getSeasonFromMonth(dateStart.month);
		return `${season} ${year}`;
	}

	return formatDateShort(dateStartString) + ' - ' + formatDateShort(dateEndString);
}
