import type { Meta, StoryObj } from "@storybook/react";
import {
	MockTemplate,
	MockTemplateVersion,
	MockTemplateVersionWithMarkdownMessage,
	mockApiError,
} from "testHelpers/entities";
import { withDashboardProvider } from "testHelpers/storybook";
import {
	TemplateVersionPageView,
	type TemplateVersionPageViewProps,
} from "./TemplateVersionPageView";

const readmeContent = `---
name:Template test
---
## Instructions
You can add instructions here

[Some link info](https://coder.com)
\`\`\`
# This is a really long sentence to test that the code block wraps into a new line properly.
\`\`\``;

const defaultArgs: TemplateVersionPageViewProps = {
	organizationName: MockTemplate.organization_name,
	templateName: MockTemplate.name,
	versionName: MockTemplateVersion.name,
	currentVersion: MockTemplateVersion,
	currentFiles: {
		"README.md": readmeContent,
		"main.tf": "{}",
		"some.tpl": "{{.Name}}",
		"some.sh": `echo "Hello world"`,
	},
	baseFiles: undefined,
	error: undefined,
};

const meta: Meta<typeof TemplateVersionPageView> = {
	title: "pages/TemplateVersionPage",
	decorators: [withDashboardProvider],
	component: TemplateVersionPageView,
	args: defaultArgs,
};

export default meta;
type Story = StoryObj<typeof TemplateVersionPageView>;

export const Default: Story = {};

export const LongVersionMessage: Story = {
	args: {
		currentVersion: MockTemplateVersionWithMarkdownMessage,
	},
};

export const WithError: Story = {
	args: {
		...defaultArgs,
		currentVersion: undefined,
		currentFiles: undefined,
		error: mockApiError({
			message: "Error on loading the template version",
		}),
	},
};
