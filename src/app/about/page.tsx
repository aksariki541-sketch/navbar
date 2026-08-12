
import Aboutone from '@/components/Aboutone'
import React from 'react'
import Abouttwo from '@/components/Abouttwo'
import { Metadata } from 'next';
import Aboutthree from '@/components/Aboutthree';

export const metadata: Metadata = {
  title: "wish-light | About",
  description: "Website, Android, and iOS app developer portfolio",
};

const page = () => {
  return (
    <div>
        <Aboutone />
        <Abouttwo />
        <Aboutthree />
    </div>
  )
}

export default page