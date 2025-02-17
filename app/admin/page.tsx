import { FC } from 'react';
import Link from 'next/link';

const AdminDashboard: FC = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6">
        <h1 className="text-xl font-bold mb-8">Admin Dashboard</h1>
        <nav className="space-y-4">
          <Link 
            href="/admin/projects" 
            className="block py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors"
          >
            Projects
          </Link>
          <Link 
            href="/admin/testimonials" 
            className="block py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors"
          >
            Testimonials
          </Link>
          <Link 
            href="/admin/certificates" 
            className="block py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors"
          >
            Certificates
          </Link>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-6">Welcome to Admin Dashboard</h2>
        <p>Select a section from the sidebar to manage your content.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
