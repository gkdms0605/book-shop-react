import { render, screen } from "@testing-library/react"
import { BookStoreThemeProiver } from "../context/ThemeContext"
import InputText from "./InputText"
import React from "react";

describe("Input 컴포넌트 테스트", () => {
  it("랜더를 확인", () => {
    render(
      <BookStoreThemeProiver>
        <InputText placeholder="아아"></InputText>
      </BookStoreThemeProiver>
    )

    expect(screen.getByPlaceholderText("아아")).toBeInTheDocument();
  });

  it("forwardRef 테스트", () => {
    const ref = React.createRef<HTMLInputElement>();
    render(
      <BookStoreThemeProiver>
        <InputText placeholder="여기에 입력" ref={ref} />
      </BookStoreThemeProiver>
    );

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  })
})