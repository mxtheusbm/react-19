'use client'
import { Suspense, useState } from "react";
import { Posts } from "./posts";
export default function Home() {
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="max-w-[1200px] mx-auto">
      <input 
        type="text"  
        placeholder="search"
        className="w-1/2 p-4 my-8 mx-auto"
        onChange={(e: any) => setSearchValue(e.target.value)}  
      />
      
      <Suspense fallback={<p>Carregando...</p>}>
        <Posts searchValue={searchValue}/>
      </Suspense>
    </div>
  );
}
