import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

type ColorType = 'g' | 'y' | 'r' | 'b';
type ScreenType = 'cover' | 'how-to-play' | 'quiz' | 'result';

const questions = [
  {
    id: 1,
    category: '스타일 선호도 / 방향성',
    question: '나는 어떤 사람으로 보이고 싶어?',
    options: [
      { emoji: '💚', text: '맑고 청순한 사람', color: 'g' as ColorType },
      { emoji: '💛', text: '사랑스럽고 귀여운 사람', color: 'y' as ColorType },
      { emoji: '❤️', text: '화려하고 매력적인 사람', color: 'r' as ColorType },
      { emoji: '💙', text: '쿨하고 힙한 사람', color: 'b' as ColorType },
    ],
  },
  {
    id: 2,
    category: '성향의 결',
    question: '내 안의 분위기에 더 가까운 건?',
    options: [
      { emoji: '💛', text: '발랄한 소녀같은', color: 'y' as ColorType },
      { emoji: '❤️', text: '당당하고 존재감 있는', color: 'r' as ColorType },
      { emoji: '💙', text: '자유롭고 트렌디한', color: 'b' as ColorType },
      { emoji: '💚', text: '차분하고 수수한', color: 'g' as ColorType },
    ],
  },
  {
    id: 3,
    category: '인상의 디테일',
    question: '내 분위기에서 더 중요한 결은?',
    options: [
      { emoji: '❤️', text: '성숙+글램', color: 'r' as ColorType },
      { emoji: '💚', text: '자연친화적인 (맑고 자연스러운)', color: 'g' as ColorType },
      { emoji: '💛', text: '사랑스러운 소녀st', color: 'y' as ColorType },
      { emoji: '💙', text: '시크하고 캐주얼한', color: 'b' as ColorType },
    ],
  },
  {
    id: 4,
    category: '색감 찾기',
    question: '나에게 제일 잘 어울릴 것 같은 색감은?',
    options: [
      { emoji: '❤️', text: '비비드하고 쨍한 색감', color: 'r' as ColorType },
      { emoji: '💛', text: '라이트한 파스텔 색감', color: 'y' as ColorType },
      { emoji: '💚', text: '톤다운 뉴트럴 색감', color: 'g' as ColorType },
      { emoji: '💙', text: '딥하고 대비감 있는 색감', color: 'b' as ColorType },
    ],
  },
  {
    id: 5,
    category: '남이 봤을 때 나',
    question: '사람들이 내게 자주 하는 말과 가까운 건?',
    options: [
      { emoji: '💚', text: '차분하다 / 편안하다', color: 'g' as ColorType },
      { emoji: '💙', text: '에너지 넘친다 / 힙하다', color: 'b' as ColorType },
      { emoji: '❤️', text: '자신감 있어 보인다', color: 'r' as ColorType },
      { emoji: '💛', text: '귀엽다 / 사랑스럽다', color: 'y' as ColorType },
    ],
  },
  {
    id: 6,
    category: '스타일링 포인트',
    question: '내 룩에서 더 끌리는 포인트는?',
    options: [
      { emoji: '💚', text: '과하지 않은 깔끔함', color: 'g' as ColorType },
      { emoji: '💛', text: '리본·러플 같은 러블리 포인트', color: 'y' as ColorType },
      { emoji: '❤️', text: '몸매/얼굴을 강조하는 룩', color: 'r' as ColorType },
      { emoji: '💙', text: '레이어드와 유니크한 포인트', color: 'b' as ColorType },
    ],
  },
  {
    id: 7,
    category: '마지막 결정 질문',
    question: '결국 내가 되고 싶은 최종 무드는?',
    options: [
      { emoji: '💚', text: '맑고 수수한 사람', color: 'g' as ColorType },
      { emoji: '💛', text: '사랑스럽고 생기 있는 사람', color: 'y' as ColorType },
      { emoji: '❤️', text: '화려하고 매력있는 사람', color: 'r' as ColorType },
      { emoji: '💙', text: '쿨하고 자유로운 사람', color: 'b' as ColorType },
    ],
  },
];

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('cover');
  const [answers, setAnswers] = useState<ColorType[]>([]);

  const currentQuestionIndex = answers.length;

  // ============= SCREEN 1: COVER =============
  if (currentScreen === 'cover') {
    return (
      <div className="size-full flex items-center justify-center bg-[#F5F5F5]" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="w-full max-w-[393px] h-full bg-[#ffffff] flex flex-col items-center justify-between px-6 py-6">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-8 flex-1 justify-center"
          >
            <div className="px-4 py-2 rounded-full border border-black/20 text-black text-xs">
              나의 추구미 테스트
            </div>

            <div className="grid grid-cols-2 gap-3 w-full max-w-[280px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.4 }}
                className="px-5 py-3 rounded-full bg-green-500/15 backdrop-blur-sm flex items-center justify-center gap-2 border border-green-500/30"
              >
                <span className="text-lg">💚</span>
                <span className="text-black text-sm font-medium">청순</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.4 }}
                className="px-5 py-3 rounded-full bg-yellow-500/15 backdrop-blur-sm flex items-center justify-center gap-2 border border-yellow-500/30"
              >
                <span className="text-lg">💛</span>
                <span className="text-black text-sm font-medium">큐티</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="px-5 py-3 rounded-full bg-red-500/15 backdrop-blur-sm flex items-center justify-center gap-2 border border-red-500/30"
              >
                <span className="text-lg">❤️</span>
                <span className="text-black text-sm font-medium">글램</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="px-5 py-3 rounded-full bg-blue-500/15 backdrop-blur-sm flex items-center justify-center gap-2 border border-blue-500/30"
              >
                <span className="text-lg">💙</span>
                <span className="text-black text-sm font-medium">힙</span>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="flex flex-col items-center gap-3 text-center mt-4"
            >
              <h1 className="text-black text-[32px] font-bold leading-tight">
                1분만에 찾아보는<br />추구미 찾기 테스트
              </h1>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <img
              src="https://i.imgur.com/OxcVRVe.png"
              alt="프로필"
              style={{
                width: '24px',
                height: '24px',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
            />
            <a
              href="https://www.instagram.com/bbeum.e/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#000',
                fontSize: '13px',
                textDecoration: 'none',
                fontWeight: '500',
              }}
            >
              @bbeume
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            onClick={() => setCurrentScreen('how-to-play')}
            className="w-full bg-black text-white font-semibold py-5 rounded-[24px] hover:bg-black/90 transition-colors text-base"
          >
            테스트 시작하기 →
          </motion.button>
        </div>
      </div>
    );
  }

  // ============= SCREEN 2: HOW TO PLAY =============
  if (currentScreen === 'how-to-play') {
    return (
      <div className="size-full flex items-center justify-center bg-[#F5F5F5]" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="w-full max-w-[393px] h-full bg-[#FAFAF9] flex flex-col px-6 py-8 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col gap-2 mb-6"
          >
            <h2 className="text-[#0F0F0F] text-[24px] font-bold">참여 방법</h2>
            <p className="text-[#666] text-[15px] leading-relaxed mt-2">
              각 질문에서 가장 끌리는 답변의 색을 골라주세요!<br />
              8개의 선택이 모두 쌓이면 나의 추구미 조합이 완성된답니다✨
            </p>
          </motion.div>

          <div className="flex flex-col gap-3 mb-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="bg-white border border-[#E8E8E4] rounded-2xl px-5 py-4 flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-[#0F0F0F] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
                1
              </div>
              <div className="text-[#0F0F0F] text-[14px] font-medium">
                고민 오래하지 말고, 직감대로 고르기
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.4 }}
              className="bg-white border border-[#E8E8E4] rounded-2xl px-5 py-4 flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-[#0F0F0F] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
                2
              </div>
              <div className="text-[#0F0F0F] text-[14px] font-medium">
                문항마다 1개 선택
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="bg-white border border-[#E8E8E4] rounded-2xl px-5 py-4 flex items-center gap-3"
            >
              <div className="w-8 h-8 bg-[#0F0F0F] rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
                3
              </div>
              <div className="text-[#0F0F0F] text-[14px] font-medium">
                메인 + 서브 결과 확인
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white border border-[#E8E8E4] rounded-2xl p-5 mb-5"
          >
            <div className="text-[#888] text-xs font-semibold mb-3 uppercase tracking-wide">컬러 종류</div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">💚</span>
                <span className="text-[#0F0F0F] text-sm font-medium">청순</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💛</span>
                <span className="text-[#0F0F0F] text-sm font-medium">큐티</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">❤️</span>
                <span className="text-[#0F0F0F] text-sm font-medium">글램</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💙</span>
                <span className="text-[#0F0F0F] text-sm font-medium">힙</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-[#F7F7F7] border border-[#E8E8E4] rounded-2xl px-4 py-3 mb-6"
          >
            <p className="text-xs text-[#666] leading-relaxed">
              <span className="font-semibold text-[#0F0F0F]">예시)</span> 💚가 가장 많고 ❤️가 두 번째라면<br />
              → 청순 메인 + 글램 서브
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            onClick={() => {
              setAnswers([]);
              setCurrentScreen('quiz');
            }}
            className="w-full bg-[#0F0F0F] text-white font-semibold py-5 rounded-[24px] hover:bg-[#1a1a1a] transition-colors mt-auto"
          >
            시작하기
          </motion.button>
        </div>
      </div>
    );
  }

  // ============= SCREEN 3: QUIZ =============
  if (currentScreen === 'quiz') {
    const currentQuestion = questions[currentQuestionIndex];
    if (!currentQuestion) return null;

    const progress = ((currentQuestionIndex + 1) / questions.length) * 100;

    const colorClasses = {
      g: { bg: 'bg-green-100' },
      y: { bg: 'bg-yellow-100' },
      r: { bg: 'bg-red-100' },
      b: { bg: 'bg-blue-100' },
    };

    return (
      <div className="size-full flex items-center justify-center bg-[#F5F5F5]" style={{ fontFamily: 'Inter, sans-serif' }}>
        <div className="w-full max-w-[393px] h-full bg-[#FAFAF9] flex flex-col">
          <div className="px-6 pt-6 pb-4">
            <div className="flex items-center justify-between mb-4">
              <button
                onClick={() => {
                  if (answers.length === 0) {
                    setCurrentScreen('how-to-play');
                  } else {
                    setAnswers(answers.slice(0, -1));
                  }
                }}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-black/5 transition-colors"
              >
                <ArrowLeft className="w-5 h-5 text-[#0F0F0F]" />
              </button>
              <span className="text-sm font-medium text-[#666]">
                {currentQuestionIndex + 1} / {questions.length}
              </span>
              <div className="w-10" />
            </div>

            <div className="w-full h-1 bg-[#E8E8E4] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-[#0F0F0F]"
              />
            </div>
          </div>

          <div className="flex-1 px-6 pb-6 flex flex-col overflow-y-auto">
            <motion.div
              key={currentQuestion.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6 flex-1"
            >
              <div className="flex flex-col gap-2">
                <div className="text-xs uppercase text-[#888] tracking-wider">
                  {currentQuestion.category}
                </div>
                <h2 className="text-[#0F0F0F] text-xl font-bold leading-tight">
                  {currentQuestion.question}
                </h2>
              </div>

              <div className="flex flex-col gap-3 flex-1">
                {currentQuestion.options.map((option, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                    onClick={() => {
                      const newAnswers = [...answers, option.color];
                      setAnswers(newAnswers);
                      if (newAnswers.length === questions.length) {
                        setTimeout(() => setCurrentScreen('result'), 300);
                      }
                    }}
                    className="w-full bg-white border-[1.5px] border-[#E8E8E4] rounded-[20px] px-5 py-[18px] flex items-center gap-4 hover:border-[#0F0F0F] hover:bg-[#F7F7F5] transition-all text-left group"
                  >
                    <div className={`w-[42px] h-[42px] ${colorClasses[option.color].bg} rounded-xl flex items-center justify-center text-xl shrink-0`}>
                      {option.emoji}
                    </div>
                    <span className="text-[#0F0F0F] text-sm font-medium flex-1">
                      {option.text}
                    </span>
                  </motion.button>
                ))}
              </div>

              <div className="text-center py-4">
                <p className="text-xs text-[#AAAAAA]">가장 끌리는 컬러 하나만 골라봐</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  // ============= SCREEN 4: RESULT =============
  if (currentScreen === 'result') {
    // Count colors
    let gCount = 0, yCount = 0, rCount = 0, bCount = 0;
    for (let i = 0; i < answers.length; i++) {
      if (answers[i] === 'g') gCount++;
      if (answers[i] === 'y') yCount++;
      if (answers[i] === 'r') rCount++;
      if (answers[i] === 'b') bCount++;
    }

    const counts = [
      { color: 'g', count: gCount },
      { color: 'y', count: yCount },
      { color: 'r', count: rCount },
      { color: 'b', count: bCount },
    ];
    counts.sort((a, b) => b.count - a.count);

    const mainColor = counts[0].color;
    // If second highest count is 0, sub = main (user only selected one color)
    const subColor = counts[1].count > 0 ? counts[1].color : mainColor;

    const typeData: Record<string, any> = {
      g: { name: '청순', emoji: '💚', bg: '#0F2419', text: '#6DEBA8', lightBg: '#F0F9F5', chipBg: '#E3F5ED' },
      y: { name: '큐티', emoji: '💛', bg: '#2A2000', text: '#FFD84D', lightBg: '#FFFCF0', chipBg: '#FFF6D9' },
      r: { name: '글램', emoji: '❤️', bg: '#2A0A10', text: '#FF6B80', lightBg: '#FFF5F7', chipBg: '#FFE8ED' },
      b: { name: '힙', emoji: '💙', bg: '#0A1A2E', text: '#5AADFF', lightBg: '#F5F8FC', chipBg: '#E8F1FA' },
    };

    const combos: Record<string, string> = {
      gg: '맑고 정돈된 정석 무드',
      gy: '사랑스러움 한 방울',
      gr: '여리한데 화려함 있음',
      gb: '편안한데 감각적임',
      yg: '귀엽고 맑은 타입',
      yy: '발랄한 러블리 무드',
      yr: '러블리한 존재감이 매력',
      yb: '귀엽지만 트렌디하고 쿨한',
      rg: '화려한데 맑은 인상이 남는 타입',
      ry: '통통 튀는 글램 무드',
      rr: '강렬한 존재감이 중심',
      rb: '센스 있고 화려한 트렌디 무드',
      bg: '꾸안꾸 감성의 편안한 무드',
      by: '자유로운 러블리 무드',
      br: '트렌디한 존재감',
      bb: '쿨하고 개성 강한 무드',
    };

    const resultDetails: Record<string, any> = {
      gg: {
        title: '나의 무드 분석',
        mainMood: {
          label: '메인 무드 (💚 청순)',
          description: '꾸밈이 없는 쪽이 오히려 더 선명해지는 타입. 차분하고 맑은 인상이 자연스럽게 앞으로 나오고, 덜어낼수록 무드가 또렷해져.',
          points: ['클린코어', '청순코어', '은은한 무드', '꾸안꾸'],
        },
        subPoint: {
          label: '서브 포인트 (💚 청순)',
          description: '청순한 결이 한 겹 더 쌓이면서 여리고 정갈한 인상이 더욱 선명해져. 아무것도 안 한 것 같은데 맑게 빛나는 느낌, 그게 이 타입의 가장 큰 무기야.',
          points: ['퓨어한 느낌', '클린한 인상', '미니멀', '내추럴'],
        },
        stylingHint: {
          label: '스타일링 힌트',
          description: '화이트, 크림, 라이트 베이지, 뮤트 그레이처럼 맑고 가벼운 컬러가 이 무드를 가장 잘 살려줘. 셔츠나 블라우스처럼 라인이 정돈된 아이템 위주로, 포인트는 딱 하나만 조용하게. 메이크업은 투명한 피부 베이스에 음영을 살짝 얹는 방향으로.',
          points: ['화이트 셔츠', '뮤트 가디건', '촉촉한 베이스', '누드 핑크 립', '클린 실루엣', '미니멀 주얼'],
        },
      },
      gy: {
        title: '나의 무드 분석',
        mainMood: {
          label: '메인 무드 (💚 청순)',
          description: '맑고 정돈된 인상이 바탕에 깔리는 타입. 차분하고 깨끗한 첫인상인데, 딱딱하지 않고 화사하고 사랑스러운 분위기가 자연스럽게 함께 나와.',
          points: ['발레코어', '여리여리한', '화사한 무드', '맑은 첫인상'],
        },
        subPoint: {
          label: '서브 포인트 (💛 큐티)',
          description: '큐티한 결이 더해질수록 맑은 인상이 더 생기 있고 사랑스럽게 살아나. 러블리한 디테일이 한 스푼 들어갈 때 가장 자연스럽게 빛나는 조합이야.',
          points: ['걸리시코어', '러블리한 느낌', '생기발랄', '사랑스러운 분위기'],
        },
        stylingHint: {
          label: '스타일링 힌트',
          description: '크림 원피스, 파스텔 블라우스, 리본이나 러플 디테일처럼 여리하고 사랑스러운 아이템이 잘 맞아. 크림, 아이보리, 소프트 핑크 계열을 중심으로 컬러를 맞춰주고, 메이크업은 생기 있는 블러셔와 소프트 핑크 립으로 마무리.',
          points: ['크림 원피스', '리본 포인트', '파스텔 가디건', '생기 블러셔', '소프트 핑크 립', '헤어핀'],
        },
      },
      gr: {
        title: '나의 무드 분석',
        mainMood: {
          label: '메인 무드 (💚 청순)',
          description: '맑고 정돈된 인상이 중심인 타입. 차분하고 깨끗한데 수수하기만 한 건 아니고, 은근히 품위 있는 인상이 자연스럽게 배어 나와.',
          points: ['아카데믹코어', '정갈한 인상', '품위 있는 무드', '맑은 여성미'],
        },
        subPoint: {
          label: '서브 포인트 (❤️ 글램)',
          description: '글램 포인트가 더해지면서 여리한 인상 안에 선명함이 살아나. 과하지 않게 딱 한 군데만 확실하게 잡아줄 때 가장 세련돼 보여.',
          points: ['올드머니코어', '세련된 화려함', '또렷한 포인트', '고급스러운 분위기'],
        },
        stylingHint: {
          label: '스타일링 힌트',
          description: '뮤트 핑크 블라우스, 라인감 있는 원피스처럼 여성스럽고 정돈된 실루엣을 중심으로 잡아. 버건디나 골드 포인트를 작게 넣어주면 더 세련돼 보이고, 메이크업은 맑은 피부 표현과 정돈된 눈매로 마무리.',
          points: ['뮤트 핑크 블라우스', '라인감 원피스', '버건디 포인트', '맑은 피부 표현', '정돈된 눈매', '골드 주얼'],
        },
      },
      gb: {
        title: '나의 무드 분석',
        mainMood: {
          label: '메인 무드 (💚 청순)',
          description: '편안하고 깔끔한 인상이 기본이 되는 타입. 차분하고 수수해 보이지만, 감각적인 느낌이 은근히 따라오는 무드야.',
          points: ['미니멀코어', '깔끔한 인상', '차분한 분위기', '수수한 감각'],
        },
        subPoint: {
          label: '서브 포인트 (💙 힙)',
          description: '힙한 결이 더해지면서 꾸안꾸 감성이 확 살아나. 강한 스트릿보다는 무심하고 자연스러운 캐주얼 쪽에서 매력이 더 잘 드러나.',
          points: ['캐주얼 힙', '무심한 쿨함', '레이어드 코디', '데일리 힙'],
        },
        stylingHint: {
          label: '스타일링 힌트',
          description: '오버핏 셔츠, 와이드 데님처럼 편안하고 깔끔한 아이템이 베이스야. 캡모자나 실버 링으로 포인트를 작게 주고, 메이크업은 자연스러운 베이스 중심으로 가볍게 마무리하는 게 잘 맞아.',
          points: ['오버핏 셔츠', '와이드 데님', '캡모자', '실버 링', '무결점 베이스', '스니커즈'],
        },
      },
      yg: {
        title: '나의 무드 분석',
        mainMood: {
          label: '메인 무드 (💛 큐티)',
          description: '귀엽고 밝은 분위기가 중심이 되는 타입. 친근하고 사랑스러운 인상이 먼저 오는데, 가볍거나 유치하지 않고 맑고 정돈된 느낌이 함께 따라와.',
          points: ['큐티코어', '밝은 생기', '사랑스러운 인상', '친근한 매력'],
        },
        subPoint: {
          label: '서브 포인트 (💚 청순)',
          description: '청순한 결이 더해지면서 러블리한 무드가 더 맑고 정갈하게 정리돼. 귀여운 인상이 더 호감형으로 읽히는 조합이야.',
          points: ['청초한 느낌', '맑은 정돈감', '호감형 분위기', '깨끗한 러블리'],
        },
        stylingHint: {
          label: '스타일링 힌트',
          description: '소프트 핑크 니트, 플레어 스커트처럼 귀엽고 여리한 아이템이 잘 맞아. 크림, 소프트 핑크처럼 맑은 컬러를 중심으로 맞춰주고, 메이크업은 연핑크 립에 맑은 피부 베이스로 자연스럽게 마무리해.',
          points: ['소프트 핑크 니트', '플레어 스커트', '크림 컬러', '맑은 피부 베이스', '연핑크 립', '작고 귀여운 주얼'],
        },
      },
      yy: {
        title: '나의 무드 분석',
        mainMood: {
          label: '메인 무드 (💛 큐티)',
          description: '발랄하고 러블리한 인상이 전면에 드러나는 타입. 밝고 친근한 에너지가 자연스럽게 앞으로 나오고, 있는 그대로가 가장 사랑스럽게 보여.',
          points: ['파스텔코어', '소녀 감성', '발랄한 에너지', '러블리 인상'],
        },
        subPoint: {
          label: '서브 포인트 (💛 큐티)',
          description: '큐티한 결이 한 번 더 강조되면서 사랑스럽고 생기 있는 분위기가 더 선명해져. 귀여운 디테일이 많이 들어갈수록 자연스럽게 빛나는 타입이야.',
          points: ['달달한 무드', '귀여운 디테일', '생기 있는 컬러감', '사랑스러운 포인트'],
        },
        stylingHint: {
          label: '스타일링 힌트',
          description: '파스텔 원피스, 러플 블라우스처럼 귀여운 아이템과 궁합이 좋아. 한두 개만 포인트로 주고 나머지는 깔끔하게 정리하면 더 예뻐. 메이크업은 생기 있는 치크에 촉촉한 립으로 마무리.',
          points: ['파스텔 원피스', '러플 블라우스', '리본 헤어', '생기 치크', '촉촉한 립', '마카롱 컬러 백'],
        },
      },
      yr: {
        title: '나의 무드 분석',
        mainMood: {
          label: '메인 무드 (💛 큐티)',
          description: '밝고 사랑스러운 인상이 기본이 되는 타입. 친근하고 러블리한 분위기가 먼저 오는데, 그 안에 또렷하고 매력적인 포인트가 자연스럽게 살아나.',
          points: ['로맨틱코어', '또렷한 매력', '생기 있는 무드', '밝은 인상'],
        },
        subPoint: {
          label: '서브 포인트 (❤️ 글램)',
          description: '글램 무드가 더해지면서 귀여움이 더 화려하고 완성도 있게 보여. 러블리한 베이스에 자신감 있는 포인트가 들어갈 때 훨씬 빛나는 조합이야.',
          points: ['화사한 글램', '비비드한 포인트', '자신감 있는 무드', '러블리 글램'],
        },
        stylingHint: {
          label: '스타일링 힌트',
          description: '슬림한 원피스나 핏이 잡힌 상의처럼 러블리함과 존재감을 같이 살리는 아이템이 좋아. 핑크, 코랄 베이스에 선명한 립 컬러로 포인트를 주고, 눈매도 조금 더 또렷하게 잡아주는 게 핵심이야.',
          points: ['슬림 원피스', '코랄 포인트', '핑크 톤 코디', '선명한 립', '또렷한 눈매', '볼드 이어링'],
        },
      },
      yb: {
        title: '나의 무드 분석',
        mainMood: {
          label: '메인 무드 (💛 큐티)',
          description: '밝고 발랄한 분위기가 중심인 타입. 귀엽고 친근한 인상인데, 단순히 러블리하기만 한 게 아니라 트렌디하고 요즘스러운 감각이 같이 따라와.',
          points: ['Y2K코어', '발랄한 무드', '트렌디한 감각', '귀여운 인상'],
        },
        subPoint: {
          label: '서브 포인트 (💙 힙)',
          description: '힙한 결이 더해지면서 큐티 무드가 더 감각적이고 요즘스럽게 읽혀. 파스텔만 쓰는 게 아니라 쿨한 포인트를 섞어줄 때 더 입체적으로 보여.',
          points: ['쿨한 큐티', '요즘 감성', '개성 있는 코디', '감각적인 귀여움'],
        },
        stylingHint: {
          label: '스타일링 힌트',
          description: '러블리한 상의에 와이드 팬츠를 매치하거나, 귀여운 그래픽 티에 청키 스니커즈를 더하는 식처럼 상반된 요소를 섞는 게 좋아. 파스텔만 쓰기보다 데님이나 그레이를 함께 섞어주면 더 세련돼 보여.',
          points: ['그래픽 티', '와이드 팬츠', '데님 믹스', '청키 스니커즈', '파스텔 포인트', '레이어드 목걸이'],
        },
      },
      rg: {
        title: '나의 무드 분석',
        mainMood: {
          label: '메인 무드 (❤️ 글램)',
          description: '또렷하고 존재감 있는 인상이 중심인 타입. 스타일링을 했을 때 힘을 잘 받고, 시선이 자연스럽게 모이는 분위기야.',
          points: ['페미닌코어', '또렷한 인상', '시선 가는 무드', '세련된 존재감'],
        },
        subPoint: {
          label: '서브 포인트 (💚 청순)',
          description: '청순한 결이 더해지면서 화려함이 부담 없이 맑게 정돈돼. 강한 무드만 남는 게 아니라 깨끗하고 우아한 인상으로 읽히는 게 가장 큰 강점이야.',
          points: ['맑고 세련된', '부담 없는 화려함', '정제된 여성미', '고급스러운 청순'],
        },
        stylingHint: {
          label: '스타일링 힌트',
          description: '라인감 있는 원피스나 슬림한 상의를 베이스로 두고, 컬러는 화이트, 베이지, 뮤트 핑크처럼 맑은 쪽으로 눌러줘. 메이크업도 피부 표현과 눈매를 깨끗하게 정리하면 더 고급스럽게 보여.',
          points: ['라인감 원피스', '슬림한 상의', '뮤트 핑크', '세미 음영', '맑은 피부 표현', '정제된 액세서리'],
        },
      },
      ry: {
        title: '나의 무드 분석',
        mainMood: {
          label: '메인 무드 (❤️ 글램)',
          description: '당차고 화려한 인상이 중심이 되는 타입. 존재감이 분명하고 스타일링을 했을 때 분위기가 또렷하게 살아나는 편이야.',
          points: ['화려한 인상', '분명한 존재감', '당찬 분위기', '선명한 컬러감'],
        },
        subPoint: {
          label: '서브 포인트 (💛 큐티)',
          description: '큐티한 포인트가 더해지면 글램 무드가 너무 세거나 차갑지 않게 보정돼. 사랑스럽고 화사한 요소가 들어갈수록 화려함이 더 매력적으로 읽혀.',
          points: ['러블리 포인트', '화사한 보정', '부드러운 화려함', '매력적인 글램'],
        },
        stylingHint: {
          label: '스타일링 힌트',
          description: '글램한 실루엣은 유지하되 리본 디테일, 핑크나 코랄 립처럼 사랑스러운 요소를 한 스푼 넣는 방식이 좋아. 너무 강하게만 가기보다 귀여운 무드를 섞는 게 핵심이야.',
          points: ['슬림 원피스', '리본 디테일', '핑크 포인트', '코랄 립', '볼륨 헤어', '반짝이는 주얼'],
        },
      },
      rr: {
        title: '나의 무드 분석',
        mainMood: {
          label: '메인 무드 (❤️ 글램)',
          description: '강렬한 존재감과 자신감이 중심인 타입. 또렷한 인상, 선명한 컬러, 화려한 스타일링을 가장 잘 소화하는 축이야.',
          points: ['글램코어', '강렬한 존재감', '자신감 넘치는 무드', '쨍한 인상'],
        },
        subPoint: {
          label: '서브 포인트 (❤️ 글램)',
          description: '글램한 결이 한 번 더 겹치면서 분위기가 더 선명하고 강해져. 확실하게 분위기를 잡아줄 때 가장 빛나는 타입이야.',
          points: ['비비드한 컬러감', '확실한 포인트', '고급스러운 화려함', '강한 무드'],
        },
        stylingHint: {
          label: '스타일링 힌트',
          description: '비비드한 컬러, 존재감 있는 실루엣, 강한 립, 볼드한 액세서리처럼 확실하게 눈에 띄는 요소와 잘 맞아. 전체를 다 세게 가기보다 한두 포인트를 중심으로 잡아주는 편이 더 고급스럽게 보여.',
          points: ['비비드 컬러', '볼드 액세서리', '강한 립', '하이힐', '대비 있는 컬러', '또렷한 실루엣'],
        },
      },
      rb: {
        title: '나의 무드 분석',
        mainMood: {
          label: '메인 무드 (❤️ 글램)',
          description: '화려하고 시선이 집중되는 분위기가 중심인 타입. 존재감이 뚜렷하고 스타일링했을 때 무드가 확실하게 살아나는 편이야.',
          points: ['쨍한 컬러감', '눈에 띄는 인상', '확실한 존재감', '꾸꾸꾸의 정석'],
        },
        subPoint: {
          label: '서브 포인트 (💙 힙)',
          description: '힙한 결이 더해지면서 글램 무드가 더 요즘스럽고 감각적으로 보여. 단순히 화려한 게 아니라 쿨하고 센스 있는 느낌이 함께 들어오면서 완성도가 높아져.',
          points: ['쿨한 글램', '힙한 화려함', '트렌디한 글램', '감각적인 조합'],
        },
        stylingHint: {
          label: '스타일링 힌트',
          description: '슬림한 상의나 글램한 원피스에 가죽 재킷, 와이드 팬츠, 볼드한 실버 액세서리처럼 힙한 요소를 섞어봐. 블랙, 버건디, 딥네이비 같은 딥한 컬러와 잘 맞고, 소재 믹스도 좋다.',
          points: ['가죽 재킷', '와이드 팬츠', '실버 액세서리', '딥 컬러', '소재 믹스', '쿨한 레이어드'],
        },
      },
      bg: {
        title: '나의 무드 분석',
        mainMood: {
          label: '메인 무드 (💙 힙)',
          description: '트렌디하고 자유로운 분위기가 중심인 타입. 무심하고 감각적인 인상이 자연스럽게 살아나는 편이야.',
          points: ['미니멀코어', '깔끔한 인상', '차분한 분위기', '수수한 감각'],
        },
        subPoint: {
          label: '서브 포인트 (💚 청순)',
          description: '청순한 결이 더해지면서 힙한 분위기가 편안하고 호감형으로 정리돼. 세 보이기보다 자연스럽게 스타일 있어 보이는 조합이야.',
          points: ['캐주얼 힙', '무심한 쿨함', '레이어드 코디', '데일리 힙'],
        },
        stylingHint: {
          label: '스타일링 힌트',
          description: '오버핏 셔츠, 와이드 데님처럼 편안하고 깔끔한 아이템이 베이스야. 캡모자나 실버 링으로 포인트를 작게 주고, 메이크업은 자연스러운 베이스 중심으로 가볍게 마무리하는 게 잘 맞아.',
          points: ['오버핏 셔츠', '와이드 데님', '캡모자', '실버 링', '무결점 베이스', '스니커즈'],
        },
      },
      by: {
        title: '나의 무드 분석',
        mainMood: {
          label: '메인 무드 (💙 힙)',
          description: '자유롭고 감각적인 분위기가 중심인 타입. 개성 있고 트렌디한 무드가 먼저 읽히지만, 차갑게만 보이지 않고 친근하게 다가가는 힘이 있어.',
          points: ['힙한 무드', '에너지 있는 인상', '트렌디한 분위기', '개성 있는 스타일'],
        },
        subPoint: {
          label: '서브 포인트 (💛 큐티)',
          description: '큐티한 결이 더해지면서 힙한 스타일이 더 부드럽고 사랑스럽게 보정돼. 센 스트릿보다는 러블리한 생기가 있는 쿨함 쪽이 훨씬 잘 어울려.',
          points: ['부드러운 쿨함', '친근한 힙', '생동감 있는 개성', '쿨&러블리'],
        },
        stylingHint: {
          label: '스타일링 힌트',
          description: '크롭티나 와이드 팬츠처럼 힙한 아이템 위에 파스텔 포인트, 헤어핀, 귀여운 백을 얹어봐. 딥한 컬러와 밝은 컬러를 섞는 조합도 잘 받고, 한 군데는 꼭 부드러운 요소를 두는 게 좋아.',
          points: ['크롭 티', '와이드 팬츠', '파스텔 포인트', '헤어핀', '귀여운 백', '스니커즈'],
        },
      },
      br: {
        title: '나의 무드 분석',
        mainMood: {
          label: '메인 무드 (💙 힙)',
          description: '트렌디하고 시크한 분위기가 중심인 타입. 스타일링에서 감각이 자연스럽게 보이고, 평범한 룩도 좀 더 쿨하게 소화하는 타입이야.',
          points: ['다크코어', '시크한 인상', '쿨한 무드', '세련된 스타일'],
        },
        subPoint: {
          label: '서브 포인트 (❤️ 글램)',
          description: '글램 포인트가 더해지면서 존재감이 강해지고 힙한 무드가 더 화려하고 선명하게 살아나. 차갑고 밋밋한 힙이 아니라, 시선이 가는 트렌디함으로 읽히는 조합이야.',
          points: ['강한 존재감', '선명한 무드', '화려한 포인트', '시선 가는 트렌디함'],
        },
        stylingHint: {
          label: '스타일링 힌트',
          description: '딥한 컬러, 가죽 소재, 타이트한 상의처럼 존재감 있는 요소가 잘 받아. 와이드 팬츠와 타이트한 상의를 섞거나, 시크한 아우터를 걸치는 식으로 대비감을 주면 예뻐.',
          points: ['딥 컬러', '가죽 소재', '볼드 액세서리', '타이트 상의', '시크한 아우터', '강한 아이 메이크업'],
        },
      },
      bb: {
        title: '나의 무드 분석',
        mainMood: {
          label: '메인 무드 (💙 힙)',
          description: '쿨하고 개성 있는 무드가 중심인 타입. 자유롭고 에너지 있는 인상이 강하고, 남들과 다른 포인트를 자연스럽게 소화하는 힘이 있어.',
          points: ['스트릿코어', '빈티지코어', '강한 개성', '독보적인 인상'],
        },
        subPoint: {
          label: '서브 포인트 (💙 힙)',
          description: '힙한 결이 한 번 더 겹치면서 스타일 감도가 더 강해져. 데일리룩보다 레이어드, 유니크한 아이템, 강한 무드의 조합에서 존재감이 크게 살아나는 타입이야.',
          points: ['유니크한 아이템', '레이어드 무드', '확실한 포인트', '강한 스타일 감도'],
        },
        stylingHint: {
          label: '스타일링 힌트',
          description: '레이어드, 딥한 컬러, 볼드한 액세서리, 오버핏 아우터, 빈티지 무드가 특히 잘 맞아. 블랙, 차콜, 카키, 메탈릭 포인트로 비율감 있는 실루엣을 주면 더 멋있어 보여.',
          points: ['레이어드 룩', '오버핏 아우터', '블랙 앤 차콜', '빈티지 무드', '메탈릭 포인트', '볼드 벨트'],
        },
      },
    };

    const celebImages: Record<string, Array<{ name: string; image: string }>> = {
      gg: [{ name: '수지', image: 'https://i.imgur.com/ioG7rmv.jpeg' }],
      gy: [{ name: '사나', image: 'https://i.imgur.com/ANVoU2U.jpeg' }],
      gr: [{ name: '설윤', image: 'https://i.imgur.com/v3QErr8.jpeg' }],
      gb: [{ name: '혜인', image: 'https://i.imgur.com/KBIqad3.jpeg' }],

      yg: [{ name: '안유진', image: 'https://i.imgur.com/vXQ3rrB.jpeg' }],
      yy: [{ name: '원희', image: 'https://i.imgur.com/PX2c8Ml.jpeg' }],
      yr: [{ name: '스텔라', image: 'https://i.imgur.com/jxIIsly.jpeg' }],
      yb: [{ name: '레이', image: 'https://i.imgur.com/RvIzHGb.jpeg' }],

      rg: [{ name: '카리나', image: 'https://i.imgur.com/Oj3I8C5.png' }],
      ry: [{ name: '나연', image: 'https://i.imgur.com/kNOK1ak.jpeg' }],
      rr: [{ name: '장원영', image: 'https://i.imgur.com/yQwhP3Z.jpeg' }],
      rb: [{ name: '리사', image: 'https://i.imgur.com/8vQt9PF.jpeg' }],

      bg: [{ name: '한소희', image: 'https://i.imgur.com/qJ387Uj.png' }],
      by: [{ name: '윈터', image: 'https://i.imgur.com/kT16OT7.png' }],
      br: [{ name: '아사', image: 'https://i.imgur.com/bp46sXU.jpeg' }],
      bb: [{ name: '제니', image: 'https://i.imgur.com/ARJuxR9.jpeg' }],
    };

    const main = typeData[mainColor];
    const sub = typeData[subColor];
    const comboKey = mainColor + subColor;
    const comboDesc = combos[comboKey];

    return (
      <div style={{ fontFamily: 'Inter, sans-serif', width: '100%', height: '100svh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', backgroundColor: '#F5F5F5', overflowY: 'auto' }}>
        <div style={{ width: '100%', maxWidth: '393px', minHeight: '100%', backgroundColor: '#F8F8F8' }}>
          <div style={{ padding: '28px 20px 48px', display: 'flex', flexDirection: 'column', gap: '20px' }}>

            {/* SECTION 1: Result Hero Card */}
            <div
              style={{
                background: `linear-gradient(140deg, ${main.lightBg} 0%, ${main.lightBg} 55%, ${sub.lightBg} 100%)`,
                borderRadius: '28px',
                padding: '52px 28px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: `radial-gradient(circle at top right, ${sub.lightBg}90 0%, transparent 65%)`,
                  pointerEvents: 'none',
                }}
              />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div
                  style={{
                    fontSize: '11px',
                    color: '#000',
                    opacity: 0.45,
                    marginBottom: '18px',
                    letterSpacing: '0.8px',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                  }}
                >
                  나의 선택 결과
                </div>

                <div
                  style={{
                    fontSize: '21px',
                    color: '#000',
                    marginBottom: '14px',
                    fontWeight: '600',
                    letterSpacing: '-0.3px',
                  }}
                >
                  {main.emoji} {main.name}(메인) + {sub.emoji} {sub.name}(서브)
                </div>

                <div
                  style={{
                    fontSize: '14px',
                    color: '#000',
                    opacity: 0.7,
                    lineHeight: '1.65',
                    fontWeight: '400',
                  }}
                >
                  {comboDesc}
                </div>
              </div>
            </div>

            {/* SECTION 2: Score Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', justifyContent: 'center', padding: '4px 0' }}>
              {counts.map((item) => {
                const info = typeData[item.color];
                return (
                  <div
                    key={item.color}
                    style={{
                      padding: '9px 17px',
                      borderRadius: '20px',
                      backgroundColor: 'white',
                      border: '1px solid #ECECEC',
                      fontSize: '13px',
                      fontWeight: '500',
                      color: '#1A1A1A',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      boxShadow: '0 1px 3px rgba(0,0,0,0.03)',
                    }}
                  >
                    <span style={{ fontSize: '16px' }}>{info.emoji}</span>
                    <span>{info.name}</span>
                    <span style={{ fontWeight: '700', fontSize: '14px' }}>{item.count}</span>
                  </div>
                );
              })}
            </div>

            {/* SECTION 3: Result Interpretation Card */}
            {resultDetails[comboKey] ? (
              <div style={{ backgroundColor: 'white', border: '1px solid #ECECEC', borderRadius: '24px', padding: '28px 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: '17px', fontWeight: '700', color: '#0F0F0F', marginBottom: '24px' }}>
                  결과 해석
                </div>

                {/* Main Mood Block */}
                <div style={{ marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #F5F5F5' }}>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#0F0F0F', marginBottom: '10px' }}>
                    {resultDetails[comboKey].mainMood.label}
                  </div>
                  <div style={{ fontSize: '13px', color: '#555', lineHeight: '1.75', marginBottom: '12px' }}>
                    {resultDetails[comboKey].mainMood.description}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {resultDetails[comboKey].mainMood.points.map((point: string) => (
                      <span
                        key={point}
                        style={{
                          padding: '7px 13px',
                          backgroundColor: main.chipBg,
                          border: `1px solid ${main.chipBg}`,
                          borderRadius: '16px',
                          fontSize: '12px',
                          color: '#333',
                          fontWeight: '500',
                        }}
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Sub Point Block */}
                <div style={{ marginBottom: '28px', paddingBottom: '24px', borderBottom: '1px solid #F5F5F5' }}>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#0F0F0F', marginBottom: '10px' }}>
                    {resultDetails[comboKey].subPoint.label}
                  </div>
                  <div style={{ fontSize: '13px', color: '#555', lineHeight: '1.75', marginBottom: '12px' }}>
                    {resultDetails[comboKey].subPoint.description}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {resultDetails[comboKey].subPoint.points.map((point: string) => (
                      <span
                        key={point}
                        style={{
                          padding: '7px 13px',
                          backgroundColor: sub.chipBg,
                          border: `1px solid ${sub.chipBg}`,
                          borderRadius: '16px',
                          fontSize: '12px',
                          color: '#333',
                          fontWeight: '500',
                        }}
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Styling Hint Block */}
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '700', color: '#0F0F0F', marginBottom: '10px' }}>
                    {resultDetails[comboKey].stylingHint.label}
                  </div>
                  <div style={{ fontSize: '13px', color: '#555', lineHeight: '1.75', marginBottom: '12px' }}>
                    {resultDetails[comboKey].stylingHint.description}
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {resultDetails[comboKey].stylingHint.points.map((point: string) => (
                      <span
                        key={point}
                        style={{
                          padding: '7px 13px',
                          backgroundColor: '#F5F5F5',
                          border: '1px solid #ECECEC',
                          borderRadius: '16px',
                          fontSize: '12px',
                          color: '#555',
                          fontWeight: '500',
                        }}
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div style={{ backgroundColor: 'white', border: '1px solid #ECECEC', borderRadius: '24px', padding: '28px 24px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                <div style={{ fontSize: '17px', fontWeight: '700', color: '#0F0F0F', marginBottom: '20px' }}>
                  결과 해석
                </div>
                <div style={{ fontSize: '13px', color: '#666', lineHeight: '1.75' }}>
                  이 조합의 상세 해석은 곧 업데이트될 예정이에요.
                </div>
              </div>
            )}

            {/* SECTION 4: Celebrity Reference Section */}
            <div style={{ marginTop: '8px' }}>
              <div style={{ fontSize: '17px', fontWeight: '700', color: '#0F0F0F', marginBottom: '14px' }}>
                이런 무드의 연예인
              </div>
              <div style={{ backgroundColor: 'white', border: '1px solid #ECECEC', borderRadius: '24px', padding: '22px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                {celebImages[comboKey]?.map((celeb, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                    <div style={{
                      width: '160px',
                      height: '213px',
                      borderRadius: '16px',
                      overflow: 'hidden',
                    }}>
                      <img
                        src={celeb.image}
                        alt={celeb.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          objectPosition: 'center top',
                        }}
                      />
                    </div>
                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#1A1A1A' }}>
                      {celeb.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* SECTION 5: Style Reference Section */}
            {(() => {
              const styleHashtags: Record<string, string[]> = {
                gg: ['#화이트셔츠', '#크림팬츠', '#미니멀룩', '#로퍼', '#클린걸', '#누드톤'],
                gy: ['#미니원피스', '#리본디테일', '#발레코어', '#메리제인', '#걸리시룩', '#파스텔톤'],
                gr: ['#블라우스', '#캐주얼룩', '#미니멀주얼리', '#뮤트톤', '#페미닌룩', '#운동화'],
                gb: ['#블라우스', '#와이드팬츠', '#캡모자', '#스니커즈', '#꾸안꾸', '#캐주얼룩'],
                yg: ['#핑크니트', '#플레어스커트', '#러블리코어', '#발레리나플랫', '#파스텔톤', '#소녀감성'],
                yy: ['#레이스디테일', '#리본디테일', '#파스텔톤', '#귀여운백', '#메리제인', '#러블리룩'],
                yr: ['#미니원피스', '#로맨틱룩', '#미니멀주얼리', '#핑크립', '#메리제인', '#딱붙티'],
                yb: ['#블라우스', '#와이드팬츠', '#Y2K', '#깔끔한단화', '#데님믹스', '#스트릿큐티'],
                rg: ['#딱붙티', '#캐주얼룩', '#미니멀주얼리', '#뮤트톤', '#클린걸', '#오프숄더'],
                ry: ['#새틴스커트', '#리본디테일', '#로맨틱룩', '#볼드이어링', '#핑크톤', '#오프숄더'],
                rr: ['#비비드컬러', '#볼드액세서리', '#딱붙티', '#부츠컷팬츠', '#강한립', '#오프숄더'],
                rb: ['#가죽재킷', '#와이드팬츠', '#실버액세서리', '#딥컬러', '#딱붙티', '#부츠'],
                bg: ['#뮤트톤', '#와이드팬츠', '#꾸안꾸', '#로퍼', '#미니멀힙', '#캐주얼룩'],
                by: ['#크롭티', '#와이드팬츠', '#리본디테일', '#Y2K', '#운동화', '#그래픽티'],
                br: ['#딥컬러', '#레이어드룩', '#실버액세서리', '#다크한톤', '#시크한무드', '#부츠'],
                bb: ['#오버핏아우터', '#스포티룩', '#스트릿패션', '#볼드벨트', '#빈티지룩', '#운동화'],
              };
              const tags = styleHashtags[comboKey] || [];
              return (
                <div style={{ marginTop: '8px' }}>
                  <div style={{ fontSize: '17px', fontWeight: '700', color: '#0F0F0F', marginBottom: '14px' }}>
                    스타일 추천
                  </div>
                  <div style={{ backgroundColor: 'white', border: '1px solid #ECECEC', borderRadius: '24px', padding: '22px', boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px' }}>
                      <div style={{ fontSize: '11px', color: '#B0ADA6', fontWeight: '500', letterSpacing: '0.6px' }}>
                        대표 무드
                      </div>
                      {(() => {
                        const styleImages: Record<string, { url: string; label: string }> = {
                          gg: { url: 'https://i.imgur.com/w1CEkvB.png', label: '클린 셔츠룩' },
                          gy: { url: 'https://i.imgur.com/nhroWDk.jpeg', label: '크림 리본룩' },
                          gr: { url: 'https://i.imgur.com/qFCOJP5.png', label: '뮤트 핑크 페미닌룩' },
                          gb: { url: 'https://i.imgur.com/msDSHuL.jpeg', label: '오버핏 데님룩' },
                          yg: { url: 'https://i.imgur.com/OQSxCCx.png', label: '소프트 니트룩' },
                          yy: { url: 'https://i.imgur.com/AZNVulQ.jpeg', label: '파스텔 러블리룩' },
                          yr: { url: 'https://i.imgur.com/buN26XX.jpeg', label: '코랄 슬림룩' },
                          yb: { url: 'https://i.imgur.com/sjwo58J.png', label: '그래픽 캐주얼룩' },
                          rg: { url: 'https://i.imgur.com/xAB185P.jpeg', label: '클린 라인룩' },
                          ry: { url: 'https://i.imgur.com/sRBNPWD.png', label: '핑크 새틴룩' },
                          rr: { url: 'https://i.imgur.com/64zyuxz.jpeg', label: '비비드 글램룩' },
                          rb: { url: 'https://i.imgur.com/U2179O8.jpeg', label: '레더 시크룩' },
                          bg: { url: 'https://i.imgur.com/bbge4a1.jpeg', label: '베이지 배럴룩' },
                          by: { url: 'https://i.imgur.com/xB3zuvJ.jpeg', label: '크롭 Y2K룩' },
                          br: { url: 'https://i.imgur.com/fEA1Qpn.jpeg', label: '딥컬러 레이어드룩' },
                          bb: { url: 'https://i.imgur.com/7XuAhmn.png', label: '빈티지 오버핏룩' },
                        };
                        const styleImg = styleImages[comboKey];
                        return styleImg ? (
                          <div style={{ width: '160px', height: '213px', borderRadius: '16px', overflow: 'hidden' }}>
                            <img src={styleImg.url} alt={styleImg.label} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }} />
                          </div>
                        ) : (
                          <div style={{ width: '160px', height: '213px', backgroundColor: '#F5F4F1', border: '1px dashed #D8D6D0', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#B0ADA6' }}>
                            이미지
                          </div>
                        );
                      })()}
                      <div style={{ fontSize: '14px', fontWeight: '700', color: '#1A1A1A' }}>
                        {main.name} + {sub.name}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', justifyContent: 'center' }}>
                        {tags.map((tag: string) => (
                          <span
                            key={tag}
                            style={{
                              padding: '6px 13px',
                              backgroundColor: '#F0EEE9',
                              borderRadius: '100px',
                              fontSize: '12px',
                              color: '#6B6860',
                              fontWeight: '500',
                              letterSpacing: '0.1px',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}

            {/* SECTION 7: Bottom CTA */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '24px' }}>
              <button
                onClick={() => {
                  setAnswers([]);
                  setCurrentScreen('cover');
                }}
                style={{
                  width: '100%',
                  backgroundColor: '#0F0F0F',
                  color: 'white',
                  fontWeight: '600',
                  padding: '17px',
                  borderRadius: '24px',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '15px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                }}
              >
                다시 테스트하기
              </button>

              <button
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: '나의 추구미 테스트',
                      text: `내 결과: ${main.name} 메인 + ${sub.name} 서브\n${comboDesc}`,
                      url: window.location.href,
                    }).catch(() => {
                      // 사용자가 공유 취소한 경우 무시
                    });
                  } else {
                    // Web Share API 미지원 브라우저
                    alert('이 브라우저는 공유 기능을 지원하지 않습니다.');
                  }
                }}
                style={{
                  width: '100%',
                  backgroundColor: 'white',
                  color: '#0F0F0F',
                  fontWeight: '600',
                  padding: '17px',
                  borderRadius: '24px',
                  border: '1.5px solid #ECECEC',
                  cursor: 'pointer',
                  fontSize: '15px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
                }}
              >
                결과 공유하기 💬
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return null;
}