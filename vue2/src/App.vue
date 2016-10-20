<template>
  <div id="app">
      <h1>专题管理</h1>
      <div class="content-left clearfloat">
          <p>配置内容</p>
          <left 
          :arrayitems.sync="items" :show.sync="tankuang"  :propcolor.sycn="color" :newname.sycn="newName" :itemindex.sync="itemIndex">
          </left>
          <right></right>     
      </div>
  </div>

  <!-- 添加内容 -->
  <div class="newAdd" v-if="tankuang">  
      <div class="newContent">
          <h1>添加分类 <span  v-on:click="showTankuang">X</span></h1>
          <div class="addData">
              <div class="set-title">
                <label>专题名称</label>
                <input type="text" v-on:keyup.enter="addName" v-model="newName">
              </div>
              <div class="searchGroup clearfloat">
                <label>图文封面</label>
                <div class="addImg">
                  <div class="bigImg"> 
                    选择文件
                  </div>
                  <div class="smallImg">
                    选择文件
                  </div>
                </div>
              </div>
              <div class="set-color">
                <label>选择标识:</label>
                <span class="chooseColor colorGreen" v-on:click="setColor('green')" :prop></span>
                <span class="chooseColor colorLightblue" v-on:click="setColor('lightblue')"></span>
                <span class="chooseColor colorOrange" v-on:click="setColor('orange')"></span>
                <span class="chooseColor colorPink" v-on:click="setColor('pink')"></span>
                <span class="chooseColor colorRed" v-on:click="setColor('red')"></span>
              </div>
          </div>
          <button v-on:click="saveData" class="saveBtn">保存</button>
      </div>
  </div>
  
  	
  
</template>

<script>
import left from './components/left'
import right from './components/right'

export default {
  components:{
    left,right
  },
  data:function(){
  	return {
  		color:'',
  		newName:'',
  		itemIndex:0,
  		items:[],
  		tankuang:false
  	}
  },
  methods:{
  	addName:function(){
  		this.newName=this.newName.trim();
  		//console.log(this.newName);
  	},
  	setColor:function(val){
  		this.color=val;
  	},
  	saveData:function(){
  		var dateTime=new Date();
  		var month=dateTime.getMonth();
  		var year=dateTime.getFullYear();
  		var day=dateTime.getDate();
  		if(this.newName!==null&&this.color!==null){
  			this.items.push({color:this.color,name:this.newName,date:{year:year,month:month,day:day},id:this.itemIndex});
  			this.newName='';
  			this.color='';
  		}
  		this.itemIndex=this.items.length-1;
  		this.tankuang=false;
  	},
  	showTankuang:function(){
  		if(this.tankuang){
  			this.tankuang=false;
  			
  		}else{
  			this.tankuang=true;
  		}

  	}
  }
}
</script>

<style>
  html,body{
    height:100%;
  }
  .newAdd{
    width:100%;
    height: 100%;
    position:absolute;
    top:0;
    left: 0;
    z-index: 4;
    background-color: rgba(0,0,0,.3);
  }
  .newContent{
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    margin:auto;
    width:660px;
    height:500px;
    padding:30px;
    background-color: #fff;
  }
  .newContent>h1{
    font-weight: normal;
    font-size: 24px;
    height:40px;
    line-height: 40px;
    width:600px;
    border-bottom: 1px solid #eeeee3;
    text-align: center;
  }
  .newContent>h1>span{
    float: right;
    color:#999999;
    cursor: pointer;
  }
  .addData{
    margin-top: 30px;
  }

  .set-title{
    height:50px;
    line-height: 50px;
  }
  .set-title input{
    margin-left: 30px;
    height: 30px;
    width:240px;
    border:1px solid #eeeeee;
  }
  .addImg{
    float: right;
  }
  .bigImg{
    float: left;
    width:300px;
    height: 200px;
    border:1px dashed gray;
    line-height: 200px;
    text-align: center;
  }
  .smallImg{
    float: left;
    width:150px;
    height: 100px;
    border:1px dashed gray;
    line-height: 100px;
    text-align: center;
    margin-left: 30px;
  }
  .set-color{
     margin-top: 30px;
  }
   .chooseColor{
    display: inline-block;
    vertical-align: top;
    width:20px;
    height: 20px;  
    border-radius: 3px;
   
  }
   .colorGreen{
    background-color: #008000;
  }
  .colorLightblue{
    background-color:#6699FF;
  }
  .colorOrange{
    background-color: #FF9900;
  }
  .colorPink{
    background-color: #FF33FF;
  }
  .colorRed{
    background-color: red;
  }
  .saveBtn{
  	width:100px;
  	height: 30px;
  	margin:0 auto;
  }
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: "微软雅黑";
  }
  .clearfloat{
    zoom:1;
  }
  .clearfloat:after{
    content: '';
    display: block;
    clear:both;
  }
  ul li{
    list-style: none;
  }
  #app{
    width:1349px;
    padding:30px;
  }
  #app>h1{
    color:#666666;
    font-size: 32px;
    margin-bottom: 20px;
  }
  .content-left{
    width:1349px;
    /*padding-right: 30px;*/
    /*border-right: 1px solid #666666;*/
  }
  .content-left>p{
    font-family: normal;
    font-size: 12px;
    color:#63A8EB;
    /*margin-bottom: 10px;*/
    height: 25px;
    line-height: 25px;
    width: 60px;
    text-align:center;
    border-bottom: 1px solid #63A8EB;
  }
  .btn{
    /*margin-top: 10px;*/
    width:230px;
    height: 40px;
    color: #fff;
    background-color: #63A8EB;
    text-align: center;
    line-height: 40px;
    font-size: 14px;
  }
</style>
