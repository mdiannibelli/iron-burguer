/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': "#F79502"
			},
			backgroundImage: {
				'mockup': "url('/imgs/mockup-1.jpg')",
				'mockup2': "url('/imgs/mockup-2.jpg')",
				'mockup3': "url('/imgs/mockup-3.jpg')",
			}
		},
	},
	plugins: [],
}
