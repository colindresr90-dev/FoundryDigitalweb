import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vargas & Asociados — Bufete Jurídico" },
      { name: "description", content: "Bufete de abogados con más de 20 años de experiencia. Asesoría legal profesional para personas y empresas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Vargas & Asociados — Bufete Jurídico" },
      { name: "twitter:title", content: "Vargas & Asociados — Bufete Jurídico" },
      { property: "og:description", content: "Bufete de abogados con más de 20 años de experiencia. Asesoría legal profesional para personas y empresas." },
      { name: "twitter:description", content: "Bufete de abogados con más de 20 años de experiencia. Asesoría legal profesional para personas y empresas." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/25bc305d-fad6-448f-9058-2119bfbfe6c7/id-preview-b429bc6d--acea1dca-ee54-4181-8c15-deeb70c6d24c.lovable.app-1776901886381.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/25bc305d-fad6-448f-9058-2119bfbfe6c7/id-preview-b429bc6d--acea1dca-ee54-4181-8c15-deeb70c6d24c.lovable.app-1776901886381.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
