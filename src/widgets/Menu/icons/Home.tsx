import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <g fill="none" fill-rule="evenodd">
        <g fill="#000">
          <path
            d="M8.415.395c.381-.117.789-.117 1.17 0l2.986.918c1.557.479 3.037 1.182 4.39 2.089 1.054.705.555 2.348-.713 2.348H1.752c-1.268 0-1.767-1.643-.714-2.348 1.354-.907 2.834-1.61 4.391-2.09L8.415.396zm.73 1.434c-.095-.029-.195-.029-.29 0l-2.985.918c-1.18.363-2.312.868-3.37 1.503h13c-1.058-.635-2.19-1.14-3.37-1.503l-2.986-.918z"
            transform="translate(3 2)"
          />
          <path
            fill-rule="nonzero"
            d="M1.25 19c0-.414.336-.75.75-.75h14c.414 0 .75.336.75.75s-.336.75-.75.75H2c-.414 0-.75-.336-.75-.75zM3.25 15c0 .414.336.75.75.75s.75-.336.75-.75V9c0-.414-.336-.75-.75-.75s-.75.336-.75.75v6zM9 15.75c-.414 0-.75-.336-.75-.75V9c0-.414.336-.75.75-.75s.75.336.75.75v6c0 .414-.336.75-.75.75zM13.25 15c0 .414.336.75.75.75s.75-.336.75-.75V9c0-.414-.336-.75-.75-.75s-.75.336-.75.75v6z"
            transform="translate(3 2)"
          />
        </g>
      </g>
    </Svg>

    // <Svg viewBox="0 0 24 24" {...props}>
    //   <path d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" />
    // </Svg>
  );
};

export default Icon;
