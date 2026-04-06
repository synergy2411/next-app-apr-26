import Link from "next/link";

function MainNavigation() {
  return (
    <header>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link className="nav-link" href="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/courses">
            Browse Courses
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/courses/share">
            Share your course
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default MainNavigation;
