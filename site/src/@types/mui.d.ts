// biome-ignore lint/nursery/noRestrictedImports: base theme types
import type { PaletteColor, PaletteColorOptions } from "@mui/material/styles";

declare module "@mui/material/styles" {
	interface Palette {
		neutral: PaletteColor;
		dots: string;
	}

	interface PaletteOptions {
		neutral?: PaletteColorOptions;
		dots?: string;
	}
}

declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		neutral: true;
	}

	interface ButtonPropsSizeOverrides {
		xlarge: true;
	}
}

declare module "@mui/material/Checkbox" {
	interface CheckboxPropsSizeOverrides {
		xsmall: true;
	}
}
