import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import {BookStoreThemeProiver} from "./components/context/ThemeContext";

function App() {

  return (
    <BookStoreThemeProiver>
      <Layout>
        <ThemeSwitcher />
        <Home />
      </Layout>
    </BookStoreThemeProiver>
  );
}

export default App;
