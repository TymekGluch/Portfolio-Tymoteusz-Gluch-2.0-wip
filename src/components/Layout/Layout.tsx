import React from "react";
import { MainNavigation } from "../MainNavigation";
import { SideNavigation } from "../SideNavigation";

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <article className="flex flex-col justify-end lg:justify-between align-middle gap-4 w-screen max-w-screen-2xl min-h-screen border-solid border-px border-textColor-primary">
      <MainNavigation />

      <div className="lg:grid grid-cols-12 gap-4">
        <SideNavigation />

        <div className="col-span-8 flex flex-col items-center gap-5 w-full min-h-[calc(100vh_-_5rem)] lg:min-h-[calc(100vh_-_5.5rem)] p-6 mt-20 lg:mt-0 lg:mb-2 lg:rounded-2xl border border-solid border-textColor-primary bg-transparent shadow-md-inner">
          <h1 className="text-accentColor-tertiary uppercase">
            Witaj, użytkowniku
          </h1>

          <span className="block w-full h-px bg-accentColor-tertiary shadow-variant-3-md" />

          <h1 className="text-accentColor-primary uppercase">
            Witaj, użytkowniku
          </h1>

          <span className="block w-full h-px bg-accentColor-primary shadow-variant-2-md" />

          <h1 className="text-accentColor-secondary uppercase">
            Witaj, użytkowniku
          </h1>

          <span className="block w-full h-px bg-accentColor-secondary shadow-variant-3-md" />

          <div className="w-[80%] h-[100dvh] p-5 border-solid border border-accentColor-primary text-accentColor-primary shadow-variant-2-md-inner rounded-lg">
            test section content
          </div>

          {children}
        </div>
      </div>
    </article>
  );
};

export { Layout };
