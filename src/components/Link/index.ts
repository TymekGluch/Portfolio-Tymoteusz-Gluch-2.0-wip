import { Anchor, Button, RouterLink } from "./Link"
import { LINK_VARIANT } from './Link.constants'

type LinkType = {
    button: typeof Button;
    anchor: typeof Anchor;
    routerLink: typeof RouterLink;
}

const Link: LinkType = {
    button: Button,
    anchor: Anchor,
    routerLink: RouterLink
}

export { Link, LINK_VARIANT }