// create button login
function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

// create button logout
function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

// create button Homepage
function HomeButton(props) {
  return (
    <button onClick={props.onClick}>
      Go to Homepage
    </button>
  );
}