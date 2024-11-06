import { IconCirclePlus } from "@tabler/icons-react";

import { Button } from "../ui";

const SubmitCompany = () => {
  return (
    <Button asChild variant="outline" className="rounded-full">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <IconCirclePlus className="mr-1 h-4 w-4" />
        Add a Company
      </a>
    </Button>
  );
};

export default SubmitCompany;
