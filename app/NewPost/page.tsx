'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewPostPage() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Post created:', title, content);
    router.push('/feed');
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Write a New Post</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-96">
        <input
          type="text"
          placeholder="Title"
          className="border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Write your poem or thoughts here..."
          className="border p-2 rounded h-40"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">Publish</button>
      </form>
    </div>
  );
}
