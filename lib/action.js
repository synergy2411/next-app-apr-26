"use server";

import { redirect } from "next/navigation";
import { saveCourse } from "./courses";

export async function shareCourseAction(formData) {
  const newCourse = {
    title: formData.get("title"),
    duration: formData.get("duration"),
    creator: formData.get("creator"),
    creator_email: formData.get("creator_email"),
    image: formData.get("image"),
  };
  await saveCourse(newCourse);

  return redirect("/courses");
}
