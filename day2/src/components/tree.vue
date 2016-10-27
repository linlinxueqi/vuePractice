<template>
	<li>
		<div
			:class="{bold:isFolder}" 
			v-on:click="toggle"
			v-on:dblclick="changeType">
			{{model.name}}
			<span v-if="isFolder">[{{open?'-','+'}}]</span>
		</div>
	</li>

	<ul v-show="open" v-if="isFolder">
		<item
			class="item"
			v-for="model in model.children"
			:model="model">
		</item>
		<li v-on:click="addChild"></li>
	</ul>
</template>

<script>
	export default{
		props:{
			model:Object
		},
		data:function(){
			return {
				open:false
			}
		},
		computed:{
			isFolder:function(){
				return this.model.children && this.model.children.length
			}
		}
	},
	methods:{
		toggle:function(){
			if(this.isFolder){
				this.open=!this.open
			}
		},
		
	}
</script>

<style scoped>
	
</style>