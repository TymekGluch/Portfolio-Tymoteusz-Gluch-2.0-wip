import React from "react";
import { ValueOf } from "../../../types/utiles";
import {
  TECHNOLOGIES_HEADING,
  TECHNOLOGIES_VARIANT,
} from "./Technologies.constants";
import { useQuery } from "@tanstack/react-query";
import { v4 as uuid } from "uuid";
import { baseApiUrl, createAssetQuery } from "../../../utilities";
import classNames from "classnames";

type TechnologiesProps = {
  variant: ValueOf<typeof TECHNOLOGIES_VARIANT>;
  headingTag?: ValueOf<typeof TECHNOLOGIES_HEADING>;
  id?: string;
};

const apiKey = import.meta.env.VITE_API_ACCESS_TOKEN;
const apiSpace = import.meta.env.VITE_CONTENTFULL_SPACE;
const query = `spaces/${apiSpace}/environments/master/entries/3y7cpU0leHzvrC6SOv3IF7?access_token=${apiKey}`;

type ImagesIdType = {
  sys: {
    id: string;
  };
};

const Technologies: React.FC<TechnologiesProps> = ({
  variant,
  headingTag,
  id,
}) => {
  const {
    data,
    isSuccess,
    isError: preliminaryIsError,
    isLoading: preliminaryIsLoading,
  } = useQuery({
    queryKey: ["technolgies"],
    queryFn: () =>
      fetch(`${baseApiUrl}/${query}`).then(
        (response) => response.ok && response.json()
      ),
  });

  const images = data?.fields?.images;
  const imagesPromises = images?.map((asset: ImagesIdType) =>
    fetch(createAssetQuery(asset.sys.id)).then((res) => res.ok && res.json())
  );

  const {
    data: imagesData,
    isError: imagesIsError,
    isLoading: imagesIsLoading,
  } = useQuery({
    queryKey: ["technologiesAsset"],
    queryFn: () => Promise.all(imagesPromises),
    enabled: isSuccess,
  });

  const isLoading = imagesIsLoading || preliminaryIsLoading;
  const isError = imagesIsError || preliminaryIsError;

  const Component = "section";
  const HeadingTag = headingTag ?? React.Fragment;

  return (
    <Component
      id={id}
      className={classNames(
        "flex justify-center items-center flex-wrap gap-8 w-full h-fit p-6 border-solid border border-accentColor-primary rounded-2xl shadow-variant-2-md-inner",
        variant === TECHNOLOGIES_VARIANT.MOBILE_SECTION &&
          "lg:hidden shadow-none scroll-m-28"
      )}>
      {Boolean(headingTag) && (
        <HeadingTag
          className={classNames(
            "text-xl",
            variant === TECHNOLOGIES_VARIANT.MOBILE_SECTION &&
              "flex flex-col justify-center items-center gap-3 w-full"
          )}>
          {data?.fields?.heading ?? "loading..."}

          {variant === TECHNOLOGIES_VARIANT.MOBILE_SECTION && (
            <span className="block w-full h-px bg-accentColor-primary " />
          )}
        </HeadingTag>
      )}

      <ul className="flex justify-center items-center flex-wrap gap-4 xl:gap-8 w-full">
        {isError || isLoading
          ? Array.from({ length: 4 }, () => (
              <li key={uuid()}>
                {isError ? (
                  <p className="text-red-500">Error</p>
                ) : (
                  <p className="text-s text-accentColor-tertiary">loading...</p>
                )}
              </li>
            ))
          : imagesData?.map((image) => (
              <li key={image?.fields?.title}>
                <img
                  className="w-12 h-12 "
                  src={image?.fields?.file?.url}
                  alt={image?.fields?.title}
                  title={image?.fields?.title}
                  loading="lazy"
                />
              </li>
            )) ?? null}
      </ul>
    </Component>
  );
};

export { Technologies };
