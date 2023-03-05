import request from "@/utils/request";

export const loginForStudent = async (authCode) =>
  request({
    url: "/student/login",
    method: "get",
    params: {
      authCode: authCode,
    },
  });
export const loginForExpert = async (authCode) =>
  request({
    url: "/expert/login",
    method: "get",
    params: {
      authCode: authCode,
    },
  });
