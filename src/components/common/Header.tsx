import styled from "styled-components";
import "sanitize.css";
import logo from "../../asset/images/logo.png";
import { FaSignInAlt, FaRegUser } from "react-icons/fa";

const category = [
  {
    id: null,
    name: "전체",
  },
  {
    id: 0,
    name: "동화",
  },
  {
    id: 1,
    name: "소설",
  },
  {
    id: 2,
    name: "사회",
  },
];

function Header() {
  return (
    <HeaderStyle>
      <h1 className="logo">
        <img src={logo} alt="book store logo" />
      </h1>
      <nav className="category">
        <ul>
          {category.map((item) => (
            <li key={item.id}>
              <a
                href={
                  item.id === null ? "/books" : `/books?category_id=${item.id}`
                }
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <nav className="auth">
        <ul>
          <li>
            <a href="/login">
              <FaSignInAlt />
              로그인
            </a>
          </li>
          <li>
            <a href="/login">
              <FaRegUser />
              회원가입
            </a>
          </li>
        </ul>
      </nav>
    </HeaderStyle>
  );
}

const HeaderStyle = styled.header`
  width: 100%;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.layout.width.large};
  border-bottom: 1px solid ${({ theme }) => theme.color.background};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;

  .logo {
    img {
      width: 200px;
    }
  }

  .category {
    ul {
      display: flex;
      gap: 32px;
      li {
        a {
          font-size: 1.5rem;
          font-weight: 600;
          text-decoration: none;
          color: ${({ theme }) => theme.color.text};

          &:hover {
            color: ${({ theme }) => theme.color.primary};
          }
        }
      }
    }
  }

  .auth {
    ul {
      display: flex;
      gap: 16px;
      li {
        a {
          font-size: 1rem;
          font-weight: 600;
          text-decoration: none;
          display: flex;
          align-items: center;
          line-height: 1;

          svg {
            margin-right: 6px;
          }
        }
      }
    }
  }
`;

export default Header;
