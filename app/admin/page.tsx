'use client';
import { FC, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AdminDashboard: FC = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    if (!isAuthenticated) {
      router.push('/admin/login');
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuthenticated');
    router.push('/admin/login');
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 text-white p-6 flex-shrink-0">
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
          
          <button 
            onClick={handleLogout}
            className="w-full text-left py-2 px-4 hover:bg-gray-700 rounded-lg transition-colors text-red-400"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-100">
        <div className="p-8">
          <h2 className="text-2xl font-semibold mb-6">Welcome to Admin Dashboard</h2>
          <p>Select a section from the sidebar to manage your content.</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
