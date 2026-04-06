// http://localhost:3000/courses/share

import ImagePicker from "@/components/image-picker";
import { shareCourseAction } from "@/lib/action";

function ShareCourse() {
  return (
    <div className="row">
      <div className="col-6 offset-3">
        <h3 className="mb-4 text-center">Share Your Course</h3>
        <form action={shareCourseAction}>
          {/* title */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="title"
              id="title"
              placeholder=""
            />
            <label htmlFor="title">Title</label>
          </div>

          {/* duration */}
          <div className="form-floating mb-3">
            <input
              type="number"
              className="form-control"
              name="duration"
              id="duration"
              placeholder=""
            />
            <label htmlFor="duration">Duration</label>
          </div>
          {/* creator */}
          <div className="form-floating mb-3">
            <input
              type="text"
              className="form-control"
              name="creator"
              id="creator"
              placeholder=""
            />
            <label htmlFor="creator">Creator Name</label>
          </div>
          {/* creator_email */}
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              name="creator_email"
              id="creator_email"
              placeholder=""
            />
            <label htmlFor="creator_email">Creator Email</label>
          </div>
          {/* image */}
          <div className="mb-3">
            <ImagePicker />
          </div>
          {/* buttons */}
          <div className="row">
            <div className="col">
              <div className="d-grid">
                <button type="submit" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
            <div className="col">
              <div className="d-grid">
                <button type="button" className="btn btn-secondary">
                  Reset
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ShareCourse;
