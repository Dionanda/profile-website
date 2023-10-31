import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { GrLinkedin } from 'react-icons/gr';
import {
  FaGithub,
  FaInstagram,
  FaXTwitter,
} from 'react-icons/fa6';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>{`Dionanda's Profile Website`}</title>
        <meta name="desription" content="This website is made for personal use" />
        <link rel="icon" href="https://storage.googleapis.com/my-profile-website-bucket/favicon.ico" />
      </Head>
      <main className="bg-white px-10 md:px-20 lg:px-50 dark:bg-gradient-to-b from-gray-700 via-gray-900 to-black">
        <section className="min-h-screen">
          <nav className="py-10 mb-1 flex justify-between">
            <h1 className={`text-xl ${darkMode ? 'text-white' : 'text-black'}`}>Dionanda</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className={`cursor-pointer text-2xl ${darkMode ? 'text-white hover:opacity-90' : 'text-black hover:opacity-60'}`}/>
              </li>
              <li>
                <a className={`px-4 py-2 rounded-md ml-3 hover:opacity-90 sm:ml-8 ${darkMode ? 'bg-gradient-to-l from-blue-500 to-blue-400 text-white' : 'bg-gradient-to-r from-yellow-400 to-amber-500 text-white'}`} href="https://drive.google.com/file/d/1XwAd1kHuOqtlvfYMXsxFtCX9p317F1OQ/view?usp=sharing">Resume</a>
                </li>
            </ul>
          </nav>
          <div className="relative mx-auto bg-gradient-to-b dark:from-blue-400  from-yellow-400 rounded-full w-60 h-60 mt-5 overflow-hidden">
            <Image src={`https://storage.googleapis.com/my-profile-website-bucket/profile.png`} layout="fill" objectFit="cover" alt="profile-picture" />
          </div>
          <div className="text-center p-1">
            <h2 className="text-4xl py-2 text-amber-500 dark:text-blue-500 font-extrabold">{`<Ketut Dionanda Sutrisna />`}</h2>
            <h3 className="text-md py-2 text-gray-400">Junior Web Developer and Junior Cloud Engineer</h3>
            <p className={`text-sm py-5 ${darkMode ? 'text-white' : 'text-black'}`}>I am a Junior Web Developer and Junior Cloud Engineer with expertise in developing innovative web applications and managing cloud infrastructure to support application performance efficiently. In my journey, I continue to be inspired by the ever-evolving world of programming and am always looking for opportunities to learn new things and apply creative solutions to technical challenges.</p>
          </div>
          <div className="text-4xl flex justify-center gap-10 p-10 py-3 pb-10">
            <a href="https://www.instagram.com/dionndasutrsna/"><FaInstagram className="hover:opacity-70 custom-color rounded-lg text-white" /></a>
            <a href="https://github.com/Dionanda"><FaGithub className={`hover:opacity-70 ${darkMode ? "text-white" : ""}`} /></a>
            <a href="https://www.linkedin.com/in/dionndasutrsna/"><GrLinkedin className="hover:opacity-70" color='#007BB6' /></a>
            <a href="https://twitter.com/dionndasutrsna"><FaXTwitter className={`hover:opacity-70 ${darkMode ? "text-white" : ""}`} /></a>
          </div>
          
        </section>
      </main>
    </div>
  )
}
