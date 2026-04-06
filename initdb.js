const sql = require("better-sqlite3");
const db = sql("courses.db");

const dummyCourses = [
  {
    title: "Refresh React",
    slug: "react",
    image: "/images/react.png",
    duration: 40,
    creator: "John Doe",
    creator_email: "johndoe@example.com",
  },
  {
    title: "Awesome Angular",
    slug: "angular",
    image: "/images/angular.png",
    duration: 60,
    creator: "Ross Geller",
    creator_email: "ross@example.com",
  },
  {
    title: "Advaned NodeJS",
    slug: "nodejs",
    image: "/images/node.png",
    duration: 80,
    creator: "Rachel Greens",
    creator_email: "rachel@example.com",
  },
];

db.prepare(
  `
   CREATE TABLE IF NOT EXISTS courses (
       id INTEGER PRIMARY KEY AUTOINCREMENT,
       slug TEXT NOT NULL UNIQUE,
       title TEXT NOT NULL,
       image TEXT NOT NULL,
       duration TEXT NOT NULL,
       creator TEXT NOT NULL,
       creator_email TEXT NOT NULL
    )
`
).run();

async function initData() {
  const stmt = db.prepare(`
      INSERT INTO courses VALUES (
         null,
         @slug,
         @title,
         @image,
         @duration,
         @creator,
         @creator_email
      )
   `);

  for (const course of dummyCourses) {
    stmt.run(course);
  }
}

initData();
