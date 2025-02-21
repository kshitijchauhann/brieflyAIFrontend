import { useState } from 'react';
import { Upload, Search, Clock, BarChart, FileText, Settings } from 'lucide-react';
import Navigation from '../components/Navigation';
import type { Transcription } from '../types';

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState('');
  const [transcriptions] = useState<Transcription[]>([
    {
      id: '1',
      title: 'Q1 Review Meeting',
      content: 'Discussion of quarterly performance and key metrics...',
      duration: 1800,
      createdAt: '2024-03-15T10:00:00Z',
      status: 'completed'
    },
    {
      id: '2',
      title: 'Product Strategy Session',
      content: 'Analysis of market trends and product roadmap...',
      duration: 3600,
      createdAt: '2024-03-14T15:30:00Z',
      status: 'completed'
    }
  ]);

  const stats = [
    { label: 'Total Hours', value: '24.5', icon: Clock },
    { label: 'Transcriptions', value: '156', icon: FileText },
    { label: 'Accuracy Rate', value: '99.2%', icon: BarChart },
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navigation />
      
      <main className="pt-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-800">Dashboard</h1>
          <p className="mt-2 text-neutral-500">Manage your transcriptions and analytics</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-soft"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-neutral-500">{stat.label}</p>
                  <p className="text-2xl font-semibold text-neutral-800 mt-1">{stat.value}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <div className="p-6 bg-white rounded-2xl shadow-soft">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-neutral-800">Upload Audio</h3>
              <Upload className="h-5 w-5 text-primary" />
            </div>
            <button className="w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Select File
            </button>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search transcriptions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white border border-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
              />
            </div>
            <button className="p-2 text-neutral-600 hover:text-primary transition-colors">
              <Settings className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Transcriptions Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {transcriptions.map((transcription) => (
            <div
              key={transcription.id}
              className="bg-white rounded-2xl shadow-soft hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-medium text-neutral-800">{transcription.title}</h3>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-full">
                    {transcription.status}
                  </span>
                </div>
                <p className="text-sm text-neutral-500 mb-4 line-clamp-2">
                  {transcription.content}
                </p>
                <div className="flex items-center justify-between text-xs text-neutral-400">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{Math.round(transcription.duration / 60)} mins</span>
                  </div>
                  <time dateTime={transcription.createdAt}>
                    {new Date(transcription.createdAt).toLocaleDateString()}
                  </time>
                </div>
              </div>
              <div className="px-6 py-4 border-t border-neutral-100">
                <button className="text-primary hover:text-primary/80 text-sm font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}