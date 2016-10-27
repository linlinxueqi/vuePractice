<template>
  
  <!--<div id="app">
      <button id="show-modal" @click="showModal = true">Show Modal</button>
     use the modal component, pass in the prop 
      <Hello :show.sync="showModal"></Hello>
    you can use custom content here to overwrite default content 
      <h3 slot="header">custom header</h3>
  </modal>
  </div>  -->
    <p>(You can double click on an item to turn it into a folder)</p>

    <ul id="treeDemo">
      <item
         class="item" v-bind:model="treeData">
      </item>
    </ul>

</template>

<script>
// import Hello from './components/Hello'
import tree from './components/tree'

var data={
    name:'My Tree',
    children:[
      {name:'hello'},
      {name:'wat'},
      {
        name:'child folder',
        children:[
           {
            name:'child folder',
            children:[
              {name:'hello'},
              {name:'wat'}
            ]
           },
           {name:'hello'},
           {name:'wat'},
           {
            name:'child folder',
            children:[
              {name:'hello'},
              {name:'wat'}
            ]
           }
        ]
      }
    ]
  }

export default {
  components:{
    tree
  },
  el:function(){
    return {
      el:'#demo'
    }
  },
  data:function(){
    return {
      treeData:data
    }
  }
}


  

</script>

<style scoped>
      body {
        font-family: Menlo, Consolas, monospace;
        color: #444;
      }
      .item {
        cursor: pointer;
      }
      .bold {
        font-weight: bold;
      }
      ul {
        padding-left: 1em;
        line-height: 1.5em;
        list-style-type: dot;
      }
</style>
