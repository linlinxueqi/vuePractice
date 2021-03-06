function extend(subClass,superClass){
	var F=function(){};
	F.prototype=superClass.prototype;
	//子类的prototype指向F的_proto_，_proto_又指向父类的prototype
	subClass.prototype=new F();
	//在子类上存储一个指向父类的prototype的属性，
	//便于子类的构造方法中与父类的名称解耦
	//subClass.superClass.constructor.call代替superClass.call
	subClass.superClass=superClass.prototype;
}