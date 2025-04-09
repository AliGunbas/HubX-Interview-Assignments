import { ReactElement } from "react";

export type SliderPage = {
    id: number;
    imgArr: string[];
    icon: () => ReactElement;
    title: string;
    h1: string;
    p: string;
  };