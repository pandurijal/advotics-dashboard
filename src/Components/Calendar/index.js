import React, { useState, useEffect, useCallback } from 'react';
import moment from 'moment';
import ReactCalendar from 'rc-calendar/lib/RangeCalendar';

const dateRange = {
  today: [moment(), moment()],
  yesterday: [moment().subtract(1, 'd'), moment().subtract(1, 'd')],
  last7Days: [moment().subtract(7, 'd'), moment()],
  last30Days: [moment().subtract(30, 'd'), moment()],
  thisMonth: [moment().startOf('month'), moment()]
};

const optRange = [
  { text: 'Today', range: dateRange.today },
  {
    text: 'Yesterday',
    range: dateRange.yesterday
  },
  {
    text: 'Last 7 days',
    range: dateRange.last7Days
  },
  { text: 'Last 30 days', range: dateRange.last30Days },
  { text: 'This Month', range: dateRange.thisMonth },
  {
    text: 'Custom',
    range: [
      !dateRange.today &&
        !dateRange.yesterday &&
        !dateRange.last7Days &&
        !dateRange.last30Days &&
        !dateRange.thisMonth
    ]
  }
];

const Calendar = () => {
  const [show, setShow] = useState(false);
  const [selectedDate, setSelectedDate] = useState(dateRange.today);
  console.log({ selectedDate });

  return (
    <>
      <div className="btn-calendar" onClick={() => setShow(!show)}>
        <p>
          {moment(selectedDate[0]).format('LL')} -{' '}
          {moment(selectedDate[1]).format('LL')}
        </p>
      </div>
      {show && (
        <div className="calendar show">
          <div className="calendar-sidebar">
            {optRange.map(item => (
              <div
                key={item.text}
                onClick={() => setSelectedDate(item.range)}
                className={`calendar-sidebar-item ${
                  selectedDate === item.range ? 'active' : ''
                }`}
              >
                <p>{item.text}</p>
              </div>
            ))}
          </div>
          <ReactCalendar
            selectedValue={selectedDate}
            disabledDate={current => {
              return current.isAfter(dateRange.today);
            }}
            onSelect={moment => {
              return setSelectedDate(moment);
            }}
          />
        </div>
      )}
    </>
  );
};

export { Calendar };
