import { ReactNode } from "react";

export type HeroConfig = {
  background: string;
  heroImage: string;
  tagline: string;
  headline: string;
  description: string;

  highlights: {
    icon: ReactNode;
    healine: string;
    description: string;
  }[],
};