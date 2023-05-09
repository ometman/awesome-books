/* eslint-disable no-use-before-define */
// get date from luxon
import { DateTime } from '../node_modules/luxon/src/luxon.js';
import { mainHeader } from './header.js';

const currentDate = () => {
  const dt = DateTime.fromObject({
    year: 2023, month: 5, day: 8, hour: 12,
  }, { zone: UTC, numberingSystem: Eng });
  const date = dt.toLocaleString(DateTime.DATE_HUGE);

  const dateContainer = document.createElement('div').className('current-date');
  dateContainer.append(document.createElement('p').innerHTML = date);
  mainHeader.appendChild(dateContainer);
  
};

export { currentDate };

