import Button from "../components/common/button";
import InputText from "../components/common/InputText";
import Title from "../components/common/Title";
import { formatNumbers } from "../utils/format";

const COUNT = 10000;

function Home() {
  return (
    <>
      <Title size="large">Home body</Title>
      <Button size="large" scheme="normal" disabled={false} isLoading={false}>버튼 테스트</Button>
      <InputText placeholder="여기에 입력하세요"></InputText>
      <div>count: ${formatNumbers(COUNT)}</div>
    </>
  );
}

export default Home;
