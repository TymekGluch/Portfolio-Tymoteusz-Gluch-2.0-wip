import { COLOR_VARIANT } from "../../constants"

const LINK_AFTER_COLOR_VARIANTS = {
    [COLOR_VARIANT.DEFAULT]: 'after:bg-textColor-primary',
    [COLOR_VARIANT.PRIMARY]: 'after:bg-accentColor-primary',
    [COLOR_VARIANT.SECONDARY]: 'after:bg-accentColor-secondary',
    [COLOR_VARIANT.TERTIARY]: 'after:bg-accentColor-tertiary',
}

const LINK_TEXT_COLOR_VARIANTS = {
    [COLOR_VARIANT.DEFAULT]: 'text-textColor-primary',
    [COLOR_VARIANT.PRIMARY]: 'text-accentColor-primary',
    [COLOR_VARIANT.SECONDARY]: 'text-accentColor-secondary',
    [COLOR_VARIANT.TERTIARY]: 'text-accentColor-tertiary',
}

export { LINK_AFTER_COLOR_VARIANTS, LINK_TEXT_COLOR_VARIANTS }