import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import supabase from '../config/supabaseClient';
import { Button } from '@/components/ui/button';
import "./HomePage.css";
import tick from "@/components/icons/tick.png"
import Image from 'next/image';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import muse from "@/components/icons/muse.png"
import { useRouter } from 'next/navigation';
import cross from "@/components/icons/cross.png";
import inprogress from "@/components/icons/inprogress.png"

function HomePage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [tutorial, setTutorial] = useState(false);
  const [stage, setStage] = useState("");
  const [currentStage, setCurrentStage] = useState("validation")
  
  useEffect(() => {
    async function getSupaData() {
      if (!session?.user?.email) return;
      
      const {data, error} = await supabase
        .from("Users")
        .select()
        .eq("email", session.user.email);

      if (error) {
        console.error('Error fetching user data:', error);
        return;
      }

      if (data && data[0]) {
        setStage(data[0].Stage);
      }

      if(data && data[0]) {
        if(data[0].Idea=="") {
          setCurrentStage("muse")
        }
        if(data[0].Idea=="Done") {
          setCurrentStage("validation")
        }
      }
    }

    if(status === 'authenticated') {
      getSupaData();
    }
  }, [status, session]);

  return (
    <div className='home-page-main'>
      {currentStage == "canvas" ? (
        <div><h1>Canvas</h1></div>
      ):(
      <div className='home-page-main'>
        <div className='user-progress'>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant='secondary' className='dark'>Your Progress</Button>
            </DialogTrigger>
            <DialogContent className='dark'>
              <DialogHeader>
                <DialogTitle>Your Progress, {session.user?.name}</DialogTitle>
              </DialogHeader>
              <DialogDescription>
                {currentStage=="muse" && (
                  <>
                  <span className='flex gap-2 mb-2'><Image alt="" src={inprogress}/>Stage 1: Idea Creation</span>
                  <span className='flex gap-2 mb-2'><Image alt="" src={cross}/><span>Stage 2: Validation Engine</span></span>
                  <span className='flex gap-2'><Image alt="" src={cross}/><span>Stage 3: Stormee Canvas</span></span>
                  </>
                )}
                {currentStage=="validation" && (
                  <>
                  <span className='flex gap-2 mb-2'><Image alt="" src={tick}/>Stage 1: Idea Creation</span>
                  <span className='flex gap-2 mb-2'><Image alt="" src={inprogress}/><span>Stage 2: Validation Engine</span></span>
                  <span className='flex gap-2'><Image alt="" src={cross}/><span>Stage 3: Stormee Canvas</span></span>
                  </>
                )}
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </div>
        {stage === "Tutorial" ? (
          <>
          <div className='hpm-1' id="hpm-1-1">
            <h1>Welcome to Stormee AI</h1>
            <h3>Before we continue into the main product development stages, let's guide you through <b>how to use this platform</b></h3>
            <div className='flex items-center justify-center gap-2'>
              <Button onClick={() => {
                  const s11 = document.getElementById("hpm-1-1");
                  const s12 = document.getElementById("hpm-1-2");
                  const s13 = document.getElementById("hpm-1-3");
                  const s14 = document.getElementById("hpm-1-4");
                  const s15 = document.getElementById("hpm-1-5");
                  if(s11 && s12 && s13 && s14 && s15) {
                    s11.style.display="none";
                    s12.style.display="block";
                    s13.style.display="none";
                    s14.style.display="none";
                    s15.style.display="none";
                  }
                }}  className='dark'>Launch Stormee Guide</Button>
              {/* <Button className='dark' variant={'secondary'}>TL;DR</Button> */}
            </div>
          </div>
  
  
          <div className='hpm-1' id="hpm-1-2">
            <h1>What is Stormee AI</h1>
            <h3>Stormee AI turns your rough idea into a <b>clear, pitch-ready business plan</b> in minutes</h3>
            <div>
              <div>
                <h3>What Stormee AI gives you</h3>
                <p className='flex items-center'>
                  <Image alt="" className='tick' src={tick}/>
                  Honest No-BS AI validation from expert lenses
                </p>
                <p className='flex items-center'>
                  <Image alt="" className='tick' src={tick}/>
                  Build a Pitch-Ready Blueprint: Exportable and sharable
                </p>
                <p className='flex items-center'>
                  <Image alt="" className='tick' src={tick}/>
                  Structured Thinking without Structured Effort: AI-Guided Product Development
                </p>
                <p className='flex items-center'>
                  <Image alt="" className='tick' src={tick}/>
                  End with a pitch-ready business plan suited to your idea
                </p>
                <p className='flex items-center'>
                  <Image alt="" className='tick' src={tick}/>
                  Lorem Ipsum Dormet
                </p>
              </div>
            </div>
            <br/>
            <div className='flex items-center justify-center gap-2'>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant={'secondary'} className='dark'>What you need</Button>
                </DialogTrigger>
                <DialogContent className='dark'>
                  <DialogHeader>
                    <DialogTitle>What you need for using Stormee AI</DialogTitle>
                  </DialogHeader>
                  <DialogDescription>
                    Just a few words to describe a rough idea or even a single theme. Stormee handles the rest, step by step.
                  </DialogDescription>
                </DialogContent>
              </Dialog>
              <Button onClick={() => {
                  const s11 = document.getElementById("hpm-1-1");
                  const s12 = document.getElementById("hpm-1-2");
                  const s13 = document.getElementById("hpm-1-3");
                  const s14 = document.getElementById("hpm-1-4");
                  const s15 = document.getElementById("hpm-1-5");
                  if(s11 && s12 && s13 && s14 && s15) {
                    s11.style.display="none";
                    s12.style.display="none";
                    s13.style.display="block";
                    s14.style.display="none";
                    s15.style.display="none";
                  }
                }}  className='dark'>Next: Stages of Stormee AI</Button>
              {/* <Button className='dark' variant={'secondary'}>TL;DR</Button> */}
            </div>
          </div>
  
  
  
          <div id="hpm-1-3">
            <Card className='min-w-[30vw] dark'>
              <CardHeader>
                <CardTitle className='mb-4'>Stage 1: Ignite ⚡️</CardTitle>
                <CardDescription>This is the first stage of the process, where you explain your idea or we brainstorm together. There are 2 ways we can do this</CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4 flex items-start justify-center">
                <div className=" flex items-center space-x-4 rounded-md border p-4 w-[10vw]">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Brainstorm with Muse AI
                    </p><br/>
                    <p className="text-sm text-muted-foreground">
                      Chat with Muse AI and brainstorm about the idea.
                    </p>
                    <Image alt="" className='mt-4 rounded-md border' src={muse}/>
                  </div>
                </div>
                <div className=" flex items-center space-x-4 rounded-md border p-4 w-[10vw]">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-medium leading-none">
                      Pre-defined questions
                    </p><br/>
                    <p className="text-sm text-muted-foreground">
                      Answer a set of pre-defined questions to describe your idea manually.
                    </p>
                    <Image alt="" className='mt-4 rounded-md border' src={muse}/>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => {
                  const s11 = document.getElementById("hpm-1-1");
                  const s12 = document.getElementById("hpm-1-2");
                  const s13 = document.getElementById("hpm-1-3");
                  const s14 = document.getElementById("hpm-1-4");
                  const s15 = document.getElementById("hpm-1-5");
                  if(s11 && s12 && s13 && s14 && s15) {
                    s11.style.display="none";
                    s12.style.display="none";
                    s13.style.display="none";
                    s14.style.display="block";
                    s15.style.display="none";
                  }
                }}  className="w-full">
                  Next Stage 
                </Button>
              </CardFooter>
            </Card>
          </div>
  
  
  
  
  
          <div id="hpm-1-4">
            <Card className='min-w-[40vw] dark'>
              <CardHeader>
                <CardTitle className='mb-4'>Stage 2: <b>The Validation Engine ✅</b></CardTitle>
                <CardDescription>This is the Validation Engine. Your Idea gets evaluted from multiple perspectives and your idea is validated with real-time honest feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex items-start justify-center gap-4'>
                  <Card className='rounded-sm w-[45%]'>
                    <CardHeader>
                      <CardTitle className='mb-2'>Product Fit Validation</CardTitle>
                      <CardDescription>Stormee uses different metrics of product validation to provide you with field-specific validation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='bg-transparent border border-neutral-500 w-full p-3 text-white rounded-sm text-center mb-3'>
                        <h1 className='text-sm'>Stormee Validation Cards</h1>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className='rounded-sm w-[45%] '>
                    <CardHeader>
                    <CardTitle className='mb-2'>Expert Feedback</CardTitle>
                    <CardDescription>Using AI Personas and live market insights, Stormee gives sharp feedback on: Business, Product, and Tech.</CardDescription>
                    </CardHeader>
                    <CardContent>
                    <div className='bg-transparent border border-neutral-500 w-full p-3 text-white rounded-sm text-center'>
                        <h1 className='text-sm'>Field-Specific Feedback and Insights</h1>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={() => {
                  const s11 = document.getElementById("hpm-1-1");
                  const s12 = document.getElementById("hpm-1-2");
                  const s13 = document.getElementById("hpm-1-3");
                  const s14 = document.getElementById("hpm-1-4");
                  const s15 = document.getElementById("hpm-1-5");
                  if(s11 && s12 && s13 && s14 && s15) {
                    s11.style.display="none";
                    s12.style.display="none";
                    s13.style.display="none";
                    s14.style.display="none";
                    s15.style.display="block";
                  }
                }}  className="w-full">
                  Next Stage
                </Button>
              </CardFooter>
            </Card>
          </div>
  
  
  
  
          <div id="hpm-1-5">
            <Card className='min-w-[40vw] dark'>
              <CardHeader>
                <CardTitle className='mb-4'>Stage 3: <b>The Stormee Canvas</b></CardTitle>
                <CardDescription>This is the end stage that Stormee AI takes you to. View pitch-ready documents and analysis of your product delivered to you by Stormee AI. This is your <b><i>FOUNDER HUB.</i></b></CardDescription>
              </CardHeader>
              <CardContent>
                <div className='flex items-start justify-center gap-4'>
                  <Card className='rounded-sm w-[45%]'>
                    <CardHeader>
                      <CardTitle className='mb-2'>Executive Summary</CardTitle>
                      <CardDescription>Stormee uses different metrics of product validation to provide you with field-specific validation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='bg-transparent border border-neutral-500 w-full p-3 text-white rounded-sm text-center mb-3'>
                        <h1 className='text-sm'>Elevator Pitch</h1>
                      </div>
                      <div className='bg-transparent border border-neutral-500 w-full p-3 text-white rounded-sm text-center mb-3'>
                        <h1 className='text-sm'>Problem Statement</h1>
                      </div>
                      <div className='bg-transparent border border-neutral-500 w-full p-3 text-white rounded-sm text-center mb-3'>
                        <h1 className='text-sm'>Target Audience</h1>
                      </div>
                      <div className='bg-transparent border border-neutral-500 w-full p-3 text-white rounded-sm text-center mb-3'>
                        <h1 className='text-sm'>Unique Value Prop.</h1>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className='rounded-sm w-[45%]'>
                    <CardHeader>
                      <CardTitle className='mb-2'>Business Board</CardTitle>
                      <CardDescription>Stormee uses different metrics of product validation to provide you with field-specific validation</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className='bg-transparent border border-neutral-500 w-full p-3 text-white rounded-sm text-center mb-3'>
                        <h1 className='text-sm'>Market Analysis</h1>
                      </div>
                      <div className='bg-transparent border border-neutral-500 w-full p-3 text-white rounded-sm text-center mb-3'>
                        <h1 className='text-sm'>SWOT Analysis</h1>
                      </div>
                      <div className='bg-transparent border border-neutral-500 w-full p-3 text-white rounded-sm text-center mb-3'>
                        <h1 className='text-sm'>Release Plan</h1>
                      </div>
                      <div className='bg-transparent border border-neutral-500 w-full p-3 text-white rounded-sm text-center mb-3'>
                        <h1 className='text-sm'>Revenue Strategy</h1>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className='rounded-sm w-[45%] '>
                    <CardHeader>
                    <CardTitle className='mb-2'>Validation Report</CardTitle>
                    <CardDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </CardDescription>
                    </CardHeader>
                    <CardContent>
                    <div className='bg-transparent border border-neutral-500 w-full p-3 text-white rounded-sm text-center'>
                        <h1 className='text-sm'>Detailed and Actionable Validation Insights</h1>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
              <CardFooter>
                <Button onClick={async () => {
                  try {
                    const { error } = await supabase
                      .from('Users')
                      .update({ Stage: 'No-Payment' })
                      .eq('email', session.user?.email);
                    
                    if (error) {
                      console.error('Error updating stage:', error);
                      return;
                    }
                    
                    setStage("No-payment");
                    // Show the "Let's get started" message
                    const s11 = document.getElementById("hpm-1-1");
                    const s12 = document.getElementById("hpm-1-2");
                    const s13 = document.getElementById("hpm-1-3");
                    const s14 = document.getElementById("hpm-1-4");
                    const s15 = document.getElementById("hpm-1-5");
                    if(s11 && s12 && s13 && s14 && s15) {
                      s11.style.display = "none";
                      s12.style.display = "none";
                      s13.style.display = "none";
                      s14.style.display = "none";
                      s15.style.display = "block";
                    }
                    toast("Alright. Let's get started! First up: Stage 1")
                  } catch (err) {
                    console.error('Error in Get Started:', err);
                  }
                }} className="w-full">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          </div>
          </>
        ): stage === "No-Payment" ? (
          <div className='hpm-1'>
            <h2 className='scroll-m-20 text-2xl font-light tracking-tight'>Welcome, {session.user?.name}</h2>
            <h1 className='scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl'>Stage 1: Idea Creation</h1>
            <h3>Choose how you want to proceed</h3>
            <div className='flex items-center justify-center gap-4 mt-8'>
              <Card className='dark w-[24vw]'>
                <CardHeader>
                  <CardTitle className='scroll-m-20 text-2xl font-semibold tracking-tight'>Brainstorm with Muse AI</CardTitle>
                  <CardDescription>AI-Assisted Brainstorm Session </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='opacity-[60%]'>Brainstorm your next big idea in a 2 minute guided discussion with Muse AI.</p>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => {router.push("/Home/Muse")}} className='w-full'>Launch Muse AI</Button>
                </CardFooter>
              </Card>
              <Card className='dark w-[24vw]'>
                <CardHeader>
                  <CardTitle className='scroll-m-20 text-2xl font-semibold tracking-tight'>Structured Idea Input Form</CardTitle>
                  <CardDescription>AI-Assisted Brainstorm Session </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className='opacity-[60%]'>Fill out a quick form to define your idea step by step—with total control.</p>
                </CardContent>
                <CardFooter>
                  <Button className='w-full'>Launch Form</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        ) : (
          <div className='hpm-1'>
            <h1>Loading...</h1>
          </div>
        )}
      </div>
      )}
    </div>
  )
}

export default HomePage