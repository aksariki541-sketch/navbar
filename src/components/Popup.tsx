'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { MdOutlineClose } from 'react-icons/md';
import axios from 'axios';
import { authClient } from '@/lib/auth-client';

interface PropsType {
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  setupdateUI: React.Dispatch<React.SetStateAction<boolean>>;
  editMode: boolean;
  existingNote?: { _id: string; note: string };
}

const Popup = ({ setOpenPopup, editMode, setupdateUI, existingNote }: PropsType) => {
  const { data: session, isPending } = authClient.useSession(); // ✅ use isPending
  const [note, setNote] = useState(existingNote?.note || '');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'visible';
    };
  }, []);

  const saveNewNote = async () => {
    if (!note.trim()) return alert('Please enter a project.');
    if (!session?.user?.email) return alert('Session expired. Please sign in again.');

    setLoading(true);
    try {
      const res = await axios.post(`/api/save_note`, {
        email: session.user.email,
        note,
      });
      setupdateUI((p) => !p);
      setOpenPopup(false);
    } catch (err: any) {
      console.error(err);
      alert('Failed to save project.');
    } finally {
      setLoading(false);
    }
  };

  const saveEditNote = async () => {
    if (!existingNote?._id) return;
    if (!session?.user?.email) return alert('Session expired.');

    setLoading(true);
    try {
      const res = await axios.put(`/api/edit_note`, {
        id: existingNote._id,
        note,
      });
      setupdateUI((p) => !p);
      setOpenPopup(false);
    } catch (err: any) {
      console.error(err);
      alert('Failed to edit project.');
    } finally {
      setLoading(false);
    }
  };

  const deleteNote = async () => {
    if (!existingNote?._id) return;
    if (!confirm('Are you sure you want to delete this project?')) return;

    setLoading(true);
    try {
      await axios.delete(`/api/delete_note`, {
        data: { id: existingNote._id },
      });
      setupdateUI((p) => !p);
      setOpenPopup(false);
    } catch (err: any) {
      console.error(err);
      alert('Failed to delete project.');
    } finally {
      setLoading(false);
    }
  };

  if (isPending) return null; // ✅ correct property

  return (
    <div className="bg-[#00000050] fixed top-0 left-0 w-full h-full grid place-items-center z-50 text-white">
      <div className="bg-[#222732] w-full max-w-[800px] mt-12 text-center p-4 md:px-8 relative rounded-md shadow-lg">
        <MdOutlineClose
          className="text-[30px] text-gray-400 cursor-pointer absolute top-0 right-0 m-4 hover:text-white transition"
          onClick={() => setOpenPopup(false)}
        />
        <h2 className="text-[24px] text-gray-400 pb-2">
          {editMode ? 'Edit Project' : 'Add Project'}
        </h2>
        <textarea
          autoFocus
          className="bg-transparent border border-[#323949] w-full text-gray-300 p-4 rounded-md focus:outline-none resize-none"
          rows={10}
          placeholder="Add Project + Contact Details (WhatsApp || Telegram || Signal) ..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
        <div className="flex justify-end gap-3 mt-4">
          {editMode && (
            <Button
              disabled={loading}
              className="bg-red-600 text-white px-4 py-1 rounded-sm hover:bg-red-700 transition"
              onClick={deleteNote}
            >
              {loading ? 'Deleting...' : 'Delete'}
            </Button>
          )}
          <Button
            disabled={loading}
            className="bg-[#323949] text-gray-300 px-4 py-1 rounded-sm hover:bg-gray-600 transition"
            onClick={editMode ? saveEditNote : saveNewNote}
          >
            {loading ? 'Saving...' : 'Save'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
