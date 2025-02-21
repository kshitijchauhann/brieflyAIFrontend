import { FileText, Home, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white border-b border-neutral-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Logo size="medium" />
          </div>
          
          <div className="flex items-center space-x-4">
            <Link
              to="/dashboard"
              className="p-2 text-neutral-600 hover:text-primary transition-colors"
              title="Dashboard"
            >
              <Home className="h-5 w-5" />
            </Link>
            <Link
              to="/transcriptions"
              className="p-2 text-neutral-600 hover:text-primary transition-colors"
              title="Transcriptions"
            >
              <FileText className="h-5 w-5" />
            </Link>
            <Link
              to="/settings"
              className="p-2 text-neutral-600 hover:text-primary transition-colors"
              title="Settings"
            >
              <Settings className="h-5 w-5" />
            </Link>
            <button
              onClick={() => {/* Add logout logic */}}
              className="p-2 text-neutral-600 hover:text-primary transition-colors"
              title="Log out"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}