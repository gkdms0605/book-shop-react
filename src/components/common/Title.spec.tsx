import { render, screen } from "@testing-library/react";
import Title from "./Title";
import { BookStoreThemeProiver } from "../context/ThemeContext";

describe("Title 컴포넌트 테스트", () => {
  it("랜더를 확인", () => {
    // 1 랜더
    render(
      <BookStoreThemeProiver>
        <Title size="large">제목</Title>
      </BookStoreThemeProiver>
    );

    // 2 확인
    expect(screen.getByText("제목")).toBeInTheDocument();
  });

  it("size props 적용", () => {
    const { container } = render(
      <BookStoreThemeProiver>
        <Title size="large">제목</Title>
      </BookStoreThemeProiver>
    );

    expect(container?.firstChild).toHaveStyle({ fontSize: "2rem" });
  });
  
  it("color props 적용", () => {
    const {container} = render(
      <BookStoreThemeProiver>
        <Title size="large" color="primary">
          제목
        </Title>
      </BookStoreThemeProiver>
    );

    expect(container?.firstChild).toHaveStyle({color: "brown"});
  })
});
