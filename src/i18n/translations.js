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
      quote: '"Intelligent systems are only as powerful as the data that fuels them. My goal is to engineer robust data pipelines and architect highly capable machine learning models that drive actionable insights and human empowerment."',
      core: 'Technical Skills',
      prog: 'Programming & Databases',
      data: 'Data & Analytics',
      tools: 'Machine Learning & MLOps',
      algo: 'Cloud & Backend'
    },
    projects: {
      title: 'Selected Work',
      github: 'GitHub →',
      items: [
        {
          title: 'Spotify ML Pipeline & Data Engineering',
          category: 'Data Science & Machine Learning',
          description: 'An end-to-end Machine Learning pipeline tracking user listening behavior. Engineered with XGBoost, PostgreSQL buffer streaming, and a FastAPI inference microservice to optimize CDN bandwidth.',
          tech: 'AWS, Docker, XGBoost, FastAPI, PostgreSQL, Python',
          link: 'https://github.com/NotCatfish/Spotify-Analytics-Pipeline'
        },
        {
          title: 'Otakufy (Japanese Learning Platform)',
          category: 'Web Development / NLP',
          description: 'A highly optimized full-stack educational platform. Built with Next.js and PostgreSQL, featuring an automated NLP data pipeline for dynamic Kanji tokenization and CTE-indexed slice queries.',
          tech: 'PostgreSQL, Next.js, NLP (Kuroshiro), Supabase',
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
            degree: 'Bachelor of Technology in Artificial Intelligence and Machine Learning (AIML)',
            date: 'Expected Graduation: May 2028'
          }
        ],
      },
      skills: {
        title: 'Skills & Languages',
        items: [
          { category: 'Programming & Databases', text: 'Python, SQL (PostgreSQL, SQLite), C++, C, SQLAlchemy' },
          { category: 'Data & Analytics', text: 'ETL Pipelines, A/B Testing, Feature Engineering, Statistical Analysis, EDA, Data Visualization (Plotly, Seaborn)' },
          { category: 'Machine Learning & MLOps', text: 'XGBoost, Random Forest, Scikit-Learn, Optuna, MLflow, DVC, Pandas, NumPy' },
          { category: 'Cloud & Backend', text: 'AWS, Docker, CI/CD (GitHub Actions), FastAPI, REST API, Supabase, Pytest, Git' },
          { category: 'Spoken Languages', text: 'English (Fluent), Japanese (N1 Prep), Hindi (Fluent), Bengali (Fluent)' }
        ]
      },
      projects: {
        title: 'Technical Projects',
        items: [
          {
            name: 'Spotify ML Pipeline & Data Engineering',
            link: 'https://github.com/NotCatfish/Spotify-Analytics-Pipeline',
            role: 'Data Science & Machine Learning',
            tech: 'Tech Stack: AWS, PostgreSQL, XGBoost, FastAPI',
            points: [
              '<strong>Optimized dataset footprint by 85% (277MB to 42.5MB)</strong> via algorithmic downcasting, and architected an ETL pipeline utilizing PostgreSQL native buffer streaming to <strong>slash export times from 15 minutes to 3.2s</strong>.',
              '<strong>Engineered a 19-feature matrix</strong> to predict user skips with <strong>≥80% precision</strong>, employing chronological walk-forward splitting and <strong>GPU-accelerated Optuna</strong> (doubling throughput to 4 it/s compared to CPU-only) for 300-trial XGBoost hyperparameter tuning.',
              '<strong>Architected a Financial Utility A/B Testing Simulator</strong> to quantify model ROI, simulating <strong>838 MB of CDN bandwidth savings</strong> across the dataset and proving the high-precision strategy maximizes dollar savings by avoiding false-positive user disruptions.',
              '<strong>Deployed a real-time FastAPI microservice</strong> and interactive queue dashboard using Docker, dispatching live model predictions to a <strong>Dual-Policy Action Engine</strong> for dynamic CDN bandwidth throttling.',
              '<strong>Enforced strict MLOps and production reliability standards</strong> by orchestrating a 20-test Pytest suite, GitHub Actions CI/CD pipelines, and managing heavy model artifacts via <strong>Data Version Control (DVC)</strong>.'
            ]
          },
          {
            name: 'Otakufy | Full-Stack Japanese Learning Platform',
            link: 'https://github.com/NotCatfish/Otakufy',
            role: 'Web Development / NLP',
            tech: 'Tech Stack: PostgreSQL, Next.js, NLP (Kuroshiro)',
            points: [
              '<strong>Engineered an automated data pipeline to audit and sanitize a 14,082-item JSON dataset</strong>, conducting deep linguistic, conjugation, and redundancy scans to ensure <strong>100% byte-parity</strong> with PostgreSQL seeds.',
              '<strong>Optimized backend data retrieval</strong> by replacing slow SQL ORDER BY random() operations with <strong>CTE indexed slice queries</strong>, enabling the millisecond shuffling of the entire 14,082-item question bank.',
              '<strong>Integrated Japanese NLP tokenization pipelines (Kuroshiro & Wanakana)</strong> to programmatically parse complex Kanji structures and dynamically generate phonetic reading aids, enabling automated content scaling.',
              '<strong>Enforced strict data integrity via PostgreSQL Row-Level Security (RLS)</strong> policies, ensuring leaderboard authenticity and preventing unauthorized state mutations across concurrent API queries.'
            ]
          },
          {
            name: 'Personal Portfolio & Interactive Resume',
            link: 'https://github.com/NotCatfish/portfolio',
            role: 'Web Development / API',
            tech: 'Tech Stack: React 19, REST APIs, JSON (i18n)',
            points: [
              '<strong>Executed comprehensive cybersecurity audits and static code analysis</strong>, successfully remediating high-severity CWE vulnerabilities (Path Traversal, DoS) and verifying XSS DOM sanitization.',
              '<strong>Integrated a production-ready REST API pipeline for automated contact routing</strong>, implementing strict client-side honeypot mechanisms and input sanitization to mitigate automated bot spam.'
            ]
          }
        ]
      },
      experience: {
        title: 'Experience',
        items: [
          {
            role: 'Logistics & Events Co-committee',
            company: 'Google Developer Student Club (GDSC) DJSCE',
            date: 'Oct 2025 – Present',
            points: [
              '<strong>Led a 5-member operations team to manage and execute</strong> end-to-end logistics for collegiate hackathons, successfully coordinating venue scheduling, technical infrastructure, and event-day operations to support <strong>350+ attendees</strong>.',
              '<strong>Managed corporate outreach and sponsor communications</strong>, pitching technical event roadmaps to industry partners to successfully secure funding, while driving participant registration across multiple campus networks.'
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
      quote: '「知的システムは、それを駆動するデータがあってこそ真価を発揮します。私の目標は、堅牢なデータパイプラインを構築し、実践的なインサイトと人々のエンパワーメントを促進する、高度な機械学習モデルを設計することです。」',
      core: '技術スキル',
      prog: 'プログラミングとデータベース',
      data: 'データ分析',
      tools: '機械学習とMLOps',
      algo: 'クラウドとバックエンド'
    },
    projects: {
      title: '厳選された実績',
      github: 'GitHub →',
      items: [
        {
          title: 'Spotify MLパイプラインとデータエンジニアリング',
          category: 'データサイエンス・機械学習',
          description: 'XGBoost、PostgreSQLバッファストリーミング、FastAPI推論マイクロサービスを活用し、ユーザーの視聴習慣を追跡してCDN帯域幅を最適化するエンドツーエンドのMLパイプライン。',
          tech: 'AWS, Docker, XGBoost, FastAPI, PostgreSQL, Python',
          link: 'https://github.com/NotCatfish/Spotify-Analytics-Pipeline'
        },
        {
          title: 'Otakufy (日本語学習プラットフォーム)',
          category: 'ウェブ開発 / NLP',
          description: 'Next.jsとPostgreSQLで構築された、高度に最適化されたフルスタック教育プラットフォーム。動的な漢字トークナイゼーションのための自動NLPデータパイプラインと、CTEインデックス付きスライスクエリを搭載。',
          tech: 'PostgreSQL, Next.js, NLP (Kuroshiro), Supabase',
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
            school: 'Dwarkadas J. Sanghvi College of Engineering (DJSCE)',
            degree: '人工知能・機械学習 (AIML) 学士課程',
            date: '2028年5月 卒業予定'
          }
        ],
      },
      skills: {
        title: 'スキル・語学',
        items: [
          { category: 'プログラミングとデータベース', text: 'Python, SQL (PostgreSQL, SQLite), C++, C, SQLAlchemy' },
          { category: 'データ分析', text: 'ETLパイプライン, A/Bテスト, 特徴量エンジニアリング, 統計分析, 探索的データ解析 (EDA), データ可視化 (Plotly, Seaborn)' },
          { category: '機械学習とMLOps', text: 'XGBoost, Random Forest, Scikit-Learn, Optuna, MLflow, DVC, Pandas, NumPy' },
          { category: 'クラウドとバックエンド', text: 'AWS, Docker, CI/CD (GitHub Actions), FastAPI, REST API, Supabase, Pytest, Git' },
          { category: '使用言語', text: '英語（流暢）, 日本語（N1準備中）, ヒンディー語（流暢）, ベンガル語（流暢）' }
        ]
      },
      projects: {
        title: 'テクニカルプロジェクト',
        items: [
          {
            name: 'Spotify MLパイプラインとデータエンジニアリング',
            link: 'https://github.com/NotCatfish/Spotify-Analytics-Pipeline',
            role: 'データサイエンス・機械学習',
            tech: '技術スタック: AWS, PostgreSQL, XGBoost, FastAPI',
            points: [
              '<strong>データセットサイズを85%削減（277MBから42.5MB）</strong>するアルゴリズム的ダウンキャスト処理を実装。PostgreSQLネイティブバッファストリーミングを活用したETLパイプラインを構築し、<strong>データエクスポート時間を15分から3.2秒へ短縮</strong>。',
              '<strong>19種類の特徴量行列を設計</strong>し、時系列に基づくウォークフォワード分割と<strong>GPUアクセラレーションを実装したOptuna</strong>による300回のハイパーパラメータチューニングを実施し、<strong>スキップ予測精度80%以上</strong>を達成。',
              '<strong>モデルの投資対効果（ROI）を定量化するA/Bテストシミュレーターを構築</strong>。データセット全体で<strong>838MBのCDN帯域幅の節約</strong>をシミュレートし、誤検知によるユーザー体験の低下を回避する高精度な戦略がコスト削減を最大化することを立証。',
              'Dockerを活用して<strong>リアルタイム推論用のFastAPIマイクロサービス</strong>とインタラクティブなキューダッシュボードを展開し、推論結果を<strong>デュアルポリシー実行エンジン</strong>へ送信して動的なCDN帯域制限を実現。',
              '20項目のPytestスイートやGitHub ActionsによるCI/CDパイプラインをオーケストレーションし、<strong>Data Version Control (DVC)</strong>を用いて大規模なモデル成果物を管理することで、<strong>厳格なMLOpsおよび本番環境の信頼性基準を適用</strong>。'
            ]
          },
          {
            name: 'Otakufy フルスタック日本語学習プラットフォーム',
            link: 'https://github.com/NotCatfish/Otakufy',
            role: 'Web開発 / NLP',
            tech: '技術スタック: PostgreSQL, Next.js, NLP (Kuroshiro)',
            points: [
              '<strong>14,082項目のJSONデータセットを監査・サニタイズする自動データパイプラインを構築</strong>。詳細な言語分析、活用形、複数のスクリーニングを実行し、PostgreSQLシードデータとの<strong>100%のバイト単位の整合性を保証</strong>。',
              '<strong>低速なSQLのORDER BY random()処理をCTEのインデックス付きスライスクエリに置き換える</strong>ことでバックエンドのデータ取得を最適化し、14,082項目のクエスチョンバンク全体のミリ秒単位でのシャッフルを実現。',
              '<strong>日本語NLPトークナイゼーションパイプライン（KuroshiroとWanakana）を統合</strong>。複雑な漢字構造をプログラムで解析してフリガナを動的に生成し、コンテンツの自動スケーリングを実現。',
              '<strong>PostgreSQLの行レベルセキュリティ(RLS)ポリシーにより厳格なデータ整合性を強化</strong>。リーダーボードの真正性を確保するとともに、同時実行APIクエリにおける不正な状態変更を防止。'
            ]
          },
          {
            name: '個人ポートフォリオ＆インタラクティブ履歴書',
            link: 'https://github.com/NotCatfish/portfolio',
            role: 'Web開発 / API',
            tech: '技術スタック: React 19, REST APIs, JSON (i18n)',
            points: [
              '<strong>包括的なサイバーセキュリティ監査と静的コード解析を実行</strong>し、深刻度の高いCWE脆弱性（パストラバーサル、DoS）を修正するとともに、XSSに対するDOMサニタイズを検証。',
              '<strong>自動連絡ルーティング用の本番環境向けREST APIパイプラインを統合</strong>し、クライアント側のハニーポット機構と入力サニタイズを実装して自動化されたボットスパムを軽減。'
            ]
          }
        ]
      },
      experience: {
        title: '職歴',
        items: [
          {
            role: 'ロジスティクス・イベント共同委員',
            company: 'Google Developer Student Club (GDSC) DJSCE',
            date: '2025年10月 – 現在',
            points: [
              '<strong>5名の運営チームを率いて大学ハッカソンのエンドツーエンドのロジスティクスを管理</strong>。会場のスケジュール調整、技術インフラの構築、当日の運営を成功裏に調整し、<strong>350名以上の参加者をサポート</strong>。',
              '<strong>企業へのアウトリーチとスポンサーとの折衝を管理</strong>し、業界パートナーへの技術的イベントロードマップの提案を通じて資金調達を成功させるとともに、学内の複数ネットワークで参加者登録を促進。'
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
            issuer: 'Acmegrade (Rendezvous IIT Delhi) | Credential ID: AGC25090066'
          }
        ]
      }
    }
  }
};
