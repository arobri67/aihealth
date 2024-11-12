import Link from "next/link";

import { IconMail } from "@tabler/icons-react";

import { Button } from "../ui/button";

const NewsLetterButton = () => {
  return (
    <Button asChild className="rounded-full">
      <Link href="#newsletter">
        <IconMail className="mr-1 h-4 w-4" />
        Get Update
      </Link>
    </Button>
  );
};

export default NewsLetterButton;
