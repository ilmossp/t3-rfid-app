import { DocIcon } from "./icons/DocIcon";
import { HomeIcon } from "./icons/HomeIcon";
import { TableIcon } from "./icons/TableIcon";
import { StatusIcon } from "./icons/StatusIcon";
import { CreditIcon } from "./icons/CreditIcon";
import { ArchiveIcon } from "./icons/ArchiveIcon";
import { SettingsIcon } from "./icons/SettingsIcon";

export const data = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "Table",
    icon: <TableIcon />,
    link: "/dashboard/table",
  },
  {
    title: "Status",
    icon: <StatusIcon />,
    link: "/dashboard/status",
  },
  {
    title: "Archives",
    icon: <ArchiveIcon />,
    link: "/dashboard/archives",
  },
  {
    title: "Credits",
    icon: <CreditIcon />,
    link: "/dashboard/credits",
  },
  {
    title: "Settings",
    icon: <SettingsIcon />,
    link: "/dashboard/settings",
  },
  {
    title: "Documentation",
    icon: <DocIcon />,
    link: "/dashboard/documentation",
  },
];
