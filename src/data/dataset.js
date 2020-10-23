import * as Feather from "react-feather"

import originalTags from "./tags"

const dataset = [
	{
		name: "activity",
		tags: [],
		svgs: {
			stroke: Feather.Activity,
		},
		new: false,
	},
	{
		name: "airplay",
		tags: [],
		svgs: {
			stroke: Feather.Airplay,
		},
		new: false,
	},
	{
		name: "alert-circle",
		tags: [],
		svgs: {
			stroke: Feather.AlertCircle,
		},
		new: false,
	},
	{
		name: "alert-octagon",
		tags: [],
		svgs: {
			stroke: Feather.AlertOctagon,
		},
		new: false,
	},
	{
		name: "alert-triangle",
		tags: [],
		svgs: {
			stroke: Feather.AlertTriangle,
		},
		new: false,
	},
	{
		name: "align-center",
		tags: [],
		svgs: {
			stroke: Feather.AlignCenter,
		},
		new: false,
	},
	{
		name: "align-justify",
		tags: [],
		svgs: {
			stroke: Feather.AlignJustify,
		},
		new: false,
	},
	{
		name: "align-left",
		tags: [],
		svgs: {
			stroke: Feather.AlignLeft,
		},
		new: false,
	},
	{
		name: "align-right",
		tags: [],
		svgs: {
			stroke: Feather.AlignRight,
		},
		new: false,
	},
	{
		name: "anchor",
		tags: [],
		svgs: {
			stroke: Feather.Anchor,
		},
		new: false,
	},
	{
		name: "archive",
		tags: [],
		svgs: {
			stroke: Feather.Archive,
		},
		new: false,
	},
	{
		name: "at-sign",
		tags: [],
		svgs: {
			stroke: Feather.AtSign,
		},
		new: false,
	},
	{
		name: "award",
		tags: [],
		svgs: {
			stroke: Feather.Award,
		},
		new: false,
	},
	{
		name: "aperture",
		tags: [],
		svgs: {
			stroke: Feather.Aperture,
		},
		new: false,
	},
	{
		name: "bar-chart",
		tags: [],
		svgs: {
			stroke: Feather.BarChart,
		},
		new: false,
	},
	{
		name: "bar-chart-2",
		tags: [],
		svgs: {
			stroke: Feather.BarChart2,
		},
		new: false,
	},
	{
		name: "battery",
		tags: [],
		svgs: {
			stroke: Feather.Battery,
		},
		new: false,
	},
	{
		name: "battery-charging",
		tags: [],
		svgs: {
			stroke: Feather.BatteryCharging,
		},
		new: false,
	},
	{
		name: "bell",
		tags: [],
		svgs: {
			stroke: Feather.Bell,
		},
		new: false,
	},
	{
		name: "bell-off",
		tags: [],
		svgs: {
			stroke: Feather.BellOff,
		},
		new: false,
	},
	{
		name: "bluetooth",
		tags: [],
		svgs: {
			stroke: Feather.Bluetooth,
		},
		new: false,
	},
	{
		name: "book-open",
		tags: [],
		svgs: {
			stroke: Feather.BookOpen,
		},
		new: false,
	},
	{
		name: "book",
		tags: [],
		svgs: {
			stroke: Feather.Book,
		},
		new: false,
	},
	{
		name: "bookmark",
		tags: [],
		svgs: {
			stroke: Feather.Bookmark,
		},
		new: false,
	},
	{
		name: "box",
		tags: [],
		svgs: {
			stroke: Feather.Box,
		},
		new: false,
	},
	{
		name: "briefcase",
		tags: [],
		svgs: {
			stroke: Feather.Briefcase,
		},
		new: false,
	},
	{
		name: "calendar",
		tags: [],
		svgs: {
			stroke: Feather.Calendar,
		},
		new: false,
	},
	{
		name: "camera",
		tags: [],
		svgs: {
			stroke: Feather.Camera,
		},
		new: false,
	},
	{
		name: "cast",
		tags: [],
		svgs: {
			stroke: Feather.Cast,
		},
		new: false,
	},
	{
		name: "circle",
		tags: [],
		svgs: {
			stroke: Feather.Circle,
		},
		new: false,
	},
	{
		name: "clipboard",
		tags: [],
		svgs: {
			stroke: Feather.Clipboard,
		},
		new: false,
	},
	{
		name: "clock",
		tags: [],
		svgs: {
			stroke: Feather.Clock,
		},
		new: false,
	},
	{
		name: "cloud-drizzle",
		tags: [],
		svgs: {
			stroke: Feather.CloudDrizzle,
		},
		new: false,
	},
	{
		name: "cloud-lightning",
		tags: [],
		svgs: {
			stroke: Feather.CloudLightning,
		},
		new: false,
	},
	{
		name: "cloud-rain",
		tags: [],
		svgs: {
			stroke: Feather.CloudRain,
		},
		new: false,
	},
	{
		name: "cloud-snow",
		tags: [],
		svgs: {
			stroke: Feather.CloudSnow,
		},
		new: false,
	},
	{
		name: "cloud",
		tags: [],
		svgs: {
			stroke: Feather.Cloud,
		},
		new: false,
	},
	{
		name: "codepen",
		tags: [],
		svgs: {
			stroke: Feather.Codepen,
		},
		new: false,
	},
	{
		name: "codesandbox",
		tags: [],
		svgs: {
			stroke: Feather.Codesandbox,
		},
		new: false,
	},
	{
		name: "code",
		tags: [],
		svgs: {
			stroke: Feather.Code,
		},
		new: false,
	},
	{
		name: "coffee",
		tags: [],
		svgs: {
			stroke: Feather.Coffee,
		},
		new: false,
	},
	{
		name: "columns",
		tags: [],
		svgs: {
			stroke: Feather.Columns,
		},
		new: false,
	},
	{
		name: "command",
		tags: [],
		svgs: {
			stroke: Feather.Command,
		},
		new: false,
	},
	{
		name: "compass",
		tags: [],
		svgs: {
			stroke: Feather.Compass,
		},
		new: false,
	},
	{
		name: "copy",
		tags: [],
		svgs: {
			stroke: Feather.Copy,
		},
		new: false,
	},
	{
		name: "corner-down-left",
		tags: [],
		svgs: {
			stroke: Feather.CornerDownLeft,
		},
		new: false,
	},
	{
		name: "corner-down-right",
		tags: [],
		svgs: {
			stroke: Feather.CornerDownRight,
		},
		new: false,
	},
	{
		name: "corner-left-down",
		tags: [],
		svgs: {
			stroke: Feather.CornerLeftDown,
		},
		new: false,
	},
	{
		name: "corner-left-up",
		tags: [],
		svgs: {
			stroke: Feather.CornerLeftUp,
		},
		new: false,
	},
	{
		name: "corner-right-down",
		tags: [],
		svgs: {
			stroke: Feather.CornerRightDown,
		},
		new: false,
	},
	{
		name: "corner-right-up",
		tags: [],
		svgs: {
			stroke: Feather.CornerRightUp,
		},
		new: false,
	},
	{
		name: "corner-up-left",
		tags: [],
		svgs: {
			stroke: Feather.CornerUpLeft,
		},
		new: false,
	},
	{
		name: "corner-up-right",
		tags: [],
		svgs: {
			stroke: Feather.CornerUpRight,
		},
		new: false,
	},
	{
		name: "cpu",
		tags: [],
		svgs: {
			stroke: Feather.Cpu,
		},
		new: false,
	},
	{
		name: "credit-card",
		tags: [],
		svgs: {
			stroke: Feather.CreditCard,
		},
		new: false,
	},
	{
		name: "crop",
		tags: [],
		svgs: {
			stroke: Feather.Crop,
		},
		new: false,
	},
	{
		name: "crosshair",
		tags: [],
		svgs: {
			stroke: Feather.Crosshair,
		},
		new: false,
	},
	{
		name: "database",
		tags: [],
		svgs: {
			stroke: Feather.Database,
		},
		new: false,
	},
	{
		name: "delete",
		tags: [],
		svgs: {
			stroke: Feather.Delete,
		},
		new: false,
	},
	{
		name: "disc",
		tags: [],
		svgs: {
			stroke: Feather.Disc,
		},
		new: false,
	},
	{
		name: "dollar-sign",
		tags: [],
		svgs: {
			stroke: Feather.DollarSign,
		},
		new: false,
	},
	{
		name: "droplet",
		tags: [],
		svgs: {
			stroke: Feather.Droplet,
		},
		new: false,
	},
	{
		name: "edit",
		tags: [],
		svgs: {
			stroke: Feather.Edit,
		},
		new: false,
	},
	{
		name: "edit-2",
		tags: [],
		svgs: {
			stroke: Feather.Edit2,
		},
		new: false,
	},
	{
		name: "edit-3",
		tags: [],
		svgs: {
			stroke: Feather.Edit3,
		},
		new: false,
	},
	{
		name: "eye",
		tags: [],
		svgs: {
			stroke: Feather.Eye,
		},
		new: false,
	},
	{
		name: "eye-off",
		tags: [],
		svgs: {
			stroke: Feather.EyeOff,
		},
		new: false,
	},
	{
		name: "external-link",
		tags: [],
		svgs: {
			stroke: Feather.ExternalLink,
		},
		new: false,
	},
	{
		name: "facebook",
		tags: [],
		svgs: {
			stroke: Feather.Facebook,
		},
		new: false,
	},
	{
		name: "fast-forward",
		tags: [],
		svgs: {
			stroke: Feather.FastForward,
		},
		new: false,
	},
	{
		name: "figma",
		tags: [],
		svgs: {
			stroke: Feather.Figma,
		},
		new: false,
	},
	{
		name: "file-minus",
		tags: [],
		svgs: {
			stroke: Feather.FileMinus,
		},
		new: false,
	},
	{
		name: "file-plus",
		tags: [],
		svgs: {
			stroke: Feather.FilePlus,
		},
		new: false,
	},
	{
		name: "file-text",
		tags: [],
		svgs: {
			stroke: Feather.FileText,
		},
		new: false,
	},
	{
		name: "film",
		tags: [],
		svgs: {
			stroke: Feather.Film,
		},
		new: false,
	},
	{
		name: "filter",
		tags: [],
		svgs: {
			stroke: Feather.Filter,
		},
		new: false,
	},
	{
		name: "flag",
		tags: [],
		svgs: {
			stroke: Feather.Flag,
		},
		new: false,
	},
	{
		name: "folder-minus",
		tags: [],
		svgs: {
			stroke: Feather.FolderMinus,
		},
		new: false,
	},
	{
		name: "folder-plus",
		tags: [],
		svgs: {
			stroke: Feather.FolderPlus,
		},
		new: false,
	},
	{
		name: "folder",
		tags: [],
		svgs: {
			stroke: Feather.Folder,
		},
		new: false,
	},
	{
		name: "framer",
		tags: [],
		svgs: {
			stroke: Feather.Framer,
		},
		new: false,
	},
	{
		name: "frown",
		tags: [],
		svgs: {
			stroke: Feather.Frown,
		},
		new: false,
	},
	{
		name: "gift",
		tags: [],
		svgs: {
			stroke: Feather.Gift,
		},
		new: false,
	},
	{
		name: "git-branch",
		tags: [],
		svgs: {
			stroke: Feather.GitBranch,
		},
		new: false,
	},
	{
		name: "git-commit",
		tags: [],
		svgs: {
			stroke: Feather.GitCommit,
		},
		new: false,
	},
	{
		name: "git-merge",
		tags: [],
		svgs: {
			stroke: Feather.GitMerge,
		},
		new: false,
	},
	{
		name: "git-pull-request",
		tags: [],
		svgs: {
			stroke: Feather.GitPullRequest,
		},
		new: false,
	},
	{
		name: "github",
		tags: [],
		svgs: {
			stroke: Feather.GitHub,
		},
		new: false,
	},
	{
		name: "gitlab",
		tags: [],
		svgs: {
			stroke: Feather.Gitlab,
		},
		new: false,
	},
	{
		name: "globe",
		tags: [],
		svgs: {
			stroke: Feather.Globe,
		},
		new: false,
	},
	{
		name: "hard-drive",
		tags: [],
		svgs: {
			stroke: Feather.HardDrive,
		},
		new: false,
	},
	{
		name: "hash",
		tags: [],
		svgs: {
			stroke: Feather.Hash,
		},
		new: false,
	},
	{
		name: "headphones",
		tags: [],
		svgs: {
			stroke: Feather.Headphones,
		},
		new: false,
	},
	{
		name: "heart",
		tags: [],
		svgs: {
			stroke: Feather.Heart,
		},
		new: false,
	},
	{
		name: "help-circle",
		tags: [],
		svgs: {
			stroke: Feather.HelpCircle,
		},
		new: false,
	},
	{
		name: "hexagon",
		tags: [],
		svgs: {
			stroke: Feather.Hexagon,
		},
		new: false,
	},
	{
		name: "home",
		tags: [],
		svgs: {
			stroke: Feather.Home,
		},
		new: false,
	},
	{
		name: "image",
		tags: [],
		svgs: {
			stroke: Feather.Image,
		},
		new: false,
	},
	{
		name: "inbox",
		tags: [],
		svgs: {
			stroke: Feather.Inbox,
		},
		new: false,
	},
	{
		name: "instagram",
		tags: [],
		svgs: {
			stroke: Feather.Instagram,
		},
		new: false,
	},
	{
		name: "key",
		tags: [],
		svgs: {
			stroke: Feather.Key,
		},
		new: false,
	},
	{
		name: "layers",
		tags: [],
		svgs: {
			stroke: Feather.Layers,
		},
		new: false,
	},
	{
		name: "layout",
		tags: [],
		svgs: {
			stroke: Feather.Layout,
		},
		new: false,
	},
	{
		name: "life-buoy",
		tags: [],
		svgs: {
			stroke: Feather.LifeBuoy,
		},
		new: false,
	},
	{
		name: "link",
		tags: [],
		svgs: {
			stroke: Feather.Link,
		},
		new: false,
	},
	{
		name: "link-2",
		tags: [],
		svgs: {
			stroke: Feather.Link2,
		},
		new: false,
	},
	{
		name: "linkedin",
		tags: [],
		svgs: {
			stroke: Feather.Linkedin,
		},
		new: false,
	},
	{
		name: "list",
		tags: [],
		svgs: {
			stroke: Feather.List,
		},
		new: false,
	},
	{
		name: "lock",
		tags: [],
		svgs: {
			stroke: Feather.Lock,
		},
		new: false,
	},
	{
		name: "log-in",
		tags: [],
		svgs: {
			stroke: Feather.LogIn,
		},
		new: false,
	},
	{
		name: "log-out",
		tags: [],
		svgs: {
			stroke: Feather.LogOut,
		},
		new: false,
	},
	{
		name: "mail",
		tags: [],
		svgs: {
			stroke: Feather.Mail,
		},
		new: false,
	},
	{
		name: "map-pin",
		tags: [],
		svgs: {
			stroke: Feather.MapPin,
		},
		new: false,
	},
	{
		name: "map",
		tags: [],
		svgs: {
			stroke: Feather.Map,
		},
		new: false,
	},
	{
		name: "maximize",
		tags: [],
		svgs: {
			stroke: Feather.Maximize,
		},
		new: false,
	},
	{
		name: "maximize-2",
		tags: [],
		svgs: {
			stroke: Feather.Maximize2,
		},
		new: false,
	},
	{
		name: "meh",
		tags: [],
		svgs: {
			stroke: Feather.Meh,
		},
		new: false,
	},
	{
		name: "menu",
		tags: [],
		svgs: {
			stroke: Feather.Menu,
		},
		new: false,
	},
	{
		name: "message-circle",
		tags: [],
		svgs: {
			stroke: Feather.MessageCircle,
		},
		new: false,
	},
	{
		name: "message-square",
		tags: [],
		svgs: {
			stroke: Feather.MessageSquare,
		},
		new: false,
	},
	{
		name: "mic-off",
		tags: [],
		svgs: {
			stroke: Feather.MicOff,
		},
		new: false,
	},
	{
		name: "mic",
		tags: [],
		svgs: {
			stroke: Feather.Mic,
		},
		new: false,
	},
	{
		name: "minimize",
		tags: [],
		svgs: {
			stroke: Feather.Minimize,
		},
		new: false,
	},
	{
		name: "minimize-2",
		tags: [],
		svgs: {
			stroke: Feather.Minimize2,
		},
		new: false,
	},
	{
		name: "minus",
		tags: [],
		svgs: {
			stroke: Feather.Minus,
		},
		new: false,
	},
	{
		name: "monitor",
		tags: [],
		svgs: {
			stroke: Feather.Monitor,
		},
		new: false,
	},
	{
		name: "moon",
		tags: [],
		svgs: {
			stroke: Feather.Moon,
		},
		new: false,
	},
	{
		name: "more-horizontal",
		tags: [],
		svgs: {
			stroke: Feather.MoreHorizontal,
		},
		new: false,
	},
	{
		name: "more-vertical",
		tags: [],
		svgs: {
			stroke: Feather.MoreVertical,
		},
		new: false,
	},
	{
		name: "mouse-pointer",
		tags: [],
		svgs: {
			stroke: Feather.MousePointer,
		},
		new: false,
	},
	{
		name: "move",
		tags: [],
		svgs: {
			stroke: Feather.Move,
		},
		new: false,
	},
	{
		name: "music",
		tags: [],
		svgs: {
			stroke: Feather.Music,
		},
		new: false,
	},
	{
		name: "navigation",
		tags: [],
		svgs: {
			stroke: Feather.Navigation,
		},
		new: false,
	},
	{
		name: "navigation-2",
		tags: [],
		svgs: {
			stroke: Feather.Navigation2,
		},
		new: false,
	},
	{
		name: "octagon",
		tags: [],
		svgs: {
			stroke: Feather.Octagon,
		},
		new: false,
	},
	{
		name: "package",
		tags: [],
		svgs: {
			stroke: Feather.Package,
		},
		new: false,
	},
	{
		name: "paperclip",
		tags: [],
		svgs: {
			stroke: Feather.Paperclip,
		},
		new: false,
	},
	{
		name: "pause",
		tags: [],
		svgs: {
			stroke: Feather.Pause,
		},
		new: false,
	},
	{
		name: "pause-circle",
		tags: [],
		svgs: {
			stroke: Feather.PauseCircle,
		},
		new: false,
	},
	{
		name: "pen-tool",
		tags: [],
		svgs: {
			stroke: Feather.PenTool,
		},
		new: false,
	},
	{
		name: "percent",
		tags: [],
		svgs: {
			stroke: Feather.Percent,
		},
		new: false,
	},
	{
		name: "phone-call",
		tags: [],
		svgs: {
			stroke: Feather.PhoneCall,
		},
		new: false,
	},
	{
		name: "phone-forwarded",
		tags: [],
		svgs: {
			stroke: Feather.PhoneForwarded,
		},
		new: false,
	},
	{
		name: "phone-incoming",
		tags: [],
		svgs: {
			stroke: Feather.PhoneIncoming,
		},
		new: false,
	},
	{
		name: "phone-missed",
		tags: [],
		svgs: {
			stroke: Feather.PhoneMissed,
		},
		new: false,
	},
	{
		name: "phone-off",
		tags: [],
		svgs: {
			stroke: Feather.PhoneOff,
		},
		new: false,
	},
	{
		name: "phone-outgoing",
		tags: [],
		svgs: {
			stroke: Feather.PhoneOutgoing,
		},
		new: false,
	},
	{
		name: "phone",
		tags: [],
		svgs: {
			stroke: Feather.Phone,
		},
		new: false,
	},
	{
		name: "play",
		tags: [],
		svgs: {
			stroke: Feather.Play,
		},
		new: false,
	},
	{
		name: "pie-chart",
		tags: [],
		svgs: {
			stroke: Feather.PieChart,
		},
		new: false,
	},
	{
		name: "play-circle",
		tags: [],
		svgs: {
			stroke: Feather.PlayCircle,
		},
		new: false,
	},
	{
		name: "plus",
		tags: [],
		svgs: {
			stroke: Feather.Plus,
		},
		new: false,
	},
	{
		name: "plus-circle",
		tags: [],
		svgs: {
			stroke: Feather.PlusCircle,
		},
		new: false,
	},
	{
		name: "plus-square",
		tags: [],
		svgs: {
			stroke: Feather.PlusSquare,
		},
		new: false,
	},
	{
		name: "pocket",
		tags: [],
		svgs: {
			stroke: Feather.Pocket,
		},
		new: false,
	},
	{
		name: "power",
		tags: [],
		svgs: {
			stroke: Feather.Power,
		},
		new: false,
	},
	{
		name: "printer",
		tags: [],
		svgs: {
			stroke: Feather.Printer,
		},
		new: false,
	},
	{
		name: "radio",
		tags: [],
		svgs: {
			stroke: Feather.Radio,
		},
		new: false,
	},
	{
		name: "refresh-cw",
		tags: [],
		svgs: {
			stroke: Feather.RefreshCw,
		},
		new: false,
	},
	{
		name: "refresh-ccw",
		tags: [],
		svgs: {
			stroke: Feather.RefreshCcw,
		},
		new: false,
	},
	{
		name: "repeat",
		tags: [],
		svgs: {
			stroke: Feather.Repeat,
		},
		new: false,
	},
	{
		name: "rewind",
		tags: [],
		svgs: {
			stroke: Feather.Rewind,
		},
		new: false,
	},
	{
		name: "rotate-ccw",
		tags: [],
		svgs: {
			stroke: Feather.RotateCcw,
		},
		new: false,
	},
	{
		name: "rotate-cw",
		tags: [],
		svgs: {
			stroke: Feather.RotateCw,
		},
		new: false,
	},
	{
		name: "rss",
		tags: [],
		svgs: {
			stroke: Feather.Rss,
		},
		new: false,
	},
	{
		name: "save",
		tags: [],
		svgs: {
			stroke: Feather.Save,
		},
		new: false,
	},
	{
		name: "scissors",
		tags: [],
		svgs: {
			stroke: Feather.Scissors,
		},
		new: false,
	},
	{
		name: "search",
		tags: [],
		svgs: {
			stroke: Feather.Search,
		},
		new: false,
	},
	{
		name: "send",
		tags: [],
		svgs: {
			stroke: Feather.Send,
		},
		new: false,
	},
	{
		name: "settings",
		tags: [],
		svgs: {
			stroke: Feather.Settings,
		},
		new: false,
	},
	{
		name: "share-2",
		tags: [],
		svgs: {
			stroke: Feather.Share2,
		},
		new: false,
	},
	{
		name: "shield",
		tags: [],
		svgs: {
			stroke: Feather.Shield,
		},
		new: false,
	},
	{
		name: "shield-off",
		tags: [],
		svgs: {
			stroke: Feather.ShieldOff,
		},
		new: false,
	},
	{
		name: "shopping-bag",
		tags: [],
		svgs: {
			stroke: Feather.ShoppingBag,
		},
		new: false,
	},
	{
		name: "shopping-cart",
		tags: [],
		svgs: {
			stroke: Feather.ShoppingCart,
		},
		new: false,
	},
	{
		name: "shuffle",
		tags: [],
		svgs: {
			stroke: Feather.Shuffle,
		},
		new: false,
	},
	{
		name: "skip-back",
		tags: [],
		svgs: {
			stroke: Feather.SkipBack,
		},
		new: false,
	},
	{
		name: "skip-forward",
		tags: [],
		svgs: {
			stroke: Feather.SkipForward,
		},
		new: false,
	},
	{
		name: "slack",
		tags: [],
		svgs: {
			stroke: Feather.Slack,
		},
		new: false,
	},
	{
		name: "slash",
		tags: [],
		svgs: {
			stroke: Feather.Slash,
		},
		new: false,
	},
	{
		name: "sliders",
		tags: [],
		svgs: {
			stroke: Feather.Sliders,
		},
		new: false,
	},
	{
		name: "smartphone",
		tags: [],
		svgs: {
			stroke: Feather.Smartphone,
		},
		new: false,
	},
	{
		name: "smile",
		tags: [],
		svgs: {
			stroke: Feather.Smile,
		},
		new: false,
	},
	{
		name: "speaker",
		tags: [],
		svgs: {
			stroke: Feather.Speaker,
		},
		new: false,
	},
	{
		name: "star",
		tags: [],
		svgs: {
			stroke: Feather.Star,
		},
		new: false,
	},
	{
		name: "stop-circle",
		tags: [],
		svgs: {
			stroke: Feather.StopCircle,
		},
		new: false,
	},
	{
		name: "sun",
		tags: [],
		svgs: {
			stroke: Feather.Sun,
		},
		new: false,
	},
	{
		name: "sunrise",
		tags: [],
		svgs: {
			stroke: Feather.Sunrise,
		},
		new: false,
	},
	{
		name: "sunset",
		tags: [],
		svgs: {
			stroke: Feather.Sunset,
		},
		new: false,
	},
	{
		name: "tablet",
		tags: [],
		svgs: {
			stroke: Feather.Tablet,
		},
		new: false,
	},
	{
		name: "tag",
		tags: [],
		svgs: {
			stroke: Feather.Tag,
		},
		new: false,
	},
	{
		name: "target",
		tags: [],
		svgs: {
			stroke: Feather.Target,
		},
		new: false,
	},
	{
		name: "terminal",
		tags: [],
		svgs: {
			stroke: Feather.Terminal,
		},
		new: false,
	},
	{
		name: "thermometer",
		tags: [],
		svgs: {
			stroke: Feather.Thermometer,
		},
		new: false,
	},
	{
		name: "thumbs-down",
		tags: [],
		svgs: {
			stroke: Feather.ThumbsDown,
		},
		new: false,
	},
	{
		name: "thumbs-up",
		tags: [],
		svgs: {
			stroke: Feather.ThumbsUp,
		},
		new: false,
	},
	{
		name: "toggle-left",
		tags: [],
		svgs: {
			stroke: Feather.ToggleLeft,
		},
		new: false,
	},
	{
		name: "toggle-right",
		tags: [],
		svgs: {
			stroke: Feather.ToggleRight,
		},
		new: false,
	},
	{
		name: "tool",
		tags: [],
		svgs: {
			stroke: Feather.Tool,
		},
		new: false,
	},
	{
		name: "trash",
		tags: [],
		svgs: {
			stroke: Feather.Trash,
		},
		new: false,
	},
	{
		name: "trash-2",
		tags: [],
		svgs: {
			stroke: Feather.Trash2,
		},
		new: false,
	},
	{
		name: "triangle",
		tags: [],
		svgs: {
			stroke: Feather.Triangle,
		},
		new: false,
	},
	{
		name: "truck",
		tags: [],
		svgs: {
			stroke: Feather.Truck,
		},
		new: false,
	},
	{
		name: "tv",
		tags: [],
		svgs: {
			stroke: Feather.Tv,
		},
		new: false,
	},
	{
		name: "twitch",
		tags: [],
		svgs: {
			stroke: Feather.Twitch,
		},
		new: false,
	},
	{
		name: "twitter",
		tags: [],
		svgs: {
			stroke: Feather.Twitter,
		},
		new: false,
	},
	{
		name: "type",
		tags: [],
		svgs: {
			stroke: Feather.Type,
		},
		new: false,
	},
	{
		name: "umbrella",
		tags: [],
		svgs: {
			stroke: Feather.Umbrella,
		},
		new: false,
	},
	{
		name: "unlock",
		tags: [],
		svgs: {
			stroke: Feather.Unlock,
		},
		new: false,
	},
	{
		name: "user-check",
		tags: [],
		svgs: {
			stroke: Feather.UserCheck,
		},
		new: false,
	},
	{
		name: "user-minus",
		tags: [],
		svgs: {
			stroke: Feather.UserMinus,
		},
		new: false,
	},
	{
		name: "user-plus",
		tags: [],
		svgs: {
			stroke: Feather.UserPlus,
		},
		new: false,
	},
	{
		name: "user-x",
		tags: [],
		svgs: {
			stroke: Feather.UserX,
		},
		new: false,
	},
	{
		name: "user",
		tags: [],
		svgs: {
			stroke: Feather.User,
		},
		new: false,
	},
	{
		name: "users",
		tags: [],
		svgs: {
			stroke: Feather.Users,
		},
		new: false,
	},
	{
		name: "video-off",
		tags: [],
		svgs: {
			stroke: Feather.VideoOff,
		},
		new: false,
	},
	{
		name: "video",
		tags: [],
		svgs: {
			stroke: Feather.Video,
		},
		new: false,
	},
	{
		name: "voicemail",
		tags: [],
		svgs: {
			stroke: Feather.Voicemail,
		},
		new: false,
	},
	{
		name: "volume",
		tags: [],
		svgs: {
			stroke: Feather.Volume,
		},
		new: false,
	},
	{
		name: "volume-1",
		tags: [],
		svgs: {
			stroke: Feather.Volume1,
		},
		new: false,
	},
	{
		name: "volume-2",
		tags: [],
		svgs: {
			stroke: Feather.Volume2,
		},
		new: false,
	},
	{
		name: "volume-x",
		tags: [],
		svgs: {
			stroke: Feather.VolumeX,
		},
		new: false,
	},
	{
		name: "watch",
		tags: [],
		svgs: {
			stroke: Feather.Watch,
		},
		new: false,
	},
	{
		name: "wifi-off",
		tags: [],
		svgs: {
			stroke: Feather.WifiOff,
		},
		new: false,
	},
	{
		name: "wifi",
		tags: [],
		svgs: {
			stroke: Feather.Wifi,
		},
		new: false,
	},
	{
		name: "wind",
		tags: [],
		svgs: {
			stroke: Feather.Wind,
		},
		new: false,
	},
	{
		name: "x-circle",
		tags: [],
		svgs: {
			stroke: Feather.XCircle,
		},
		new: false,
	},
	{
		name: "x-octagon",
		tags: [],
		svgs: {
			stroke: Feather.XOctagon,
		},
		new: false,
	},
	{
		name: "x-square",
		tags: [],
		svgs: {
			stroke: Feather.XSquare,
		},
		new: false,
	},
	{
		name: "x",
		tags: [],
		svgs: {
			stroke: Feather.X,
		},
		new: false,
	},
	{
		name: "youtube",
		tags: [],
		svgs: {
			stroke: Feather.Youtube,
		},
		new: false,
	},
	{
		name: "zap-off",
		tags: [],
		svgs: {
			stroke: Feather.ZapOff,
		},
		new: false,
	},
	{
		name: "zap",
		tags: [],
		svgs: {
			stroke: Feather.Zap,
		},
		new: false,
	},
	{
		name: "zoom-in",
		tags: [],
		svgs: {
			stroke: Feather.ZoomIn,
		},
		new: false,
	},
	{
		name: "zoom-out",
		tags: [],
		svgs: {
			stroke: Feather.ZoomOut,
		},
		new: false,
	},
]

// Ex:
//
// "zoom" -> ["zoom"]
// "zoom-out" -> ["zoom-out", "zoomout", "zoom", "out"]
//
function parseTags(name) {
	const tags = name.split("-")
	if (tags.length === 1) {
		return tags
	}
	return [name, tags.join(""), ...tags]
}

;(() => {
	for (const each of dataset) {
		const tags = parseTags(each.name)
		;(originalTags[each.name] || []).forEach(each => {
			tags.push(...parseTags(each))
		})
		const deduped = [...new Set(tags)]
		each.tags.push(...deduped)
	}
})()

export default dataset
