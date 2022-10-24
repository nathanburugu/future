/** @format */

import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircle from "./BackgroundCircle";
import Link from "next/link";

interface Props {}

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Hi Im Nate Burugu",
      "Software developer",
      "JavaScript Expert",
      "Software Engineer",
    ],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className=' h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden  '>
      <BackgroundCircle />
      <img
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
        src='https://images.unsplash.com/photo-1666000980174-a91401de7bc7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDExfGlVSXNuVnRqQjBZfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
        alt='prof'
      />
      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
          Software Engineer
        </h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#F7AB0a' />
        </h1>

        <div className='pt-5'>
          <Link href='#about'>
            <button className='heroButton'>About</button>
          </Link>
          <Link href='#experience'>
            <button className='heroButton'>experience</button>
          </Link>
          <Link href='#skills'>
            <button className='heroButton'>skills</button>
          </Link>
          <Link href='#projects'>
            <button className='heroButton'>projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
