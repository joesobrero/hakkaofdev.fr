export const Tabs = {
	baseStyle: {
		isLazy: true,
	},
	sizes: {
		lg: { },
		md: { },
		sm: { },
	},
	variants: {
		line: {
			color: 'purple.600'
		},
		enclosed: {},
		'enclosed-colored': {},
		'soft-rounded': {},
		'solid-rounded': {},
	},
}

export const variants = Object.keys(Tabs.variants)
export const sizes = Object.keys(Tabs.sizes)