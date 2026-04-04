import React from 'react';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#030303] overflow-hidden flex flex-col font-sans antialiased text-white">
      
      {/* --- 배경 극장 레이어 --- */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {/* 무대 벽 (더 깊고 어둡게) */}
        <div className="absolute inset-x-0 top-0 h-[72vh] bg-black shadow-inner" />
        
        {/* 붉은 벨벳 커튼 (그라데이션 감소, 단단하고 어두운 느낌) */}
        <div className="absolute left-0 inset-y-0 w-[22vw] z-3"
          style={{
            backgroundImage: 'linear-gradient(to right, #3a0000 0%, #5a0000 15%, #5a0000 85%, transparent 100%)',
            boxShadow: '30px 0 70px rgba(0,0,0,1)', // 더 깊은 그림자
            opacity: 1, // 완전 불투명
          }}
        />
        <div className="absolute right-0 inset-y-0 w-[22vw] z-3"
          style={{
            backgroundImage: 'linear-gradient(to left, #3a0000 0%, #5a0000 15%, #5a0000 85%, transparent 100%)',
            boxShadow: '-30px 0 70px rgba(0,0,0,1)', // 더 깊은 그림자
            opacity: 1, // 완전 불투명
          }}
        />
        
        {/* 무대 바닥 (짙은 매트 나무, 어둠 오버레이 추가) */}
        <div className="absolute inset-x-0 bottom-[24vh] h-[20vh] z-1 bg-[#050505] border-t-2 border-[#1a1a1a]" />
        {/* 무대 반사광 감소 오버레이 */}
        <div className="absolute inset-x-0 bottom-[24vh] h-[20vh] z-2 bg-black opacity-50" />
      </div>

      {/* --- 강력하게 집중된 단일 스포트라이트 (image_11.png 기반) --- */}
      <div className="absolute inset-0 z-2 pointer-events-none">
        {/* 1. 상단 광원 (빛의 시작점) */}
        <div className="absolute top-[2vh] left-1/2 -translate-x-1/2 w-[10vw] h-[10vw] rounded-full z-10"
          style={{
            background: 'radial-gradient(circle at center, rgba(255, 255, 255, 1) 0%, rgba(200, 200, 200, 0.5) 50%, transparent 80%)',
            filter: 'blur(5px)',
          }}
        />
        
        {/* 2. 하강하는 강력한 원추형 빛줄기 (image_11.png 느낌) */}
        <div className="absolute top-[5vh] left-1/2 -translate-x-1/2 w-[1vw] h-[65vh] origin-top"
          style={{
            background: 'linear-gradient(to bottom, white 0%, transparent 100%)',
            filter: 'blur(20px)', // 강력한 흐림 효과로 빛줄기 표현
            opacity: 0.8,
          }}
        />
        
        {/* 3. 무대 바닥 강력하게 집중된 단일 원형 광원 */}
        <div className="absolute bottom-[28vh] left-1/2 -translate-x-1/2 w-[35vw] h-[15vw] rounded-full opacity-90 z-20"
          style={{
            background: 'radial-gradient(ellipse at center, white 15%, #eee 45%, rgba(100,100,100,0.5) 75%, transparent 100%)',
            filter: 'blur(10px)', // image_11.png처럼 가장자리가 덜 흐리게
          }} 
        />
      </div>

      {/* --- 객석 (딱 좋게 유지) --- */}
      <div className="absolute bottom-0 inset-x-0 h-[26vh] z-4 flex items-end justify-center px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(to top, black 50%, transparent 100%)',
        }}
      >
        {/* 딱 좋은 원근감 유지 */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="relative flex-shrink-0 mx-2"
            style={{
              width: '12vw', // 큼직하게 유지
              height: '16vh', // 높이 조절
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
      <nav className="relative z-20 w-full flex flex-row items-center justify-center gap-18 pb-14 mb-4">
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
