import React from "react";
import { useFetchAboutMeData } from "./AboutMe.hooks";

const AboutMe: React.FC = () => {
  const { isError, isLoading, avatarAlt, avatarSorce, text } =
    useFetchAboutMeData();

  return (
    <div className="flex flex-wrap sm:flex-nowrap justify-evenly items-center gap-6">
      {isError || isLoading ? (
        <p>{isError ? "problem with fetching data" : "loading..."}</p>
      ) : (
        <>
          <img
            className="min-w-48 h-48 object-cover rounded-full border-solid border-4 border-textColor-primary"
            src={avatarSorce}
            alt={avatarAlt}
          />

          <p className="lg:min-w-[calc(100%_-_54rem)] text-center sm:text-start">
            {text}
          </p>
        </>
      )}
    </div>
  );
};

export { AboutMe };
