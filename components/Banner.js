"use client"

import React from 'react';
import "./styles/Banner.css";
import { AuroraText } from "@/components/magicui/aurora-text";
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

function Banner() {
  const router = useRouter();
  return (
    <div className='banner' id="banner">
      <div className='banner-main'>
        <div className="banner-content">
          <h1>
            Brainstorm with StormeeAI and get a Complete MVP Analysis <AuroraText>within Minutes</AuroraText>
          </h1>
          <p>
          Brainstorm and validate your idea instantly with Stormee AI. Get a complete MVP market analysis, competitive landscape insights, and a clear strategic blueprint — all within minutes.
          </p>
          <div>
            <Button onClick={() => {
              // const ban = document.getElementById("banner");
              // if(ban) {
              //   ban.setAttribute("id", "fadeOutElement");
              //   setTimeout(() => {
              //     router.push("/auth")
              //   }, 800);
              // }
              router.push("/auth");
            }}>Get started</Button>
            <Button variant={'secondary'}>Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;
