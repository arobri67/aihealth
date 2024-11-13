import Link from "next/link";

import Logo from "../logo";
import { Button } from "../ui/button";

export const AppFooter = () => {
  return (
    <footer className="border-t bg-background py-12">
      <div className="container mx-auto flex flex-col gap-8 md:flex-row md:justify-around">
        <ul className="flex flex-col space-y-2">
          <li>
            <Button variant="link" asChild className="p-0">
              <Link href="/blog">Blog</Link>
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              asChild
              className="p-0 font-normal text-foreground hover:text-primary">
              <Link href="/categories/administration-and-operations">
                Administration and Operations
              </Link>
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              asChild
              className="p-0 font-normal text-foreground hover:text-primary">
              <Link href="/categories/research-and-development">
                Research & Development
              </Link>
            </Button>
          </li>
          <li>
            <Button
              variant="link"
              asChild
              className="p-0 font-normal text-foreground hover:text-primary">
              <Link href="/categories/clinical-applications">
                Clinical Applications
              </Link>
            </Button>
          </li>
        </ul>
        <div className="flex flex-col space-y-2">
          <Logo />
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AI Healthcare Hub. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
