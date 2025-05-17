import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import MDEditor from '@uiw/react-md-editor';
import { Plus, Folder, Search, Tag } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  content: string;
  category: string;
  tags: string[];
  lastModified: Date;
}

const NotesPage: React.FC = () => {
  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Mock notes - in a real app, these would come from an API
  const notes: Note[] = [
    {
      id: '1',
      title: 'Introduction to React',
      content: '# React Basics\n\nReact is a JavaScript library for building user interfaces...',
      category: 'Programming',
      tags: ['react', 'javascript', 'frontend'],
      lastModified: new Date('2024-02-20'),
    },
    {
      id: '2',
      title: 'World War II Timeline',
      content: '# World War II Major Events\n\n## 1939\n- September 1: Germany invades Poland...',
      category: 'History',
      tags: ['history', 'war', 'europe'],
      lastModified: new Date('2024-02-19'),
    },
    {
      id: '3',
      title: 'Photosynthesis Process',
      content: '# Photosynthesis\n\nPhotosynthesis is the process used by plants to...',
      category: 'Biology',
      tags: ['science', 'plants', 'chemistry'],
      lastModified: new Date('2024-02-18'),
    },
  ];

  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="h-[calc(100vh-4rem)] flex">
        {/* Sidebar */}
        <div className="w-80 border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="p-4">
            <button className="w-full flex items-center justify-center px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors">
              <Plus className="w-5 h-5 mr-2" />
              New Note
            </button>

            <div className="mt-4 relative">
              <input
                type="text"
                placeholder="Search notes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
            </div>
          </div>

          <div className="overflow-y-auto h-full pb-20">
            {filteredNotes.map(note => (
              <button
                key={note.id}
                onClick={() => setSelectedNote(note)}
                className={`w-full p-4 text-left border-b border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors ${
                  selectedNote?.id === note.id
                    ? 'bg-primary-50 dark:bg-primary-900/30'
                    : ''
                }`}
              >
                <h3 className="text-sm font-medium text-gray-900 dark:text-white">
                  {note.title}
                </h3>
                <div className="mt-1 flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <Folder className="w-4 h-4 mr-1" />
                  {note.category}
                </div>
                <div className="mt-2 flex flex-wrap gap-1">
                  {note.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs flex items-center"
                    >
                      <Tag className="w-3 h-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 bg-gray-50 dark:bg-gray-900 overflow-y-auto">
          {selectedNote ? (
            <div className="p-8">
              <input
                type="text"
                value={selectedNote.title}
                className="w-full text-2xl font-bold bg-transparent border-0 focus:ring-0 text-gray-900 dark:text-white mb-4"
                readOnly
              />
              <MDEditor
                value={selectedNote.content}
                preview="edit"
                height={500}
              />
            </div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
              Select a note or create a new one
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default NotesPage;