// 프론트 설정 — 비밀값 없음. 백엔드 API 주소와 이벤트 slug 만.
// 배포 시 AW 백엔드 공개 주소로 교체.
window.AIX = {
  API_BASE: "https://vote.jaixlab.com", // AW 백엔드 (CF Tunnel → :8787). CORS allowlist에 aixjun.github.io 등록됨
  EVENT_SLUG: new URLSearchParams(location.search).get("e") || "1h26-kpi",
};
