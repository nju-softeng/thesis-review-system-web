import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// 引入 store、react-redux
import { Provider } from "react-redux";
import store from "./store";

// 设置Antd为中文语言
import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";

// 全局样式
import "@/common/stylus/frame.styl";

const antdConfig = {
  locale: zhCN,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ConfigProvider {...antdConfig}>
    <Provider store={store}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </ConfigProvider>
);
