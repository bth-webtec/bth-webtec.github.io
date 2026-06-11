// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'

// https://astro.build/config
export default defineConfig({
	site: 'https://bth-webtec.github.io/',
	base: '/',
	integrations: [
		starlight({
			plugins: [
				starlightImageZoom(),
			],
			title: 'Kursen webtec',
			favicon: 'favicon.png',
			logo: {
				//src: './src/assets/leaf_256x256.png',
				src: '@assets/leaf_256x256.png',
			},
			customCss: [
				'./src/styles/dbwebb.css',
			],
			editLink: {
				baseUrl: 'https://github.com/bth-webtec/bth-webtec.github.io/tree/main',
			},
			// social: {
			// 	github: 'https://github.com/bth-webtec/website',
			// },
			social: [
			  { icon: 'github', label: 'GitHub', href: 'https://github.com/bth-webtec/bth-webtec.github.io' },
			],
			head: [
				{
				  tag: 'base',
				  attrs: {
					href: ''
				  }
				}
			],
			sidebar: [
				{
					label: 'Introduktion',
					collapsed: true,
					items: [{ autogenerate: { "directory": "intro" } }]
					//autogenerate: { directory: 'intro' },
				},
				{ 
					label: 'Labbmiljö',
					collapsed: true,
					items: [{ autogenerate: { "directory": "labbmiljo" } }]
				},
				{ 
					label: 'Kursrepo',
					collapsed: true,
					items: [{ autogenerate: { "directory": "kursrepo" } }]
				},
				{
					label: 'Kmom01',
					collapsed: true,
					items: [{ autogenerate: { "directory": "kmom01" } }]
					//autogenerate: { directory: 'kmom' },
				},
				{
					label: 'Kursmoment',
					collapsed: true,
					items: [{ autogenerate: { "directory": "kmom" } }]
					//autogenerate: { directory: 'kmom' },
				},
				{
					label: 'Läromaterial',
					collapsed: true,
					/* autogenerate: { directory: 'laromaterial' }, */
					items: [
						'laromaterial',
						// { 
						// 	label: 'Labbmiljö',
						// 	collapsed: true,
						// 	//autogenerate: { directory: 'labbmiljo' },
						// 	items: [{ autogenerate: { "directory": "labbmiljo" } }]
						// },
						{ 
							label: 'Kursrepo utvecklingsmiljö',
							collapsed: true,
							//autogenerate: { directory: 'laromaterial/kursrepo-utvecklingsmiljo' },
							items: [{ autogenerate: { "directory": "laromaterial/kursrepo-utvecklingsmiljo" } }]
						},
						{
							label: 'Föreläsning',
							collapsed: true,
							items: [{ autogenerate: { "directory": "forelasning" } }]
						},
						{
							label: 'Övning',
							collapsed: true,
							items: [{ autogenerate: { "directory": "ovning" } }]
						},
						{ 
							label: 'Lab',
							collapsed: true,
							items: [
								'laromaterial/lab',
								'laromaterial/lab/lab_01/readme',
								'laromaterial/lab/lab_02/readme',
								'laromaterial/lab/lab_03/readme',
								'laromaterial/lab/lab_04/readme',
								'laromaterial/lab/readme',
							],
						},
						{
							label: 'Uppgift',
							collapsed: true,
							items: [{ autogenerate: { "directory": "uppgift" } }]
						},
						{ 
							label: 'Instruktion',
							collapsed: true,
							//autogenerate: { directory: 'laromaterial/instruktion' },
							items: [{ autogenerate: { "directory": "laromaterial/instruktion" } }]
						},
					],
				},
				{
					label: 'Studieguide',
					collapsed: true,
					//autogenerate: { directory: 'studieguide' },
					items: [{ autogenerate: { "directory": "studieguide" } }]
					/* items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],*/
				},
				{
					label: 'Övrigt',
					collapsed: true,
					//autogenerate: { directory: 'ovrigt' },
					items: [{ autogenerate: { "directory": "ovrigt" } }]
				},
			],
		}),
	],
});
