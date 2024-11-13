import Link from "next/link";

import { IconHeartRateMonitor } from "@tabler/icons-react";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <IconHeartRateMonitor size={40} stroke={1.5} className="text-primary" />
      <h2 className="flex flex-col font-bricolage text-lg font-semibold leading-none">
        <span>AI for</span>
        <span>Healthcare</span>
      </h2>
    </Link>
  );
};

export default Logo;
