export type Post = {
    id: number;
    title: string;
    source: string;
    date: string;
    views: number;
    imageUrl: string;
  };

  const Icon = ({ path, className = "w-4 h-4" }: { path: string, className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={className}
    >
      <path
        fillRule="evenodd"
        d={path}
        clipRule="evenodd"
      />
    </svg>
  );
  

export default function Article({ post }: { post: Post }) {
  return (
    <article
      key={post.id}
      className="flex items-center p-4 rounded-lg transition-colors hover:bg-gray-50"
    >
      {/* 썸네일 이미지 */}
      <div className="flex-shrink-0 mr-6">
        <img
          src={post.imageUrl}
          alt={post.title}
          width="100"
          height="100"
          className="rounded-md object-cover w-[100px] h-[100px]"
        />
      </div>
      {/* 게시물 정보 (제목, 출처, 날짜, 조회수) */}
      <div className="flex flex-col justify-center">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          {post.title}
        </h2>
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Icon path="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            <span>{post.source}</span>
          </div>
          <div className="flex items-center space-x-1">
             <Icon path="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center space-x-1">
             <Icon path="M10 12a2 2 0 100-4 2 2 0 000 4z" />
             <Icon path="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10z" />
            <span>{post.views}</span>
          </div>
        </div>
      </div>
    </article>
  );
}