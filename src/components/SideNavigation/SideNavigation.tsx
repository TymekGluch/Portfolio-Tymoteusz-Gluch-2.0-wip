import React from "react";
import { resolvedSideNavigationLink } from "./SideNavigation.data";

const SideNavigation: React.FC = () => {
  return (
    <div className="col-span-3 hidden lg:flex">
      <div className="sticky top-[89px] flex flex-col justify-between align-middle w-full h-[calc(100vh_-_6rem)]">
        <nav className="flex flex-col items-center w-full">
          <ul className="flex flex-col justify-center align-middle gap-2 w-min">
            {resolvedSideNavigationLink.map(({ name }) => (
              <li
                key={name}
                className="flex justify-start items-center gap-3 text-accentColor-tertiary">
                <span className="w-2 h-2 block rounded-full bg-accentColor-tertiary" />

                <p className="text-nowrap text-xl">{name}</p>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex w-full h-72 border-solid border border-accentColor-primary rounded-2xl shadow-variant-2-md-inner"></div>
      </div>
    </div>
  );
};

export { SideNavigation };
