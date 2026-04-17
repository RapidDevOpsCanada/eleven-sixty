import MenuPage from '@/components/MenuPage';
import { getMenuBySlug } from '@/lib/menuData';

const menu = getMenuBySlug('dinner-menus')!;

export const metadata = {
  title: `${menu.title} Menu — Eleven Sixty Bar & Grill`,
  description: menu.subtitle
};

export default function DinnerMenusPage() {
  return <MenuPage menu={menu} />;
}
