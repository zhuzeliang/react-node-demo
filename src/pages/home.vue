<template>
    <div class="container">
      <router-link to="/Toast" class="mint-cell">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <div><i class="indexicon icon-toast"></i> <span>Toast</span></div>
          </div> <div class="mint-cell-value is-link"><span></span></div>
        </div>
        <i class="mint-cell-allow-right"></i>
      </router-link>
      <router-link to="/Indicator" class="mint-cell">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <div><i class="indexicon icon-toast"></i> <span>Indicator</span></div>
          </div> <div class="mint-cell-value is-link"><span></span></div>
        </div>
        <i class="mint-cell-allow-right"></i>
      </router-link>
      <router-link to="/Loadmore" class="mint-cell">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <div><i class="indexicon icon-toast"></i> <span>Loadmore</span></div>
          </div> <div class="mint-cell-value is-link"><span></span></div>
        </div>
        <i class="mint-cell-allow-right"></i>
      </router-link>
      <router-link to="/Loadmore" class="mint-cell">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <div><i class="indexicon icon-toast"></i> <span>Infinite scroll</span></div>
          </div> <div class="mint-cell-value is-link"><span></span></div>
        </div>
        <i class="mint-cell-allow-right"></i>
      </router-link>
      <router-link to="/Messagebox" class="mint-cell">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <div><i class="indexicon icon-toast"></i> <span>Messagebox</span></div>
          </div> <div class="mint-cell-value is-link"><span></span></div>
        </div>
        <i class="mint-cell-allow-right"></i>
      </router-link>
      <router-link to="Actionsheet" class="mint-cell">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <div><i class="indexicon icon-toast"></i> <span>Action sheet</span></div>
          </div> <div class="mint-cell-value is-link"><span></span></div>
        </div>
        <i class="mint-cell-allow-right"></i>
      </router-link>
       <router-link to="/Popup" class="mint-cell">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <div><i class="indexicon icon-toast"></i> <span>Popup</span></div>
          </div> <div class="mint-cell-value is-link"><span></span></div>
        </div>
        <i class="mint-cell-allow-right"></i>
      </router-link>
      <router-link to="/Swipe" class="mint-cell">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <div><i class="indexicon icon-toast"></i> <span>Swipe</span></div>
          </div> <div class="mint-cell-value is-link"><span></span></div>
        </div>
        <i class="mint-cell-allow-right"></i>
      </router-link>
      <router-link to="/Lazyload" class="mint-cell">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <div><i class="indexicon icon-toast"></i> <span>Lazyload</span></div>
          </div> <div class="mint-cell-value is-link"><span></span></div>
        </div>
        <i class="mint-cell-allow-right"></i>
      </router-link>
      <router-link to="/Range" class="mint-cell">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <div><i class="indexicon icon-toast"></i> <span>Range</span></div>
          </div> <div class="mint-cell-value is-link"><span></span></div>
        </div>
        <i class="mint-cell-allow-right"></i>
      </router-link>
      <router-link to="/Progress" class="mint-cell">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <div><i class="indexicon icon-toast"></i> <span>Progress</span></div>
          </div> <div class="mint-cell-value is-link"><span></span></div>
        </div>
        <i class="mint-cell-allow-right"></i>
      </router-link>
       <router-link to="/Progress" class="mint-cell">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <div><i class="indexicon icon-toast"></i> <span>Progress</span></div>
          </div> <div class="mint-cell-value is-link"><span></span></div>
        </div>
        <i class="mint-cell-allow-right"></i>
      </router-link>
       <router-link to="/Picker" class="mint-cell">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <div><i class="indexicon icon-toast"></i> <span>Picker</span></div>
          </div> <div class="mint-cell-value is-link"><span></span></div>
        </div>
        <i class="mint-cell-allow-right"></i>
      </router-link>
        <router-link to="/Datetimepicker" class="mint-cell">
        <div class="mint-cell-wrapper">
          <div class="mint-cell-title">
            <div><i class="indexicon icon-toast"></i> <span>Datetimepicker</span></div>
          </div> <div class="mint-cell-value is-link"><span></span></div>
        </div>
        <i class="mint-cell-allow-right"></i>
      </router-link>
      <button @click.prevent="timefun">倒计时</button>
      <button @click="getCode">验证码</button>
      <button>{{time}}</button>
      <img :src="codeSrc" alt="">
      <input type="text" v-model="myCode">
      <button @click="fn">{{filter}}</button>

     <!--  <section class="input_container captcha_code_container">
          <input type="text" placeholder="验证码" maxlength="4" v-model="codeNumber">
          <div class="img_change_img">
              <img v-show="captchaCodeImg" :src="captchaCodeImg">
              <div class="change_img" @click="getCaptchaCode">
                  <p>看不清</p>
                  <p>换一张</p>
              </div>
          </div>
      </section> -->
    </div>
</template>

<script>
import Axios from 'axios';
import {foo} from '../service/getData';
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      time: 0,
      codeSrc: null,
      myCode: null,
      m: 0
    }
  },
  mounted(){
      this.getCode();
  },
  computed:{
    filter(){
      return "aaaaa"
    }
  },
  methods:{
    timefun:function(){
      this.time = 100;
      this.timer = setInterval(() => {
        this.time--;
        if(this.time == 0){
          clearInterval(this.timer);
        }
      },1000)
    },
    getCode(){
       Axios.post("http://cangdu.org:8001/v1/captchas",{})
      .then((res) => {
          console.log(res.data.code)
          this.codeSrc = res.data.code;
      });
    },
    fn(){
      console.log(foo(1,2));
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  
</style>
