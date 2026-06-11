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
						'kmom01/js-builtin-types',
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
						{
							label: 'Övning: Bygg en responsiv webbplats',
							collapsed: true,
							items: [{ autogenerate: { directory: 'kmom02/bygg-en-responsiv-webbplats' } }],
						}, 
						'kmom02/js-common-structures-1',
						'kmom02/lab_02',
						'kmom02/responsiv',
					],
				},
				{
					label: 'Kursmoment 03',
					collapsed: true,
					items: [
						'kmom03',
						{
							label: 'Övning: Bygg en One-page webbplats',
							collapsed: true,
							items: [{ autogenerate: { directory: 'kmom03/bygg-en-one-page-webbplats' } }],
						},
						'kmom03/js-common-structures-2',
						'kmom03/lab_03',
						'kmom03/one-page-website',
					],
				},
				{
					label: 'Kursmoment 04',
					collapsed: true,
					items: [
						'kmom04',
						{
							label: 'Övning: Mera JavaScript',
							collapsed: true,
							items: [{ autogenerate: { directory: 'kmom04/mera-javascript' } }],
						},
						'kmom04/python-to-js',
						'kmom04/lab_04',
						'kmom04/dom',
					],
				},
				{
					label: 'Kursmoment 05',
					collapsed: true,
					items: [
						'kmom05',
						{
							label: 'Övning: Fetch API och async/await',
							collapsed: true,
							items: [{ autogenerate: { directory: 'kmom05/fetch-api' } }],
						},
						'kmom05/fetch',
					],
				},
				{
					label: 'Kursmoment 06',
					collapsed: true,
					items: [
						'kmom06',
						{
							label: 'Övning: JavaScript objekt och fetch',
							collapsed: true,
							items: [{ autogenerate: { directory: 'kmom06/object-och-mer-fetch' } }],
						},
						'kmom06/form-elements',
						'kmom06/duckhunt',
					],
				},
				{
					label: 'Kursmoment 10',
					collapsed: true,
					items: [
						'kmom10',
					],
				},
				{
					label: 'Studieguide',
					collapsed: true,
					items: [{ autogenerate: { "directory": "studieguide" } }]
				},
				{
					label: 'Övrigt',
					collapsed: true,
					items: [{ autogenerate: { "directory": "ovrigt" } }]
				},
				// { 
				// 	label: 'Kursrepo utvecklingsmiljö',
				// 	collapsed: true,
				// 	//autogenerate: { directory: 'laromaterial/kursrepo-utvecklingsmiljo' },
				// 	items: [{ autogenerate: { "directory": "laromaterial/kursrepo-utvecklingsmiljo" } }]
				// },
			],
		}),
	],
});
