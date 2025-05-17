import React from 'react';
import Layout from '../../components/layout/Layout';
import ProgressChart from '../../components/dashboard/ProgressChart';
import RecentActivity from '../../components/dashboard/RecentActivity';
import QuickStats from '../../components/dashboard/QuickStats';
import SuggestedTopics from '../../components/dashboard/SuggestedTopics';

const DashboardPage: React.FC = () => {
  return (
    <Layout>
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Hello, let's start learning</h1>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Track your progress and manage your studies
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <ProgressChart />
          <RecentActivity />
        </div>
        
        <div className="space-y-6">
          <QuickStats />
          <SuggestedTopics />
        </div>
      </div>
    </Layout>
  );
};

export default DashboardPage;