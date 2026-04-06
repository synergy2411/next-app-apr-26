// http://localhost:3000/courses

import CourseGrid from "@/components/courses-grid";

function CoursesPage() {
  return (
    <>
      <h1 className="text-center mb-5">Browse All Courses</h1>
      <CourseGrid />
    </>
  );
}

export default CoursesPage;
