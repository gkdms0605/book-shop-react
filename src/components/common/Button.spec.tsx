import { render, screen } from "@testing-library/react";
import { BookStoreThemeProiver } from "../context/ThemeContext";
import Button from "./button";

describe("Button 컴포넌트 테스트", () => {
  it("랜더를 확인", () => {
    // 1 랜더
    render(
      <BookStoreThemeProiver>
        <Button
          size="large"
          scheme="primary"
          disabled={true}
          isLoading={true}
        >
          버튼
        </Button>
      </BookStoreThemeProiver>
    );

    // 2 확인
    expect(screen.getByText("버튼")).toBeInTheDocument();
  });

  it("size props 적용", () => {
    const { container } = render(
      <BookStoreThemeProiver>
        <Button
          size="large"
          scheme="primary"
          disabled={true}
          isLoading={true}
        >
          버튼
        </Button>
      </BookStoreThemeProiver>
    );

    expect(screen.getByRole("button")).toHaveStyle({
      fontSize: "1.5rem"
    });
  });
});
