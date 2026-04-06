import { fetchAllCourses } from "@/lib/courses";

async function CourseGrid() {
  const courses = await fetchAllCourses();
  return (
    <div className="row">
      {courses.map((course) => (
        <div key={course.id} className="col-4">
          <div className="card">
            <div className="card-header">
              <h5 className="text-center">{course.title.toUpperCase()}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CourseGrid;
