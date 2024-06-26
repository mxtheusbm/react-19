import { Suspense } from "react";
import { Posts } from "./posts";
export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <Suspense fallback={<p>Carregando...</p>}>
        <Posts />
      </Suspense>
    </div>
  );
}
