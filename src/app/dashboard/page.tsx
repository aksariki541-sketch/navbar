'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Note from '@/components/Note';
import Popup from '@/components/Popup';
import Navbar from '@/components/Navbar';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

interface NoteType {
  _id: string;
  note: string;
}

export default function ClientNotes() {
  const router = useRouter();
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [openPopup, setOpenPopup] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [selectedNote, setSelectedNote] = useState<NoteType | null>(null);

  const { data: session, isPending, error } = authClient.useSession();

  // 🚀 Redirect if not authenticated
  useEffect(() => {
    if (!isPending && !session) {
      router.push('/login'); // ✅ client-side redirect
    }
  }, [isPending, session, router]);

  // Fetch user notes
  useEffect(() => {
    if (!session?.user?.email) return;

    const fetchNotes = async () => {
      setLoading(true);
      try {
        const res = await axios.post('/api/get_note', { email: session.user.email });
        setNotes(res.data);
      } catch (err) {
        console.error('❌ Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [session?.user?.email, updateUI]);

  // Handle session loading
  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen text-gray-400">
        Loading session...
      </div>
    );
  }

  // Handle session error
  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        Error loading session: {String(error)}
      </div>
    );
  }

  // If user not logged in, don’t render anything until redirect finishes
  if (!session) {
    return null;
  }

  // ✅ Main UI
  return (
    <>

      <div className="appContainer mt-20 mx-2">
        {loading ? (
          <p className="text-gray-500 mt-4">Loading projects...</p>
        ) : notes.length === 0 ? (
          <p className="text-gray-400 mt-4">No projects yet. Click + to add one.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            {notes.map((note) => (
              <div 
                key={note._id} 
                className="relative group"
                onClick={() => {
                    setSelectedNote(note);
                    setEditMode(true);
                    setOpenPopup(true);
                  }}
              >
                <Note note={note.note} />
                <button
                  onClick={() => {
                    setSelectedNote(note);
                    setEditMode(true);
                    setOpenPopup(true);
                  }}
                  className="flex bg-black rounded-full absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-[#323949] text-gray-400 rounded px-2 py-1 text-sm hover:bg-gray-600 transition"
                >
                  <MdEdit />
                  <MdDelete />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating Add Button */}
      <button
        aria-label="Add new project"
        className="bg-[#323949] rounded-full flex items-center justify-center w-[50px] h-[50px] text-[32px] font-light cursor-pointer text-gray-400 fixed z-10 right-4 bottom-4 hover:bg-gray-600 transition"
        onClick={() => {
          setSelectedNote(null);
          setEditMode(false);
          setOpenPopup(true);
        }}
      >
        +
      </button>

      {openPopup && (
        <Popup
          setOpenPopup={setOpenPopup}
          editMode={editMode}
          setupdateUI={setUpdateUI}
          existingNote={selectedNote || undefined}
        />
      )}
    </>
  );
}
