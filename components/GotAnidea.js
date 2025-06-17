import React from 'react';
import "./GotAnIdea.css"
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

function GotAnidea() {
  const router = useRouter();
  return (
    <div className='got-an-idea-container'>
      <h1 className='got-an-idea-title'>Got an idea?</h1>
      <h3 className='got-an-idea-subtitle'>Can you describe it in at least 5 words?</h3>
      <p className='got-an-idea-description'>If yes, then you're a perfect fit for <b>Stormee AI.</b></p>
      <Button onClick={() => {router.push("/auth")}} className='got-an-idea-button dark'>Get Started now!</Button>
    </div>
  )
}

export default GotAnidea