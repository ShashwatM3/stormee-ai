// "use client"

// import React, { useState } from 'react';
// import "./styles.css";
// // import rocket from "@/components/icons/rocket.png"
// // import Image from 'next/image';
// import { Input } from '@/components/ui/input';
// import { Button } from '@/components/ui/button';
// import { useRouter } from 'next/navigation';
// import { signIn, useSession } from "next-auth/react";
// import supabase from '../config/supabaseClient'

// function Authentication() {
//   console.log(supabase);
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [username, setUsername] = useState("");
//   const {session, status} = useSession();
  
//   const router = useRouter();

//   async function stageOne() {
//     const em = document.getElementById("email-register");
//     if(em) {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (emailRegex.test(em.value)) {
//         setEmail(em.value);
//         document.getElementById("stage-one").style.display = "none";
//         document.getElementById("stage-two").style.display = "flex";
//       } else {
//         alert("Please enter a valid email address");
//       }
//     }
//   }

//   async function stageTwo() {
//     const pass = document.getElementById("pass-register");
//     const user = document.getElementById("user-register");
  
//     if(pass && user) {
//       if(pass.value.length < 8) {
//         alert("Password must be at least 8 characters long");
//         return;
//       }
      
//       if(user.value.length < 3) {
//         alert("Username must be at least 3 characters long");
//         return;
//       }
  
//       const result = await signIn("credentials", {
//         redirect: false,
//         email: email,
//         password: pass.value,
//         username: user.value,
//       });

//       const { error } = await supabase
//         .from('Users')
//         .insert({ 
//           email: email, 
//           username: user.value ,
//           Idea: '',
//           Market_Analysis: '',
//           Real_World_Demand: '',
//           Competitor_Analysis: '',
//           SWOT_Analysis: '',
//           Growth_Strategy: '',
//           End_To_End: '',
//           Stage: 1,
//         })
//       console.log(error);
  
//       if (result.ok) {
//         router.push("/Home");
//       } else {
//         alert("Login failed");
//       }
//     }
//   }

//   return (
//     <div className='auth-main'>
//       <div>
//         <h1>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
//         molestiae quas vel sint commodi"</h1>
//       </div>
//       <div id="stage-one">
//         <div>
//           <h1 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>Create an account</h1>
//           <h3>Enter your email below to create your account</h3>
//           <Input id="email-register" placeholder='name@example.com'/>
//           <Button onClick={stageOne} className='button-register' variant={'secondary'}>Register with Email</Button>
//           <div className="divider">OR CONTINUE WITH</div>
//           <Button className='google-register'>
//             Continue with Google
//           </Button>
//         </div>
//       </div>
//       <div id="stage-two">
//         <div>
//           <h1 className='scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0'>Create an account</h1>
//           <h3>Enter your secure password</h3>
//           <Input id="pass-register" type='password'/>
//           <h3>Enter your preferred username</h3>
//           <Input id="user-register" placeholder='Ex: John Doe'/>
//           <Button onClick={stageTwo} className='button-register' variant={'secondary'}>Create Account</Button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Authentication

import React from 'react'

function Authentication() {
  return (
    <div>Authentication</div>
  )
}

export default Authentication