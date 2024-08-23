import { Typography } from "@mui/material";
import React from "react";

export default function TextLine(props) {
  return (
    <Typography
      variant={props.variant}
      component={props.component}
      sx={props.sx}
    >
      {props.text}
    </Typography>
  );
}
