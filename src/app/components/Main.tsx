import React from 'react';
import Title from './Title';
import Image from 'next/image';
import ProfileTextBox from './ProfileTextBox';
import TableOfContents from './TableOfContents';
import Link from 'next/link';

const titles = [
  { id: 'web-frontend', title: 'Web Frontend Developer' },
  { id: 'readme', title: 'README' },
];

const Main = () => {
  return (
    <div className="">
      <TableOfContents titles={titles} />
      <h1>이문삼</h1>
      <Title id={titles[0].id} title={titles[0].title} className="text-3xl" />
      <div className="w-full h-96 my-3">
        <Image
          src="/images/profile3.png"
          width={1200}
          height={600}
          alt=""
          className="h-full w-full rounded"
        />
      </div>
      <ProfileTextBox />
      <div className="mt-10">
        <Title
          id={titles[1].id}
          title={titles[1].title}
          className="mt-20 text-3xl"
        />
      </div>
      <div className="grid grid-cols-2 mt-5 max-sm:grid-cols-1 sm:space-x-3 max-sm:space-y-5">
        <Link
          href={'/resume'}
          className="bg-blue-300 w-full h-48 flex justify-center items-center text-red-400 font-extrabold text-4xl rounded-2xl"
        >
          Resume
        </Link>
        <Link
          href={'/portfolio'}
          className="bg-red-300 w-full h-48 flex justify-center items-center text-blue-400 font-extrabold text-4xl rounded-2xl"
        >
          Portfolio
        </Link>
      </div>
      <div className="space-y-5 mt-5">
        <div className="">
          <h3 className="text-red-400 font-bold">Resume</h3>
          이력서엔 <strong>핵심적인 내용만 간결하게 텍스트 위주</strong>로
          작성되어 있습니다.
        </div>
        <div className="">
          <h3 className="text-blue-400 font-bold">Portfolio</h3>
          포트폴리오엔 <strong>
            다양한 내용과 프로젝트들이 넓고 깊게
          </strong>{' '}
          작성되어 있습니다.
        </div>
      </div>
    </div>
  );
};

export default Main;
