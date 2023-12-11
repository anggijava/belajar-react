import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CatalogPage from "./pages/CatalogPage";
import DetailPage from "./pages/DetailPage";
import LibraryPage from "./pages/LibraryPage";
import CartPage from "./pages/CartPage";
import Layout from "./components/Layout";
import { Provider } from "react-redux";
import store from './store';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {
        index: true,
        element: <CatalogPage/>
      },
      {
        path: 'detail/:id',
        element: <DetailPage/>
      },
      {
        path: 'library',
        element: <LibraryPage/>
      },
      {
        path: 'cart',
        element: <CartPage/>
      },
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  )
}

export default App
