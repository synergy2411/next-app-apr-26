import sql from "better-sqlite3";

const db = sql("courses.db");

export async function fetchAllCourses() {
  new Promise((resolve) => setTimeout(resolve, 3000));
  return db.prepare("SELECT * FROM courses").all();
}

function fetchCourseBySlug() {}

function saveCourse(course) {}
