"use client"

import AIChat from '@/components/AIChat'
import Nav from '@/components/Nav'
import React, { useEffect } from 'react';
import supabase from '@/app/config/supabaseClient';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function Page() {
  const router = useRouter();
  const { data: session, status } = useSession();
  async function fetchSupaData() {
    if (session) {
      const { data, error } = await supabase
      .from('Users')
      .select()
      .eq('email', session.user?.email)
      if(data) {
        if(data[0].Idea != '') {
          const aichat1 = document.getElementById("ai-chat-1");
          if(aichat1) {
            aichat1.style.display="none";
          }
          const aichat2 = document.getElementById("ai-chat-2");
          if(aichat2) {
            aichat2.style.display="block";
          }
        }
      }
    }
  }
  useEffect(() => {
    fetchSupaData();
  }, [router, status])
  
  return (
    <div>
      <Nav/>
      <div id="ai-chat-1">
        <AIChat/>
      </div>
      <div id="ai-chat-2">
        <h1>Damn gurl.</h1>
      </div>
    </div>
  )
}

export default Page