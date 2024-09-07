import { ConnectKitButton } from "connectkit";
import { Layers } from "lucide-react";
import localFont from "next/font/local";
import Link from "next/link";
import { useRouter } from "next/router";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export function Layout({
  children,
  hide,
}: {
  children: React.ReactNode;
  hide?: {
    header?: boolean;
    footer?: boolean;
  };
}) {
  const router = useRouter();
  const path = router.asPath;

  return (
    <div
      className={`flex flex-col min-h-screen ${geistMono.variable} ${geistSans.variable} font-[family-name:var(--font-geist-sans)]`}
    >
      {!hide?.header && (
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <Layers className="h-6 w-6 text-primary" />
            <span className="ml-2 text-2xl font-bold text-primary">
              <Link href="/">UniChain</Link>
            </span>
          </Link>
          <nav className="ml-auto flex items-center gap-4 sm:gap-6">
            {path.includes("forum") && (
              <Link className="bg-black text-white py-2 px-3" href="/dashboard">
                Back to Dashboard
              </Link>
            )}
            <ConnectKitButton />
          </nav>
        </header>
      )}
      {children}
      {!hide?.footer && (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-muted-foreground">
            © 2023 UniChain. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </footer>
      )}
    </div>
  );
}
