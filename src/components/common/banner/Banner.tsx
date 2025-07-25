import { Banner as IBanner } from "@/models/banner.model";
import styled from "styled-components";
import BannerItem from "./BannerItem";
import { useMemo, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface Props {
  banners: IBanner[];
}

function Banner({banners}: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log(currentIndex);

  const transFormValue = useMemo(() => {
    return currentIndex * -100;
  }, [currentIndex]);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if(currentIndex === banners.length - 1) return;
    setCurrentIndex(currentIndex + 1);
  };


  return (
    <BannerStyle>
      <BannerContainerStyle $transFormValue={transFormValue}>
        {
          banners.map((banner, index) => (
            <BannerItem banner={banner} />
          ))
        }
      </BannerContainerStyle>
        <BannerButtonStyle>
          <button onClick={handlePrev} className="prev"><FaAngleLeft /></button>
          <button onClick={handleNext} className="next"><FaAngleRight /></button>
        </BannerButtonStyle>

        <BannerIndicatiorStyle>
          {
            banners.map((banner, index) => (
              <span className={index === currentIndex ? "active" : ""} onClick={() => setCurrentIndex(index)}></span>
            ))
          }
        </BannerIndicatiorStyle>
    </BannerStyle>
  );
}

interface BannerContainerStyleProps {
  $transFormValue: number;
}

const BannerStyle = styled.div`
  overflow: hidden;
  position: relative;
`;

const BannerContainerStyle = styled.div<BannerContainerStyleProps>`
  display: flex;
  transform: translateX(${(props) => props.$transFormValue}%);
  transition: transform 0.5s ease-in-out;
`;

const BannerButtonStyle = styled.div`
  button {
    border: 0;
    width: 40px;
    height: 40px;
    border-radius: 500px;
    background: rgba(0,0,0,0.5);
    font-size: 2rem;
    cursor: pointer;
    displau: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);

    svg {
      fill: white;
    }

    &.prev {
      left: 10px;
    }

    &.next {
      right: 10px;
    }
  }
`;

const BannerIndicatiorStyle = styled.div`
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  span {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 100px;
    background: white;
    margin: 0 4px;
    cursor: pointer;

    &.active {
      background: ${({theme}) => theme.color.primary};
    }
  }
`;

export default Banner;