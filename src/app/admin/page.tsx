'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { authClient } from '@/lib/auth-client';

interface NoteType {
  _id: string;
  email: string;
  note: string;
  updatedAt: string;
}

const AdminDashboard = () => {
  const { data: session, isPending } = authClient.useSession();
  const [notes, setNotes] = useState<NoteType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!session?.user?.email) return;
    if (session.user.email !== "rakeshvishwas730@gmail.com") return;

    const fetchNotes = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/admin/notes");
        setNotes(res.data.data);
      } catch (err) {
        console.error(err);
        alert("Failed to fetch notes");
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, [session]);

  if (isPending) return <p>Loading session...</p>;
  if (!session || session.user.email !== "rakeshvishwas730@gmail.com") {
    return <p className="flex text-red-500 item-center justify-center mt-24">Access denied. Admin only.</p>;
  }

  return (
    <div className="p-6 mt-24">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard: All User Notes</h1>
      {loading ? (
        <p>Loading notes...</p>
      ) : notes.length === 0 ? (
        <p>No notes found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-700">
            <thead>
              <tr className="bg-gray-800 text-left">
                <th className="px-4 py-2 border">Email</th>
                <th className="px-4 py-2 border">Note</th>
                <th className="px-4 py-2 border">Last Updated</th>
              </tr>
            </thead>
            <tbody>
              {notes.map((note) => (
                <tr key={note._id} className="hover:bg-gray-700">
                  <td className="px-4 py-2 border">{note.email}</td>
                  <td className="px-4 py-2 border">{note.note}</td>
                  <td className="px-4 py-2 border">
                    {new Date(note.updatedAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
