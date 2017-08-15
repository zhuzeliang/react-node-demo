<template>
	<div class="page-toast">
		<mt-header title="Toast">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<div class="page-toast-wrapper">
			<button class="mint-button mint-button--default mint-button--large" @click="fun1"><label class="mint-button-text">点击弹出 Toast</label></button>
			<button class="mint-button mint-button--default mint-button--large" @click="fun2"><label class="mint-button-text">点击弹出带有 icon 的 Toast</label></button>
			<button class="mint-button mint-button--default mint-button--large" @click="fun3"><!----> <label class="mint-button-text">自定义 Toast 位置</label></button>
		</div>
	</div>
</template>

<script>
	import { Toast } from 'mint-ui';
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		methods:{
			back:function(){
				window.history.go(-1);
				console.log(8888)
			},
			fun1:function(){
				Toast('提示信息');
			},
			fun2:function(){
				Toast({
				  message: '提示',
				  position: 'bottom',
				  duration: 5000
				});
			},
			fun3:function(){
				Toast({
				  message: '操作成功',
				  iconClass: 'icon icon-success'
				});
			}
		}
	}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='scss' scoped>
	@import "../assets/css/common";
	.page-toast-wrapper .mint-button{
		margin-bottom: 20px;
	}
	.page-toast-wrapper{
		margin-top: 50px;
	}
	.page-toast{
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		overflow: auto;
	}
</style>