import NavLink from "./nav-link";

function MainNavigation() {
  const allLinks = [
    { path: "/", content: "Home" },
    { path: "/courses", content: "Browser Courses" },
    { path: "/courses/share", content: "Share Your Course" },
  ];
  return (
    <header>
      <ul className="nav nav-tabs">
        {allLinks.map((link) => (
          <li key={link.path} className="nav-item">
            <NavLink href={link.path}>{link.content}</NavLink>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default MainNavigation;
