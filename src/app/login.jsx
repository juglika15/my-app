export default function Login() {
  return (
    <button className="log-btn dark:bg-dark">
      <a
        href="/api/auth/login"
        className="hover:text-white dark:hover:text-black"
      >
        Login
      </a>
    </button>
  );
}
