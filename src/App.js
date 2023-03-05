import router from "./router";
import { RouterProvider } from "react-router-dom";
// 全局样式
import "@/common/stylus/frame.styl";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
