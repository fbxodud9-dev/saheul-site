import React, { useState } from "react";
import {
  ArrowRight,
  Check,
  ExternalLink,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";

const TEMPLATES = [
  {
    id: "shop",
    label: "쇼핑몰",
    name: "제철상자",
    desc: "상품 진열, 장바구니, 결제 흐름까지 갖춘 온라인 판매 사이트",
    gradient: "linear-gradient(135deg, #E8A87C 0%, #8E2A4C 65%, #4A1830 100%)",
    status: "live",
    statusLabel: "미리보기 가능",
    url: "https://shop-site-rosy.vercel.app",
  },
  {
    id: "cafe",
    label: "카페",
    name: "온기로스터리",
    desc: "메뉴, 매장 소개, 예약/주문 링크 중심의 감성적인 카페 사이트",
    gradient: "linear-gradient(135deg, #D7C4A3 0%, #8B6A4A 65%, #4A3626 100%)",
    status: "live",
    statusLabel: "미리보기 가능",
    url: "https://cafe-site-bay-one.vercel.app",
  },
  {
    id: "clinic",
    label: "병원",
    name: "다온의원",
    desc: "진료 안내, 예약, 의료진 소개 중심의 신뢰감 있는 병원 사이트",
    gradient: "linear-gradient(135deg, #A9C6D8 0%, #3E6B8A 65%, #1B3A4F 100%)",
    status: "live",
    statusLabel: "미리보기 가능",
    url: "https://clinic-site-seven-rouge.vercel.app",
  },
];

const STEPS = [
  {
    n: "01",
    title: "상담 & 기획",
    desc: "업종, 원하는 분위기, 꼭 필요한 기능을 짧은 통화나 채팅으로 확인해요.",
  },
  {
    n: "02",
    title: "제작 (1~3일)",
    desc: "업종별 템플릿을 기반으로 로고, 사진, 문구를 반영해 빠르게 완성해요.",
  },
  {
    n: "03",
    title: "오픈 & 운영관리",
    desc: "도메인 연결까지 마치고, 이후 수정·관리도 매달 챙겨드려요.",
  },
];

export default function ShowcaseLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTemplate, setActiveTemplate] = useState(TEMPLATES[0]);

  return (
    <div
      style={{
        background: "#F5F2EC",
        color: "#14213D",
        minHeight: "100vh",
        fontFamily: "'Inter', 'Noto Sans KR', sans-serif",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@500&display=swap');
        .disp { font-family: 'Space Grotesk', sans-serif; }
        .mono { font-family: 'JetBrains Mono', monospace; }
        .nav-link { position: relative; }
        .nav-link::after {
          content: ''; position: absolute; left: 0; bottom: -4px;
          width: 0; height: 2px; background: #FF6B4A; transition: width 0.2s ease;
        }
        .nav-link:hover::after { width: 100%; }
        .tmpl-card { transition: transform 0.25s ease, box-shadow 0.25s ease; cursor: pointer; }
        .tmpl-card:hover { transform: translateY(-6px); box-shadow: 0 16px 32px rgba(20,33,61,0.15); }
        .tmpl-card.active { outline: 2px solid #14213D; outline-offset: 3px; }
        .cta-btn { transition: transform 0.15s ease, background 0.15s ease; }
        .cta-btn:hover { transform: translateY(-2px); }
        .step-line { background: repeating-linear-gradient(90deg, #14213D 0 8px, transparent 8px 16px); height: 2px; }
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .menu-btn { display: flex !important; }
          .hero-grid { grid-template-columns: 1fr !important; }
          .tmpl-grid { grid-template-columns: 1fr !important; }
          .steps-grid { grid-template-columns: 1fr !important; }
        }
        .focus-ring:focus-visible { outline: 2px solid #FF6B4A; outline-offset: 2px; }
      `}</style>

      {/* Header */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 40,
          background: "rgba(245,242,236,0.9)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(20,33,61,0.08)",
        }}
      >
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span className="disp" style={{ fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>
            사흘<span style={{ color: "#FF6B4A" }}>.</span>
          </span>

          <nav
            className="nav-desktop"
            style={{ display: "flex", gap: 36, fontSize: 14, fontWeight: 500 }}
          >
            <a href="#templates" className="nav-link" style={{ textDecoration: "none", color: "#14213D" }}>
              템플릿
            </a>
            <a href="#process" className="nav-link" style={{ textDecoration: "none", color: "#14213D" }}>
              진행방식
            </a>
            <a href="#pricing" className="nav-link" style={{ textDecoration: "none", color: "#14213D" }}>
              요금
            </a>
          </nav>

          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="#contact"
              className="cta-btn focus-ring nav-desktop"
              style={{
                background: "#14213D",
                color: "#F5F2EC",
                padding: "10px 20px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                display: "inline-flex",
              }}
            >
              무료 상담 신청
            </a>
            <button
              className="menu-btn focus-ring"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "#14213D",
              }}
              aria-label="메뉴"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div style={{ padding: "0 24px 20px", display: "flex", flexDirection: "column", gap: 14 }}>
            <a href="#templates" style={{ color: "#14213D", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
              템플릿
            </a>
            <a href="#process" style={{ color: "#14213D", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
              진행방식
            </a>
            <a href="#pricing" style={{ color: "#14213D", textDecoration: "none", fontSize: 14, fontWeight: 500 }}>
              요금
            </a>
            <a
              href="#contact"
              style={{
                background: "#14213D",
                color: "#F5F2EC",
                padding: "10px 20px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              무료 상담 신청
            </a>
          </div>
        )}
      </header>

      {/* Hero */}
      <section
        className="hero-grid"
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "80px 24px 60px",
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: 48,
          alignItems: "center",
        }}
      >
        <div>
          <span
            className="mono"
            style={{
              fontSize: 12,
              letterSpacing: "0.1em",
              color: "#FF6B4A",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            소상공인 전용 홈페이지 제작
          </span>
          <h1
            className="disp"
            style={{
              fontSize: "clamp(38px, 5vw, 58px)",
              lineHeight: 1.1,
              fontWeight: 700,
              margin: "18px 0 20px",
              letterSpacing: "-0.02em",
            }}
          >
            우리 가게 홈페이지,
            <br />
            사흘이면 됩니다
          </h1>
          <p style={{ fontSize: 16, color: "#4A5568", lineHeight: 1.7, maxWidth: 460 }}>
            기획부터 디자인, 제작까지 며칠씩 기다릴 필요 없어요. 업종별로 다듬어둔
            템플릿에 대표님 가게 이야기만 채우면 사흘 안에 오픈할 수 있어요.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 32, flexWrap: "wrap" }}>
            <a
              href="#templates"
              className="cta-btn focus-ring"
              style={{
                background: "#FF6B4A",
                color: "#14213D",
                padding: "14px 26px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              템플릿 둘러보기 <ArrowRight size={16} />
            </a>
            <a
              href="#contact"
              className="cta-btn focus-ring"
              style={{
                border: "1px solid rgba(20,33,61,0.25)",
                padding: "14px 26px",
                borderRadius: 999,
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                color: "#14213D",
              }}
            >
              무료 상담 신청
            </a>
          </div>
        </div>

        <div style={{ position: "relative", display: "flex", justifyContent: "center" }}>
          <div
            style={{
              width: 220,
              height: 220,
              borderRadius: "50%",
              border: "2px dashed rgba(20,33,61,0.25)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <div
              style={{
                width: 168,
                height: 168,
                borderRadius: "50%",
                background: "#14213D",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "#F5F2EC",
                boxShadow: "0 20px 40px rgba(20,33,61,0.3)",
              }}
            >
              <span className="disp" style={{ fontSize: 40, fontWeight: 700, lineHeight: 1 }}>
                D-3
              </span>
              <span className="mono" style={{ fontSize: 11, marginTop: 8, color: "#FF6B4A" }}>
                완성까지
              </span>
            </div>
            <span
              className="mono"
              style={{
                position: "absolute",
                bottom: -6,
                right: 8,
                background: "#2EC4B6",
                color: "#14213D",
                fontSize: 11,
                fontWeight: 700,
                padding: "5px 12px",
                borderRadius: 999,
              }}
            >
              도메인 포함
            </span>
          </div>
        </div>
      </section>

      {/* Template showcase */}
      <section id="templates" style={{ maxWidth: 1180, margin: "0 auto", padding: "40px 24px 80px" }}>
        <div style={{ marginBottom: 32 }}>
          <span className="mono" style={{ fontSize: 12, color: "#FF6B4A", fontWeight: 600 }}>
            업종별 템플릿
          </span>
          <h2 className="disp" style={{ fontSize: 30, fontWeight: 700, margin: "10px 0 8px" }}>
            우리 업종에 맞는 스타일부터 확인해보세요
          </h2>
          <p style={{ fontSize: 14, color: "#4A5568" }}>
            카드를 눌러보면 미리보기 정보가 아래에 나와요. 다른 업종도 계속 추가하고 있어요.
          </p>
        </div>

        <div className="tmpl-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {TEMPLATES.map((t) => (
            <div
              key={t.id}
              className={"tmpl-card" + (activeTemplate.id === t.id ? " active" : "")}
              onClick={() => {
                setActiveTemplate(t);
                window.open(t.url, "_blank", "noopener,noreferrer");
              }}
              style={{ borderRadius: 18, overflow: "hidden", background: "#fff" }}
            >
              <div style={{ aspectRatio: "4/3", background: t.gradient, position: "relative" }}>
                <span
                  className="mono"
                  style={{
                    position: "absolute",
                    top: 12,
                    left: 12,
                    background: "rgba(245,242,236,0.92)",
                    color: "#14213D",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: 999,
                  }}
                >
                  {t.statusLabel}
                </span>
              </div>
              <div style={{ padding: "16px 18px 20px" }}>
                <span
                  className="mono"
                  style={{ fontSize: 11, color: "#94A0B8", fontWeight: 600, letterSpacing: "0.04em" }}
                >
                  {t.label.toUpperCase()}
                </span>
                <h3 className="disp" style={{ fontSize: 19, fontWeight: 700, margin: "6px 0 8px" }}>
                  {t.name}
                </h3>
                <p style={{ fontSize: 13, color: "#4A5568", lineHeight: 1.6 }}>{t.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Active detail panel */}
        <div
          style={{
            marginTop: 28,
            padding: "24px 28px",
            borderRadius: 18,
            background: "#14213D",
            color: "#F5F2EC",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <div>
            <span className="mono" style={{ fontSize: 11, color: "#2EC4B6", fontWeight: 600 }}>
              선택한 템플릿
            </span>
            <h3 className="disp" style={{ fontSize: 22, fontWeight: 700, margin: "6px 0 4px" }}>
              {activeTemplate.label} · {activeTemplate.name}
            </h3>
            <p style={{ fontSize: 13, color: "rgba(245,242,236,0.75)" }}>{activeTemplate.desc}</p>
          </div>
          {activeTemplate.status === "live" ? (
            <a
              href={activeTemplate.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn focus-ring"
              style={{
                background: "#FF6B4A",
                color: "#14213D",
                padding: "12px 22px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 700,
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                whiteSpace: "nowrap",
              }}
            >
              데모 사이트 보기 <ExternalLink size={14} />
            </a>
          ) : (
            <span
              style={{
                border: "1px solid rgba(245,242,236,0.3)",
                padding: "12px 22px",
                borderRadius: 999,
                fontSize: 13,
                fontWeight: 600,
                whiteSpace: "nowrap",
              }}
            >
              곧 공개돼요
            </span>
          )}
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{ maxWidth: 1180, margin: "0 auto", padding: "20px 24px 80px" }}>
        <span className="mono" style={{ fontSize: 12, color: "#FF6B4A", fontWeight: 600 }}>
          진행 방식
        </span>
        <h2 className="disp" style={{ fontSize: 30, fontWeight: 700, margin: "10px 0 36px" }}>
          상담부터 오픈까지, 딱 3단계
        </h2>

        <div className="steps-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0, alignItems: "start" }}>
          {STEPS.map((s, i) => (
            <React.Fragment key={s.n}>
              <div style={{ padding: "0 20px" }}>
                <span className="disp" style={{ fontSize: 34, fontWeight: 700, color: "rgba(20,33,61,0.18)" }}>
                  {s.n}
                </span>
                <h3 className="disp" style={{ fontSize: 18, fontWeight: 700, margin: "10px 0 8px" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: 13.5, color: "#4A5568", lineHeight: 1.65 }}>{s.desc}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" style={{ maxWidth: 1180, margin: "0 auto", padding: "20px 24px 90px" }}>
        <span className="mono" style={{ fontSize: 12, color: "#FF6B4A", fontWeight: 600 }}>
          요금 안내
        </span>
        <h2 className="disp" style={{ fontSize: 30, fontWeight: 700, margin: "10px 0 36px" }}>
          부담 없는 시작, 투명한 운영비
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="tmpl-grid">
          <div style={{ background: "#fff", borderRadius: 18, padding: 32 }}>
            <span className="mono" style={{ fontSize: 12, color: "#94A0B8", fontWeight: 600 }}>
              제작비 (1회)
            </span>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "10px 0 20px" }}>
              <span className="disp" style={{ fontSize: 34, fontWeight: 700 }}>
                30~70만원
              </span>
            </div>
            {["업종별 템플릿 커스터마이징", "1~3일 내 제작 완료", "도메인 연결 지원"].map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, fontSize: 13.5 }}>
                <Check size={16} color="#2EC4B6" /> {f}
              </div>
            ))}
          </div>

          <div style={{ background: "#14213D", color: "#F5F2EC", borderRadius: 18, padding: 32 }}>
            <span className="mono" style={{ fontSize: 12, color: "#2EC4B6", fontWeight: 600 }}>
              월 관리비
            </span>
            <div style={{ display: "flex", alignItems: "baseline", gap: 6, margin: "10px 0 20px" }}>
              <span className="disp" style={{ fontSize: 34, fontWeight: 700 }}>
                3~5만원
              </span>
              <span style={{ fontSize: 13, color: "rgba(245,242,236,0.6)" }}>/월</span>
            </div>
            {["도메인 + 서버 비용 포함", "간단한 텍스트/사진 수정", "장애 발생 시 우선 대응"].map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 10, fontSize: 13.5 }}>
                <Check size={16} color="#FF6B4A" /> {f}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section
        id="contact"
        style={{
          background: "#14213D",
          color: "#F5F2EC",
          padding: "72px 24px",
          textAlign: "center",
        }}
      >
        <MessageCircle size={30} color="#FF6B4A" style={{ marginBottom: 16 }} />
        <h2 className="disp" style={{ fontSize: "clamp(26px, 4vw, 36px)", fontWeight: 700, marginBottom: 12 }}>
          가게 이야기만 들려주세요, 나머지는 사흘이 챙길게요
        </h2>
        <p style={{ fontSize: 14, color: "rgba(245,242,236,0.7)", marginBottom: 28 }}>
          부담 없이 상담부터 시작해보세요. 견적은 무료예요.
        </p>
        <a
          href="mailto:hello@saheul.kr?subject=사흘 무료 상담 신청"
          className="cta-btn focus-ring"
          style={{
            background: "#FF6B4A",
            color: "#14213D",
            padding: "15px 32px",
            borderRadius: 999,
            fontSize: 14,
            fontWeight: 700,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
          }}
        >
          무료 상담 신청하기 <ArrowRight size={16} />
        </a>
      </section>

      <footer style={{ padding: "32px 24px", textAlign: "center", color: "#94A0B8", fontSize: 12, lineHeight: 1.8 }}>
        <div>사흘 (주식회사 로플) · 대표 류태영 · 사업자등록번호 234-86-03114</div>
        <div>경기도 화성시 동탄첨단산업1로 27, 1405호 (영천동, 금강펜테리움 IX타워)</div>
        <div>문의 hello@saheul.kr</div>
      </footer>
    </div>
  );
}
