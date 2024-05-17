export default {
  /**
   * basic Information
   */
  title: `jee.com`,
  description: `프론트엔드 개발자 jee`,
  language: `ko`,
  siteUrl: `https://puringles.com/`,
  ogImage: `/og-image.png`, // Path to your in the 'static' folder

  /**
   * comments setting
   */
  comments: {
    utterances: {
      repo: ``, //`puringles-blog
`,
    },
  },

  /**
   * introduce yourself
   */
  author: {
    name: `김현지`,
    nickname: `jee`,
    stack: ['Frontend', 'React', 'Typescript'],
    bio: {
      email: `ysk30430@naver.com`,
      residence: 'Buchoen, South Korea',
     
    },
    social: {
      github: `https://github.com/kimhyunjee`,
      // linkedIn: `https://www.linkedin.com/`,
      // resume: ``,
    },
    dropdown: {
      tistory: 'https:/https://puringles.tistory.com/',
    
    },
  },

  /**
   * definition of featured posts
   */
  featured: [
    {
      title: 'category1',
      category: 'featured-category1',
    },
    {
      title: 'category2',
      category: 'featured-category2',
    },
  ],

  /**
   * metadata for About Page
   */
  timestamps: [
    {
      category: 'Career',
      date: '2022.01.04 - NOW',
      en: 'HicareENt',
      kr: '하이케어넷',
      info: 'frontEnd developer',
      // link: '',
    },
    // {
    //   category: 'Career',
    //   date: '2021.01.04 - 2022.01.04',
    //   en: 'B Corp.',
    //   kr: 'B 회사',
    //   info: 'B 팀',
    //   link: '',
    // },
    // {
    //   category: 'Activity',
    //   date: '2023.07 - NOW',
    //   en: 'Community',
    //   kr: '커뮤니티',
    //   info: 'IT 커뮤니티',
    //   link: '',
    // },
  ],

  /**
   * metadata for Playground Page
   */
  projects: [
    {
      title: 'Portfolio',
      description: '포트폴리오',
      techStack: ['React', 'Next.js', 'Typescript'],
      thumbnailUrl: '', // Path to your in the 'assets' folder
      links: {
        post: '',
        github: '',
        demo: '',
        googlePlay: '',
        appStore: '',
      },
    },
  ],

  /**
   * metadata for Buy Me A Coffee
   */
  remittances: {
    toss: {
      link: 'https://toss.me/danmin',
      qrCode: 'toss_qr.svg', // Path to your in the 'assets' folder
    },
    kakaopay: {
      qrCode: 'kakao_qr.svg', // Path to your in the 'assets' folder
    },
  },
};
