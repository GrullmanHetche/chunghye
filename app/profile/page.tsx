"use client";

import Image from "next/image";

// ── 컬러 팔레트 ──────────────────────────────────────────────
const PALETTE_A = ["#B5AFA8", "#7A7068", "#4A4540", "#1C1A18"];
const PALETTE_B = ["#C4956A", "#E8818A", "#D4667A", "#B8C8D8"];

// ── 이미지 경로 (public/ 아래에 파일 넣으면 됩니다) ───────────
const IMG = {
  leftnngcc:  "/images/leftnngcc.png",   // A 나나곰 쿠키 (sd)
  leftnngbgt: "/images/leftnngbgt.png",  // A 나나곰 바게트 (full)
  rightnngbgt:"/images/rightnngbgt.png", // B 나나곰 바게트 (full)
  rightnngcc: "/images/rightnngcc.png",  // B 나나곰 쿠키 (sd)
};

// ── 캐릭터 정보 ───────────────────────────────────────────────
const CHAR_A = {
  id: "A",
  name: "명설우",
  tags: ["#무뚝한", "#감정적인", "#이타적인"],
  info: ["XY / 23세 (대학생)", "177cm / 마른 체형"],
  desc: [
    "B와 같은 대학교, 연영과 연출/조명 전공",
    "B를 만나고 난 이후로 점차 인정형이 되어가고 있다.",
  ],
  features: [
    "회발&회안 / 무표정한 인상",
    "다크써클",
    "얼굴의 절반을 덮는 머리카락",
    "5:5 앞머리",
    "검은색 트레이닝복",
    "검정색 하의&운동화",
  ],
  palette: PALETTE_A,
};

const CHAR_B = {
  id: "B",
  name: "남예존",
  tags: ["#자기중심주의", "#존대形", "#제멋대로"],
  info: ["XY / 25세 (대학생)", "181cm"],
  desc: [
    "A와 같은 대학교, 경영학과 전공",
    "A에게 잔뜩 재꼈대로 굴며 A를 애해 주고 있다",
  ],
  features: [
    "갈발&팥안",
    "눈 밑 눈커플",
    "헝크러진 머리",
    "양 귀 귀길이",
    "카디건 아래 와이셔츠",
    "청바지&구두",
  ],
  palette: PALETTE_B,
};

// ── 색상 카드 컴포넌트 ────────────────────────────────────────
function ColorPalette({ colors, side }: { colors: string[]; side: "left" | "right" }) {
  return (
    <div
      style={{
        display: "flex",
        gap: "6px",
        justifyContent: side === "right" ? "flex-end" : "flex-start",
        flexWrap: "wrap",
      }}
    >
      {colors.map((c) => (
        <div
          key={c}
          title={c}
          style={{
            width: 36,
            height: 36,
            borderRadius: 6,
            background: c,
            boxShadow: "0 1px 4px rgba(0,0,0,.15)",
            cursor: "default",
            transition: "transform .15s",
          }}
          onMouseEnter={(e) => ((e.currentTarget.style.transform = "scale(1.15)"))}
          onMouseLeave={(e) => ((e.currentTarget.style.transform = "scale(1)"))}
        />
      ))}
    </div>
  );
}

