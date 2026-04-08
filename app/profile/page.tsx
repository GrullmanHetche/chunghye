"use client";

import Image from "next/image";

const PALETTE_A = ["#B5AFA8", "#7A7068", "#4A4540", "#1C1A18"];
const PALETTE_B = ["#C4956A", "#E8818A", "#D4667A", "#B8C8D8"];

const IMG = {
  leftnngcc:   "/images/leftnngcc.png",
  leftnngbgt:  "/images/leftnngbgt.png",
  rightnngbgt: "/images/rightnngbgt.png",
  rightnngcc:  "/images/rightnngcc.png",
};

const CHAR_A = {
  id: "A",
  name: "명설우",
  tags: ["#무뚝뚝한", "#감정적인", "#이타적인"],
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
  name: "남예준",
  tags: ["#자기중심주의", "#존대", "#제멋대로"],
  info: ["XY / 25세 (대학생)", "181cm"],
  desc: [
    "A와 같은 대학교, 경영학과 전공",
    "A에게 잔뜩 제멋대로 굴며 A를 예뻐해 주고 있다",
  ],
  features: [
    "갈발&팥안",
    "눈 밑 눈커플",
    "헝클어진 머리",
    "양 귀 귀걸이",
    "카디건 아래 와이셔츠",
    "청바지&구두",
  ],
  palette: PALETTE_B,
};

const font = "'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif";

