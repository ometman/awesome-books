/* eslint-disable no-use-before-define */
// get date from luxon
import { DateTime } from './luxon.js';
import { mainHeader } from './header.js';

export const currentDate = () => {
  const dt = DateTime.now();
  const currentDateTime = dt.toLocaleString(DateTime.DATE_HUGE);

  const dateContainer = document.createElement('div');
  dateContainer.className = 'current-date';
  dateContainer.append(document.createElement('p').innerHTML = currentDateTime);
  mainHeader.appendChild(dateContainer);
};

export { currentDate as default };
