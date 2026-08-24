export const translations = {
  en: {
    nav: { work: 'Work', about: 'About', contact: 'Contact', resume: 'Resume' },
    hero: {
      name: 'Indraneel Samanta',
      tagline1: 'Building ',
      tagline2: 'strong foundations',
      tagline3: ' in AI.',
      desc: 'Third-year AI/ML student actively targeting a 2027 tech internship as a Data Engineer, Data Analyst, or ML Engineer. Combines SQL and Python to build end-to-end data pipelines, perform deep data analysis, and train predictive machine learning models.',
      explore: 'Explore Work',
      downloadResume: 'Download Resume'
    },
    about: {
      title: 'Driven by curiosity and logic.',
      p1: 'Currently pursuing my BTech in Artificial Intelligence and Machine Learning at Dwarka Das J Sanghvi College of Engineering (Class of 2028).',
      p2: 'I combine SQL and Python to uncover insights through data analysis, engineer robust data pipelines, and develop end-to-end machine learning models. I am actively building my full-stack ML skills and working on practical projects to secure a Data Engineering or ML internship in 2027.',
      quote: '"Artificial intelligence must remain a tool for human empowerment. My goal is to architect highly capable systems that are inherently ethical, secure, and strictly aligned with human well-being."',
      core: 'Technical Skills',
      prog: 'Languages',
      data: 'Data & Analytics',
      tools: 'Web & Tools',
      algo: 'Methodologies'
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
              '<strong>Cut memory usage by 79% (from 277MB to 58MB)</strong> by building a data pipeline that compresses raw streaming logs into a database.',
              '<strong>Created a tool that automatically generates over 60 interactive charts</strong> to instantly show user listening habits without needing any manual setup.',
              '<strong>Tracked short-term user habits to help the system quickly adapt</strong> when the number of skipped songs suddenly dropped from 31% to 4%.',
              '<strong>Trained a predictive model to identify user skips</strong>, adjusting the system to handle uneven data so it wouldn\'t just blindly guess "no".',
              '<strong>Improved the model\'s ability to catch skipped songs</strong> by strictly testing it on future timelines, ensuring the system wasn\'t cheating by looking at past data.',
              '<strong>Extracted hidden listening patterns by creating over 40 custom data points</strong> from raw timestamps, such as tracking exactly what time of day a user usually skips songs.',
              '<strong>Proposed a way to cut server costs</strong> by using skip predictions to stop caching songs the user is likely to skip, saving streaming bandwidth.'
            ]
          },
          {
            name: 'Otakufy | Full-Stack Japanese Learning Platform',
            link: 'https://github.com/NotCatfish/Otakufy',
            role: 'Web Development',
            tech: 'Tech Stack: Next.js, React, Tailwind CSS, Supabase (PostgreSQL)',
            points: [
              '<strong>Delivered lightning-fast quiz load times for all 5 JLPT levels</strong> by building a web app that pre-loads vocabulary data instead of fetching it live.',
              '<strong>Built a highly responsive, mobile-like user experience</strong> by integrating a custom flashcard quiz engine directly into the frontend.',
              '<strong>Drove user engagement through daily streaks and leaderboards</strong> by adding secure logins and real-time progress tracking.',
              '<strong>Rapidly built the entire website from scratch</strong> by directing AI coding assistants based on clear, human-driven instructions.',
              '<strong>Ensured a seamless experience across all devices</strong> by designing a mobile-first layout that automatically scales perfectly to tablets and desktop screens.',
              '<strong>Proved the effectiveness of the platform</strong> by using it to pass advanced N2/N1 practice exams, learning kanji faster than traditional flashcard apps.'
            ]
          },
          {
            name: 'Personal Portfolio & Interactive Resume',
            link: 'https://github.com/NotCatfish/portfolio',
            role: 'Web Development',
            tech: 'Tech Stack: React.js, Tailwind CSS, Vite, HTML/CSS, i18n',
            points: [
              '<strong>Built a fast, responsive personal website using modern tools</strong> with smooth scrolling animations to showcase project work.',
              '<strong>Added an instant English-to-Japanese translation switch and a custom dark mode theme</strong> to make the site easy to read for recruiters in Japan.',
              '<strong>Set up a working contact form with built-in spam protection</strong> while keeping the underlying code clean and error-free.',
              '<strong>Automated the website publishing process</strong> so that any new code updates were instantly and seamlessly pushed to the live site without manual work.',
              '<strong>Created a highly reusable component architecture</strong>, making it easy to add new projects or skills in the future without touching the core code.'
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
      desc: '2027年のデータエンジニア、データアナリスト、またはMLエンジニアのインターンシップを積極的に目指すAI/MLの3年生。SQLとPythonを駆使して、エンドツーエンドのデータパイプライン構築、深いデータ分析、予測機械学習モデルの訓練を行います。',
      explore: '実績を見る',
      downloadResume: '履歴書をダウンロード'
    },
    about: {
      title: '好奇心と論理への探求。',
      p1: '現在、Dwarka Das J Sanghvi College of Engineeringにて人工知能と機械学習のBTechを取得中（2028年卒業予定）。',
      p2: 'SQLとPythonを組み合わせてデータ分析からインサイトを導き出し、堅牢なデータパイプラインを構築し、エンドツーエンドの機械学習モデルを開発しています。2027年のデータエンジニアリングまたはMLインターンシップ獲得に向けて、フルスタックMLスキルを磨きながら実践的なプロジェクトに取り組んでいます。',
      quote: '「人工知能は人類に力を与えるためのツールであり続けなければなりません。私の目標は、本質的に倫理的で安全であり、人類の幸福と厳密に一致した、高度な能力を持つシステムを設計することです。」',
      core: '技術スキル',
      prog: 'プログラミング言語',
      data: 'データと分析',
      tools: 'Webとツール',
      algo: '方法論'
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
              '<strong>メモリ使用量を79%（277MBから58MBへ）削減:</strong> 生のストリーミングログをデータベースに圧縮するデータパイプラインを構築。',
              '<strong>60以上のインタラクティブチャートを自動生成するツールを作成:</strong> 手動設定なしで視聴習慣を即座に表示。',
              '<strong>短期的なユーザー習慣を追跡:</strong> スキップ率が31%から4%へ急減した際、システムが迅速に適応できるよう支援。',
              '<strong>スキップを特定する予測モデルを訓練:</strong> 単なる推測を避けるため、不均衡データを処理するようシステムを調整。',
              '<strong>スキップ曲検出モデルの能力向上:</strong> データ漏洩を防ぐため、将来のタイムラインで厳密にテスト。',
              '<strong>隠れたリスニングパターンを抽出:</strong> 生のタイムスタンプから40以上のデータポイントを作成（時間帯ごとの傾向など）。',
              '<strong>サーバーコストを削減する手法を提案:</strong> スキップ予測を活用して、ユーザーがスキップしそうな曲の事前読み込みを停止し、ストリーミング帯域幅を節約。'
            ]
          },
          {
            name: 'Otakufy | フルスタック日本語学習プラットフォーム',
            link: 'https://github.com/NotCatfish/Otakufy',
            role: 'Web開発',
            tech: '技術スタック: Next.js, React, Tailwind CSS, Supabase (PostgreSQL)',
            points: [
              '<strong>全JLPTレベルで超高速クイズ読込を実現:</strong> 語彙データを動的取得せず事前読込するWebアプリを構築。',
              '<strong>モバイルライクな高応答性UXを構築:</strong> カスタムフラッシュカードエンジンをフロントエンドに統合。',
              '<strong>ユーザーエンゲージメントを促進:</strong> 安全なログインと進捗追跡により、連続学習とリーダーボードを提供。',
              '<strong>Webサイト全体をゼロから迅速に構築:</strong> 明確な指示に基づきAIコーディングアシスタントを活用。',
              '<strong>全デバイスでシームレスな体験を保証:</strong> タブレットやPCに自動拡張するモバイルファーストなレイアウトを設計。',
              '<strong>プラットフォームの有効性を実証:</strong> 実際にこのシステムを使用して高度なN2/N1レベルの模擬試験に合格し、従来の単語帳アプリよりも速く漢字を習得。'
            ]
          },
          {
            name: '個人ポートフォリオ ＆ インタラクティブ履歴書',
            link: 'https://github.com/NotCatfish/portfolio',
            role: 'Web開発',
            tech: '技術スタック: React.js, Tailwind CSS, Vite, HTML/CSS, i18n',
            points: [
              '<strong>高速でレスポンシブな個人サイトを構築:</strong> スムーズなスクロールアニメーションを備えたモダンなツールを使用。',
              '<strong>日英翻訳スイッチとカスタムダークモードを追加:</strong> 日本の採用担当者がサイトを読みやすいように設計。',
              '<strong>実用的なお問い合わせフォームを設置:</strong> スパム対策機能を組み込みつつ、基本コードをクリーンに維持。',
              '<strong>Webサイト公開プロセスを自動化:</strong> 手作業なしで即座かつシームレスにライブサイトにプッシュされるように設定。',
              '<strong>再利用可能なコンポーネント設計を構築:</strong> 将来的に新しいプロジェクトやスキルを簡単に追加できるよう、コアコードに触れずに更新可能な構造を作成。'
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