// ── 캐릭터 카드 ───────────────────────────────────────────────
function CharCard({
  char,
  bgt,
  cc,
  side,
}: {
  char: typeof CHAR_A;
  bgt: string;
  cc: string;
  side: "left" | "right";
}) {
  const isLeft = side === "left";
  const accent = char.palette[2];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: isLeft ? "flex-start" : "flex-end",
        gap: 16,
        flex: 1,
        minWidth: 0,
      }}
    >
      {/* 태그 */}
      <div style={{ display: "flex", gap: 6, flexWrap: "wrap", justifyContent: isLeft ? "flex-start" : "flex-end" }}>
        {char.tags.map((t) => (
          <span
            key={t}
            style={{
              fontSize: 11,
              color: accent,
              fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
              letterSpacing: "0.03em",
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {/* 이름 */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexDirection: isLeft ? "row" : "row-reverse",
        }}
      >
        <span
          style={{
            width: 28,
            height: 28,
            borderRadius: "50%",
            background: accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 13,
            fontWeight: 700,
            fontFamily: "'Apple SD Gothic Neo', sans-serif",
            flexShrink: 0,
          }}
        >
          {char.id}
        </span>
        <h2
          style={{
            fontSize: 26,
            fontWeight: 700,
            margin: 0,
            letterSpacing: "0.12em",
            fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
            color: "var(--fg)",
          }}
        >
          {char.name}
        </h2>
      </div>

      {/* 기본 정보 */}
      <div
        style={{
          fontSize: 12,
          lineHeight: 1.9,
          color: "var(--muted)",
          textAlign: isLeft ? "left" : "right",
          fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
        }}
      >
        {char.info.map((l) => (
          <div key={l}>{l}</div>
        ))}
        <div style={{ marginTop: 6 }}>
          {char.desc.map((l) => (
            <div key={l}>{l}</div>
          ))}
        </div>
      </div>

      {/* 컬러 팔레트 */}
      <ColorPalette colors={char.palette} side={side} />

      {/* 바게트 (full body) */}
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          height: 320,
        }}
      >
        <Image
          src={bgt}
          alt={`${char.name} full`}
          fill
          style={{ objectFit: "contain", objectPosition: "bottom" }}
          priority
        />
      </div>

      {/* 쿠키 (sd) + 특징 */}
      <div
        style={{
          display: "flex",
          gap: 16,
          alignItems: "flex-end",
          flexDirection: isLeft ? "row" : "row-reverse",
          width: "100%",
        }}
      >
        <div style={{ position: "relative", width: 100, height: 120, flexShrink: 0 }}>
          <Image src={cc} alt={`${char.name} sd`} fill style={{ objectFit: "contain" }} />
        </div>
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: 0,
            fontSize: 11.5,
            lineHeight: 2,
            color: "var(--muted)",
            textAlign: isLeft ? "left" : "right",
            fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
          }}
        >
          {char.features.map((f) => (
            <li key={f}>— {f}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// ── 메인 페이지 ───────────────────────────────────────────────
export default function ProfilePage() {
  return (
    <>
      {/* CSS 변수 + 전역 스타일 */}
      <style>{`
        :root {
          --fg: #1a1917;
          --bg: #f7f5f2;
          --card: #ffffff;
          --muted: #6b6560;
          --border: #e2ddd8;
          --divider: #ccc8c2;
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --fg: #f0ede8;
            --bg: #181614;
            --card: #211f1c;
            --muted: #9e9890;
            --border: #312e2a;
            --divider: #3a3630;
          }
        }
        * { box-sizing: border-box; }
        body { margin: 0; background: var(--bg); }
      `}</style>

      <main
        style={{
          minHeight: "100vh",
          background: "var(--bg)",
          padding: "60px 24px 80px",
          fontFamily: "'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
        }}
      >
        {/* 페이지 제목 */}
        <header style={{ textAlign: "center", marginBottom: 56 }}>
          <p
            style={{
              fontSize: 11,
              letterSpacing: "0.25em",
              color: "var(--muted)",
              margin: "0 0 12px",
              textTransform: "uppercase",
            }}
          >
            설예 — 페어표
          </p>
          <h1
            style={{
              fontSize: 38,
              fontWeight: 800,
              margin: 0,
              letterSpacing: "0.18em",
              color: "var(--fg)",
            }}
          >
            설예
          </h1>
          <p
            style={{
              marginTop: 10,
              fontSize: 12,
              color: "var(--muted)",
              letterSpacing: "0.06em",
            }}
          >
            #대학생&nbsp;&nbsp;#구원서사
          </p>
        </header>

        {/* 페어 레이아웃 */}
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            background: "var(--card)",
            borderRadius: 20,
            border: "1px solid var(--border)",
            padding: "48px 40px",
            display: "flex",
            gap: 0,
            alignItems: "flex-start",
          }}
        >
          {/* ── A: 명설우 ── */}
          <CharCard
            char={CHAR_A}
            bgt={IMG.leftnngbgt}
            cc={IMG.leftnngcc}
            side="left"
          />

          {/* 중앙 구분선 */}
          <div
            style={{
              width: 1,
              alignSelf: "stretch",
              background: "var(--divider)",
              margin: "0 36px",
              flexShrink: 0,
              position: "relative",
            }}
          >
            <span
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                background: "var(--card)",
                padding: "4px 0",
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: "0.1em",
                whiteSpace: "nowrap",
                writingMode: "vertical-rl",
              }}
            >
              ✦  PAIR  ✦
            </span>
          </div>

          {/* ── B: 남예존 ── */}
          <CharCard
            char={CHAR_B}
            bgt={IMG.rightnngbgt}
            cc={IMG.rightnngcc}
            side="right"
          />
        </div>

        {/* 안내 문구 */}
        <p
          style={{
            textAlign: "center",
            marginTop: 32,
            fontSize: 11,
            color: "var(--muted)",
            letterSpacing: "0.04em",
          }}
        >
          모든 세계관은 기준으로만 삼습니다. 색문에 인함하지 않습니다.
        </p>
      </main>
    </>
  );
}
