import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { format, startOfWeek, addDays, isSameDay } from 'date-fns';
import { Plus, ChevronLeft, ChevronRight } from 'lucide-react';

interface Event {
  id: string;
  title: string;
  date: Date;
  type: 'study' | 'task' | 'exam';
  duration: number; // in minutes
}

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events] = useState<Event[]>([
    {
      id: '1',
      title: 'Study Mathematics',
      date: new Date(),
      type: 'study',
      duration: 120
    },
    {
      id: '2',
      title: 'Physics Exam',
      date: addDays(new Date(), 2),
      type: 'exam',
      duration: 180
    }
  ]);

  const getWeekDays = (date: Date) => {
    const start = startOfWeek(date);
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  };

  const weekDays = getWeekDays(selectedDate);

  const getEventType = (type: Event['type']) => {
    switch (type) {
      case 'study':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'task':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'exam':
        return 'bg-red-100 text-red-800 border-red-200';
    }
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            <Plus className="w-5 h-5 mr-2" />
            Add Event
          </button>
        </div>

        <div className="bg-white rounded-lg shadow">
          {/* Calendar Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <button 
              onClick={() => setSelectedDate(addDays(selectedDate, -7))}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold">
              {format(selectedDate, 'MMMM yyyy')}
            </h2>
            <button 
              onClick={() => setSelectedDate(addDays(selectedDate, 7))}
              className="p-2 hover:bg-gray-100 rounded-full"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-px bg-gray-200">
            {/* Day Headers */}
            {weekDays.map((day) => (
              <div key={day.toString()} className="bg-gray-50 p-4">
                <span className="text-sm font-medium text-gray-900">
                  {format(day, 'EEE')}
                </span>
                <p className="text-2xl font-bold text-gray-900">
                  {format(day, 'd')}
                </p>
              </div>
            ))}

            {/* Time Slots */}
            {weekDays.map((day) => (
              <div 
                key={day.toString()} 
                className="bg-white min-h-[200px] p-4"
              >
                {events
                  .filter((event) => isSameDay(event.date, day))
                  .map((event) => (
                    <div
                      key={event.id}
                      className={`p-2 mb-2 rounded border ${getEventType(event.type)}`}
                    >
                      <p className="font-medium">{event.title}</p>
                      <p className="text-sm">
                        {format(event.date, 'h:mm a')} · {event.duration}min
                      </p>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage;