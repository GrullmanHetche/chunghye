import React from 'react';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#030303] overflow-hidden flex flex-col font-sans antialiased text-white">
      
      {/* --- 배경 극장 레이어 (image_16.png 기반) --- */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {/* 1. 무대 배경 및 벽 */}
        <div className="absolute inset-x-0 top-0 h-[70vh] bg-black shadow-inner" />
        
        {/* 2. 붉은 벨벳 커튼 (그라데이션 감소, 단단하고 어두운 느낌) */}
        <div className="absolute left-0 inset-y-0 w-[22vw] z-4"
          style={{
            backgroundImage: 'linear-gradient(to right, #3a0000 0%, #5a0000 15%, #5a0000 85%, transparent 100%)',
            boxShadow: '30px 0 70px rgba(0,0,0,1)', // 더 깊은 그림자
            opacity: 1, // 완전 불투명
          }}
        />
        <div className="absolute right-0 inset-y-0 w-[22vw] z-4"
          style={{
            backgroundImage: 'linear-gradient(to left, #3a0000 0%, #5a0000 15%, #5a0000 85%, transparent 100%)',
            boxShadow: '-30px 0 70px rgba(0,0,0,1)', // 더 깊은 그림자
            opacity: 1, // 완전 불투명
          }}
        />
        
        {/* 3. 무대 바닥 (나무 질감 살리기) */}
        <div className="absolute inset-x-0 bottom-[18vh] h-[25vh] z-1 border-t-2 border-[#1a1a1a]"
          style={{
            // image_16.png의 나무 바닥 질감을 짙게 표현
            backgroundImage: 'repeating-linear-gradient(90deg, #111 0px, #111 15px, #1a1a1a 16px, #1a1a1a 17px)',
            opacity: 0.9,
          }}
        />
        {/* 무대 바닥 어둠 오버레이 (반사광 조절) */}
        <div className="absolute inset-x-0 bottom-[18vh] h-[25vh] z-2 bg-black opacity-40" />
      </div>

      {/* --- 스포트라이트 (위치 최적화) --- */}
      <div className="absolute inset-0 z-3 pointer-events-none flex justify-center">
        
        {/* 1. 상단 광원 (빛의 시작점) */}
        <div className="absolute top-[2vh] w-[12vw] h-[12vw] rounded-full z-10"
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(200, 200, 200, 0.4) 50%, transparent 80%)',
            filter: 'blur(8px)',
          }}
        />
        
        {/* 2. 하강하며 세모낳게 퍼지는 빛줄기 (미세 조정) */}
        <div className="absolute top-[6vh] w-[20vw] h-[65vh] origin-top opacity-85 z-10"
          style={{
            background: 'conic-gradient(from 180deg at 50% 0%, white 0deg, rgba(255,255,255,0.8) 15deg, transparent 30deg, transparent 330deg, rgba(255,255,255,0.8) 345deg, white 360deg)',
            filter: 'blur(25px)',
            transform: 'scaleX(2.5)',
          }}
        />
        
        {/* 3. 무대 나무 바닥 바로 위의 강력하게 집중된 단일 원형 광원 (핵심 위치 수정) */}
        <div className="absolute bottom-[20vh] w-[35vw] h-[15vw] rounded-full opacity-90 z-20"
          style={{
            // image_16.png의 바닥 원형 광원 위치와 맞춤
            background: 'radial-gradient(ellipse at center, white 15%, #eee 45%, rgba(100,100,100,0.5) 75%, transparent 100%)',
            filter: 'blur(10px)',
          }} 
        />
      </div>

      {/* --- 객석 (위치 조정 및 딱 좋게 유지) --- */}
      <div className="absolute bottom-0 inset-x-0 h-[22vh] z-5 flex items-end justify-center px-6 overflow-hidden"
        style={{
          // 객석을 더 명확하게 어둡게 처리하여 깊이감 강조
          background: 'linear-gradient(to top, black 60%, transparent 100%)',
        }}
      >
        {/* 이전의 딱 좋은 원근감 유지 */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="relative flex-shrink-0 mx-2"
            style={{
              width: '12vw', // 큼직하게 유지
              height: '14vh', // 높이 조정 (조금 더 낮게)
            }}
          >
            {/* 등받이 (윗부분 곡률 강조) */}
            <div className="w-full h-[75%] bg-[#6b0000] rounded-t-3xl shadow-[inset_0_5px_12px_rgba(0,0,0,0.6)] border-t-[3px] border-[#8a0000]" />
            {/* 좌판 (엉덩이 닿는 부분) */}
            <div className="absolute bottom-0 w-[108%] -left-[4%] h-[30%] bg-[#500000] rounded-md border-t border-black/50 shadow-2xl" />
            {/* 팔걸이 사이의 어둠 표현 */}
            <div className="absolute -right-[9%] top-[40%] w-[16%] h-[55%] bg-[#0a0a0a] rounded-full" />
          </div>
        ))}
      </div>

      {/* --- 콘텐츠 영역 (비워둠) --- */}
      <div className="flex-grow z-10">
        {/* 이 공간은 텅 비어 있습니다. */}
      </div>

      {/* --- 하단 메뉴 (객석 바로 위에 위치) --- */}
      <nav className="relative z-20 w-full flex flex-row items-center justify-center gap-18 pb-10 mb-2">
        <TinyMenuButton title="PROFILE" href="/profile" />
        <TinyMenuButton title="BAG" href="/bag" />
        <TinyMenuButton title="TIMETABLE" href="/login" />
      </nav>

    </main>
  );
}

function TinyMenuButton({ title, href }: { title: string; href: string }) {
  return (
    <a href={href} className="group relative">
      <span className="text-[13px] font-light tracking-[0.8em] text-gray-400 group-hover:text-white transition-all duration-500">
        {title}
      </span>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-white/60 group-hover:w-full transition-all duration-500" />
    </a>
  );
}
