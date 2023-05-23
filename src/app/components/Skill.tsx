import React from 'react';
import Badge from './Badge';

const Skill = () => {
  return (
    <div className="mt-3 space-y-2">
      <div className="flex space-x-2">
        <Badge classname="bg-gray-100 text-yellow-600" text="JavaScript" />
        <Badge classname="bg-gray-100 text-yellow-600" text="TypeScript" />
      </div>
      <div className="flex space-x-2">
        <Badge classname="bg-gray-100 text-violet-600" text="React" />
        <Badge classname="bg-gray-100 text-violet-600" text="Next.js" />
        <Badge classname="bg-gray-100 text-violet-600" text="Vue.js" />
      </div>
      <div className="flex space-x-2">
        <Badge classname="bg-gray-100 text-blue-500" text="React-Query" />
        <Badge classname="bg-gray-100 text-blue-500" text="SWR" />
        <Badge classname="bg-gray-100 text-blue-500" text="Recoil" />
        <Badge classname="bg-gray-100 text-blue-500" text="Context API" />
        <Badge classname="bg-gray-100 text-blue-500" text="Vuex" />
      </div>
      <div className="flex space-x-2">
        <Badge classname="bg-gray-100 text-red-500" text="Tailwind" />
        <Badge classname="bg-gray-100 text-red-500" text="Styled-Component" />
        <Badge classname="bg-gray-100 text-red-500" text="SCSS" />
      </div>
      <div className="flex space-x-2">
        <Badge classname="bg-gray-100 text-green-600" text="Git" />
        <Badge classname="bg-gray-100 text-green-600" text="Github" />
        <Badge classname="bg-gray-100 text-green-600" text="Jira" />
        <Badge classname="bg-gray-100 text-green-600" text="Notion" />
      </div>
    </div>
  );
};

export default Skill;
