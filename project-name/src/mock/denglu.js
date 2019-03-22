var Mock = require("mockjs");
let denglu = function() {
    let denglu = [{zhangHao:"123",miMA:"123"},{miMA:"123"}];
    return {
        data: denglu
    };
};
Mock.mock("/denglu",/post|get/i, denglu)