import React, { useState } from 'react';
import Layout from '../../components/layout/Layout';
import { Reorder } from 'framer-motion';
import { Plus, X } from 'lucide-react';
import type { Note } from '../../types';

const NotesWidgetPage: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: '1',
      content: 'Review chapter 5 for quiz',
      color: 'bg-yellow-100',
      userId: '',
      title: '',
      created: '',
      lastModified: '',
      category: ''
    },
    {
      id: '2',
      content: 'Complete math homework by Friday',
      color: 'bg-blue-100',
      userId: '',
      title: '',
      created: '',
      lastModified: '',
      category: ''
    }
  ]);

  const colors = [
    'bg-yellow-100',
    'bg-blue-100',
    'bg-green-100',
    'bg-pink-100',
    'bg-purple-100'
  ];

  const addNote = () => {
    const newNote: Note = {
      id: Math.random().toString(),
      content: '',
      color: colors[Math.floor(Math.random() * colors.length)],
      userId: '',
      title: '',
      created: '',
      lastModified: '',
      category: ''
    };
    setNotes([...notes, newNote]);
  };

  const deleteNote = (id: string) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  return (
    <Layout>
      <div className="p-6  pt-16">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Sticky Notes</h1>
          <button
            onClick={addNote}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-5 h-5 mr-2" />
            Add Note
          </button>
        </div>

        <Reorder.Group
          axis="y"
          values={notes}
          onReorder={setNotes}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {notes.map(note => (
            <Reorder.Item
              key={note.id}
              value={note}
              as="div"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className={`${note.color} p-6 rounded-lg shadow-lg relative`}
              whileHover={{ scale: 1.02 }}
            >
              <button
                onClick={() => deleteNote(note.id)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              >
                <X className="w-4 h-4" />
              </button>
              <textarea
                value={note.content}
                onChange={(e) => {
                  setNotes(notes.map(n =>
                    n.id === note.id ? { ...n, content: e.target.value } : n
                  ));
                }}
                placeholder="Write your note here..."
                className="w-full h-32 bg-transparent border-none resize-none focus:ring-0"
              />
            </Reorder.Item>
          ))}
        </Reorder.Group>
      </div>
    </Layout>
  );
};

export default NotesWidgetPage;