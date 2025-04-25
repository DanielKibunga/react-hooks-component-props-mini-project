import logo from "../assets/logo";

// const blogData = {
//   name: "Underreacted",
//   image: logo,
//   about: "A blog about learning React",
//   posts: [
//     {
//       id: 1,
//       title: "Components 101",
//       date: "December 15, 2020",
//       preview: "Setting up the building blocks of your site",
//       minutes: 5,
//     },
//     {
//       id: 2,
//       title: "React Data Flow",
//       date: "December 11, 2020",
//       preview: "Passing props is never passé",
//       minutes: 15,
//     },
//     {
//       id: 3,
//       title: "Function vs Class Components",
//       preview: "React, meet OOJS.",
//       minutes: 47,
//     },
//   ],
// };

// export default blogData;
const blogData = {
  name: "Overreacted",
  image: "images/demo.png", // Optional since you're hardcoding it in App.js
  about: "Personal thoughts, musings, and life as a developer.",
  posts: [
    {
      id: 1,
      title: "React Patterns",
      date: "March 10, 2025",
      preview: "Learn about common React patterns for better code.",
      minutes: 5
    },
    {
      id: 2,
      title: "JavaScript Closures",
      date: "February 28, 2025",
      preview: "Understanding closures is key to mastering JavaScript.",
      minutes: 12
    },
    {
      id: 3,
      title: "Handling Side Effects",
      preview: "How to properly handle side effects in React using useEffect.",
      minutes: 35
    }
  ]
};

export default blogData;
