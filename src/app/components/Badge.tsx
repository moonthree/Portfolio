import React from 'react';

type BadgeProps = {
  classname: string;
  text: string;
};

const Badge = ({ classname, text }: BadgeProps) => {
  return (
    <div className={`${classname} p-1 rounded font-bold text-sm`}>{text}</div>
  );
};

export default Badge;
