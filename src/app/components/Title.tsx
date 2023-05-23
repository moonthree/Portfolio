import { TitleProps } from '@/types/types';
import React from 'react';

const Title = ({ id, title, className }: TitleProps) => {
  return (
    <div
      id={id}
      className={`${className} font-bold text-violet-500`}
      style={{ paddingTop: '60px', marginTop: '-60px' }}
    >
      {title}
    </div>
  );
};

export default Title;
