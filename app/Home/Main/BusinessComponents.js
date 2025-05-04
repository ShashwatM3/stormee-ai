import React from 'react';
import "./styles/BC.css"
import { Button } from '@/components/ui/button';

function BusinessComponents() {
  return (
    <div className='bc-main'>
      <h1>Business Components</h1>
      <h3>All your startup components. All @ One Dashboard</h3>
      <div className='flex items-center justify-start gap-3 mb-[10px]'>
        <div className='bc-ch-con'>
          <Button>Market Analysis</Button>
          <Button>SWOT Analysis</Button>
          <Button>Revenue Strategy</Button>
        </div>
        <div className='flex gap-[10px]'>
          <Button>Marketing Strategy</Button>
          <Button>Version Schedule</Button>
        </div>
      </div>
      <div className='main-content-bc'></div>
    </div>
  )
}

export default BusinessComponents