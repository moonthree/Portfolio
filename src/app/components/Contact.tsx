import Link from 'next/link';
import React from 'react';

const Contact = () => {
  return (
    <div className="space-y-5">
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-violet-500">Contact</h3>
        <div>
          <span>Email. </span>
          <Link
            href={'mailto:'}
            className="text-gray-500 text-sm underline underline-offset-2"
          >
            fpdhslr7@gmail.com
          </Link>
        </div>
        <div>
          <span>Phone. </span>
          <Link
            href={'mailto:'}
            className="text-gray-500 text-sm underline underline-offset-2"
          >
            010-5462-8240
          </Link>
        </div>
      </div>
      <div className="space-y-1">
        <h3 className="text-xl font-bold text-violet-500">Channel</h3>
        <div>
          <span>Blog. </span>
          <Link
            href={'https://moon-coding.tistory.com/'}
            className="text-gray-500 text-sm underline underline-offset-2"
          >
            moon-coding.tistory.com
          </Link>
        </div>
        <div>
          <span>Github. </span>
          <Link
            href={'https://github.com/moonthree'}
            className="text-gray-500 text-sm underline underline-offset-2"
          >
            github.com/moonthree
          </Link>
        </div>
        <div>
          <span>Portfolio. </span>
          <Link
            href={'/portfolio'}
            className="text-gray-500 text-sm underline underline-offset-2"
          >
            portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
