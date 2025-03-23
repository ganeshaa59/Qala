'use client';
import Link from 'next/link';

interface Post {
  id: number;
  title: string;
  content: string;
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow hover:shadow-md transition">
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-700 mb-4">
        {post.content.length > 100 ? post.content.slice(0, 100) + '...' : post.content}
      </p>
      <Link href={`/post/${post.id}`} className="text-blue-500 underline">Read more</Link>
    </div>
  );
}
