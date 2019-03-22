var Mock = require("mockjs");
import denglu from "./denglu.js"
const Random = Mock.Random;
let i;
const list = function() {
  let articles = [];
  i = Random.natural(0, 60);
  for (let x = 0; x < i; x++) {
    let listData = {
      mainText: Random.cparagraph(),
      numReview: Random.natural(0, 10000),
      times: Random.natural(0, 60),
      thumbnail_pic_s: Random.dataImage("135x143") // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
    };
    articles.push(listData);
  }
  return {
    data: articles
  };
};

const lists = function() {
  let articles2 = [];
  i = Random.natural(0, 60);
  for (let x = 0; x < i; x++) {
    let listData = {
      mainText: Random.csentence(5, 12),
      zan: Random.natural(0, 1000),
      names: Random.ctitle(),
      times: Random.natural(1, 15),
      thumbnail_pic_s: Random.dataImage("70x70") // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
    };
    articles2.push(listData);
  }
  return {
    data: articles2
  };
};

const userMsg = function() {
  let useMsg = {
    usePH: Random.dataImage("", "用户头像")
  };
  return {
    data: useMsg
  };
};


Mock.mock("/list", /post|get/i, list); //当post或get请求到/login路由时Mock会拦截请求并返回上面的数据
Mock.mock("/Secends", /post|get/i, lists);
Mock.mock("/userMsg", /post|get/i, userMsg);
Mock.mock("/denglu",/post|get/i, denglu)
