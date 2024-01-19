const port = 8080;

function handler(request: Request): Response {
    const body = "hello world";
    return new Response(body, { status: 200 });
};

console.log(`HTTP server running. Access it at: http://localhost:8080/`);
Deno.serve({ port: port }, handler);