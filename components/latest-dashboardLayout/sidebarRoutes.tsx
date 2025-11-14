import {
  LayoutDashboard,
  Coins,
  Settings,
  List,
  Users,
  CreditCard,
  ArrowDownCircle,
  FileText,
  ListChecks,
  Trophy,
  XCircle,
  MinusCircle,
  UserCheck,
  Bell,
  Clock,
  CheckCircle,
  CheckSquare,
  Ban,
  PlayCircle,
} from "lucide-react";

export const sidebarRoutes = [
  {
    name: "Dashboard",
    href: "/",
    icon: <LayoutDashboard size={18} />,
  },
  {
    name: "Crypto Currency",
    href: "/crypto-currency",
    icon: <Coins size={18} />,
  },
  {
    name: "Trade Setting",
    href: "/trade-setting",
    icon: <Settings size={18} />,
  },
  {
    name: "Trade Log",
    href: "/trade-log",
    icon: <List size={18} />,
    subItems: [
      { name: "All", href: "/trade-log/all", icon: <ListChecks size={16} /> },
      {
        name: "Winning",
        href: "/trade-log/winning",
        icon: <Trophy size={16} />,
      },
      {
        name: "Losing",
        href: "/trade-log/losing",
        icon: <XCircle size={16} />,
      },
      {
        name: "Draw",
        href: "/trade-log/draw",
        icon: <MinusCircle size={16} />,
      },
    ],
  },
  {
    name: "Manage Users",
    href: "/manage-users",
    icon: <Users size={18} />,
    subItems: [
      {
        name: "Active Users",
        href: "/manage-users/active",
        icon: <UserCheck size={16} />,
      },
      {
        name: "Send Notification",
        href: "/manage-users/notification",
        icon: <Bell size={16} />,
      },
    ],
  },
  {
    name: "Deposits",
    href: "/deposits",
    icon: <CreditCard size={18} />,
    subItems: [
      {
        name: "All Deposits",
        href: "/deposits/all",
        icon: <ListChecks size={16} />,
      },
      {
        name: "Pending",
        href: "/deposits/pending",
        icon: <Clock size={16} />,
      },
      {
        name: "Approved",
        href: "/deposits/approved",
        icon: <CheckCircle size={16} />,
      },
      {
        name: "Successful",
        href: "/deposits/successful",
        icon: <CheckSquare size={16} />,
      },
      {
        name: "Rejected",
        href: "/deposits/rejected",
        icon: <Ban size={16} />,
      },
      {
        name: "Initiated",
        href: "/deposits/initiated",
        icon: <PlayCircle size={16} />,
      },
    ],
  },
  {
    name: "Withdrawals",
    href: "/withdrawals",
    icon: <ArrowDownCircle size={18} />,
    subItems: [
      {
        name: "All Withdrawals",
        href: "/withdrawals/all",
        icon: <ListChecks size={16} />,
      },
      {
        name: "Pending",
        href: "/withdrawals/pending",
        icon: <Clock size={16} />,
      },
      {
        name: "Approved",
        href: "/withdrawals/approved",
        icon: <CheckCircle size={16} />,
      },
      {
        name: "Rejected",
        href: "/withdrawals/rejected",
        icon: <Ban size={16} />,
      },
    ],
  },
  {
    name: "Report",
    href: "/report",
    icon: <FileText size={18} />,
  },
];
