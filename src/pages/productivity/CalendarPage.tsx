import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { format, startOfWeek, addDays, isSameDay, parseISO } from 'date-fns';
import { Plus, ChevronLeft, ChevronRight, Calendar, Clock, Tag, X } from 'lucide-react';
import useLocalStorage from '../../hooks/UseLocalStorage';

interface Event {
  id: string;
  title: string;
  date: Date;
  type: 'study' | 'task' | 'exam';
  duration: number; // in minutes
}

const CalendarPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState<Omit<Event, 'id' | 'date'> & { date: string }>({
    title: '',
    date: format(new Date(), 'yyyy-MM-dd\'T\'HH:mm'),
    type: 'study',
    duration: 60
  });
  
  const [events, setEvents] = useLocalStorage<Event[]>('calendar-events', [
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
    },
    {
      id: '3',
      title: 'Complete Programming Assignment',
      date: addDays(new Date(), 1),
      type: 'task',
      duration: 90
    },
    {
      id: '4',
      title: 'Biology Study Group',
      date: addDays(new Date(), 3),
      type: 'study',
      duration: 120
    },
    {
      id: '5',
      title: 'English Literature Essay',
      date: addDays(new Date(), 4),
      type: 'task',
      duration: 150
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

  const handleAddEvent = () => {
    const event: Event = {
      id: Date.now().toString(),
      title: newEvent.title,
      date: parseISO(newEvent.date),
      type: newEvent.type,
      duration: newEvent.duration
    };
    
    setEvents([...events, event]);
    setIsModalOpen(false);
    setNewEvent({
      title: '',
      date: format(new Date(), 'yyyy-MM-dd\'T\'HH:mm'),
      type: 'study',
      duration: 60
    });
  };

  return (
    <Layout>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Calendar</h1>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
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

      {/* Add Event Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md animate-fade-in">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Add New Event</h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Title
                </label>
                <input
                  type="text"
                  value={newEvent.title}
                  onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter event title"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date & Time
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Calendar className="w-5 h-5 text-gray-400" />
                  </span>
                  <input
                    type="datetime-local"
                    value={newEvent.date}
                    onChange={(e) => setNewEvent({...newEvent, date: e.target.value})}
                    className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Event Type
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Tag className="w-5 h-5 text-gray-400" />
                  </span>
                  <select
                    value={newEvent.type}
                    onChange={(e) => setNewEvent({...newEvent, type: e.target.value as Event['type']})}
                    className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 bg-white"
                  >
                    <option value="study">Study</option>
                    <option value="task">Task</option>
                    <option value="exam">Exam</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Duration (minutes)
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Clock className="w-5 h-5 text-gray-400" />
                  </span>
                  <input
                    type="number"
                    min="15"
                    step="15"
                    value={newEvent.duration}
                    onChange={(e) => setNewEvent({...newEvent, duration: parseInt(e.target.value)})}
                    className="w-full pl-10 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddEvent}
                  disabled={!newEvent.title}
                  className={`px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors ${!newEvent.title ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  Add Event
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default CalendarPage;