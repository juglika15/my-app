export default function Logout() {
  return (
    <button className="log-btn">
      <a href="/api/auth/logout" className="log">
        Logout
      </a>
    </button>
  );
}
