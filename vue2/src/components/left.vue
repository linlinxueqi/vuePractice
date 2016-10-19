<template>
	<!-- 左边部分 -->
          <div class="content-list-left">
            <button class="btn">新建分类</button>
            <ul>
              <li class="list-row">
                <div class="row-top clearfloat">
                    <div class="top-left"><img src="./../assets/logo.png"></div>
                    <div class="top-right">
                      <p>qwe</p>
                      <span class="date">2016-10-14 10:48:25</span>
                    </div>
                </div>
                <div class="row-bottom">
                  <span class="chooseColor colorGreen"></span>
                  <span>编辑</span>
                  <span>删除</span>
                </div>
              </li>
            </ul>
          </div>
</template>

<script>
	
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