import Profile from "./Profile";
import Student from "./Student";

const site = "React is Awesome";
const user = "Chuck Norriss";

export default function Home() {
  return (
    <section>
    <Student />
    <h1>{site}</h1>
    <profile />
    <profile />
    <profile />
    <h3>Welcome {usert}</h3>
    </section>
  );
}
