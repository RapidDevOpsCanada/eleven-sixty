import MenuPage from '@/components/MenuPage';
import { getMenuBySlug } from '@/lib/menuData';

const menu = getMenuBySlug('lunch-menu')!;

export const metadata = {
  title: `${menu.title} Menu — Eleven Sixty Bar & Grill`,
  description: menu.subtitle
};

export default function LunchMenuPage() {
  return <MenuPage menu={menu} />;
}
