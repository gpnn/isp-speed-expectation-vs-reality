import React from "react";
import Charts from "./Charts";

export default function Content() {
  return (
    <>
      <Charts type="hours" />
      <Charts type="weekdays" />
      <Charts type="days" />
      <Charts type="weeks" />
      <Charts type="months" />
    </>
  );
}
