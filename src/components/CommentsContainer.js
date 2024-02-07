import React from "react";

const commentsData = [
  {
    name: "Pranali Ahirrao",
    text: "Lorem ipsum text for comments of YT",
    replies: [],
  },
  {
    name: "Pranali Ahirrao",
    text: "Lorem ipsum text for comments of YT",
    replies: [
      {
        name: "Pranali Ahirrao",
        text: "Lorem ipsum text for comments of YT",
        replies: [],
      },
    ],
  },
  {
    name: "Pranali Ahirrao",
    text: "Lorem ipsum text for comments of YT",
    replies: [
      {
        name: "Pranali Ahirrao",
        text: "Lorem ipsum text for comments of YT",
        replies: [],
      },
    ],
  },
  {
    name: "Pranali Ahirrao",
    text: "Lorem ipsum text for comments of YT",
    replies: [
      {
        name: "Pranali Ahirrao",
        text: "Lorem ipsum text for comments of YT",
        replies: [
          {
            name: "Pranali Ahirrao",
            text: "Lorem ipsum text for comments of YT",
            replies: [],
          },
          {
            name: "Pranali Ahirrao",
            text: "Lorem ipsum text for comments of YT",
            replies: [
              {
                name: "Pranali Ahirrao",
                text: "Lorem ipsum text for comments of YT",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Pranali Ahirrao",
    text: "Lorem ipsum text for comments of YT",
    replies: [],
  },
  {
    name: "Pranali Ahirrao",
    text: "Lorem ipsum text for comments of YT",
    replies: [
      {
        name: "Pranali Ahirrao",
        text: "Lorem ipsum text for comments of YT",
        replies: [],
      },
    ],
  },
  {
    name: "Pranali Ahirrao",
    text: "Lorem ipsum text for comments of YT",
    replies: [
      {
        name: "Pranali Ahirrao",
        text: "Lorem ipsum text for comments of YT",
        replies: [
          {
            name: "Pranali Ahirrao",
            text: "Lorem ipsum text for comments of YT",
            replies: [],
          },
        ],
      },
    ],
  },
];

const Comment = ({ data }) => {
  const { name, text } = data;

  return (
    <div className="flex flex-row py-4 bg-gray-100 px-2 rounded-lg my-2">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="my-5 mx-20 p-2">
      <h1 className="text-2xl font-bold">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
