// API 호출의 base URL.
// 기본값은 nginx/Vite proxy 가 처리하는 동일 출처 /api 경로다.
const API_BASE_URL = import.meta.env.VITE_APP_API_BASE_URL ?? "/api";

export const SERVER_URL = API_BASE_URL;
export const DEFAULT_BBS_ID = "BBSMSTR_AAAAAAAAAAAA"; // default = 공지사항 게시판 아이디
export const NOTICE_BBS_ID = "BBSMSTR_AAAAAAAAAAAA"; // 공지사항 게시판 아이디
export const GALLERY_BBS_ID = "BBSMSTR_BBBBBBBBBBBB"; // 갤러리 게시판 아이디