function ColorPalette({ colors, side }: { colors: string[]; side: "left" | "right" }) {
  return (
    <div style={{ display: "flex", gap: 6, justifyContent: side === "right" ? "flex-end" : "flex-start" }}>
      {colors.map((c) => (
        <div
          key={c} title={c}
          style={{
            width: 36, height: 36, borderRadius: 6, background: c,
            boxShadow: "0 1px 4px rgba(0,0,0,.15)", cursor: "default",
            transition: "transform .15s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.15)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
      ))}
    </div>
  );
}

export default function ProfilePage() {
  return (
    <>
      <style>{`
        :root {
          --fg: #1a1917; --bg: #f7f5f2; --card: #ffffff;
          --muted: #6b6560; --border: #e2ddd8; --divider: #ccc8c2;
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --fg: #f0ede8; --bg: #181614; --card: #211f1c;
            --muted: #9e9890; --border: #312e2a; --divider: #3a3630;
          }
        }
        * { box-sizing: border-box; }
        body { margin: 0; background: var(--bg); }
      `}</style>

      <main style={{ minHeight: "100vh", background: "var(--bg)", padding: "60px 24px 80px", fontFamily: font }}>

        <header style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontSize: 11, letterSpacing: "0.25em", color: "var(--muted)", margin: "0 0 12px", textTransform: "uppercase" }}>
            설예 — 페어표
          </p>
          <h1 style={{ fontSize: 38, fontWeight: 800, margin: 0, letterSpacing: "0.18em", color: "var(--fg)" }}>설예</h1>
          <p style={{ marginTop: 10, fontSize: 12, color: "var(--muted)", letterSpacing: "0.06em" }}>
            #대학생&nbsp;&nbsp;#구원서사
          </p>
        </header>

        <div style={{
          maxWidth: 900, margin: "0 auto", background: "var(--card)",
          borderRadius: 20, border: "1px solid var(--border)", padding: "48px 40px",
        }}>

          {/* ── 1행: 텍스트 (A | 구분선 | B) ── */}
          <div style={{ display: "flex", gap: 0, alignItems: "flex-start" }}>

            {/* A 텍스트 */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
              <div style={{ display: "flex", gap: 6 }}>
                {CHAR_A.tags.map((t) => <span key={t} style={{ fontSize: 11, color: CHAR_A.palette[2], fontFamily: font, letterSpacing: "0.03em" }}>{t}</span>)}
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <span style={{ width: 28, height: 28, borderRadius: "50%", background: CHAR_A.palette[2], display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 700, fontFamily: font, flexShrink: 0 }}>A</span>
                <h2 style={{ fontSize: 26, fontWeight: 700, margin: 0, letterSpacing: "0.12em", fontFamily: font, color: "var(--fg)" }}>명설우</h2>
              </div>
              <div style={{ fontSize: 12, lineHeight: 1.9, color: "var(--muted)", fontFamily: font }}>
                {CHAR_A.info.map((l) => <div key={l}>{l}</div>)}
                <div style={{ marginTop: 6 }}>{CHAR_A.desc.map((l) => <div key={l}>{l}</div>)}</div>
              </div>
              <ColorPalette colors={CHAR_A.palette} side="left" />
            </div>

            {/* 구분선 */}
            <div style={{ width: 1, alignSelf: "stretch", background: "var(--divider)", margin: "0 36px", flexShrink: 0 }} />

            {/* B 텍스트 */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
              <div style={{ display: "flex", gap: 6 }}>
                {CHAR_B.tags.map((t) => <span key={t} style={{ fontSize: 11, color: CHAR_B.palette[2], fontFamily: font, letterSpacing: "0.03em" }}>{t}</span>)}
              </div>
              <div style={{ display: "flex", alignItems: "center", flexDirection: "row-reverse", gap: 10 }}>
                <span style={{ width: 28, height: 28, borderRadius: "50%", background: CHAR_B.palette[2], display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontSize: 13, fontWeight: 700, fontFamily: font, flexShrink: 0 }}>B</span>
                <h2 style={{ fontSize: 26, fontWeight: 700, margin: 0, letterSpacing: "0.12em", fontFamily: font, color: "var(--fg)" }}>남예준</h2>
              </div>
              <div style={{ fontSize: 12, lineHeight: 1.9, color: "var(--muted)", textAlign: "right", fontFamily: font }}>
                {CHAR_B.info.map((l) => <div key={l}>{l}</div>)}
                <div style={{ marginTop: 6 }}>{CHAR_B.desc.map((l) => <div key={l}>{l}</div>)}</div>
              </div>
              <ColorPalette colors={CHAR_B.palette} side="right" />
            </div>
          </div>

          {/* ── 2행: 바게트 이미지 (같은 행, 발끝 정렬) ── */}
          <div style={{ display: "flex", gap: 0, alignItems: "flex-end", marginTop: 12 }}>

            {/* A 바게트 */}
            <div style={{ flex: 1, position: "relative", height: 500 }}>
              <Image src={IMG.leftnngbgt} alt="명설우 full" fill priority
                style={{ objectFit: "contain", objectPosition: "center bottom" }} />
            </div>

            {/* 구분선 중앙 표시 */}
            <div style={{ width: 1, alignSelf: "stretch", background: "var(--divider)", margin: "0 36px", flexShrink: 0, position: "relative" }}>
              <span style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                background: "var(--card)", padding: "4px 0",
                fontSize: 11, color: "var(--muted)", letterSpacing: "0.1em",
                whiteSpace: "nowrap", writingMode: "vertical-rl",
              }}>✦  PAIR  ✦</span>
            </div>

            {/* B 바게트 */}
            <div style={{ flex: 1, position: "relative", height: 320 }}>
              <Image src={IMG.rightnngbgt} alt="남예준 full" fill priority
                style={{ objectFit: "contain", objectPosition: "center bottom" }} />
            </div>
          </div>

          {/* ── 3행: 쿠키 + 특징 ── */}
          <div style={{ display: "flex", gap: 0, alignItems: "flex-start", marginTop: 24 }}>

            {/* A 쿠키 + 특징 */}
            <div style={{ flex: 1, display: "flex", gap: 16, alignItems: "flex-end" }}>
              <div style={{ position: "relative", width: 110, height: 130, flexShrink: 0 }}>
                <Image src={IMG.leftnngcc} alt="명설우 sd" fill style={{ objectFit: "contain", objectPosition: "bottom" }} />
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 11.5, lineHeight: 2, color: "var(--muted)", fontFamily: font }}>
                {CHAR_A.features.map((f) => <li key={f}>— {f}</li>)}
              </ul>
            </div>

            {/* 구분선 */}
            <div style={{ width: 1, alignSelf: "stretch", background: "var(--divider)", margin: "0 36px", flexShrink: 0 }} />

            {/* B 쿠키 + 특징 */}
            <div style={{ flex: 1, display: "flex", flexDirection: "row-reverse", gap: 16, alignItems: "flex-end" }}>
              <div style={{ position: "relative", width: 110, height: 130, flexShrink: 0 }}>
                <Image src={IMG.rightnngcc} alt="남예준 sd" fill style={{ objectFit: "contain", objectPosition: "bottom" }} />
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, fontSize: 11.5, lineHeight: 2, color: "var(--muted)", textAlign: "right", fontFamily: font }}>
                {CHAR_B.features.map((f) => <li key={f}>— {f}</li>)}
              </ul>
            </div>
          </div>

        </div>

        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a
            href="/"
            style={{
              display: "inline-block",
              padding: "10px 32px",
              fontSize: 11,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--muted)",
              border: "1px solid var(--border)",
              borderRadius: 999,
              textDecoration: "none",
              fontFamily: font,
              transition: "all .2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "var(--fg)";
              e.currentTarget.style.borderColor = "var(--divider)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "var(--muted)";
              e.currentTarget.style.borderColor = "var(--border)";
            }}
          >
            ← Main
          </a>
          <p style={{ marginTop: 20, fontSize: 11, color: "var(--muted)", letterSpacing: "0.04em" }}>
            보는 사람을 기준으로 합니다. 색에 민감하지 않습니다.
          </p>
        </div>
      </main>
    </>
  );
}
