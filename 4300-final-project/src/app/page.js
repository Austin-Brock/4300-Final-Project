import Profile from "./Profile";
import Student from "./Student";

const site = "React is Awesome";
const user = "Chuck Norriss";

export default function Home() {
  return (
    <section>
    <Student />
    <h1>{site}</h1>
    <Profile />
    <Profile />
    <Profile />
    <h3>Welcome {user}</h3>
    </section>
  );
}
