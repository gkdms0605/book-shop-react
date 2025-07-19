import styled from "styled-components";
import MainReview from "@/components/main/MainReview";
import { useMain } from "@/hooks/useMain";
import Title from "@/components/common/Title";
import MainNewBooks from "@/components/main/MainNewBooks";

function Home() {
  const {reviews, newBooks} = useMain();

  return (
    <HomeStyle>
      {}
      {}
      <section>
        <Title size={"large"}>신간</Title>
        {<MainNewBooks books={newBooks} />}
      </section>
      <section>
        <Title size={"large"}>리뷰</Title>
        {<MainReview reviews={reviews}/>}
      </section>
    </HomeStyle>
  );
}

const HomeStyle = styled.div`

`;

export default Home;
