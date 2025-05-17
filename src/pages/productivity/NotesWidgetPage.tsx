import React from 'react';
import Layout from '../../components/layout/Layout';

const NotesWidgetPage: React.FC = () => {
  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Sticky Notes</h1>
        <div className="bg-white rounded-lg shadow p-6">
          <p>Sticky Notes feature coming soon...</p>
        </div>
      </div>
    </Layout>
  );
};

export default NotesWidgetPage;