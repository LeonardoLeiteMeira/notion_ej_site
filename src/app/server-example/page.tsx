export default function ServerExample() {
  // This will only run on the server
  console.log('This only appears in the terminal');

  return (
    <main className="min-h-screen p-8">
      <h1>Server Component Example</h1>
      <p>Check your terminal for the console.log</p>
    </main>
  );
} 