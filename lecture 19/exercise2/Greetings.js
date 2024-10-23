// Welcome
function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

// Sign in
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

// Homepage
function HomeGreeting(props) {
  return <h1>This is Homepage.</h1>;
}

// Choose greetings
function Greeting(props) {
  const { isLoggedIn, isHomePage } = props;

  if (isHomePage) {
      return <HomeGreeting />;
  }

  if (isLoggedIn) {
      return <UserGreeting />;
  }

  return <GuestGreeting />;
}