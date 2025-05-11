// "use client"
// import React, { useEffect, useState } from 'react';
// import "./styles/Nav.css";
// import rocket from "./icons/rocket.png"
// import Image from 'next/image';
// import { Button } from './ui/button';
// import { useRouter } from 'next/navigation';
// import { usePathname } from 'next/navigation'

// function Nav() {
//   const router = useRouter();
//   const pathname = usePathname();
  
//   return (
//     <div className='nav-main'>
//       <h1 className='flex items-center gap-4'>
//         <Image src={rocket} alt=""/>
//         Stormee AI
//       </h1>
//       {(pathname.includes("/Home")) ? (
//         <React.Fragment>
//           <div>
//             <a onClick={() => {
//               router.push("/Home")
//             }}>Home</a>
//             <a onClick={() => {
//               router.push("/Home/Muse")
//             }}>Muse AI</a>
//             <a>Your MVP Dashboard</a>
//             <a>How to use</a>
//             <a>Contact</a>
//           </div>
//           <Button onClick={() => {router.push("/Home/profile")}} variant={'secondary'}>Your Profile</Button>
//         </React.Fragment>
//       ): (
//         <React.Fragment>
//         {(!(pathname.includes("/auth"))) ? (
//           <div className='flex gap-2'>
//             <Button variant={'secondary'}>Login</Button>
//             <Button onClick={() => {router.push("/auth")}}>Register</Button>
//           </div>
//         ): (
//           <></>
//         )}
//         </React.Fragment>
//       )}
//     </div>
//   )
// }

// export default Nav

"use client"
import React, { useEffect, useState } from 'react';
import "./styles/Nav.css";
import rocket from "./icons/rocket.png"
import Image from 'next/image';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation'

function Nav() {
  const router = useRouter();
  const pathname = usePathname();
  
  return (
    <div className='nav-main'>
      <h1 onClick={() => {router.push("/")}} className='flex items-center gap-4 cursor-pointer'>
        <Image src={rocket} alt=""/>
        Stormee AI
      </h1>
      {/* <div>
        <a onClick={() => {
          router.push("/Home")
        }}>Home</a>
        <a onClick={() => {
          router.push("/Home/Muse")
        }}>Muse AI</a>
        <a>Your MVP Dashboard</a>
        <a>How to use</a>
        <a>Contact</a>
    </div> */}
    <Button 
      className='bg-transparent border border-neutral-700 text-white hover:text-black hover:font-light hover:bg-white' 
      onClick={() => {router.push("/waitlist")}} 
      variant={'secondary'}>
      Join Stormee AI
    </Button>
    </div>
  )
}

export default Nav