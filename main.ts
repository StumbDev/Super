import { type Route, route, serveDir } from "@std/http";

// Helper function to load files with specified Content-Type
async function loadFile(path: string, contentType: string) {
  try {
    const file = await Deno.readFile(path);
    return new Response(file, {
      headers: { "Content-Type": contentType },
    });
  } catch {
    return new Response(`${path} not found`, { status: 404 });
  }
}

const routes: Route[] = [
  {
    pattern: new URLPattern({ pathname: "/" }),
    handler: () => loadFile("index.html", "text/html"),
  },
  {
    pattern: new URLPattern({ pathname: "/style.css" }),
    handler: () => loadFile("css/style.css", "text/css"),
  },
  {
    pattern: new URLPattern({ pathname: "/static/*" }),
    handler: async (req) => {
      try {
        return await serveDir(req);
      } catch {
        return new Response("File not found", { status: 404 });
      }
    },
  },
  {
    pattern: new URLPattern({ pathname: "/users/:id" }),
    handler: (_req, _info, params) => {
      return params?.pathname.groups.id
        ? new Response(params.pathname.groups.id)
        : new Response("User ID not provided", { status: 400 });
    },
  },
];

function defaultHandler(_req: Request) {
  return new Response("Not found", { status: 404 });
}

const handler = route(routes, defaultHandler);

export default {
  fetch(req) {
    return handler(req);
  },
} satisfies Deno.ServeDefaultExport;
