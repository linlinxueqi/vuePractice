<template>
	<!-- 右边部分 -->
	<div class="content-list-right">
        <input type="text">
        <div class="btn search">查询</div>
        <div class="btn addGroup">新增专题</div>

        <div class="right-list-row">
            <table class="table-list" cellpadding="0" cellspacing="0">
                      <tr>
                        <td>专题标题</td>
                        <td>缩略图</td>
                        <td>创建时间</td>
                        <td>浏览次数</td>
                        <td>分享次数</td>
                        <td>操作</td>
                      </tr>

                      <tr>
                        <td>123</td>
                        <td><img src="./../assets/logo.png" /></td>
                        <td>2016-10-14 10:25:30</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                          <span>复制链接</span>
                          <span>编辑</span>
                          <span>删除</span>
                        </td>
                      </tr>


                      <tr>
                        <td>123</td>
                        <td><img src="./../assets/logo.png" /></td>
                        <td>2016-10-14 10:25:30</td>
                        <td>0</td>
                        <td>0</td>
                        <td>
                          <span>复制链接</span>
                          <span>编辑</span>
                          <span>删除</span>
                        </td>
                      </tr>
            </table>
        </div>
    </div>
</template>

<script>
	
</script>
<style>
	.content-list-right{
    float:left;
    width:1000px;
    /*margin-top: 40px;*/
    padding:30px;
  }
  .content-list-right>input{
    width:300px;
    height:30px;
    border:1px solid #dddddd;
  }
  .search{
    display: inline-block;
    width:120px;
    height:30px;
    line-height: 30px;
    margin-left: 30px;
  }
  .table-list{
    width:900px;
    height:auto;
    margin-top: 30px;
  }
  .table-list td{
    min-width: 70px;
    max-width:250px;
    height:50px;
    line-height: 50px;
    font-size: 14px;
    text-align: center;
  }
  .table-list td img{
    display: inline-block;
    margin-top: 10px;
    width:50px;
    height:50px;
  }
  .table-list tr:nth-child(2n+1){
    background-color: #F8F8F8;
  }
  .table-list tr:nth-child(1){
    background-color: #EEEEEE;
  }
  .table-list td>span{
    padding: 5px;
    border-radius: 3px;
    border:1px solid #eeeeee;
    cursor: pointer;
  }

  .addGroup{
    display: inline-block;
    width: 150px;
    height: 30px;
    line-height: 30px;
    margin-left: 40px;
  }
</style>

