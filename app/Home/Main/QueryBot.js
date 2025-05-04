import React from 'react';
import "./styles/QB.css"
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

function QueryBot() {
  return (
    <div className='qb-main'>
      <h1>Do you have any queries, doubts regarding your dashboard?</h1>
      <div className='flex gap-3'>
        <input placeholder='Ask a question....'/>
        <Button>Send</Button>
      </div>
    </div>
  )
}

export default QueryBot