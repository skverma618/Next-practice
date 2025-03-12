import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <Link href={"/dashboard/users/1"}>User 1</Link>
      <Link href={"/dashboard/users/2"}>User 2</Link>
    </div>
  );
};

export default page;
