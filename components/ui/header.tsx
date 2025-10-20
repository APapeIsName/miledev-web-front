import Link from "next/link";

export default function Header() {
    return (
      // 전체 너비를 차지하고 하단에 경계선을 추가합니다.
      <header className="w-full border-b border-gray-300 bg-white">
        {/* 레이아웃과 동일한 너비 및 패딩을 적용하여 정렬을 맞춥니다. */}
        <div className="max-w-screen-xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* 로고/사이트 제목을 홈으로 링크합니다. next/link 대신 표준 a 태그를 사용합니다. */}
            <Link href="/" className="text-h1/Bold text-p900 hover:text-p700 transition-colors">
              MILE for Developers
            </Link>
            {/* 나중에 네비게이션 링크 등을 추가할 수 있는 공간입니다. */}
            <nav>
              {/* 예: <a href="/about">About</a> */}
            </nav>
          </div>
        </div>
      </header>
    );
  }