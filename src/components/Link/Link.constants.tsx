import { COLOR_VARIANT } from "../../constants"

const LINK_AFTER_COLOR_VARIANTS = {
    [COLOR_VARIANT.DEFAULT]: 'after:bg-textColor-primary',
    [COLOR_VARIANT.PRIMARY]: 'after:bg-accentColor-primary',
    [COLOR_VARIANT.SECONDARY]: 'after:bg-accentColor-secondary',
    [COLOR_VARIANT.TERTIARY]: 'after:bg-accentColor-tertiary',
}

const LINK_BEFORE_COLOR_VARIANTS = {
    [COLOR_VARIANT.DEFAULT]: 'before:bg-textColor-primary',
    [COLOR_VARIANT.PRIMARY]: 'before:bg-accentColor-primary',
    [COLOR_VARIANT.SECONDARY]: 'before:bg-accentColor-secondary',
    [COLOR_VARIANT.TERTIARY]: 'before:bg-accentColor-tertiary',
}

const LINK_TEXT_COLOR_VARIANTS = {
    [COLOR_VARIANT.DEFAULT]: 'text-textColor-primary',
    [COLOR_VARIANT.PRIMARY]: 'text-accentColor-primary',
    [COLOR_VARIANT.SECONDARY]: 'text-accentColor-secondary',
    [COLOR_VARIANT.TERTIARY]: 'text-accentColor-tertiary',
}

const LINK_VARIANT = {
    DEFAULT: 'default',
    LIST_ITEM: 'listItem'
} as const 

const PSEUDO_CLASS_VARIANT = {
    [LINK_VARIANT.DEFAULT]: `before:content-none after:content-[''] after:hidden hover:after:block focus:after:block after:w-2 after:h-3/5 after:absolute after:right-2 after:animate-[pulse_0.75s_ease-in-out_infinite]`,
    [LINK_VARIANT.LIST_ITEM]: `after:content-none content-[''] before:w-2 before:h-2 before:rounded-full hover:before:animate-[pulse_0.75s_ease-in-out_infinite] focus:before:animate-[pulse_0.75s_ease-in-out_infinite]`
  }

export { LINK_AFTER_COLOR_VARIANTS, LINK_TEXT_COLOR_VARIANTS, LINK_BEFORE_COLOR_VARIANTS, PSEUDO_CLASS_VARIANT, LINK_VARIANT }