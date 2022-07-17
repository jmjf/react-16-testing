import { PropsWithChildren, BaseSyntheticEvent } from "react";

import { MomentInput } from "moment";

import {
  firstDay,
  lastDay,
  dateToSol,
  solToDate,
  daysBetween,
} from "../services/sols";

import "./dateslider.css";

interface DateSliderProps extends PropsWithChildren {
  earth_date: MomentInput;
  onDateChanged: (date: string) => void;
}

const DateSlider = ({ earth_date, onDateChanged }: DateSliderProps) => {
  const days = daysBetween(firstDay, lastDay);
  const sol = dateToSol(earth_date);

  function onSlide(event: BaseSyntheticEvent) {
    onDateChanged(solToDate(event.target.value));
  }

  return (
    <div className="Dateslider">
      <div className="row">
        <div
          className="col-12"
          style={{
            textAlign: "center",
          }}
        >
          <label htmlFor="date">Earth Day</label>
          <p className="Dateslider-date" data-testid="date-label">
            {earth_date?.toString()}
          </p>
        </div>
      </div>
      <div className="row">
        <div
          className="col-3"
          style={{
            textAlign: "right",
          }}
        >
          <small>{firstDay}</small>
        </div>
        <div className="col-6 form-group">
          <input
            data-testid="date-slider"
            type="range"
            id="date"
            className="form-control"
            min="1"
            max={days}
            value={sol}
            onChange={onSlide}
          ></input>
        </div>
        <div className="col-3">
          <small>{lastDay}</small>
        </div>
      </div>
    </div>
  );
};

export default DateSlider;
