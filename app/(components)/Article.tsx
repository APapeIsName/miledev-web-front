import * as React from "react";
import "./Article.css"; // CSS 파일을 import 합니다.

// 데이터 타입을 정의합니다.
export type Post = {
  id: number;
  title: string;
  source: string;
  date: string;
  views: number;
  imageUrl: string;
};

// SVG 아이콘 컴포넌트는 재사용 가능하므로 그대로 둡니다.
const Icon = ({ path }: { path: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="icon" // 클래스를 추가하여 CSS에서 크기를 제어합니다.
  >
    <path fillRule="evenodd" d={path} clipRule="evenodd" />
  </svg>
);

// Article 컴포넌트
export default function Article({ post }: { post: Post }) {
  return (
    // <article> 태그에 메인 클래스를 부여합니다.
    <article key={post.id} className="article-container">
      {/* 썸네일 이미지 */}
      <div className="article-thumbnail-wrapper">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="article-thumbnail"
        />
      </div>

      {/* 게시물 정보 (제목, 출처, 날짜, 조회수) */}
      <div className="article-info">
        <h2 className="article-title">{post.title}</h2>

        <div className="article-meta">
          <div className="meta-item">
            <Icon path="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
            <span>{post.source}</span>
          </div>
          <div className="meta-item">
            <Icon path="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
            <span>{post.date}</span>
          </div>
          <div className="meta-item">
            <Icon path="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM10 12a2 2 0 100-4 2 2 0 000 4z" />
            <span>{post.views}</span>
          </div>
        </div>
      </div>
    </article>
  );
}