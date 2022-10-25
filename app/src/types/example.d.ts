/**
 * Add types here
 */

//export type MyType = {
//  myMember:string
//};

export type ResumeData = {
	basics: {
		name: string;
		label: string;
		email: string;
		phone: string;
		url: string;
		summary: string;
		long_description: string;
		location: {
			city: string;
			countryCode: string;
			region: string;
		},
		profiles: {
			network: string;
			username: string;
			url: string;
		}[],

		work: WorkItem[],

		volunteer: {
			organization: string;
			fontawesome_classes: string;
			position: string;
			startDate: string;
			endDate: string;
			summary: string;
		}[],

		skills: {
			name: string;
			level: [ string ];
			keywords: [ string ];
		}[],

		languages: {
			language: string;
			fluency: string;
		}[],

		education: {
			institution: string;
			url: string;
			area: string;
			studyType: string;
			startDate: string;
			endDate: string;
			score: number;
			maxScore: number;
		}[],

		vounteer: {
			organization: string;
			position: string;
			startDate: string;
			endDate: string;
			summary: string;
		}[],

		projects: {
			fontawesome_classes: string,
			name: string,
			description: string,
			url: string,
			keywords: string[],
		}[],

		interests: string[],
	},
};
