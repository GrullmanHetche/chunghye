import React from 'react';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#030303] overflow-hidden flex flex-col font-sans antialiased text-white">
      
      {/* --- 배경 극장 레이어 --- */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {/* 무대 벽 (더 어둡게) */}
        <div className="absolute inset-x-0 top-0 h-[72vh] bg-[#0d0d0d]" />
        
        {/* 붉은 벨벳 커튼 (그라데이션 감소, 단단한 느낌) */}
        <div className="absolute left-0 inset-y-0 w-[22vw] z-3"
          style={{
            backgroundImage: 'linear-gradient(to right, #400000 0%, #600000 10%, #600000 90%, transparent 100%)',
            boxShadow: '25px 0 60px rgba(0,0,0,1)', // 더 깊은 그림자
            opacity: 1, // 완전 불투명
          }}
        />
        <div className="absolute right-0 inset-y-0 w-[22vw] z-3"
          style={{
            backgroundImage: 'linear-gradient(to left, #400000 0%, #600000 10%, #600000 90%, transparent 100%)',
            boxShadow: '-25px 0 60px rgba(0,0,0,1)', // 더 깊은 그림자
            opacity: 1, // 완전 불투명
          }}
        />
        
        {/* 무대 바닥 (짙은 매트 나무) */}
        <div className="absolute inset-x-0 bottom-[24vh] h-[20vh] z-1"
          style={{
            background: '#080808',
            borderTop: '3px solid #1a1a1a'
          }}
        />
      </div>

      {/* --- 스포트라이트 (더 강렬하게 집중됨) --- */}
      <div className="absolute inset-0 z-2 pointer-events-none">
        {/* 설우(A) 조명 (블루/그레이) */}
        <div className="absolute top-[-10%] left-[8%] w-[50%] h-[110%] opacity-40"
          style={{
            background: 'radial-gradient(circle at 15% 10%, rgba(100, 130, 160, 0.6) 0%, transparent 60%)',
            filter: 'blur(70px)'
          }} 
        />
        
        {/* 예준(B) 조명 (로즈/핑크) */}
        <div className="absolute top-[-10%] right-[8%] w-[50%] h-[110%] opacity-35"
          style={{
            background: 'radial-gradient(circle at 85% 10%, rgba(255, 100, 130, 0.5) 0%, transparent 60%)',
            filter: 'blur(90px)'
          }} 
        />

        {/* 바닥 중앙 강렬하게 집중된 광원 (더 강력하게) */}
        <div className="absolute bottom-[26vh] left-1/2 -translate-x-1/2 w-[35vw] h-[12vw] rounded-full opacity-70"
          style={{
            background: 'radial-gradient(ellipse at center, white 20%, #eee 50%, transparent 90%)',
            filter: 'blur(15px)'
          }} 
        />
      </div>

      {/* --- 객석 (딱 좋게 유지) --- */}
      <div className="absolute bottom-0 inset-x-0 h-[26vh] z-4 flex items-end justify-center px-6 overflow-hidden"
        style={{
          background: 'linear-gradient(to top, black 40%, transparent 100%)',
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
      <div className="flex-grow z-10" />

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