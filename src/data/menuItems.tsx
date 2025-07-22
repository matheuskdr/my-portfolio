import { ImportantDevices, SettingsSuggest } from "@mui/icons-material";
import { Receipt, School } from "lucide-react";

export const menuItems = [
    { label: "Habilidades", icon: <SettingsSuggest fontSize="small" />, href: "/skills" },
    { label: "Projetos", icon: <ImportantDevices fontSize="small" />, href: "/projects" },
    { label: "Educação", icon: <School fontSize="small" />, href: "/education" },
    { label: "Resumo", icon: <Receipt fontSize="small" />, href: "/resume" },
]