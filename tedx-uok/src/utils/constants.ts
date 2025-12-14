export const theme = {
	fontStack: 'Helvetica Neue, Helvetica, Arial, sans-serif',
	colors: {
		background: '#000000',
		accent: '#EB0028',
		muted: '#A0A0A0',
		cardBg: '#0E0E0E',
		cardBorder: '#1F1F1F',
		badgeBg: '#1F1F1F',
	},
	radii: {
		card: '12px',
		pill: '9999px',
	},
	shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
};

export const pageTheme = {
	background: '#ffffff',
	surface: '#f1ede8',
	border: '#dcd6cf',
	text: '#101010',
	muted: '#6f6f6f',
	accent: theme.colors.accent,
	font: theme.fontStack,
};

// Common styles for Team and Partners pages
export const sharedStyles = {
	// Card styles
	card: {
		base: 'group cursor-pointer bg-white border border-gray-100 overflow-hidden',
		imageContainer: 'aspect-[3/4] overflow-hidden bg-[#e8e2dc]',
		content: 'p-6',
	},
	// Typography
	typography: {
		heroTitle: 'text-6xl md:text-7xl lg:text-8xl font-bold leading-tight',
		sectionTitle: 'text-4xl md:text-5xl font-bold text-black',
		cardTitle: 'font-bold text-black text-lg',
		cardSubtitle: 'text-base text-gray-600',
		cardAccent: 'text-base text-[#a68968]',
		trackLabel: 'text-xs uppercase tracking-wider text-gray-400',
		description: 'text-xl md:text-2xl text-gray-600',
	},
	// Colors
	colors: {
		tedxRed: 'text-red-600',
		black: 'text-black',
		gray600: 'text-gray-600',
		gray400: 'text-gray-400',
		tan: 'text-[#a68968]',
		bgBeige: 'bg-[#e8e2dc]',
		bgCream: 'bg-[#f5f1ed]',
	},
	// Layout
	layout: {
		main: 'min-h-screen bg-white',
		heroSection: 'pt-20 pb-16 px-6',
		heroContainer: 'max-w-7xl mx-auto',
		heroGrid: 'grid grid-cols-1 lg:grid-cols-2 gap-8 items-center',
		divider: 'border-t border-gray-200 max-w-7xl mx-auto',
		contentSection: 'py-16 px-6',
		gridThreeCol: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
	},
};
