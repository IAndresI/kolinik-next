export interface IReview {
  id: number;
  author: string;
  authorImage: string;
  authorPosition?: string;
  text: string;
}

export interface IDivProps extends React.HTMLAttributes<HTMLDivElement> {}
