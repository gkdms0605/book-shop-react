import styled from "styled-components";
import { useCategory } from "../../hooks/useCategory";
import Button from "../common/button";
import { useSearchParams } from "react-router-dom";

function BooksFilter() {
  const {category} = useCategory();
  const [searchParams, setSearchParams] = useSearchParams();

  const handleCategory = (category_id: number | null) => {

    const newSearchParams = new URLSearchParams(searchParams);
    //URLSearchParams: new -> 인스턴스 생성 -> 인스턴스를 활용해 querystring의 내용을 엑세스 또는 set을 할 수 있도록 함.

    if(category_id === null) {
      newSearchParams.delete('category_id');
    } else {
      newSearchParams.set('category_id', category_id.toString());
    }

    setSearchParams(newSearchParams);

    console.log(newSearchParams);
  }

  const currentCategory = searchParams.get('category_id');
  console.log(currentCategory);


  return (
    <BooksFilterStyle>
      <div className="category">
        {
          category.map((item) => (
            <Button size="medium" scheme={currentCategory === item.category_id?.toString() ? 'primary' : 'normal'} key={item.category_id} onClick={() => handleCategory(item.category_id)}>{item.category_name}</Button>
          ))
        }
      </div>
      <div className="new">
        <Button size="medium" scheme='normal'>신간</Button>
      </div>
    </BooksFilterStyle>
  )
}

const BooksFilterStyle = styled.div`
  display: flex;
  gap: 24px;

  .category {
    display: flex;
    gap: 8px;
  }
`;
export default BooksFilter;