import * as dd from "dingtalk-jsapi"; // 此方式为整体加载，也可按需进行加载

export async function fetchDdRequestAuthCode() {
  let authCode = "authcode";
  await dd.runtime.permission.requestAuthCode({
    // todo 学生组织和专家组织有不同的corpId，记得替换！
    corpId: "ding1f72a13e63802204a39a90f97fcb1e09", // 企业id
    onSuccess: function (info) {
      // console.log(info); // 通过该免登授权码可以获取用户身份
      authCode = info.code;
    },
    onFail: function (err) {
      // 调用失败时回调
      console.log(err);
    },
  });
  return authCode;
}
