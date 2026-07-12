import { mkdir, readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const dist = path.join(root, "dist");
const serverDir = path.join(dist, "server");
const hostingDir = path.join(dist, ".openai");

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
};

async function collectFiles(dir, prefix = "") {
  const entries = await readdir(path.join(root, dir), { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const relativePath = path.join(dir, entry.name);
    const publicPath = path.posix.join(prefix, entry.name);

    if (entry.isDirectory()) {
      files.push(...(await collectFiles(relativePath, publicPath)));
    } else {
      files.push({ source: relativePath, publicPath });
    }
  }

  return files;
}

await rm(dist, { recursive: true, force: true });
await mkdir(serverDir, { recursive: true });
await mkdir(hostingDir, { recursive: true });

const files = [
  { source: "index.html", publicPath: "index.html" },
  { source: "styles.css", publicPath: "styles.css" },
  { source: "script.js", publicPath: "script.js" },
  ...(await collectFiles("assets", "assets")),
];

const manifest = {};

for (const file of files) {
  const buffer = await readFile(path.join(root, file.source));
  const ext = path.extname(file.source).toLowerCase();
  manifest[`/${file.publicPath}`] = {
    body: buffer.toString("base64"),
    contentType: contentTypes[ext] || "application/octet-stream",
  };
}

manifest["/"] = manifest["/index.html"];

const serverSource = `
const files = ${JSON.stringify(manifest)};

function responseFor(pathname) {
  const file = files[pathname] || files[pathname.replace(/\\/$/, "")] || files["/"];
  const bytes = Uint8Array.from(atob(file.body), (char) => char.charCodeAt(0));
  const cacheControl = file.contentType.startsWith("image/")
    ? "public, max-age=31536000, immutable"
    : "no-cache";

  return new Response(bytes, {
    headers: {
      "content-type": file.contentType,
      "cache-control": cacheControl,
    },
  });
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    return responseFor(decodeURIComponent(url.pathname));
  },
};
`;

await writeFile(path.join(serverDir, "index.js"), serverSource.trimStart());
await writeFile(
  path.join(hostingDir, "hosting.json"),
  await readFile(path.join(root, ".openai", "hosting.json"), "utf8"),
);
