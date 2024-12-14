import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to LeafMatrix</h1>
        <Button className="mt-4">Login</Button>
      </div>
    </>
  );
}
