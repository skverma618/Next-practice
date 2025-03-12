import React from "react";

const page = async ({ params }: { params: { id: string } }) => {
  const { id } = await params;
  return (
    <div>
      <h1>User Profile : {id}</h1>
    </div>
  );
};

export default page;
