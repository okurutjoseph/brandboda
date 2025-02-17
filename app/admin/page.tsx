'use client';
import { FC, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AdminDashboard = () => {
  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-6">Welcome to Admin Dashboard</h2>
      <p>Select a section from the sidebar to manage your content.</p>
    </div>
  );
};

export default AdminDashboard;
