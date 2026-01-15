# Diary Maker - 제품 요구사항 정의서 (PRD)

## 1. 프로젝트 개요
- **목적**: 바쁜 현대인들이 짧은 단어나 문장만으로 완성도 높은 일기를 작성할 수 있도록 돕는 서비스.
- **핵심 가치**: 시간 절약, 감성 충족, 기록의 습관화.
- **타겟 유저**: 일기를 쓰고 싶지만 시간이 없는 직장인, 글솜씨가 부족해 일기 쓰기가 부담스러운 사람.

## 2. 기술 스택
- **Framework**: Next.js 14+ (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (노트 질감 및 커스텀 디자인 구현)
- **Database & Auth**: Supabase (PostgreSQL, Auth)
- **AI**: Google Gemini API (gemini-1.5-flash or pro)
- **Deploy**: Vercel (예정)

## 3. 핵심 기능 명세

### 3.1. 사용자 계정 (Auth)
- Supabase Auth를 이용한 이메일 가입/로그인.
- (선택) 소셜 로그인 (Google, Kakao).

### 3.2. 일기 생성 (AI Maker)
- **Input**:
  - 날짜 선택.
  - 핵심 키워드 및 단문 입력 (예: "야근, 비 옴, 우산 없음, 편의점 라면").
  - **페르소나(어조) 선택**:
    - 감성적인 (새벽 감성)
    - 담백한 (사실 위주)
    - 귀여운 (이모지, 발랄함)
    - 소설가 (드라마틱한 묘사)
- **Process**: Gemini API를 통해 문맥을 파악하고 자연스러운 일기 생성.
- **Output**: 완성된 일기 텍스트 표시.

### 3.3. 수정 및 피드백 (Edit & Refine)
- 생성된 일기가 마음에 들지 않을 경우 대화형으로 수정 요청.
  - 예: "좀 더 우울한 느낌을 빼줘", "라면 먹은 이야기를 더 자세히 써줘".
- 최종 텍스트 직접 수정 가능.

### 3.4. 일기장 뷰어 (Dashboard)
- **Design**: 실제 종이 노트 질감 배경.
- **Interaction**: `react-pageflip` 등을 활용한 책장 넘기는 애니메이션 효과.
- **List**: 달력 뷰 또는 리스트 뷰로 과거 일기 모아보기.

### 3.5. 공유 및 내보내기
- 작성된 일기를 "폴라로이드" 또는 "노트 페이지" 형태의 이미지로 캡처하여 저장 (html2canvas 활용).

## 4. UI/UX 디자인 가이드
- **폰트**: 손글씨 느낌의 웹 폰트 (예: 나눔손글씨, 강원교육모두체 등).
- **컬러 팔레트**: 
  - 배경: 미색(Cream), 종이 질감 패턴.
  - 텍스트: 잉크색 (Deep Blue, Black, Dark Gray).
  - 포인트: 파스텔톤 형광펜 효과.

## 5. 데이터 구조 (Supabase Schema Draft)
- `users`: id, email, created_at
- `diaries`: id, user_id, content, date, mood, style, created_at, updated_at
