import { Button, message, Spin } from "antd";
import { React, useState } from "react";
import { fetchDdRequestAuthCode } from "../../api/dingApi";
import { Link, useNavigate } from "react-router-dom";
import { Layout } from "antd";
import { Card, Col, Row } from "antd";
import { loginForStudent, loginForExpert } from "@/api/user.js";
import { fetchLoadingSelector, setLoading } from "../../store/slice/userSlice";
import { useSelector, useDispatch } from "react-redux";
import "./login.styl";

function Login() {
  const { Content, Footer } = Layout;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector(fetchLoadingSelector);

  async function getCode() {
    let authCode = await fetchDdRequestAuthCode();
    return authCode;
  }

  async function loginAsStudent() {
    dispatch(setLoading(true));
    let data = "development_wrong_authcode";
    // if (process.env.NODE_ENV !== "development") {
    data = await getCode();
    // }
    let res = await loginForStudent(data);
    console.log(res);
    if (res == undefined || res.data.code == 0) {
      // 请求成功
      message.success("登录成功");
      navigate("/home");
    } else {
      message.error(res.data.message || "登录失败");
    }
    dispatch(setLoading(false));
  }

  async function loginAsExpert() {
    dispatch(setLoading(true));
    let data = "development_wrong_authcode";
    // if (process.env.NODE_ENV !== "development") {
    data = await getCode();
    // }
    let res = await loginForExpert(data);
    if (res == undefined || res.data.code == 0) {
      // 请求成功
      message.success("登录成功");
    } else {
      message.success(res.data.message || "登录失败");
    }
    dispatch(setLoading(false));
  }
  const gridStyle = {
    textAlign: "center",
  };
  return (
    <Spin spinning={loading}>
      <Layout className="layout">
        <Content
          style={{
            height: "90vh",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Card style={gridStyle}>
            <h2>Welcome~，请选择您的身份</h2>
            <Row justify="center" wrap="true">
              <Col span={12}>
                <Button type="primary" onClick={() => loginAsStudent()}>
                  我是学生
                </Button>
              </Col>
              <Col span={12}>
                <Button type="primary" onClick={() => loginAsExpert()}>
                  我是专家
                </Button>
              </Col>
            </Row>

            <Link to={`/home`}>home</Link>
          </Card>
        </Content>
        <Footer
          style={{
            textAlign: "center",
          }}
        >
          毕业论文评审系统 ©2023 Created by Nju SE
        </Footer>
      </Layout>
    </Spin>
  );
}

export default Login;
