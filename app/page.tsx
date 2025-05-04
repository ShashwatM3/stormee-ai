"use client"

import Image from "next/image";
import Banner from "@/components/Banner"
import Nav from "@/components/Nav";
import { useSession } from "next-auth/react";
import AIChat from "@/components/AIChat";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import "./styles.css"

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/Home");
    }
    console.log(session);
    setTimeout(() => {
      const m = document.getElementById("main");
      if(m) {
        m.style.display="block";
      }
      const l = document.getElementById("loadingsc");
      if(l) {
        l.style.display="none";
      }
    }, 800);
  }, [status]);
  return (
    <>
    <div id="loadingsc">
      <div className="loader1"></div>
    </div>
    <div id="main">
      <Nav/>
      <Banner/>
    </div>
    </>
  );
}
