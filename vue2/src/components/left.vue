<template>
	<!-- 左边部分 -->
          <div class="content-list-left">
            <button class="btn" v-on:click="checkShow">新建分类</button>
            <ul>
              <li class="list-row" v-for="item in arrayitems">
                <div class="row-top clearfloat">
                    <div class="top-left"><img src="./../assets/logo.png"></div>
                    <div class="top-right">
                      <p>{{item.name}}</p>
                      <span class="date">创建时间：{{item.date.year}}-{{item.date.month}}-{{item.date.day}}</span>
                    </div>
                </div>
                <div class="row-bottom">
                  <span  v-bind:class="{'colorGreen':item.color=='green','colorLightblue':item.color=='lightblue','colorOrange':item.color=='orange','colorPink':item.color=='pink','colorRed':item.color=='red','chooseColor':true}">
                    
                  </span>
                  <span v-on:click="showData($index)">编辑</span>
                  <span v-on:click="deleteData($index)">删除</span>
                </div>
              </li>
            </ul>
          </div>
</template>

<script>
	 export default{
    data:function(){
      return {
      }
    },
    props:{
      arrayitems:Array,
      itemindex:Number,
      propcolor:String,
      show:Boolean,
      newname:String
    },
    methods:{
      checkShow:function(){
        if(this.show){
         this.show=false;
        }else{
          this.show=true;
        }
      },
      deleteData:function(index){
        this.arrayitems.splice(index,1);
      },
      showData:function(index){
        this.checkShow();
        this.propcolor=this.arrayitems[index].color;
        this.newname=this.arrayitems[index].name;
        //console.log(typeof this.arrayitems[index].name);
        //console.log(this.newname);
        this.itemindex=index;
        console.log(typeof index);
      }
    }
   }
</script>
<style>
.content-list-left{  
    float:left;
    margin-top: 30px;
    width:260px;
    height: 450px;
    padding-right: 30px;
    border-right: 1px solid #DDDDDD;
  }
  .list-row{
    width:230px;
    height:100px;
    padding: 10px;
    border:1px solid #63A8E8;
    margin-top: 30px;
  }
  .row-top{
    height:40px;
  }
  .top-left{
    float:left;
    width:50px;
    height:50px;
  }
  .top-left img{
    display: inline-block;
    width:50px;
    height:50px;
  }
  .top-right{
    float: left;
    color: #666666;
    font-size: 14px;
    width:150px;
    height:60px;
    padding-left: 10px;

  }
  .row-bottom{
      width:200px;
      height:45px;
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
  .row-bottom>span{
    display: inline-block;
    vertical-align: top;
    margin-left: 20px;
    font-size: 14px;
    color: #666666;
  }
  .row-bottom>span:nth-child(1){
    margin-left: 10px;
  }

</style>