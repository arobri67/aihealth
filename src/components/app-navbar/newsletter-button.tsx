import { IconMail } from "@tabler/icons-react";

import { Button } from "../ui/button";

const NewsLetterButton = () => {
  return (
    <Button asChild className="rounded-full">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <IconMail className="mr-1 h-4 w-4" />
        Get Update
      </a>
    </Button>
  );
};

export default NewsLetterButton;
