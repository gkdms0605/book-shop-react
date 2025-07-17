import { BookReviewItemWrite } from "@/models/book.model";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "../common/button";

interface Props {
  onAdd: (data: BookReviewItemWrite) => void;
}

function BookReviewAdd({ onAdd }: Props) {
  const {register, handleSubmit, formState: {errors}} = useForm<BookReviewItemWrite>();

  return (
    <BookReviewAddStyle>
      <form onSubmit={handleSubmit(onAdd)}>
        <fieldset>
          <textarea {...register("content", {required: true})}></textarea>
          {errors.content && <p className="error-text">리뷰 내용을 입력해주세요.</p>}
        </fieldset>
        <fieldset className="submit">
          <select {...register("score", {required: true, valueAsNumber: true})}>
            <option value="1">1점</option>
            <option value="2">2점</option>
            <option value="3">3점</option>
            <option value="4">4점</option>
            <option value="5">5점</option>
          </select>
          {errors.score && <p className="error-text">별점을 선택해주세요.</p>}
          <Button size="medium" scheme="primary" type="submit">작성하기</Button>
        </fieldset>
      </form>
    </BookReviewAddStyle>
  );
}

const BookReviewAddStyle = styled.div`
  form {
    display: flex;
    flex-direction: column;
    gap: 6px;

    fieldset {
      border: 0;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      justify-content: end;
      gap: 12px;

      .error-text {
        color: red;
        padding: 0;
        margin: 0;
      }
    }

    textarea {
      width: 100%;
      height: 100%;
      border-radius: ${({theme}) => theme.borderRadius.default};
      border: 1px solid ${({theme}) => theme.color.border};
      padding: 12px;
    }
  }

  .submit {
    display: flex;
    justify-content: end;
    flex-direction: row;
  }
`;

export default BookReviewAdd;