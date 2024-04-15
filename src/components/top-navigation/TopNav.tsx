import Link from "next/link";

const TopNav = () => (
  <nav className="border-b bg-gray-800 p-4 text-white">
    <ul className="flex justify-between gap-4">
      <div className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </div>
      <li>
        <Link href="/signin">Sign In</Link>
      </li>
    </ul>
  </nav>
);
export default TopNav;
