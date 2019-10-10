import FormatPaintIcon from "@material-ui/icons/FormatPaint";
import WorkIcon from "@material-ui/icons/Work";
import SportsKabaddiIcon from "@material-ui/icons/SportsKabaddi";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import CallIcon from "@material-ui/icons/Call";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

export const menuItemsRu = [
  { path: "#services", name: "Услуги", iconComponent: FormatPaintIcon },
  { path: "#team", name: "Команда", iconComponent: SportsKabaddiIcon },
  { path: "#values", name: "Ценности", iconComponent: InsertEmoticonIcon },
  { path: "#portfolio", name: "Портфолио", iconComponent: WorkIcon },
  { path: "#contacts", name: "Контакты", iconComponent: CallIcon },
  { path: "r", name: "Реквизиты", iconComponent: AttachMoneyIcon, openPage: "/rek" }
];

export const menuItemsEn = [
  { path: "#services", name: "Services", iconComponent: FormatPaintIcon },
  { path: "#team", name: "Team", iconComponent: SportsKabaddiIcon },
  { path: "#values", name: "Values", iconComponent: InsertEmoticonIcon },
  { path: "#portfolio", name: "Portfolio", iconComponent: WorkIcon },
  { path: "#contacts", name: "Contacts", iconComponent: CallIcon }
];
