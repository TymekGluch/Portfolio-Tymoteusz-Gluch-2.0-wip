import React from "react";
import { Technologies } from "../components/domain";
import {
  TECHNOLOGIES_HEADING,
  TECHNOLOGIES_VARIANT,
} from "../components/domain/Technologies/Technologies.constants";

const HomePage: React.FC = () => {
  return (
    <>
      <Technologies
        headingTag={TECHNOLOGIES_HEADING.H2}
        variant={TECHNOLOGIES_VARIANT.MOBILE_SECTION}
        id="techonologies-i-use"
      />
    </>
  );
};

export { HomePage };
