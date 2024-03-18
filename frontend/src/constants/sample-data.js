export const sampleChats = [
  {
    avatar: ["https://avatar.iran.liara.run/public/boy", "https://avatar.iran.liara.run/public/girl"],
    name: "Amit Gupta",
    _id: "1",
    groupChat: false,
    sameSender: false,
    members: ["1", "2"]
  },
  {
    avatar: ["https://avatar.iran.liara.run/public/boy", "https://avatar.iran.liara.run/public/girl"],
    name: "Naveen Gumma",
    _id: "2",
    groupChat: true,
    sameSender: false,
    members: ["1", "2"]
  }
]

export const sampleUsers = [
  {
    avatar: ["https://avatar.iran.liara.run/public/boy", "https://avatar.iran.liara.run/public/girl"],
    name: "Amit Gupta",
    _id: "1",
  },
  {
    avatar: ["https://avatar.iran.liara.run/public/boy", "https://avatar.iran.liara.run/public/girl"],
    name: "Naveen Gumma",
    _id: "2",
  }
]

export const sampleNotifications = [
  {
    sender: {
      avatar: "https://avatar.iran.liara.run/public/boy",
      name: "Amit Gupta",
    },
    _id: "1"
  },
  {
    sender: {
      avatar: "https://avatar.iran.liara.run/public/boy",
      name: "John Doe",
    },
    _id: "2"
  }
];

export const sampleMessage = [
  {
    attachments: [
    ],
    content: "message hah bihar se",
    _id: "djawbjdabdbahjwbda",
    sender: {
      name: "Amit Gupta",
      _id: "user._id"
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z"
  },
  {
    attachments: [
      {
        public_id: "assad2",
        url: "https://www.w3schools.com/howto/img_avatar.png",
      }
    ],
    content: "Kyu message aya hah and kon bheja hah",
    _id: "djawb",
    sender: {
      name: "chaman 2",
      _id: "user._id"
    },
    chat: "chatId",
    createdAt: "2024-02-12T10:41:30.630Z"
  }
];
