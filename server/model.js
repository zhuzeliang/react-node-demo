const mongoose = require('mongoose');
// 链接mongo 并且使用imooc这个集合
const DB_URL = 'mongodb://localhost:27017/demo';
mongoose.connect(DB_URL);


const models = {
	user:{
		'user':{type:String, 'require':true},
		'pwd':{type:String, 'require':true},
		'type':{'type':String, 'require':true},
		//头像
		'avatar':{'type':String},
		// 个人简介或者职位简介
		'desc':{'type':String},
		// 职位名
		'title':{'type':String},
		// 如果你是boss 还有两个字段
		'company':{'type':String},
		'money':{'type':String}
	},
	person:{
		//创建时间
		date:{'type':String},
		//联系人名字
		name:{type:String},
		//联系人年龄
        age:{type:Number},
        //联系人性别
        sex:{'type':String},
        //联系人地址
        address:{'type':String}
	}
};

for(let m in models){
	mongoose.model(m, new mongoose.Schema(models[m]))
};

module.exports = {
	getModel:function(name){
		return mongoose.model(name)
	}
};


