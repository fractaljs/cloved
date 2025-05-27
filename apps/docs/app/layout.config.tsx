import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { TerminalIcon } from "lucide-react";

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <>
        <TerminalIcon size={16} />
        Blend
      </>
    ),
  },
  githubUrl: "https://github.com/fractaljs/blend-docs",
  links: [], // add footer links here
};
