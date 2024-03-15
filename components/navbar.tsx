import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="flex flex-col items-center justify-between max-w-full md:max-w-6xl px-2 md:px-6 py-12 mx-auto md:flex-row">
      <a href="/" className="text-lime-900 z-10 active">
        <Image
            src="https://www.svgrepo.com/show/489282/brand.svg"
            className="w-24 py-8 md:py-0 g-image"
            alt="brand logo"
            width={96}
            height={96}
        />
      </a>
      <nav className="z-10">
        <ul className="flex flex-row items-center px-6 py-4 text-lime-100 bg-lime-900 rounded-lg">
          <li className="pr-8">
            <a href="/blog">Blog</a>
          </li>
          <li className="pr-8">
            <a href="https://www.linkedin.com/in/jordanleeevans/" target="_blank" rel="noreferrer">LinkedIn</a>
          </li>
          <li className="pr-8">
            <a href="https://github.com/jordanleeevans" target="_blank" rel="noreferrer">GitHub</a>
          </li>
          <li className="text-yellow-200">
            <Link href="/email-form">
              Email
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;