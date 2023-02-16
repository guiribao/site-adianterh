export default interface IContent {
  title: string;
  subtitle: string;
  slides: Array<ISlide>;
}

export interface ISlide {
  draw: string;
  description: string;
}