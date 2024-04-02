import React from "react";
import { ValueOf } from "../../../types/utiles";
import {
  TECHNOLOGIES_HEADING,
  TECHNOLOGIES_VARIANT,
} from "./Technologies.constants";
import { useContentfulEntry } from "../../../hooks";

type TechnologiesProps = {
  variant: ValueOf<typeof TECHNOLOGIES_VARIANT>;
  headingTag?: ValueOf<typeof TECHNOLOGIES_HEADING>;
};

const Technologies: React.FC<TechnologiesProps> = ({ variant, headingTag }) => {
  const { data, isLoading, isError } = useContentfulEntry(
    "6UHZTAtj3bY0UchPvFsrUz"
  );

  console.log("entry: ", data);

  const Component =
    variant === TECHNOLOGIES_VARIANT.SIDE_NAVIGATION ? "section" : "div";
  const HeadingTag = headingTag ?? React.Fragment;

  return (
    <Component className="flex flex-col justify-start items-center w-full min-h-72 p-6 border-solid border border-accentColor-primary text-accentColor-secondary rounded-2xl shadow-variant-2-md-inner">
      {Boolean(headingTag) && (
        <HeadingTag>
          {(data?.fields?.heading as string | undefined) ?? ""}
        </HeadingTag>
      )}

      <ul className="flex justify-center items-center flex-wrap gap-4 w-full p-6"></ul>
    </Component>
  );
};

export { Technologies };
