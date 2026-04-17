import MenuPage from '@/components/MenuPage';
import { getMenuBySlug } from '@/lib/menuData';

const menu = getMenuBySlug('kids-menu')!;

export const metadata = {
  title: `${menu.title} — Eleven Sixty Bar & Grill`,
  description: menu.subtitle
};

export default function KidsMenuPage() {
  return <MenuPage menu={menu} />;
}
