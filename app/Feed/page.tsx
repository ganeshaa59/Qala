'use client';
import Link from 'next/link';
import PostCard from '../../components/PostCard';

export default function FeedPage() {
  const dummyPosts = [
    { id: 1, title: 'My First Poem', content: 'Roses are red, violets are blue...' },
    { id: 2, title: 'Thought of the day', content: 'Be kind. Be humble.' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Your Feed</h1>
      <Link href="/newpost">
        <button className="bg-green-500 text-white px-4 py-2 rounded mb-6">Create New Post</button>
      </Link>
      <div className="space-y-4">
        {dummyPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
