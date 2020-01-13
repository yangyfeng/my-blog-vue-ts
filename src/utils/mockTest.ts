import Mock from "mockjs";
import URLs from "./urls";
let R = Mock.Random;
const mockData: any = {
  // 项目
  getProjectList: {
    code: 0,
    message: "操作成功",
    data: {
      count: "@integer(0,100)",
      "list|10-20": [
        {
          content: "@string(18,26)",
          end_time: +new Date(R.date()),
          img: R.dataImage("350x250"),
          start_time: +new Date(R.date()),
          title: "@string(12,19)",
          url: "@url",
          _id: "@natural(10, 100000)"
        }
      ]
    }
  },
  // 标签云
  getTagList: {
    code: 0,
    message: "操作成功",
    data: {
      count: "@integer(0,100)",
      "list|15-20": [
        {
          name: "@string",
          _id: "@natural(10, 100000)",
          category: "@string"
        }
      ]
    }
  },
  // 喜好
  getFavorite: {
    code: 0,
    message: "操作成功",
    data: {
      fans: R.integer(0, 100),
      article: R.integer(0, 100),
      wordcount: R.integer(0, 100),
      harvestlike: R.integer(0, 100)
    }
  },
  // 获取文章
  getArticleList: {
    code: 0,
    message: "操作成功",
    data: {
      count: "@integer(0,100)",
      "list|15-20": [
        {
          "category|1-5": "@string(3, 5)",
          create_time: +new Date(R.date()),
          desc: "@string(23, 25)",
          img_url: R.dataImage("350x250"),
          meta: {
            views: "@integer(0,100)",
            likes: "@integer(0,100)",
            comments: "@integer(0,100)"
          },
          "tags|3-5": "@string(3, 5)",
          title: "@string(10, 15)",
          _id: "@id"
        }
      ]
    }
  }
};
Mock.setup({
  timeout: "500 - 1000"
});
for (const key in mockData) {
  let urls: any = URLs;
  if (urls[key]) {
    Mock.mock(new RegExp("/mock/" + urls[key] + ".*"), mockData[key]);
  }
}
