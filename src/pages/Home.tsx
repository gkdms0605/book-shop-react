import { formatNumbers } from "../utils/format";

const COUNT = 10000;

function Home() {
  return (
    <>
      <div>Home body</div>
      <div>count: ${formatNumbers(COUNT)}</div>
    </>
  );
}

export default Home;
