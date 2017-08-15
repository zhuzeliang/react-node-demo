<template>
	<div class="page-toast">
		<mt-header title="Loadmore">
		  <router-link to="/" slot="left">
		    <mt-button icon="back">返回</mt-button>
		  </router-link>
		</mt-header>
		 <div class="page-loadmore-wrapper" ref="wrapper" :style="{ height: wrapperHeight + 'px' }">
      <mt-loadmore :top-method="loadTop" @translate-change="translateChange" @top-status-change="handleTopChange" ref="loadmore">
        <ul class="page-loadmore-list">
          <li v-for="item in list" class="page-loadmore-listitem">{{ item }}</li>
        </ul>
        <div slot="top" class="mint-loadmore-top">
          <span v-show="topStatus !== 'loading'" :class="{ 'is-rotate': topStatus === 'drop' }">↓</span>
          <span v-show="topStatus === 'loading'">
            <mt-spinner type="snake"></mt-spinner>
          </span>
        </div>
      </mt-loadmore>
    </div>
	</div>
</template>

<script>
    import Vue from 'vue'
	import { Loadmore } from 'mint-ui';
	Vue.component(Loadmore.name, Loadmore);
	export default {
		name: 'hello',
		data() {
			return {
				list: [1,2,3],
		        topStatus: '',
		        wrapperHeight: 0,
		        translate: 0,
		        moveTranslate: 0
			}
		},
		 created(){
            this.windowHeight = window.innerHeight;
            console.log(111)
        },
		mounted(){
            console.log(location.hash);
           
        },
		methods:{
			handleTopChange(status) {
	        this.moveTranslate = 1;
	        this.topStatus = status;
	      },
	      translateChange(translate) {
	        const translateNum = +translate;
	        this.translate = translateNum.toFixed(2);
	        this.moveTranslate = (1 + translateNum / 70).toFixed(2);
	      },
	      loadTop() {
	        setTimeout(() => {
	          let firstValue = this.list[0];
	          for (let i = 1; i <= 10; i++) {
	            this.list.unshift(firstValue - i);
	          }
	          this.$refs.loadmore.onTopLoaded();
	        }, 1500);
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