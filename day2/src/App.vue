<template>
  
  <div id="app">
      <button id="show-modal" @click="showModal = true">Show Modal</button>
    <!-- use the modal component, pass in the prop -->
      <Hello :show.sync="showModal"></Hello>
    <!--you can use custom content here to overwrite default content -->
      <h3 slot="header">custom header</h3>
  </modal>
  </div>
</template>

<script>
import Hello from './components/Hello'

export default {
  components: {
    Hello
  },
  el:function(){
    return {
      el:'#app'
    }
  },
  data:function(){
    return {
      showModal:false
    }
  }
}
</script>

<style>

</style>
