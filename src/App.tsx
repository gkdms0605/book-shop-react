import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Error from "./components/common/Error";
import { BookStoreThemeProiver } from "./components/context/ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Signup from "./pages/Signup";
import ResetPassword from "./pages/reset";
import Login from "./pages/Login";
import Books from "./pages/Books";
import BookDetail from "./pages/BookDetail";
import Cart from "./pages/Cart";
import Order from "./pages/Order";
import OrderList from "./pages/OrderList";

const routeList = [
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/books",
    element: <Books />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/reset",
    element: <ResetPassword />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '/book/:bookId',
    element: <BookDetail />
  },
  {
    path: '/cart',
    element: <Cart />
  },
  {
    path: '/order',
    element: <Order />
  },
  {
    path: '/orderlist',
    element: <OrderList />
  },
];

const router = createBrowserRouter(routeList.map((item) => {
  return {
    ...item,
    element: <Layout>{item.element}</Layout>,
    errorElement: <Error />
  }}))

function App() {
  return (
    <BookStoreThemeProiver>
      <RouterProvider router={router}></RouterProvider>
    </BookStoreThemeProiver>
  );
}

export default App;
