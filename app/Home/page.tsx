"use client"

import { useSession } from "next-auth/react";
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import AIChat from "@/components/AIChat"
import Nav from '@/components/Nav';
import HomePage from "./HomePage";

function page() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/Home");
    }
  }, [status]);
  
  return (
    <div>
      <Nav/>
      <HomePage/>
    </div>
  )
}export default page

