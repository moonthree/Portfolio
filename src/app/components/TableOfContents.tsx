'use client';
import { TableOfContentsProps } from '@/types/types';

const TableOfContents = ({ titles }: TableOfContentsProps) => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fixed right-10 top-28 p-3 border-2 rounded space-y-1">
      {titles.map(({ id, title }) => (
        <p
          key={id}
          onClick={() => handleClick(id)}
          className={`cursor-pointer hover:font-bold`}
        >
          {title}
        </p>
      ))}
    </div>
  );
};

export default TableOfContents;
