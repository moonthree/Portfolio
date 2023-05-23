export interface TitleProps {
  id: string;
  title: string;
  className?: string;
}

export interface TableOfContentsProps {
  titles: TitleProps[];
}

export interface EducationInterface {
  title: string;
  date: string;
  info: string[];
}
