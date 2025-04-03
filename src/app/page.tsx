'use client'

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(()=>{
    const parms = new URLSearchParams(window.location.search)
    const token = parms.get('token')
    const name = parms.get('name');
    router.push(`/accept?name=${name}&token=${token}`)
  },[router]);

  return (
    <main className="min-h-screen p-8">
      <h1>Carregando...</h1>
    </main>
  );
}
