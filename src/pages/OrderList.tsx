import styled from "styled-components";
import Title from "../components/common/Title";
import { useOrders } from "../hooks/useOrders";
import { formatDate, formatNumbers } from "../utils/format";
import Button from "../components/common/button";

function OrderList() {
  const {orders, selectedItemId, selectOrderItem} = useOrders();

  console.log(orders)

  return (
    <OrderListStyle >
      <Title size="large">주문 내역</Title>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>주문일자</th>
            <th>주소</th>
            <th>수령인</th>
            <th>전화번호</th>
            <th>대표 상품명</th>
            <th>수량</th>
            <th>금액</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
          <>
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{formatDate(order.createdAt, "YYYY-MM-DD")}</td>
              <td>{order.address}</td>
              <td>{order.receiver}</td>
              <td>{order.contact}</td>
              <td>{order.bookTitle}</td>
              <td>{order.totalQuantity} 권</td>
              <td>{formatNumbers(order.totalPrice)} 원</td>
              <td>
                <Button size={"small"} scheme={"primary"} onClick={() => selectOrderItem(order.id)}>
                  자세히
                </Button>
              </td>
            </tr>
            { selectedItemId === order.id && (
                <tr>
                  <td></td>
                  <td colSpan={8}>
                    <ul className="detail">
                      {order?.detail && order.detail.map((item) => <li key={item.bookId}>
                        <div>
                          <span>{item.bookId}</span>
                          <span>{item.author}</span>
                          <span>{formatNumbers(item.price)}</span>
                        </div>
                      </li>)}
                    </ul>
                  </td>
                </tr>
              )}
            </>
          ))}
        </tbody>
      </table>
    </OrderListStyle>
  );
}

const OrderListStyle = styled.div`
  padding: 24px 0 0 0;

  table {
    width: 100%;
    border-collapse: collapse;
    border-top: 1px solid ${({theme}) => theme.color.border};
    border-bottom: 1px solid ${({theme}) => theme.color.border};

    th, td {
      padding: 16px;
      border-bottom: 1px solid ${({theme}) => theme.color.border};
      text-align: center;
    }
  }

  .detail {
    margin: 0;
    li {
      list-style: square;
      list-align: left;
      div {
        display: flex;
        padding: 8px 12px;
        gap: 8px;
      }
    }
  }
`;

export default OrderList;