'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import "./HomePage.css";
import { useSession } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from '@/components/ui/button';
import supabase from '../config/supabaseClient';
import { AuroraText } from "@/components/magicui/aurora-text";
import { toast } from "sonner"

function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [isIdea, setIsIdea] = useState(false);

  useEffect(() => {
    async function fetchSupaData() {
      const { data, error } = await supabase
      .from('Users')
      .select()
      .eq('email', session.user?.email)
      setIsIdea(data[0].Idea != '')
      if(data[0].Idea == '') {
        setTimeout(() => {
          // toast("If it's your first time here, check out this really small guide on how to use Stormee AI!")
          toast("First-time User", {
            description: "First time here? Check out this really cool guide on using this platform",
            action: {
              label: "Guide",
              onClick: () => window.open("https://www.google.com/"),
            },
          })
        }, 1000);
      }
    }

    if (status === "unauthenticated") {
      router.push("/");
    }
    console.log(session);
    if(session) {
      fetchSupaData();
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return null;
  }

  return (
    <div className='homepage-main'>
      <h1>Welcome,&nbsp;
      <AuroraText>{session?.user?.name}</AuroraText>
      </h1>
      {isIdea ? 
        <React.Fragment>
        <h3>What would you like to do today?</h3>
        <div className='homepage-cards'>
          {/* <Card className='dark bg-neutral-800 w-[24vw] min-h-[23vh]'>
            <CardHeader>
              <CardTitle>Refine with Muse AI</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                AI-guided questions to build your business plan and validate your idea.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button onClick={() => {router.push("/Home/Muse")}}>Launch</Button>
            </CardFooter>
          </Card> */}
          <Card className='dark w-[30vw] min-h-[23vh]'>
            <CardHeader>
              <CardTitle>Your Business Dashboard</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
              Manage, analyze and track your startup's strategy, competitors, and growth in one place.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button onClick={() => {
                router.push("/Home/Main")
              }}>Go to Dashboard</Button>
            </CardFooter>
          </Card>
        </div>
        <p onClick={() => {
          router.push("/Home/Muse")
        }} className='mt-4 border-b pb-1 opacity-50 hover:opacity-100 transition-all cursor-pointer mb-4'>Or refine your idea with Muse AI</p>
        <Button variant={'secondary'} className='dark' onClick={() => {}}>Guide to using Stormee AI</Button>
        </React.Fragment> : 
        <React.Fragment>
        <h3 className='text-center'>Since you have not yet finalized your Idea, you must first<br/> talk with <b>Muse AI</b></h3>
        <div className='homepage-cards'>
          <Card className='dark w-[24vw] min-h-[23vh]'>
            <CardHeader>
              <CardTitle>Start with Muse AI</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                AI-guided questions to build your business plan and validate your idea.
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button onClick={() => {router.push("/Home/Muse")}}>Launch</Button>
            </CardFooter>
          </Card>
        </div>
        <Button className='mt-4 w-[24vw] border-1 border-neutral-800' variant={'ghost'}>How to use</Button>
        </React.Fragment>
      }
    </div>
  )
}

export default HomePage;
