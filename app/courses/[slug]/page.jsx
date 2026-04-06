// http://localhost:3000/courses/xyz

import { fetchCourseBySlug } from "@/lib/courses";
import Link from "next/link";
import styles from "./course-detail.module.css";
import Image from "next/image";

async function CourseDetailPage({ params }) {
  const { slug } = await params;
  const course = fetchCourseBySlug(slug);
  return (
    <div className={styles["backdrop"]}>
      <div className={styles["my-modal"]}>
        <div className={`mb-3 ${styles["img-preview"]}`}>
          <Image src={course.image} alt={course.title} fill />
        </div>
        <h4 className="text-center">{course.title.toUpperCase()}</h4>
        <p className="lead">Duration : {course.duration}HRS</p>
        <p>
          Connect with{" "}
          <a href={`mailto:${course.creator_email}`}>{course.creator}</a>
        </p>
        <p className="text-center">
          <Link href="/courses">Browse all courses here</Link>
        </p>
      </div>
    </div>
  );
}

export default CourseDetailPage;
