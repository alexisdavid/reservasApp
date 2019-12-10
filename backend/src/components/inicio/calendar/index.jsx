import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import "./main.scss";

const Calendar = () => {
  return (
    <div class="col-md-6">
      <div className="card">
        <div
          style={{ width: "90%", paddingTop: "10px", backgroundColor: "info" }}
        >
          <FullCalendar
            defaultView="dayGridMonth"
            plugins={[dayGridPlugin]}
            events={[
              { title: "event 1", start: "2019-12-12", end: "2019-12-14" },
              {
                title: "event 2",
                start: "2019-12-04T00:00:00",
                end: "2019-12-05T23:00:00"
              }
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
