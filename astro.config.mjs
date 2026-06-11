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
					label: 'Kursmoment 01',
					collapsed: true,
					items: [
						'kmom01',
						'kmom01/introduktion-till-webbteknologier',
						'kmom01/introduktion-till-html',
						{
							label: 'Övning: Skapa en webbsida med HTML, CSS och JavaScript',
							collapsed: true,
							items: [{ autogenerate: { directory: 'kmom01/skapa-en-webbsida-med-html-css-och-javascript' } }],
						},
						{
							label: 'Övning: Kom igång med JavaScript',
							collapsed: true,
							items: [{ autogenerate: { directory: 'kmom01/kom-igang-med-javascript' } }],
						},
						'kmom01/lab_01',
						'kmom01/bygg-webbplats',
					],
				},
				{
					label: 'Kursmoment 02',
					collapsed: true,
					items: [
						'kmom02',
						'kmom02/introduktion-till-css',
						'kmom02/responsiv-webbdesign',
						'kmom02/lab_02',
						'kmom02/responsiv',
					],
				},
				{
					label: 'Kursmoment 03',
					collapsed: true,
					items: [
						'kmom03',
						'kmom03/lab_03',
						'kmom03/one-page-website',
					],
				},
				{
					label: 'Kursmoment 04',
					collapsed: true,
					items: [
						'kmom04',
						'kmom04/lab_04',
						'kmom04/dom',
					],
				},
				{
					label: 'Kursmoment 05',
					collapsed: true,
					items: [
						'kmom05',
						'kmom05/fetch',
					],
				},
				{
					label: 'Kursmoment 06',
					collapsed: true,
					items: [
						'kmom06',
						'kmom06/duckhunt',
					],
				},
				{
					label: 'Kursmoment 07/10',
					collapsed: true,
					items: [
						'kmom10',
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
					label: 'Övrigt (old?)',
					collapsed: true,
					//autogenerate: { directory: 'ovrigt' },
					items: [{ autogenerate: { "directory": "ovrigt" } }]
				},
				{
					label: 'Läromaterial (old)',
					collapsed: true,
					/* autogenerate: { directory: 'laromaterial' }, */
					items: [
						//'laromaterial',
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
						// {
						// 	label: 'Föreläsning',
						// 	collapsed: true,
						// 	items: [{ autogenerate: { "directory": "forelasning" } }]
						// },
						{
							label: 'Övning',
							collapsed: true,
							items: [{ autogenerate: { "directory": "ovning" } }]
						},
						// { 
						// 	label: 'Lab',
						// 	collapsed: true,
						// 	items: [
						// 		'laromaterial/lab',
						// 		//'laromaterial/lab/lab_01/readme',
						// 		'laromaterial/lab/lab_02/readme',
						// 		'laromaterial/lab/lab_03/readme',
						// 		'laromaterial/lab/lab_04/readme',
						// 		'laromaterial/lab/readme',
						// 	],
						// },
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
			],
		}),
	],
});
