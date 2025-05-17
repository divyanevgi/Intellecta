import React from 'react';
import Layout from '../../components/layout/Layout';

const CalendarPage: React.FC = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">Calendar</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p className="text-gray-600">Calendar functionality will be implemented here.</p>
        </div>
      </div>
    </Layout>
  );
};

export default CalendarPage;