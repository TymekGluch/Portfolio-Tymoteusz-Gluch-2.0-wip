import { ValueOf } from "../../types/utiles";

const ITEM_VISIBILITY_DEVICE = {
  DEFAULT: "default",
  MOBILE: "mobile",
  DESKTOP: "desktop",
} as const;

type NavigationLinksType = {
  name: string;
  anchor: string;
  deviceVisibility: ValueOf<typeof ITEM_VISIBILITY_DEVICE>;
}[];

const navigationLinks = [
  {
    name: "About me",
    anchor: "#",
  },

  {
    name: "Careere",
    anchor: "#",
  },

  {
    name: "Technologies, I work",
    anchor: "#techonologies-i-use",
    deviceVisibility: "desktop",
  },

  {
    name: "My projects",
    anchor: "#",
  },

  {
    name: "Contact",
    anchor: "#",
  },

  {
    name: "Blog",
    anchor: "#",
  },
] as NavigationLinksType;

const onlyMobileLinks = [...navigationLinks]
  .reverse()
  .filter((_, index) => index <= 1);

export { navigationLinks, onlyMobileLinks, ITEM_VISIBILITY_DEVICE };
