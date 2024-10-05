export async function GET() {
    return new Response(JSON.stringify({ message: 'Hello from Next.js!' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  