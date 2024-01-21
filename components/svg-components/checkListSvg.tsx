import * as React from "react"
import Svg, { Path, SvgProps } from "react-native-svg"


const CheckListSvg = (props : SvgProps) => (
  <Svg
  width={props.width}
  height={props.height}
  fill="none"
  scale={props.scale}
  >
    <Path
      scale={props.scale}
      fill={props.color}
      d="m3.68 12.008 3.919-3.92a.63.63 0 0 1 .891.015.638.638 0 0 1 .174.445.61.61 0 0 1-.18.44l-4.242 4.247a.754.754 0 0 1-.548.234.75.75 0 0 1-.548-.234L.933 11.02a.58.58 0 0 1-.176-.437.613.613 0 0 1 .185-.438.58.58 0 0 1 .44-.176.624.624 0 0 1 .435.176l1.862 1.862Zm0-7.616L7.598.473a.63.63 0 0 1 .891.015.638.638 0 0 1 .174.445.61.61 0 0 1-.18.44L4.241 5.619a.754.754 0 0 1-.548.234.75.75 0 0 1-.548-.234L.933 3.406a.58.58 0 0 1-.176-.438.613.613 0 0 1 .185-.437.58.58 0 0 1 .44-.176.624.624 0 0 1 .435.176L3.68 4.392Zm7.958 7.544a.606.606 0 0 1-.448-.182.613.613 0 0 1-.18-.45.612.612 0 0 1 .628-.625h7.243c.178 0 .328.061.448.182s.18.271.18.45-.06.328-.18.447a.612.612 0 0 1-.448.178h-7.243Zm0-7.616a.606.606 0 0 1-.448-.181.613.613 0 0 1-.18-.45.612.612 0 0 1 .628-.625h7.243c.178 0 .328.06.448.182.12.12.18.27.18.45a.612.612 0 0 1-.628.625h-7.243Z"
    />
  </Svg>
)
export default CheckListSvg
