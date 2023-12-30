import { ReactNode } from "react";

export type Highlight = {
  icon: ReactNode;
  headline: string;
  description: string;
};

export type HeroConfig = {
  background: string;
  heroImage: string;
  tagline: string;
  headline: string;
  description: string;

  highlights: Highlight[];
};
