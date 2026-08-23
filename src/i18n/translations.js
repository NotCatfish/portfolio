export const translations = {
  en: {
    nav: { work: 'Work', about: 'About', contact: 'Contact', resume: 'Resume' },
    hero: {
      name: 'Indraneel Samanta',
      tagline1: 'Building ',
      tagline2: 'strong foundations',
      tagline3: ' in AI.',
      desc: 'Third-year AI/ML student actively targeting a 2027 tech internship. Combines a solid programming foundation with a focus on mastering Machine Learning and Data Structures.',
      explore: 'Explore Work',
      downloadResume: 'Download Resume'
    },
    about: {
      title: 'Driven by curiosity and logic.',
      p1: 'Currently pursuing my BTech in Artificial Intelligence and Machine Learning at Dwarka Das J Sanghvi College of Engineering (Class of 2028).',
      p2: 'I combine a solid programming foundation in C, C++, and Python with a strong focus on data structures and machine learning. I am actively building my skills and working on practical projects to secure a tech internship in 2027.',
      quote: '"Artificial intelligence must remain a tool for human empowerment. My goal is to architect highly capable systems that are inherently ethical, secure, and strictly aligned with human well-being."',
      core: 'Technical Skills',
      prog: 'Programming',
      data: 'Data & Analytics',
      tools: 'Tools',
      algo: 'Frameworks & Libraries'
    },
    projects: {
      title: 'Selected Work',
      github: 'GitHub →',
      items: [
        {
          title: 'Spotify Listening ML Pipeline',
          category: 'Data Science & Machine Learning',
          description: 'An end-to-end data pipeline processing raw Spotify listening data through SQLite, engineered with Pandas/Plotly for EDA, and featuring an XGBoost classification model.',
          tech: 'Python, Pandas, SQLite, XGBoost, Scikit-Learn',
          link: 'https://github.com/NotCatfish/Spotify-Analytics-Pipeline'
        },
        {
          title: 'Otakufy (Japanese Learning Platform)',
          category: 'Web Development',
          description: 'A comprehensive educational platform designed to help users master Japanese vocabulary, grammar, kanji, and reading comprehension through spaced repetition and interactive quizzes.',
          tech: 'Next.js, React, Tailwind CSS, Supabase, AI-Assisted Development',
          link: 'https://github.com/NotCatfish/Otakufy'
        }
      ]
    },
    contact: {
      subtitle: "What's Next?",
      title: 'Get In Touch',
      desc: 'I am actively targeting a 2027 tech internship and am open to exciting opportunities and collaborations. Whether you have a question or just want to say hi, my inbox is always open.',
      formName: 'Name',
      formEmail: 'Email',
      formMessage: 'Message',
      sendBtn: 'Send Message',
      sendingBtn: 'Sending...',
      sentBtn: 'Message Sent!',
      successMsg: 'Thank you! Your message has been sent successfully.',
      errorMsg: 'Something went wrong. Please try again or use direct email.',
      directEmail: 'Direct Email',
      profNet: 'Professional Networks'
    },
    footer: {
      text: 'DESIGNED WITH 禅 (ZEN) IN MIND'
    },
    resume: {
      name: 'Indraneel Samanta',
      contact: [
        { label: '+91 8879163073', href: 'tel:+918879163073' },
        { label: 'indraneelsamanta2005@gmail.com', href: 'mailto:indraneelsamanta2005@gmail.com' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/indraneel-samanta-724782347' },
        { label: 'GitHub', href: 'https://github.com/NotCatfish' }
      ],
      education: {
        title: 'Education',
        items: [
          {
            school: 'Dwarkadas J. Sanghvi College of Engineering',
            date: 'Expected Graduation: May 2028',
            degree: 'Bachelor of Technology in Artificial Intelligence and Machine Learning (AIML)'
          },
          {
            school: 'Thakur College of Science & Commerce',
            date: 'June 2021 – May 2023',
            degree: 'Computer Science'
          }
        ]
      },
      skills: {
        title: 'Technical Skills',
        items: [
          { category: 'Languages', text: 'Python, C, C++, JavaScript, HTML, CSS, SQL' },
          { category: 'Frameworks & Libraries', text: 'React, Next.js, Tailwind CSS, Pandas, NumPy, Matplotlib, NLTK, TensorRT' },
          { category: 'Tools & Databases', text: 'Supabase (PostgreSQL), Git, GitHub, VS Code, Antigravity IDE' },
          { category: 'Methodologies', text: 'AI-Assisted Development, Applied Prompt Engineering, System Design, Data Structures' },
          { category: 'Spoken Languages', text: 'English, Hindi, Bengali, Japanese (Limited Working), Gujarati, Marathi' }
        ]
      },
      projects: {
        title: 'Technical Projects',
        items: [
          {
            name: 'Spotify ML Pipeline & Data Engineering',
            role: 'Data Science & Machine Learning',
            tech: 'Tech Stack: Python, Pandas, SQLite, XGBoost, Scikit-Learn, Plotly',
            points: [
              'Engineered an end-to-end data pipeline processing raw Spotify listening data into a structured SQLite database for robust querying.',
              'Conducted comprehensive Exploratory Data Analysis (EDA) using Pandas and Plotly to uncover listening trends and user engagement patterns.',
              'Developed and optimized an XGBoost classification model utilizing Scikit-Learn pipelines and hyperparameter tuning to accurately predict track skip behavior.'
            ]
          },
          {
            name: 'Otakufy | Full-Stack Japanese Learning Platform',
            role: 'Web Development',
            tech: 'Tech Stack: Next.js, React, Tailwind CSS, Supabase (PostgreSQL), Applied Prompt Engineering',
            points: [
              'Architected and developed a comprehensive educational web application designed to help users master Japanese vocabulary, grammar, kanji, and reading comprehension (JLPT N5-N1).',
              'Built a modern, serverless architecture separating the frontend presentation layer from the backend database, ensuring rapid load times and seamless dynamic data fetching.',
              'Engineered a highly responsive, animated frontend interface using Next.js and Tailwind CSS, featuring local UI state management, gamified progression systems, and interactive quizzes.',
              'Integrated Supabase to securely handle user authentication and maintain progression data including user XP, levels, streaks, and global leaderboards.',
              'Leveraged AI-assisted development and applied prompt engineering to accelerate system design, generate full-stack boilerplate, and debug complex component architecture.'
            ]
          },
          {
            name: 'Personal Portfolio & Interactive Resume',
            role: 'Web Development',
            tech: 'Tech Stack: React.js, Tailwind CSS, Vite, HTML/CSS',
            points: [
              'Engineered a single-page application (SPA) portfolio using React.js and Vite to showcase software projects and technical competencies.',
              'Implemented dynamic localization (i18n) with context-based state management, allowing instant UI toggling between English and Japanese.',
              'Utilized Tailwind CSS to design a fully responsive, mobile-first interface featuring dynamic dark/light mode theming and interactive components.'
            ]
          }
        ]
      },
      experience: {
        title: 'Experience',
        items: [
          {
            role: 'Artificial Intelligence Intern',
            company: 'Acmegrade',
            date: 'Sep 2025 – Nov 2025',
            points: [
              'Conducted comprehensive Exploratory Data Analysis (EDA) on proprietary datasets to identify underlying trends and user behavior patterns.',
              'Engineered data visualization dashboards to present complex analytical insights to stakeholders.',
              'Designed and trained a predictive Machine Learning classification model to accurately forecast user music genre preferences based on historical listening data.'
            ]
          },
          {
            role: 'Logistics & Events Co-committee',
            company: 'Google Developer Student Club (GDSC) DJSCE',
            date: 'Oct 2025 – Present',
            points: [
              'Led a creative team of 5 students in designing and fabricating technical event props for college-wide tech symposiums.',
              'Managed venue procurement, physical setup, and participant logistics for technical events and hackathons with over 200 attendees.',
              'Executed participant outreach through email marketing campaigns and direct calls.',
              'Selected to manage overnight operations during hackathons, overseeing bedding setups, participant decorum, and venue logistics.',
              'Assisted with initial sponsor outreach and contact.'
            ]
          },
          {
            role: 'Structures Co-committee',
            company: 'DJS Impulse',
            date: 'Sep 2025 – Present',
            points: [
              'Fabricated core structural components for competitive engineering projects utilizing advanced fiberglass layup techniques.',
              'Authored and compiled comprehensive technical documentation and engineering reports, contributing to the team\'s presentation at competitive engineering events.'
            ]
          }
        ]
      },
      certifications: {
        title: 'Certifications',
        items: [
          {
            name: 'Artificial Intelligence Training',
            date: 'Oct 2025',
            issuer: 'Acmegrade (Rendezvous IIT Delhi) | Credential ID: AGC25090066'
          }
        ]
      }
    }
  },
  jp: {
    nav: { work: '実績', about: '自己紹介', contact: '連絡先', resume: '履歴書' },
    hero: {
      name: 'サマンタ・インドラニール',
      tagline1: 'AIの',
      tagline2: '強固な基盤',
      tagline3: 'を構築する。',
      desc: '2027年のテックインターンシップを積極的に目指すAI/MLの3年生。確かなプログラミングの基礎と、機械学習およびデータ構造の習得に重点を置いています。',
      explore: '実績を見る',
      downloadResume: '履歴書をダウンロード'
    },
    about: {
      title: '好奇心と論理への探求。',
      p1: '現在、Dwarka Das J Sanghvi College of Engineeringにて人工知能と機械学習のBTechを取得中（2028年卒業予定）。',
      p2: 'C、C++、Pythonにおける強固なプログラミングの基礎と、データ構造と機械学習への強い焦点を組み合わせています。2027年のテックインターンシップ獲得に向けて、実践的なプロジェクトに取り組みながらスキルを磨いています。',
      quote: '「人工知能は人類に力を与えるためのツールであり続けなければなりません。私の目標は、本質的に倫理的で安全であり、人類の幸福と厳密に一致した、高度な能力を持つシステムを設計することです。」',
      core: '技術スキル',
      prog: 'プログラミング',
      data: 'データと分析',
      tools: 'ツール',
      algo: 'フレームワークとライブラリ'
    },
    projects: {
      title: '厳選された実績',
      github: 'GitHub →',
      items: [
        {
          title: 'Spotify視聴履歴データ・MLパイプライン',
          category: 'データサイエンス・機械学習',
          description: '生のSpotify視聴データをSQLite経由で処理するエンドツーエンドのデータパイプライン。PandasとPlotlyを用いたEDAと、XGBoost分類モデルを構築しました。',
          tech: 'Python, Pandas, SQLite, XGBoost, Scikit-Learn',
          link: 'https://github.com/NotCatfish/Spotify-Analytics-Pipeline'
        },
        {
          title: 'Otakufy (日本語学習プラットフォーム)',
          category: 'ウェブ開発',
          description: '間隔反復やインタラクティブなクイズを通じて、ユーザーが日本語の語彙、文法、漢字、読解を習得できるように設計された包括的な教育プラットフォーム。',
          tech: 'Next.js, React, Tailwind CSS, Supabase, AI-Assisted Development',
          link: 'https://github.com/NotCatfish/Otakufy'
        }
      ]
    },
    contact: {
      subtitle: '次は何ですか？',
      title: 'お問い合わせ',
      desc: '私は現在、2027年のテックインターンシップを目標としており、素晴らしい機会やコラボレーションを探しています。ご質問でも、単なるご挨拶でも、いつでもご連絡をお待ちしております。',
      formName: 'お名前',
      formEmail: 'メールアドレス',
      formMessage: 'メッセージ',
      sendBtn: 'メッセージを送信',
      sendingBtn: '送信中...',
      sentBtn: '送信完了！',
      successMsg: 'ありがとうございます！メッセージが正常に送信されました。',
      errorMsg: 'エラーが発生しました。もう一度お試しいただくか、直接メールをご利用ください。',
      directEmail: '直接メール',
      profNet: 'プロフェッショナルネットワーク'
    },
    footer: {
      text: '禅（ZEN）の心でデザインされました'
    },
    resume: {
      name: 'インドラニール・サマンタ',
      contact: [
        { label: '+91 8879163073', href: 'tel:+918879163073' },
        { label: 'indraneelsamanta2005@gmail.com', href: 'mailto:indraneelsamanta2005@gmail.com' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/indraneel-samanta-724782347' },
        { label: 'GitHub', href: 'https://github.com/NotCatfish' }
      ],
      education: {
        title: '学歴',
        items: [
          {
            school: 'Dwarkadas J. Sanghvi 工科大学 (DJSCE)',
            date: '卒業予定: 2028年5月',
            degree: '人工知能・機械学習（AIML）学士課程'
          },
          {
            school: 'Thakur 理系・商学カレッジ',
            date: '2021年6月 – 2023年5月',
            degree: 'コンピュータサイエンス'
          }
        ]
      },
      skills: {
        title: 'テクニカルスキル',
        items: [
          { category: 'プログラミング言語', text: 'Python, C, C++, JavaScript, HTML, CSS, SQL' },
          { category: 'フレームワークとライブラリ', text: 'React, Next.js, Tailwind CSS, Pandas, NumPy, Matplotlib, NLTK, TensorRT' },
          { category: 'ツールとデータベース', text: 'Supabase (PostgreSQL), Git, GitHub, VS Code, Antigravity IDE' },
          { category: '開発手法', text: 'AI-Assisted Development, Applied Prompt Engineering, System Design, Data Structures' },
          { category: '使用言語', text: '英語、ヒンディー語、ベンガル語、日本語（日常会話）、グジャラート語、マラーティー語' }
        ]
      },
      projects: {
        title: 'テクニカルプロジェクト',
        items: [
          {
            name: 'Spotify MLパイプラインとデータエンジニアリング',
            role: 'データサイエンス・機械学習',
            tech: '技術スタック: Python, Pandas, SQLite, XGBoost, Scikit-Learn, Plotly',
            points: [
              '生のSpotify視聴データを構造化されたSQLiteデータベースに処理するデータパイプラインを設計し、堅牢なクエリを可能にしました。',
              'PandasとPlotlyを使用して包括的な探索的データ分析（EDA）を実施し、視聴傾向とユーザーエンゲージメントパターンを明らかにしました。',
              'Scikit-Learnパイプラインとハイパーパラメータチューニングを利用してXGBoost分類モデルを開発・最適化し、曲のスキップ行動を正確に予測しました。'
            ]
          },
          {
            name: 'Otakufy | フルスタック日本語学習プラットフォーム',
            role: 'Web開発',
            tech: '技術スタック: Next.js, React, Tailwind CSS, Supabase (PostgreSQL), Applied Prompt Engineering',
            points: [
              '間隔反復アルゴリズムとインタラクティブなクイズを活用した包括的な教育用Webアプリを構築。',
              'フロントエンドとPostgreSQLバックエンドを分離したモダンなサーバーレスアーキテクチャを設計。',
              'Tailwind CSSとNext.jsを使用して、ローカルUI状態管理、ゲーミフィケーション、インタラクティブなクイズを備えた完全レスポンシブなフロントエンドを設計。',
              '安全なユーザー認証を統合し、進捗データ（XP、レベル、グローバルリーダーボード）を管理。',
              'AIを活用した開発とプロンプトエンジニアリングを駆使して、システム設計と複雑なコンポーネントのデバッグを加速。'
            ]
          },
          {
            name: '個人ポートフォリオ ＆ インタラクティブ履歴書',
            role: 'Web開発',
            tech: '技術スタック: React.js, Tailwind CSS, Vite, HTML/CSS',
            points: [
              'React.jsとViteを使用して、ソフトウェアプロジェクトと技術的能力を示すシングルページアプリケーション（SPA）ポートフォリオを開発。',
              '英語と日本語のシームレスな切り替えを可能にする動的ローカリゼーション（i18n）を備えたSPAを開発。',
              'Tailwind CSSを使用して、ダーク/ライトモードやインタラクティブなコンポーネントを備えた完全レスポンシブなモバイルファーストUIを設計。'
            ]
          }
        ]
      },
      experience: {
        title: '職歴',
        items: [
          {
            role: '人工知能（AI）インターン',
            company: 'Acmegrade',
            date: '2025年9月 – 2025年11月',
            points: [
              '独自のデータセットに対して探索的データ分析（EDA）を実施し、ユーザーの行動パターンや傾向を特定。',
              'ステークホルダーに複雑な分析の洞察を提示するためのデータ視覚化ダッシュボードを設計。',
              '過去のリスニングデータに基づき、ユーザーの音楽ジャンルの好みを予測する機械学習分類モデルを設計およびトレーニング。'
            ]
          },
          {
            role: 'ロジスティクス・イベント共同委員',
            company: 'Google Developer Student Club (GDSC) DJSCE',
            date: '2025年10月 – 現在',
            points: [
              '5名の学生チームを率いて技術イベントの小道具をデザインし製作。',
              '200名以上が参加する技術イベントやハッカソンの会場調達およびロジスティクスを管理。',
              '参加者へのメールアウトリーチキャンペーンと直接の呼びかけを実行。',
              'ハッカソン中の夜間業務を管理し、寝具の設定、参加者の規律、会場のロジスティクスを監督。',
              '初期のスポンサーへのアウトリーチと連絡を支援。'
            ]
          },
          {
            role: '構造共同委員',
            company: 'DJS Impulse',
            date: '2025年9月 – 現在',
            points: [
              '高度なグラスファイバー積層技術を活用し、競技用エンジニアリングプロジェクトのコア構造部品を製作。',
              'プレゼンテーション用の共同作業用の包括的な技術文書およびエンジニアリングレポートを作成。'
            ]
          }
        ]
      },
      certifications: {
        title: '資格・修了証',
        items: [
          {
            name: '人工知能（AI）トレーニング',
            date: '2025年10月',
            issuer: 'Acmegrade (Rendezvous IIT Delhi と提携) | Credential ID: AGC25090066'
          }
        ]
      }
    }
  }
};
