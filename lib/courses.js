import sql from "better-sqlite3";
import slugify from "slugify";
import fs from "node:fs";
import { redirect } from "next/navigation";

const db = sql("courses.db");

export async function fetchAllCourses() {
  new Promise((resolve) => setTimeout(resolve, 3000));
  return db.prepare("SELECT * FROM courses").all();
}

export function fetchCourseBySlug(slug) {
  return db.prepare("SELECT * FROM courses WHERE slug = ?").get(slug);
}

export async function saveCourse(course) {
  course.slug = slugify(course.title, { lower: true });
  const extension = course.image.name.split(".").pop();
  const imageFileName = `${course.slug}.${extension}`;

  const bufferedImage = await course.image.arrayBuffer();

  const stream = fs.createWriteStream(`public/images/${imageFileName}`);
  stream.write(Buffer.from(bufferedImage), (err) => {
    if (err) {
      console.log("Unable to upload the image");
    }
  });
  course.image = `/images/${imageFileName}`;

  db.prepare(
    `
      INSERT INTO courses (title, duration, creator, creator_email, slug, image)
        VALUES (
          @title,
          @duration,
          @creator,
          @creator_email,
          @slug,
          @image
        )
    `,
  ).run(course);

  new Promise((resolve) => setTimeout(resolve, 5000));
}
