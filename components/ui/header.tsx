import Link from "next/link";
import "./header.css"; // CSS 파일을 import 합니다.

export default function Header() {
    return (
      <header>
        {/* 클래스를 추가하여 CSS 스타일을 적용합니다. */}
        <div className="header-container">
          <div className="header-content">
            {/* 로고/사이트 제목 */}
            <Link href="/" className="header-title">
              MILE for Developers
            </Link>
            
            {/* 네비게이션 (현재 비어 있음) */}
            <nav>
              {/* <Link href="/about">About</Link> */}
            </nav>
          </div>
        </div>
      </header>
    );
  }