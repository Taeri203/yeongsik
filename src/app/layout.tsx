import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileBottomCTA } from "@/components/layout/MobileBottomCTA";
import { defaultSeo, siteConfig } from "@/data/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://우영식.kr"),
  title: {
    default: defaultSeo.title,
    template: `%s | ${siteConfig.siteName}`,
  },
  description: defaultSeo.description,
  openGraph: {
    title: defaultSeo.title,
    description: defaultSeo.ogDescription,
    images: [siteConfig.profileImage],
    type: "website",
    locale: "ko_KR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#004EA2",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko">
      <body>
        <Script
          id="strip-cursor-preview-attrs"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                const stripCursorAttrs = () => {
                  document.querySelectorAll("[data-cursor-ref],[data-cursor-element-id]").forEach((element) => {
                    element.removeAttribute("data-cursor-ref");
                    element.removeAttribute("data-cursor-element-id");
                  });
                };

                stripCursorAttrs();
                const observer = new MutationObserver(stripCursorAttrs);
                observer.observe(document.documentElement, {
                  attributes: true,
                  subtree: true,
                  attributeFilter: ["data-cursor-ref", "data-cursor-element-id"],
                });
                window.setTimeout(() => observer.disconnect(), 5000);
              })();
            `,
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileBottomCTA />
      </body>
    </html>
  );
}
