import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./layout-pages/Layout";
import AllTodos from "./layout-pages/AllTodos";
import Active from "./layout-pages/active";
import Complete from "./layout-pages/complete";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AllTodos />} />
          <Route path="active" element={<Active />} />
          <Route path="complete" element={<Complete />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
