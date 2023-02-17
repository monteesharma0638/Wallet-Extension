import "./App.css";
import DataContext from "./DataContext";
import { createMemoryRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import CreatePopup from "./pages/CreatePopup";
import CreateNewWallet from "./pages/CreateNewWallet";
import Home from "./pages/Home";
import AssetPage from "./pages/AssetPage";
import CreatePassword from "./pages/CreatePassword";
import SendAddressSelection from "./pages/SendAddressSelection";

const router = createMemoryRouter([
  {
    path: "",
    element: <DataContext />,
    errorElement: "Having an error",
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "create-new-wallet/:password",
        element: <CreateNewWallet />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "create-password",
        element: <CreatePassword />
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sendaddrslc",
        element: <SendAddressSelection />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
