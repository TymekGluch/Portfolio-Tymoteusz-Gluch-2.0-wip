import { ValueOf } from "../../types/utiles";
import { SECTION_COLOR_VARIANT, SECTION_SHADOW_SIZE } from "./Section.constants";

const getColorFromSectionColorVariant = (colorVariant: ValueOf<typeof SECTION_COLOR_VARIANT>) => {
    switch (colorVariant) {
        case SECTION_COLOR_VARIANT.DEFAULT: 
            return 'textColor-primary';
        case SECTION_COLOR_VARIANT.PRIMARY:
            return 'accentColor-primary';
        case SECTION_COLOR_VARIANT.SECONDARY:
            return 'accentColor-secondary';
        case SECTION_COLOR_VARIANT.TERTIARY:
            return 'accentColor-tertiary';
    };
}

const getShadowColorFromSectionColorVariant = (colorVariant: ValueOf<typeof SECTION_COLOR_VARIANT>) => {
    switch (colorVariant) {
        case SECTION_COLOR_VARIANT.DEFAULT: 
            return '';
        case SECTION_COLOR_VARIANT.PRIMARY:
            return 'variant-2';
        case SECTION_COLOR_VARIANT.SECONDARY:
            return 'variant-3';
        case SECTION_COLOR_VARIANT.TERTIARY:
            return 'variant-4';
    };
}

const sectionBagroundColor = (colorVariant: ValueOf<typeof SECTION_COLOR_VARIANT>): string => {
    return `bg-${getColorFromSectionColorVariant(colorVariant)}`;
}

const sectionTextColor = (colorVariant: ValueOf<typeof SECTION_COLOR_VARIANT>): string => {
    return `text-${getColorFromSectionColorVariant(colorVariant)}`;
}

const sectionShadow = (colorVariant: ValueOf<typeof SECTION_COLOR_VARIANT>, size: ValueOf<typeof SECTION_SHADOW_SIZE>, isInner: boolean,): string => {
    return `shadow${colorVariant !== SECTION_COLOR_VARIANT.DEFAULT ? '-' : ''}${colorVariant === SECTION_COLOR_VARIANT.DEFAULT ? '' : getShadowColorFromSectionColorVariant(colorVariant)}-${size}${isInner ? '-inner' : ''}`;
}

export { sectionBagroundColor, sectionTextColor, sectionShadow }