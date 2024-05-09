import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs"
import { IconNameProps } from "@/components/DrawerButton"

typer

interface CustomOptions extends BottomTabNavigationOptions {
    icon: IconNameProps;
    sectionTitle?: string;
}