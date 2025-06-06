import { Button } from "techno-components";
import { ImageDots } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="flex max-w-[600px] min-h-[400px] p-8">
        <ImageDots src="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
      </div>
    </div>
  );
}

/*
<Button variant="primary" outline={true}>
        Button
      </Button>
*/
