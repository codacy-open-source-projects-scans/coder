import type { Meta, StoryObj } from "@storybook/react";
import { chromatic } from "testHelpers/chromatic";
import {
	MockFailedWorkspaceBuild,
	MockWorkspaceBuild,
	MockWorkspaceBuildLogs,
} from "testHelpers/entities";
import { WorkspaceBuildPageView } from "./WorkspaceBuildPageView";

const defaultBuilds = Array.from({ length: 15 }, (_, i) => ({
	...MockWorkspaceBuild,
	id: `${i}`,
	build_number: i,
}));

const meta: Meta<typeof WorkspaceBuildPageView> = {
	title: "pages/WorkspaceBuildPage",
	parameters: { chromatic },
	component: WorkspaceBuildPageView,
	args: {
		build: MockWorkspaceBuild,
		logs: MockWorkspaceBuildLogs,
		builds: defaultBuilds,
		activeBuildNumber: defaultBuilds[0].build_number,
	},
};

export default meta;
type Story = StoryObj<typeof WorkspaceBuildPageView>;

export const Loaded: Story = {};

export const LoadingBuildLogs: Story = {
	args: {
		builds: undefined,
	},
};

const failedBuild = {
	...MockFailedWorkspaceBuild("delete"),
	build_number: 123123123123,
};

export const FailedDelete: Story = {
	args: {
		build: failedBuild,
		builds: [failedBuild, ...defaultBuilds],
		activeBuildNumber: failedBuild.build_number,
	},
};
