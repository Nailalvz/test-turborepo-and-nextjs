"use client";

import { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// Temporary
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 02:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adispiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 02:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adispiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 02:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adispiscing elit.",
  },
];

const EventCalendar = () => {
    const [value, setValue] = useState<Value | null>(null);

  useEffect(() => {
    setValue(new Date());
  }, []);

  if (!value) {
    return null; // O un spinner de carga
  }


  return (
    <div className="ui-bg-white ui-p-4 ui-rounded-md">
      <Calendar onChange={setValue} value={value} />
      <div className="ui-flex ui-items-center ui-justify-between">
        <h2 className="ui-text-xl ui-font-semibold ui-my-4">Events</h2>
        <img src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="ui-flex ui-flex-col ui-gap-4">
        {events.map((event) => (
          <div className="ui-p-5 ui-rounded-md ui-border-gray-200 ui-border-t-4 odd:ui-border-t-lamaSky even:ui-border-t-lamaPurple" key={event.id}>
            <div className="ui-flex ui-items-center ui-justify-between">
              <h3 className="ui-font-semibold ui-text-gray-600">{event.title}</h3>
              <span className="ui-text-gray-300 ui-text-xs">{event.time}</span>
            </div>
            <p className="ui-mt-2 ui-text-gray-400 ui-text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
