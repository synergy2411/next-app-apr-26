import { fetchAllCourses } from "@/lib/courses";
import Link from "next/link";

async function CourseGrid() {
  const courses = await fetchAllCourses();
  return (
    <div className="row">
      {courses.map((course) => (
        <div key={course.id} className="col-4">
          <Link href={`/courses/${course.slug}`}>
            <div className="card mb-3">
              <div className="card-header">
                <h5 className="text-center">{course.title.toUpperCase()}</h5>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CourseGrid;
