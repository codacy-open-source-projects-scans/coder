import ParameterIcon from "@mui/icons-material/CodeOutlined";
import GeneralIcon from "@mui/icons-material/SettingsOutlined";
import ScheduleIcon from "@mui/icons-material/TimerOutlined";
import type { Workspace } from "api/typesGenerated";
import {
	Sidebar as BaseSidebar,
	SidebarHeader,
	SidebarNavItem,
} from "components/Sidebar/Sidebar";
import { Avatar } from "components/deprecated/Avatar/Avatar";
import type { FC } from "react";

interface SidebarProps {
	username: string;
	workspace: Workspace;
}

export const Sidebar: FC<SidebarProps> = ({ username, workspace }) => {
	return (
		<BaseSidebar>
			<SidebarHeader
				avatar={
					<Avatar src={workspace.template_icon} variant="square" fitImage />
				}
				title={workspace.name}
				linkTo={`/@${username}/${workspace.name}`}
				subtitle={workspace.template_display_name ?? workspace.template_name}
			/>

			<SidebarNavItem href="" icon={GeneralIcon}>
				General
			</SidebarNavItem>
			<SidebarNavItem href="parameters" icon={ParameterIcon}>
				Parameters
			</SidebarNavItem>
			<SidebarNavItem href="schedule" icon={ScheduleIcon}>
				Schedule
			</SidebarNavItem>
		</BaseSidebar>
	);
};
