'use client';

import { Button } from "@/components/ui/button";

// 예시 데이터: 실제로는 API 등에서 받아옵니다.
const newsItems = [
  { id: 1, title: "Next.js 15 버전의 새로운 기능들" },
  { id: 2, title: "shadcn/ui, 왜 개발자들이 열광하는가?" },
  { id: 3, title: "Tailwind CSS를 이용한 반응형 웹 디자인 팁" },
  { id: 4, title: "React Server Components 완벽 가이드" },
];

export default function ListPage() {
  const handleItemClick = (itemId: number) => {
    // 각 아이템을 클릭했을 때의 동작을 여기에 구현합니다.
    // 예: alert(`뉴스 ID: ${itemId} 클릭됨!`);
    console.log(`Navigating to news item ${itemId}`);
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-4">기술 블로그 리스트</h1>

      {/* 버튼들을 감싸는 세로 Flex 컨테이너 */}
      <div className="flex flex-col gap-2">
        {newsItems.map((item) => (
          <Button
            key={item.id}
            variant="ghost" // 마우스를 올렸을 때만 배경색이 나타나는 스타일
            className="w-full justify-start text-left border border-gray-200 rounded-md p-2" // 버튼 너비를 꽉 채우고 텍스트를 왼쪽 정렬
            onClick={() => handleItemClick(item.id)}
          >
            {item.title}
          </Button>
        ))}
      </div>
    </div>
  );
}