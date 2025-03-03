'use client';
import { FC } from 'react';
import { redirect } from 'next/navigation';

const Dashboard: FC = () => {
  // Add server-side redirect
  if (typeof window === 'undefined') {
    const isAuthenticated = localStorage.getItem('dashboardAuthenticated');
    if (!isAuthenticated) {
      redirect('/dashboard/login');
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-semibold mb-6">Welcome to Dashboard</h2>
      <p className="text-gray-600">Select an option from the sidebar to manage your content.</p>
    </div>
  );
};

export default Dashboard;
