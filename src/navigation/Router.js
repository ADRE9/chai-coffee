import { Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage/LoginPage";
import RequireAuth from "../components/RequireAuth";
import MenuPage from "../pages/MenuPage/MenuPage";
import BillingPage from "../pages/BillingPage/BillingPage";
import OrderListsPage from "../pages/OrderListsPage/OrderListsPage";

function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <RequireAuth>
            <MenuPage />
          </RequireAuth>
        }
      />
      <Route
        path="/menu"
        element={
          // <RequireAuth>
          <MenuPage />
          // </RequireAuth>
        }
      />
      <Route
        exact
        path="/billing"
        element={
          <RequireAuth>
            <BillingPage />
          </RequireAuth>
        }
      />
      <Route
        exact
        path="/order-lists"
        element={
          <RequireAuth>
            <OrderListsPage />
          </RequireAuth>
        }
      />
      <Route exact path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default Router;
