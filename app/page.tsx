import AppBar from "@/components/layout/AppBar";

export default function Home() {
  return (
    <div>
      <AppBar />

      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-6xl font-bold">Welcome to AfriCanvas</h1>
          <p className="mt-4 text-lg">
            AI enabled commissioning platform for African artists
          </p>
        </div>
      </div>
    </div>
  );
}
