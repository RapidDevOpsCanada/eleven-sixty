import MenuPage from '@/components/MenuPage';
import { getMenuBySlug } from '@/lib/menuData';

const menu = getMenuBySlug('drinks-menu')!;

export const metadata = {
  title: `${menu.title} Menu — Eleven Sixty Bar & Grill`,
  description: menu.subtitle
};

export default function DrinksMenuPage() {
  return <MenuPage menu={menu} />;
}
