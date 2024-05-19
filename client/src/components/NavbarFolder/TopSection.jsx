import React from 'react';
import Link from 'next/link';
export function TopSection() {
  return (
    <div className="flex justify-end items-center space-x-2 sm:space-x-4 py-2  mr-4 sm:mr-8">
      <Link href="latest-project" className="text-xs sm:text-sm lg:text-base text-blue-700 hover:underline">Projects</Link>
      <Link href="team" className="text-xs sm:text-sm lg:text-base text-blue-700 hover:underline">Team</Link>
      <Link href="contactus" className="text-xs sm:text-sm lg:text-base text-blue-700 hover:underline">Contact Us</Link>
      <Link href="https://www.msit.in/" className="text-xs sm:text-sm lg:text-base text-blue-700 hover:underline">MSIT</Link>
      <Link href="mission" className="text-xs sm:text-sm lg:text-base text-blue-700 hover:underline">Mission</Link>
    </div>
  );
}

export default TopSection;
