import React from 'react';

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#030303] overflow-hidden flex flex-col font-sans antialiased text-white">
      
      {/* --- 배경 극장 레이어 --- */}
      <div className="absolute inset-0 z-0 h-full w-full">
        {/* 1. 무대 배경 및 벽 */}
        <div className="absolute inset-x-0 top-0 h-[72vh] bg-black" />
        
        {/* 2. 붉은 벨벳 커튼 (그라데이션 최소화) */}
        <div className="absolute left-0 inset-y-0 w-[22vw] z-4"
          style={{
            backgroundImage: 'linear-gradient(to right, #3a0000, #5a0000 20%, #5a0000 80%, transparent 100%)',
            boxShadow: '30px 0 70px rgba(0,0,0,1)',
          }}
        />
        <div className="absolute right-0 inset-y-0 w-[22vw] z-4"
          style={{
            backgroundImage: 'linear-gradient(to left, #3a0000, #5a0000 20%, #5a0000 80%, transparent 100%)',
            boxShadow: '-30px 0 70px rgba(0,0,0,1)',
          }}
        />
        
        {/* 3. 무대 바닥 (나무 질감) */}
        <div className="absolute inset-x-0 bottom-[18vh] h-[25vh] z-1 border-t border-[#222]"
          style={{
            backgroundImage: 'repeating-linear-gradient(90deg, #0a0a0a 0px, #0a0a0a 20px, #151515 21px, #151515 22px)',
          }}
        />
        <div className="absolute inset-x-0 bottom-[18vh] h-[25vh] z-2 bg-black/60" />
      </div>

      {/* --- 확실하게 살아난 선명한 스포트라이트 --- */}
      <div className="absolute inset-0 z-3 pointer-events-none flex justify-center">
        
        {/* 1. 상단 램프 광원 */}
        <div className="absolute top-[1vh] w-[15vw] h-[15vw] rounded-full z-20"
          style={{
            background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 40%, transparent 70%)',
            filter: 'blur(10px)',
          }}
        />
        
        {/* 2. 하강하는 선명한 삼각형 빛 기둥 (Clip-path 방식) */}
        <div className="absolute top-[5vh] w-[40vw] h-[67vh] z-10"
          style={{
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0.2) 80%, transparent 100%)',
            clipPath: 'polygon(48% 0%, 52% 0%, 100% 100%, 0% 100%)', // 위는 좁고 아래는 바닥 원 크기에 맞춤
            filter: 'blur(15px)',
          }}
        />
        
        {/* 3. 무대 바닥 원형 광원 (빛 기둥 하단과 일치) */}
        <div className="absolute bottom-[20vh] w-[38vw] h-[14vw] rounded-full z-20"
          style={{
            background: 'radial-gradient(ellipse at center, white 20%, rgba(255,255,255,0.8) 50%, transparent 80%)',
            filter: 'blur(12px)',
            boxShadow: '0 0 50px rgba(255,255,255,0.3)',
          }} 
        />
      </div>

      {/* --- 객석 (위치와 크기 유지) --- */}
      <div className="absolute bottom-0 inset-x-0 h-[22vh] z-5 flex items-end justify-center px-6 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="relative flex-shrink-0 mx-2" style={{ width: '12vw', height: '14vh' }}>
            <div className="w-full h-[75%] bg-[#6b0000] rounded-t-3xl shadow-[inset_0_5px_15px_rgba(0,0,0,0.7)] border-t-[3px] border-[#8a0000]" />
            <div className="absolute bottom-0 w-[108%] -left-[4%] h-[30%] bg-[#500000] rounded-md shadow-2xl" />
            <div className="absolute -right-[9%] top-[40%] w-[16%] h-[55%] bg-[#050505] rounded-full" />
          </div>
        ))}
        {/* 객석 어둠 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent pointer-events-none" />
      </div>

      {/* --- 하단 메뉴 --- */}
      <nav className="relative z-[60] w-full flex flex-row items-center justify-center gap-18 pb-10 mb-2">
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
      <span className="text-[13px] font-light tracking-[0.8em] text-gray-400 group-hover:text-white transition-all duration-500 uppercase">
        {title}
      </span>
      <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-white/60 group-hover:w-full transition-all duration-500" />
    </a>
  );
}
