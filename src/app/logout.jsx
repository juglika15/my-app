export default function Logout() {
  return (
    <button className="log-btn dark:bg-black dark:hover:bg-white">
      <a
        href="/api/auth/logout"
        className="hover:text-white dark:hover:text-black"
      >
        Logout
      </a>
    </button>
  );
}
