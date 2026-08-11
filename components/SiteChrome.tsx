'use client';

import type { ReactNode } from 'react';
import { usePathname } from 'next/navigation';

// Routes that run as standalone landing pages. Paid traffic lands here, so the
// site nav, the "free book" bar, the full footer, and the mobile CTA bar are all
// exits competing with the one action the page is asking for.
const BARE_ROUTES = ['/webinars'];

export function useIsBareRoute(): boolean {
  const pathname = usePathname();
  return BARE_ROUTES.some(route => pathname === route || pathname.startsWith(`${route}/`));
}

/** Renders children on normal pages, nothing on landing pages. */
export function SiteChrome({ children }: { children: ReactNode }) {
  return useIsBareRoute() ? null : <>{children}</>;
}

/** Renders children only on landing pages. */
export function LandingChrome({ children }: { children: ReactNode }) {
  return useIsBareRoute() ? <>{children}</> : null;
}
