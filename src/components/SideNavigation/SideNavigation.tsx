import React from "react";

const SideNavigation: React.FC = () => {
  return (
    <div className="col-span-3 hidden lg:flex none h-[calc(100vh_-_5rem)] ">
      <nav></nav>
    </div>
  );
};

export { SideNavigation };
