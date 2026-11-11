export interface BookmarkItem {
  id: string;
  title: string;
  category: string;
  image: string;
  verseOrExcerpt: string;
  backPrayerTitle: string;
  backPrayer: string;
  themeColor?: string;
  badge?: string;
}

export type HelpValue = 10 | 20 | 30 | 40;
