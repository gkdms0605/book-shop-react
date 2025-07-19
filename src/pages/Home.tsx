import styled from "styled-components";
import MainReview from "@/components/main/MainReview";
import { useMain } from "@/hooks/useMain";
import Title from "@/components/common/Title";
import MainNewBooks from "@/components/main/MainNewBooks";
import MainBest from "@/components/main/MainBest";
import Banner from "@/components/common/banner/Banner";
import { useMediaQuery } from "@/hooks/useMediaQuery";

function Home() {
  const {reviews, newBooks, bestBooks, banners} = useMain();
  const {isMobile} = useMediaQuery();

  console.log(isMobile);

  return (
    <HomeStyle>
      <section>
        {<Banner banners={banners}/>}
      </section>
      <section>
        <Title size="large">베스트 셀러</Title>
        {<MainBest books={bestBooks} />}
      </section>
      
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
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default Home;
