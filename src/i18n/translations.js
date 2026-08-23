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
        title: 'Skills & Languages',
        items: [
          { category: 'Languages', text: 'SQL (PostgreSQL, SQLite), Python, JavaScript, C++' },
          { category: 'Data & Analytics', text: 'Pandas, Plotly, Jupyter, Scikit-Learn, XGBoost' },
          { category: 'Web & Tools', text: 'React.js, Tailwind CSS, Supabase, Git, Linux' },
          { category: 'Methodologies', text: 'Data Analytics, Exploratory Data Analysis (EDA), ETL Pipelines, Feature Engineering, Predictive Modeling' },
          { category: 'Spoken Languages', text: 'English (Fluent), Japanese (Conversational), Hindi (Fluent), Bengali (Fluent), Gujarati (Listening), Marathi (Listening)' }
        ]
      },
      projects: {
        title: 'Technical Projects',
        items: [
          {
            name: 'Spotify ML Pipeline & Data Engineering',
            link: 'https://github.com/NotCatfish/Spotify-Analytics-Pipeline',
            role: 'Data Science & Machine Learning',
            tech: 'Tech Stack: Python, Pandas, SQLite, XGBoost, Scikit-Learn, Plotly',
            points: [
              '<strong>Identified significant server cost savings</strong> by formulating a data-driven product strategy that leverages skip prediction to optimize invisible background audio caching and reduce streaming bandwidth.',
              '<strong>Reduced RAM footprint by 79% (277MB to 58MB)</strong> by architecting an end-to-end data pipeline that processed raw Spotify JSON logs into an optimized SQLite database using data type downcasting.',
              '<strong>Uncovered severe Concept Drift (user skip rates dropping from 31% to 4%)</strong> by conducting advanced Exploratory Data Analysis (EDA) using Pandas and Plotly.',
              '<strong>Captured ~70% of the model\'s total predictive power</strong> by engineering dense "Micro-Mood" behavioral features (e.g., seconds_since_last_skip) and applying dynamic target encoding.',
              '<strong>Achieved a robust 0.825 ROC-AUC and 0.74 Precision, boosting baseline recall from 0.06 to 0.48,</strong> by developing and threshold-tuning an XGBoost model with strict chronological windowing.'
            ]
          },
          {
            name: 'Otakufy | Full-Stack Japanese Learning Platform',
            link: 'https://github.com/NotCatfish/Otakufy',
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
            link: 'https://github.com/NotCatfish/portfolio',
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
            tech: 'Tech Stack: Python, Pandas, Scikit-Learn, Plotly, Linear Regression',
            points: [
              '<strong>Conducted Exploratory Data Analysis (EDA) on 50,000+ transactional sales records</strong> to analyze customer purchasing trends, category performance, and seasonal dips.',
              '<strong>Engineered sales performance metrics and KPI dashboards</strong> using Pandas and Plotly to track monthly category growth rates and profit margins.',
              '<strong>Trained a predictive regression model</strong> to forecast quarterly product category demand, optimizing inventory planning and minimizing stockouts.'
            ]
          },
          {
            role: 'Logistics & Events Co-committee',
            company: 'Google Developer Student Club (GDSC) DJSCE',
            date: 'Oct 2025 – Present',
            points: [
              '<strong>Managed event logistics and venue setup for 200+ attendees</strong> during college hackathons and tech competitions.',
              '<strong>Led a 5-member team</strong> to design and build custom event props and stage setups for college tech events.',
              '<strong>Handled overnight hackathon operations</strong>, managing sleeping setups, venue security, and attendee needs.',
              '<strong>Reached out to sponsors and participants</strong> through email campaigns and direct calls to boost event sign-ups.'
            ]
          },
          {
            role: 'Structures Co-committee',
            company: 'DJS Impulse',
            date: 'Sep 2025 – Present',
            points: [
              '<strong>Built strong fiberglass structural parts</strong> and body panels for the team\'s competition vehicle.',
              '<strong>Created clear technical presentations and guides</strong> to help onboard and teach junior members core vehicle structure concepts.',
              '<strong>Wrote technical reports and design documents</strong> to help the team present our vehicle build at engineering competitions.'
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
        title: 'スキル・語学',
        items: [
          { category: 'プログラミング言語', text: 'SQL (PostgreSQL, SQLite), Python, JavaScript, C++' },
          { category: 'データ・分析', text: 'Pandas, Plotly, Jupyter, Scikit-Learn, XGBoost' },
          { category: 'Web・ツール', text: 'React.js, Tailwind CSS, Supabase, Git, Linux' },
          { category: '方法論', text: 'データ分析, 探索的データ分析 (EDA), ETLパイプライン, 特徴量エンジニアリング, 予測モデリング' },
          { category: '語学', text: '英語（流暢）, 日本語（日常会話）, ヒンディー語（流暢）, ベンガル語（流暢）, グジャラート語（聴解）, マラーティー語（聴解）' }
        ]
      },
      projects: {
        title: 'テクニカルプロジェクト',
        items: [
          {
            name: 'Spotify MLパイプラインとデータエンジニアリング',
            link: 'https://github.com/NotCatfish/Spotify-Analytics-Pipeline',
            role: 'データサイエンス・機械学習',
            tech: '技術スタック: Python, Pandas, SQLite, XGBoost, Scikit-Learn, Plotly',
            points: [
              '<strong>大幅なサーバーコスト削減の機会を特定:</strong> スキップ予測を活用してバックグラウンドの音声キャッシュを最適化し、ストリーミング帯域幅を削減するデータ主導のプロダクト戦略を策定。',
              '<strong>RAM使用量を79%（277MBから58MB）削減:</strong> データ型のダウンキャストを活用し、生のSpotify視聴データを最適化されたSQLiteデータベースに処理するデータパイプラインを構築。',
              '<strong>深刻なコンセプトドリフト（スキップ率が31%から4%へ低下）を発見:</strong> PandasとPlotlyを使用した高度な探索的データ分析（EDA）を実施。',
              '<strong>モデル予測力の約70%を確保:</strong> 「マイクロムード」と呼ばれる密な行動特徴量（例: seconds_since_last_skip）を設計し、動的ターゲットエンコーディングを適用。',
              '<strong>0.825のROC-AUCと0.74の適合率を達成し、ベースラインの再現率を0.06から0.48へ向上:</strong> 厳密な時系列ウィンドウイングを用いてXGBoost分類モデルを開発およびしきい値調整。'
            ]
          },
          {
            name: 'Otakufy | フルスタック日本語学習プラットフォーム',
            link: 'https://github.com/NotCatfish/Otakufy',
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
            link: 'https://github.com/NotCatfish/portfolio',
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
        title: '職歴・活動実績',
        items: [
          {
            role: '人工知能（AI）インターン',
            company: 'Acmegrade',
            date: '2025年9月 – 2025年11月',
            tech: '技術スタック: Python, Pandas, Scikit-Learn, Plotly, 線形回帰',
            points: [
              '<strong>5万件以上の購買トランザクションデータを対象にEDAを実施:</strong> 顧客の購買傾向、カテゴリー別実績、季節変動を解析。',
              '<strong>主要KPIおよび売上ダッシュボードを構築:</strong> PandasとPlotlyを活用して月次成長率やカテゴリー別利益率を可視化。',
              '<strong>四半期ごとの需要予測回帰モデルを構築:</strong> 在庫計画の最適化と品切れリスクの低減を支援する予測モデルをトレーニング。'
            ]
          },
          {
            role: 'ロジスティクス・イベント共同委員',
            company: 'Google Developer Student Club (GDSC) DJSCE',
            date: '2025年10月 – 現在',
            points: [
              '<strong>200名以上の参加者を対象としたイベント運営を担当:</strong> 学内ハッカソンや技術コンテストの会場設営とロジスティクスを管理。',
              '<strong>5名のチームを主導:</strong> 学内の技術イベント向けに特製小道具やステージセットを設計・製作。',
              '<strong>夜間ハッカソンの運営を管理:</strong> 宿泊スペースの設営、会場のセキュリティ、参加者対応を監督。',
              '<strong>スポンサーおよび参加者へのアウトリーチを担当:</strong> メールや直接の連絡を通じてイベント参加登録を促進。'
            ]
          },
          {
            role: '構造共同委員',
            company: 'DJS Impulse',
            date: '2025年9月 – 現在',
            points: [
              '<strong>高強度のグラスファイバー構造部品を製作:</strong> 競技用車両のボディパネルおよび構造フレームを製造。',
              '<strong>後輩向けの分かりやすい技術資料・プレゼンを作成:</strong> 車両構造の基礎概念を教え、新メンバーのオンボーディングを支援。',
              '<strong>技術報告書および設計資料を作成:</strong> エンジニアリング競技会での車両プレゼンテーション用ドキュメントを執筆。'
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
