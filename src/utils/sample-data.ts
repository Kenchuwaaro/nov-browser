import { Novel, User, EpisodeData, CommentRoom } from 'interfaces';

/** Dummy user data. */
export const sampleUserData: User[] = [
  { id: 101, name: 'Alice' },
  { id: 102, name: 'Bob' },
  { id: 103, name: 'Caroline' },
  { id: 104, name: 'Dave' },
];

export const sampleNovelData: Novel[] = [
  {
    id: 101,
    writerId: 101,
    title: 'ありふれ',
    fav: 1000,
    view: 10000,
    image: '/',
    synopsis: 'ありふれあらすじですありふれあらすじですありふれあらすじですありふれあらすじですありふれあらすじですありふれあらすじですありふれあらすじですありふれあらすじですありふれあらすじですありふれあらすじですありふれあらすじですありふれあらすじですありふれあらすじですありふれあらすじですありふれあらすじです',
    favorite: false,
    chapters: [
      {
        id: 1001,
        title: '第一章',
        number: 1,
        episodes: [
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
        ],
      },
      {
        id: 1001,
        title: '第二章',
        number: 2,
        episodes: [
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
        ],
      },
      {
        id: 1001,
        title: '第三章',
        number: 3,
        episodes: [
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
        ],
      },
    ],
  },
  {
    id: 102,
    writerId: 102,
    title: '天すら',
    fav: 2000,
    view: 20000,
    image: '/',
    synopsis: '天すらのあらすじです',
    favorite: true,
    chapters: [
      {
        id: 1001,
        title: '第一章',
        number: 1,
        episodes: [
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
        ],
      },
      {
        id: 1001,
        title: '第二章',
        number: 2,
        episodes: [
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
        ],
      },
      {
        id: 1001,
        title: '第三章',
        number: 3,
        episodes: [
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
        ],
      },
    ],
  },
  {
    id: 103,
    writerId: 103,
    title: '幼女戦記',
    fav: 3000,
    view: 30000,
    image: '/',
    synopsis: '幼女戦記あらすじです',
    favorite: false,
    chapters: [
      {
        id: 1001,
        title: '第一章',
        number: 1,
        episodes: [
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
        ],
      },
      {
        id: 1001,
        title: '第二章',
        number: 2,
        episodes: [
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
        ],
      },
      {
        id: 1001,
        title: '第三章',
        number: 3,
        episodes: [
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
        ],
      },
    ],
  },
  {
    id: 104,
    writerId: 104,
    title: 'オーバーロード',
    fav: 4000,
    view: 40000,
    image: '/',
    synopsis: 'オーバーロードのあらすじです',
    favorite: true,
    chapters: [
      {
        id: 1001,
        title: '第一章',
        number: 1,
        episodes: [
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
        ],
      },
      {
        id: 1001,
        title: '第二章',
        number: 2,
        episodes: [
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
        ],
      },
      {
        id: 1001,
        title: '第三章',
        number: 3,
        episodes: [
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
          { id: 101, title: '第一話' },
          { id: 102, title: '第二話' },
          { id: 103, title: '第三話' },
          { id: 104, title: '第四話' },
          { id: 105, title: '第五話' },
          { id: 106, title: '第六話' },
          { id: 107, title: '第七話' },
          { id: 108, title: '第八話' },
          { id: 109, title: '第九話' },
        ],
      },
    ],
  },
];

export const sampleEpisodeData: EpisodeData[] = [
  {
    head: {
      id: 101,
      title: '強襲',
    },
    text: '本文１',
  },

  {
    head: {
      id: 102,
      title: '強襲',
    },
    text: '本文２',
  },

  {
    head: {
      id: 103,
      title: '強襲',
    },
    text: '本文３',
  },
];

export const sampleCommentData : CommentRoom[] = [
  {
    id: 101,
    name: '名前',
    comments: [
      {
        id: 201,
        authorId: 1001,
        authorName: '吹雪',
        comment: 'すごく良いです',
        good: true,
        bad: false,
        goodCount: 1001,
      },
      {
        id: 103,
        authorId: 1001,
        authorName: '吹雪',
        comment: 'すごく良いです',
        good: true,
        bad: false,
        goodCount: 1001,
      },
      {
        id: 104,
        authorId: 1001,
        authorName: '吹雪',
        comment: 'すごく良いです',
        good: true,
        bad: false,
        goodCount: 1001,
      },
      {
        id: 105,
        authorId: 1001,
        authorName: '吹雪',
        comment: 'すごく良いです',
        good: true,
        bad: false,
        goodCount: 1001,
      },
      {
        id: 106,
        authorId: 1001,
        authorName: '吹雪',
        comment: 'すごく良いです',
        good: true,
        bad: false,
        goodCount: 1001,
      },
    ]
  },
  {
    id: 201,
    name: '名前',
    comments: [
      {
        id: 202,
        authorId: 1001,
        authorName: '吹雪',
        comment: 'すごく良いです',
        good: true,
        bad: false,
        goodCount: 1001,
      },
      {
        id: 203,
        authorId: 1001,
        authorName: '吹雪',
        comment: 'すごく良いです',
        good: true,
        bad: false,
        goodCount: 1001,
      },
      {
        id: 204,
        authorId: 1001,
        authorName: '吹雪',
        comment: 'すごく良いです',
        good: true,
        bad: false,
        goodCount: 1001,
      },
      {
        id: 205,
        authorId: 1001,
        authorName: '吹雪',
        comment: 'すごく良いです',
        good: true,
        bad: false,
        goodCount: 1001,
      },
      {
        id: 206,
        authorId: 1001,
        authorName: '吹雪',
        comment: 'すごく良いです',
        good: true,
        bad: false,
        goodCount: 1001,
      },
    ]
  },
  {
    id: 301,
    name: '名前',
    comments: [
      {
        id: 302,
        authorId: 1001,
        authorName: '吹雪',
        comment: 'すごく良いです',
        good: true,
        bad: false,
        goodCount: 1001,
      },
      {
        id: 303,
        authorId: 1001,
        authorName: '吹雪',
        comment: 'すごく良いです',
        good: true,
        bad: false,
        goodCount: 1001,
      },
      {
        id: 304,
        authorId: 1001,
        authorName: '吹雪',
        comment: 'すごく良いです',
        good: true,
        bad: false,
        goodCount: 1001,
      },
      {
        id: 405,
        authorId: 1001,
        authorName: '吹雪',
        comment: 'すごく良いです',
        good: true,
        bad: false,
        goodCount: 1001,
      },
      {
        id: 406,
        authorId: 1001,
        authorName: '吹雪',
        comment: 'すごく良いです',
        good: true,
        bad: false,
        goodCount: 1001,
      },
    ]
  },
];
