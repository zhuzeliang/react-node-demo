<template>
	<div class="page-toast">
		<mt-header title="Indicator">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		<div class="page-toast-wrapper">
			<button class="mint-button mint-button--default mint-button--large" @click.stop="fun1"><label class="mint-button-text">点击弹出 Indicator</label></button>
			<button class="mint-button mint-button--default mint-button--large" @click.stop="fun2"><label class="mint-button-text">可配置 spinner</label></button>
			<button class="mint-button mint-button--default mint-button--large" @click.stop="fun3"><!----> <label class="mint-button-text">点击弹出带有文字的 Indicator</label></button>
		</div>
	</div>
</template>

<script>
	import { Indicator } from 'mint-ui';
	export default {
		name: 'hello',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		 created(){
            this.windowHeight = window.innerHeight;
            console.log(111)
        },
		mounted(){
            this.windowHeight = window.innerHeight;
            console.log(222)
        },
		methods:{
			fun1:function(){
				Indicator.open();
			},
			fun2:function(){
				Indicator.open('加载中...');
			},
			fun3:function(){
				Indicator.open({
				  text: '加载中...',
				  spinnerType: 'fading-circle'
				});
			},
			close(){
				Indicator.close();
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