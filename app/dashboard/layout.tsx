'use client';
import { FC } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import Link from 'next/link';
import { FaProjectDiagram, FaComments, FaCertificate, FaSignOutAlt } from 'react-icons/fa';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Check if we're not already on the login page
    if (pathname !== '/dashboard/login') {
      const isAuthenticated = localStorage.getItem('dashboardAuthenticated');
      if (!isAuthenticated) {
        router.push('/dashboard/login');
      }
    }
  }, [pathname, router]);

  // If we're on the login page, just render the login component
  if (pathname === '/dashboard/login') {
    return children;
  }

  // For all other dashboard pages, show the layout with navigation
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-green-600 text-white min-h-screen flex flex-col">
        {/* Header */}
        <div className="p-6 border-b border-green-500">
          <h1 className="text-xl font-bold">Dashboard</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4">
          <Link
            href="/dashboard/projects"
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              pathname === '/dashboard/projects'
                ? 'bg-green-700 text-white'
                : 'text-white/90 hover:bg-green-700'
            }`}
          >
            <FaProjectDiagram size={20} />
            <span>Projects</span>
          </Link>

          <Link
            href="/dashboard/testimonials"
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              pathname === '/dashboard/testimonials'
                ? 'bg-green-700 text-white'
                : 'text-white/90 hover:bg-green-700'
            }`}
          >
            <FaComments size={20} />
            <span>Testimonials</span>
          </Link>

          <Link
            href="/dashboard/certificates"
            className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
              pathname === '/dashboard/certificates'
                ? 'bg-green-700 text-white'
                : 'text-white/90 hover:bg-green-700'
            }`}
          >
            <FaCertificate size={20} />
            <span>Certificates</span>
          </Link>
        </nav>

        {/* Logout Button */}
        <div className="p-4 border-t border-green-500">
          <button
            onClick={() => {
              localStorage.removeItem('dashboardAuthenticated');
              router.push('/dashboard/login');
            }}
            className="flex items-center space-x-3 p-3 rounded-lg w-full text-white/90 hover:bg-green-700 transition-colors"
          >
            <FaSignOutAlt size={20} />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100">
        <div className="p-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout; 