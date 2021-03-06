import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 25 24" {...props}>
      <g fill="none" fill-rule="evenodd">
        <g fill="#000">
          <path
            d="M7.24.876C7.182.535 6.9.277 6.555.252 6.21.227 5.892.441 5.786.77l-2.09 6.48H1c-.414 0-.75.336-.75.75s.336.75.75.75h3.242c.326 0 .614-.21.714-.52L6.27 4.16l1.84 10.965c.058.346.347.605.697.625.35.02.667-.206.764-.542l2.429-8.48 1.28 4.48c.082.288.329.5.627.537.298.038.59-.106.741-.365l1.54-2.629h1.166c.327 1.154 1.388 2 2.647 2 1.519 0 2.75-1.231 2.75-2.75S21.519 5.25 20 5.25c-1.259 0-2.32.846-2.646 2h-1.596c-.267 0-.513.141-.647.37l-.872 1.488-1.518-5.314c-.092-.322-.386-.544-.72-.544-.335 0-.63.222-.722.543L9.04 11.608 7.24.876zM18.75 8c0-.69.56-1.25 1.25-1.25s1.25.56 1.25 1.25-.56 1.25-1.25 1.25-1.25-.56-1.25-1.25z"
            transform="translate(1 4)"
          />
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
