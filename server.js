import { serve } from "bun";

const PORT = parseInt(process.env.PORT || "3000", 10);

serve({
  port: PORT,
  fetch(request) {
    const url = new URL(request.url);
    const file = Bun.file(`dist${url.pathname === "/" ? "/index.html" : url.pathname}`);
    return new Response(file);
  },
});

console.log(`Server running on http://localhost:${PORT}`);
