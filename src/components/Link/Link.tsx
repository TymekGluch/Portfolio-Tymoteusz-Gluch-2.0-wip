import React from "react";
import { COLOR_VARIANT } from "../../constants";
import { ValueOf } from "../../types/utiles";
import { Link, LinkProps } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { LINK_AFTER_COLOR_VARIANTS, LINK_TEXT_COLOR_VARIANTS } from "./Link.constants";

type LinkCustomSharedProps = React.PropsWithChildren<{
  colorVariant?: ValueOf<typeof COLOR_VARIANT>;
  startIcon?: React.ReactElement;
  endIcon?: React.ReactElement;
  className?: string;
  uppercase?: boolean;
}>

type LinkAsButtonType = Omit<React.ComponentProps<"button">, 'className'>;
type LinkAsAnchorType = Omit<React.ComponentProps<"a">, 'className'>;
type LinkAsReactRouterLink = Omit<LinkProps, 'className'>;

const textClass = (color: ValueOf<typeof COLOR_VARIANT>) => LINK_AFTER_COLOR_VARIANTS?.[color]
const bgAfterColorClass = (color: ValueOf<typeof COLOR_VARIANT>) => LINK_TEXT_COLOR_VARIANTS?.[color]
const linkInternalClass = `relative flex justify-center items-center whitespace-nowrap gap-2 w-fit min-h-8 after:content-[''] after:hidden hover:after:block focus:after:block after:w-2 after:h-3/5 after:absolute after:right-2 after:text-2xl after:leading-1 after:animate-[pulse_0.75s_ease-in-out_infinite]`
const focusBgColorClass = `bg-opacity-0 focus:bg-opacity-10 px-2 pr-4 rounded bg-textColor-primary`

const linkCombinedClass = (color: ValueOf<typeof COLOR_VARIANT>, uppercase: boolean) => twMerge(textClass(color), bgAfterColorClass(color), linkInternalClass, focusBgColorClass, uppercase && 'uppercase')

const Button = (props: LinkAsButtonType & LinkCustomSharedProps) => {
  const { children, startIcon, endIcon, className, colorVariant = COLOR_VARIANT.DEFAULT, uppercase = false, ...restProps } = props;

  return <button className={linkCombinedClass(colorVariant, uppercase)} {...restProps}>{startIcon && startIcon} {children} {endIcon && endIcon}</button>;
};

const Anchor = (props: LinkAsAnchorType & LinkCustomSharedProps) => {
  const { children, startIcon, endIcon, className, colorVariant = COLOR_VARIANT.DEFAULT, uppercase = false, ...restProps } = props;

  return <a className={linkCombinedClass(colorVariant, uppercase)} {...restProps}>{startIcon && startIcon}{children}{endIcon && endIcon}</a>;
};

const RouterLink = (props: LinkAsReactRouterLink & LinkCustomSharedProps) => {
  const { children, startIcon, endIcon, className, colorVariant = COLOR_VARIANT.DEFAULT, uppercase = false, ...restProps } = props;

  return <Link className={linkCombinedClass(colorVariant, uppercase)} {...restProps}>{startIcon && startIcon} {children} {endIcon && endIcon}</Link>;
};

export { Button, Anchor, RouterLink };
