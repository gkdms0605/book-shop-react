import styled from "styled-components";
import MainReview from "@/components/main/MainReview";
import { useMain } from "@/hooks/useMain";
import Title from "@/components/common/Title";

function Home() {
  const {reviews} = useMain();

  return (
    <HomeStyle>
      {}
      {}
      {}
      <Title size={"large"}>리뷰</Title>
      {<MainReview reviews={reviews}/>}
    </HomeStyle>
  );
}

const HomeStyle = styled.div``;

export default Home;
