import moment, { MomentInput } from "moment";

export const [firstDay, lastDay] = ["2004-01-05", "2019-09-28"];
export const dateFormat = "YYYY-MM-DD";

export const dateToSol = (date: MomentInput) =>
  moment(date, dateFormat).diff(moment(firstDay, dateFormat), "days") + 1;

export const solToDate = (sol: any | number | bigint) =>
  moment(firstDay, dateFormat)
    .add(sol - 1, "days")
    .format(dateFormat);

export const daysBetween = (startDate: MomentInput, lastDate: MomentInput) =>
  moment(lastDate, dateFormat).diff(moment(startDate, dateFormat), "days") + 1;

export const isActive = (
  rangeStart: MomentInput,
  rangeEnd: MomentInput,
  selected: MomentInput
) => {
  const fromMoment = moment(rangeStart, dateFormat);
  const toMoment = moment(rangeEnd, dateFormat);
  const selectedMoment = moment(selected, dateFormat);
  return selectedMoment >= fromMoment && selectedMoment <= toMoment;
};
