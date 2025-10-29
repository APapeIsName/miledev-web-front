import * as React from "react";
import "./Article.css"; // CSS 파일을 import 합니다.
import Image from "next/image";
import tossIcon from "@/assets/icons/techblog-toss-icon.svg";
import timeIcon from "@/assets/icons/time-icon.svg";
import viewIcon from "@/assets/icons/view-icon.svg";

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
        <div className="article-title">{post.title}</div>

        <div className="article-meta">
          <div className="meta-item">
            <Image src={tossIcon} alt="toss-icon" width={16} height={16} />
            <span>{post.source}</span>
          </div>
          <div className="meta-item">
            <Image src={timeIcon} alt="time-icon" width={16} height={16} />
            <span>{post.date}</span>
          </div>
          <div className="meta-item">
            <Image src={viewIcon} alt="view-icon" width={16} height={16} />
            <span>{post.views}</span>
          </div>
        </div>
      </div>
    </article>
  );
}