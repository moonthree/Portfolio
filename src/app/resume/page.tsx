import Image from 'next/image';
import React from 'react';
import Title from '../components/Title';
import Link from 'next/link';
import Contact from '../components/Contact';
import { Educations } from '@/util/text';
import Skill from '../components/Skill';

const introduce = `안녕하세요. 이문삼입니다.\n집에 가고 싶습니다.\n감사합니다.
`;

const titles = [
  { id: 'resume', title: '이문삼 | Resume' },
  { id: 'introduce', title: 'Introduce' },
  { id: 'education', title: 'Education' },
  { id: 'skill', title: 'Skill' },
  { id: 'project', title: 'Project' },
];

const page = () => {
  return (
    <div>
      <Title
        id={titles[0].id}
        title={titles[0].title}
        className="text-3xl mb-5 text-black"
      />
      <div className="contact-box flex space-x-10 border-b-2 pb-2">
        <div className="">
          <Image
            src="/images/pocket.jpg"
            width={500}
            height={500}
            alt=""
            className="rounded-full w-52 h-52 max-sm:w-[100px] max-sm:h-[100px]"
          />
        </div>
        <Contact />
      </div>
      <div className="Introduce-box mt-10 border-b-2">
        <Title
          id={titles[1].id}
          title={titles[1].title}
          className="text-2xl border-b-2 border-black"
        />
        <div className="mt-5">
          {introduce.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
      <div className="education-box mt-10">
        <Title
          id={titles[2].id}
          title={titles[2].title}
          className="text-2xl border-b-2 border-black"
        />
        {Educations.map((education, index) => (
          <div key={index} className="mt-5 grid grid-cols-2 border-b-2 pb-3">
            <div className="">
              <div className="font-bold">{education.title}</div>
              <div className="text-sm">{education.date}</div>
            </div>
            <ol className="">
              {education.info.map((info, idx) => (
                <li key={idx}>• {info}</li>
              ))}
            </ol>
          </div>
        ))}
      </div>
      <div className="skill-box mt-10">
        <Title
          id={titles[3].id}
          title={titles[3].title}
          className="text-2xl border-b-2 border-black"
        />
        <Skill />
      </div>
    </div>
  );
};

export default page;
