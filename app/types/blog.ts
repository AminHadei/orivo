export type ShapeVariant = "spectrum" | "citrus" | "mint" | "dusk";

export interface BlogPost {
  title: string;
  slug: string;
  shortSummary: string;
  summary: string;
  authors: string[];
  category: string;
  /** ISO date - used for ordering and machine-readable meta. */
  date: string;
  dateLabel: string;
  readingMinutes: number;
  /** Backdrop disc used on the post hero. */
  shape: ShapeVariant;
}
