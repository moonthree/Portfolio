import Link from 'next/link';
import React from 'react';

const Nav = () => {
  return (
    <div className="fixed top-0 left-0 right-0 h-[60px] border-b-2 flex justify-around items-center bg-white">
      <div className="max-w-7xl flex justify-around items-center w-full font-bold">
        <Link className="" href="/">
          Home
        </Link>
        <Link className="" href="/resume">
          Resume
        </Link>
        <Link className="" href="/portfolio">
          Portfolio
        </Link>
        <Link className="" href="https://github.com/moonthree">
          Github
        </Link>
        <Link className="" href="https://moon-coding.tistory.com/">
          Blog
        </Link>
      </div>
    </div>
  );
};

export default Nav;
