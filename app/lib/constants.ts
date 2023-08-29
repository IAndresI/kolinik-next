import { IReview } from "../types";

export const reviewsArr: IReview[] = [
  {
    id: 1,
    author: "Alex Markson",
    authorImage: "/images/review/1.png",
    authorPosition: "Buisnessman",
    text: "Pellentesque dictum diam. Vivamus pltenibh odio cras accusamus vitae dignissimos nulla volutpat nec, vel scelerisque vestibulum, integarcu lectus id maecenas.",
  },
  {
    id: 2,
    author: "Marina Tusa",
    authorImage: "/images/review/2.png",
    authorPosition: "Housewief",
    text: "Pellentesque dictum diam. Vivamus pltenibh odio cras accusamus vitae dignissimos nulla volutpat nec, vel scelerisque vestibulum, integarcu lectus id maecenas.",
  },
  {
    id: 3,
    author: "Elizabet Flow",
    authorImage: "/images/review/1.png",
    authorPosition: "Buisnesswoman",
    text: "Pellentesque dictum diam. Vivamus pltenibh odio cras accusamus vitae dignissimos nulla volutpat nec, vel scelerisque vestibulum, integarcu lectus id maecenas.",
  },
  {
    id: 4,
    author: "Andre Spez",
    authorImage: "/images/review/2.png",
    authorPosition: "Web developer",
    text: "Pellentesque dictum diam. Vivamus pltenibh odio cras accusamus vitae dignissimos nulla volutpat nec, vel scelerisque vestibulum, integarcu lectus id maecenas.",
  },
];
export const enum Breads {
  home = "home",
  about = "about",
  service = "service",
  doctor = "doctor",
  blog = "blog",
  contact = "contact",
  givingBack = "givingBack",
  mission = "mission",
  timeline = "timeline",
}
