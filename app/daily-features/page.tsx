import MenuPage from '@/components/MenuPage';
import { getMenuBySlug } from '@/lib/menuData';

const menu = getMenuBySlug('daily-features')!;

export const metadata = {
  title: `${menu.title} — Eleven Sixty Bar & Grill`,
  description: menu.subtitle
};

export default function DailyFeaturesPage() {
  return <MenuPage menu={menu} />;
}
