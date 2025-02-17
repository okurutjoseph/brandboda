'use client';
import { FC, ReactNode, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

interface AdminLayoutProps {
  children: ReactNode;
}

const AdminLayout: FC<AdminLayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem('adminAuthenticated');
    if (!isAuthenticated && pathname !== '/admin/login') {
      router.push('/admin/login');
    }
  }, [router, pathname]);

  if (pathname === '/admin/login') {
    return children;
  }

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
            className={`block py-2 px-4 rounded-lg transition-colors ${
              pathname === '/admin/projects' 
                ? 'bg-gray-700 text-white' 
                : 'hover:bg-gray-700'
            }`}
          >
            Projects
          </Link>
          <Link 
            href="/admin/testimonials" 
            className={`block py-2 px-4 rounded-lg transition-colors ${
              pathname === '/admin/testimonials' 
                ? 'bg-gray-700 text-white' 
                : 'hover:bg-gray-700'
            }`}
          >
            Testimonials
          </Link>
          <Link 
            href="/admin/certificates" 
            className={`block py-2 px-4 rounded-lg transition-colors ${
              pathname === '/admin/certificates' 
                ? 'bg-gray-700 text-white' 
                : 'hover:bg-gray-700'
            }`}
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
        {children}
      </div>
    </div>
  );
};

export default AdminLayout; 