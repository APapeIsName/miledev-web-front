'use client';

import Article from "./(components)/Article";
import type { Post } from "./(components)/Article";

export default function ListPage() {
  const posts: Post[] = [
    {
      id: 1,
      title: "20년 레거시를 넘어 미래를 준비하는 시스템 만들기",
      source: "토스ㅣ테크",
      date: "2025. 10. 18.",
      views: 2037,
      imageUrl: "https://placehold.co/100x100/6667ab/ffffff?text=Post",
    },
    {
      id: 2,
      title: "20년 레거시를 넘어 미래를 준비하는 시스템 만들기",
      source: "토스ㅣ테크",
      date: "2025. 10. 18.",
      views: 2037,
      imageUrl: "https://placehold.co/100x100/6667ab/ffffff?text=Post",
    },
    {
      id: 3,
      title: "20년 레거시를 넘어 미래를 준비하는 시스템 만들기",
      source: "토스ㅣ테크",
      date: "2025. 10. 18.",
      views: 2037,
      imageUrl: "https://placehold.co/100x100/6667ab/ffffff?text=Post",
    },
    {
      id: 4,
      title: "20년 레거시를 넘어 미래를 준비하는 시스템 만들기",
      source: "토스ㅣ테크",
      date: "2025. 10. 18.",
      views: 2037,
      imageUrl: "https://placehold.co/100x100/6667ab/ffffff?text=Post",
    },
  ];

  return (
    <div className="p-4 md:p-8">
      {posts.map((post) => (
        <Article key={post.id} post={post} />
      )) as React.ReactNode}
    </div>
  );
}