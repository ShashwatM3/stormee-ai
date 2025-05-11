// "use client"

// import { Button } from '@/components/ui/button'
// import React from 'react'
// import { signOut } from "next-auth/react";
// import { useRouter } from 'next/navigation';

// function Page() {
//   const router = useRouter(); // ✅ Move this to the top level

//   return (
//     <div>
//       <Button onClick={() => {
//         signOut({ callbackUrl: '/' });
//         // router.push("/"); // use router.push instead of window.open
//       }}>
//         Log Out
//       </Button>
//     </div>
//   )
// }

// export default Page;

import React from 'react'

function Page() {
  return (
    <div>Page</div>
  )
}

export default Page