export async function GET() {
    return new Response(JSON.stringify({ message: 'Welcome to Next.js!' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  