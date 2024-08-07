import React from "react";
import {
  ITEM_VISIBILITY_DEVICE,
  navigationLinks,
  onlyMobileLinks,
} from "./MainNavigation.data";
import classNames from "classnames";
import { Link } from "../Link";
import { COLOR_VARIANT } from "../../constants";
import { useLocation } from "react-router";

const MainNavigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState<boolean>(false);
  const { hash } = useLocation()

  const menuButtonDescription = isMenuOpen ? "close menu" : "open menu";

  const handleMenu = (_: React.MouseEvent) => {
    if (isMenuOpen) {
      document.documentElement.classList.remove("overflow-y-clip");
    } else {
      document.documentElement.classList.add("overflow-y-clip");
    }

    setIsMenuOpen(!isMenuOpen);
  };

  React.useEffect(() => {
    document.documentElement.classList.remove("overflow-y-clip");

    setIsMenuOpen(false)
  }, [hash])

  return (
    <nav className="fixed lg:static top-0 left-0  self-center flex justify-center items-center w-screen px-6 lg:px-12 bg-backgroundColor-primary bg-opacity-80 shadow-md-inner z-50">
      <div className="flex justify-between items-center w-full max-w-screen-2xl h-16">
        <a
          href="/"
          className="flex justify-center items-center size-12"
          title="Go home"
          aria-label="Go home">
          <h1 className="text-2xl font-bold text-accentColor-primary">
            T<span className="text-xl text-accentColor-tertiary">G</span>
          </h1>
        </a>

        <button
          type="button"
          className={classNames(
            "flex lg:hidden justify-center items-center size-12"
          )}
          title={menuButtonDescription}
          aria-label={menuButtonDescription}
          onClick={handleMenu}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-8 h-8 fill-accentColor-secondary">
              <path
                fillRule="evenodd"
                d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              className="w-8 h-8 fill-accentColor-secondary">
              <path
                fillRule="evenodd"
                d="M3 9a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 9Zm0 6.75a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>

        <div
          className={classNames(
            isMenuOpen ? "flex" : "hidden",
            "fixed lg:static left-1/2 bottom-0 lg:flex justify-center items-start lg:items-center w-screen lg:w-fit h-[calc(100dvh_-_4rem)] lg:h-fit bg-backgroundColor-primary lg:bg-transparent bg-opacity-80 lg:bg-opacity-100 transform -translate-x-1/2 lg:transform-none"
          )}>
          <ul className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-10 w-fit p-10 lg:p-0 mt-[15vh] lg:m-0 bg-backgroundColor-primary lg:bg-transparent border-solid border border-accentColor-primary lg:border-none rounded-lg lg:rounded-none shadow-variant-2-md-inner lg:shadow-none">
            {navigationLinks.map((current, index, array) => (
              <li
                key={current.name}
                className={classNames(
                  "flex flex-col lg:flex-row gap-4 w-full last-of-type:text-accentColor-secondary uppercase",
                  current.deviceVisibility === ITEM_VISIBILITY_DEVICE.MOBILE &&
                    "lg:hidden",
                  !onlyMobileLinks
                    .map(({ name }) => name)
                    .includes(current.name) && "lg:hidden"
                )}>
                <Link.anchor href={current.anchor} colorVariant={COLOR_VARIANT.SECONDARY}>{current.name}</Link.anchor>

                {index < array.length - 1 && (
                  <span className="block lg:hidden w-full h-px bg-accentColor-primary shadow-variant-2-md" />
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export { MainNavigation };
