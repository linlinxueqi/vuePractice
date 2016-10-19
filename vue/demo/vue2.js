var example2=new Vue({
	el:'#example-2',
	data:{
		greeting:true
	}
})//操作DOM结构

//数据绑定语法
		//vue.js的模板是基于DOM实现的，这意味着所有的vue.js模板都是可以解析的有效的HTML

var vm=new Vue({
	el:'#app',
	data:{
		a:1
	},
	computed:{
		b:function(){
			return this.a+1
		}
	}
})

// var demo=new Vue({
// 	el:'#demo',
// 	data:{
// 		firstName:'Foo',
// 		lastName:'Bar',
// 		fullName:'Foo Bar'
// 	}
// })
//命令式的，重复的
// demo.$watch('firstName',function(val){
// 	this.fullName=val+''+this.lastName
// })
// demo.$watch('lastName',function(val){
// 	this.fullName=this.firstName+''+val
// })

//计算属性
// var demo=new Vue({
// 	el:'#demo',
// 	data:{
// 		firstName:'Foo',
// 		lastName:'Bar'
// 	},
// 	computed:{
// 		fullName:function(){
// 			return this.firstName+''+this.lastName
// 		}
// 	}
// })
var demo=new Vue({
	el:'#demo',
 	data:{
 		firstName:'Foo',
		lastName:'Bar1111'
	},
 	computed:{
 		fullName:{
 			get:function(){
 				return this.firstName+''+this.lastName
 			},
 			set:function(newValue){
 				var names=newValue.split(' ');
 				this.firstName=names[0];
 				this.lastName=names[names.length-1]
 			}
 			
 		}

 	}
})
demo.fullName='jogn Doe';



