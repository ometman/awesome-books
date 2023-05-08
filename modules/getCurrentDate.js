// get current date from luxon api
import { DateTime } from '../node_modules/luxon/src/luxon.js';
import { mainHeader } from "./header.js";

export const currentDate = () => {
  let dt = DateTime.fromObject({ year: 2023, month: 5, day: 8, hour: 24 }, { zone: 'UTC', numberingSystem: 'Eng' });
  const  date = dt.toLocaleString(DateTime.DATETIME_HUGE);
  const dateContainer = document.createElement('div');
  dateContainer.className = 'current-date';
  dateContainer.append(document.createElement('p').innerText = date);
  mainHeader.appendChild(dateContainer);
}