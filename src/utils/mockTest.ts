import Mock from "mockjs";
import URLs from "./urls";
const mockData: any = {
  getProjectList: {
    code: 0,
    message: "操作成功",
    data: {
      count: "@integer(0,100)",
      "list|4-10": [
        {
          content: "@string",
          end_time: 1578898656973,
          img: "//www.baidu.com/img/bd_logo1.png",
          start_time: 1578898656973,
          title: "@string",
          url: "www.baidu.com",
          _id: "@natural(10, 100000)"
        }
      ]
    }
  }
};
Mock.setup({
  timeout: 500
});
for (const key in mockData) {
  let urls: any = URLs;
  if (urls[key]) {
    console.log(urls[key]);
    Mock.mock(new RegExp("/mock/" + urls[key] + ".*"), mockData[key]);
  }
}
