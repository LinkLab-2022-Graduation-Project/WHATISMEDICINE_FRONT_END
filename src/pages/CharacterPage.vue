<template>
  <table class="center2">
      <tr>
          <td>
              <img id="ch" class="top" v-bind:src="druglist[0]['shape_image_url']">
              <p>{{druglist[0]['shape_name']}}</p>  
          </td>
      </tr>
      <tr>
          <td>
              <img id="ch" v-bind:src="druglist[0]['color_image_url']">
              <p>{{druglist[0]['color_name']}}</p>  
          </td>
      </tr>
      <tr>
          <td>
              <img id="ch" v-bind:src="druglist[0]['ocr_image_url']">
              <p class="bottom">{{druglist[0]['ocr_result']}}</p>  
          </td>
      </tr>      
      <button class="btn btn-primary one" v-on:click="re()">다시하기</button>
      <button class="btn btn-primary two" v-on:click="sendData()">결과보기</button>
  </table>
</template>

<script>

export default {
  data:function(){
    return {
      druglist:JSON.parse(localStorage.getItem("druglist")),
    };
  },
  methods:{
    sendData:function(){
      localStorage.setItem("druglist", JSON.stringify(this.druglist));
      window.location.href = 'http://192.168.0.22:8081/list'
    },
    re:function(){
        window.location.href = 'http://192.168.0.22:8081/';
    }
  },
  
}
</script>

<style>
.center2{
  position: absolute;
  left:50%;
  transform: translate(-50%);
}
.top{
    margin-top:10px;
}
.bottom{
    margin-bottom:0px;
}
.one{
    margin:5px;
}
.two{
    margin:5px;
}
#ch{
    width:100%;
    height:35%;
}
</style>
