export function LoginForm() {
  return (
    <form>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <div onClick={() => alert("login")}>Login</div>
    </form>
  );
}
