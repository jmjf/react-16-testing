import { action } from "@storybook/addon-actions";

import DateSlider from "./DateSlider";

import "bootstrap/dist/css/bootstrap.css";

export default {
  component: DateSlider,
  title: "DateSlider",
};

export const Default = () => (
  <DateSlider earth_date="2015-06-03" onDateChanged={action("onDateChange")} />
);

export const DifferentDate = () => (
  <DateSlider earth_date="2011-12-31" onDateChanged={action("onDateChange")} />
);
