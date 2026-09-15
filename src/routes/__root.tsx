import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import { AuthProvider } from "@/lib/auth/provider";
import { PreviewHostBridge } from "@/components/preview-host-bridge";
import { ThemeProvider } from "@/components/theme-provider";
import appCss from "../styles.css?url";

const APP_NAME = "Abhimanue Biju";

const themeBoot = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"){document.documentElement.classList.add("dark");}}catch(e){document.documentElement.classList.add("dark");}})();`;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${APP_NAME} — Cybersecurity & Data Science` },
      {
        name: "description",
        content:
          "Portfolio of Abhimanue Biju — BCA graduate specializing in cybersecurity, digital forensics, and data science.",
      },
      { name: "theme-color", content: "#0f1014" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "manifest", href: "/__grok/manifest.webmanifest" },
      { rel: "apple-touch-icon", href: "/__grok/icon-180.png" },
    ],
  }),
  component: () => (
    <html lang="en" className="antialiased" suppressHydrationWarning>
      <head>
        <HeadContent />
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body>
        <PreviewHostBridge />
        <AuthProvider>
          <ThemeProvider>
            <Outlet />
          </ThemeProvider>
        </AuthProvider>
        <Scripts />
      </body>
    </html>
  ),
});
