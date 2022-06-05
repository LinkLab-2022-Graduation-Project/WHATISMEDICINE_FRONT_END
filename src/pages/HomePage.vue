<template>
  <div id = "upload-form">
    <img id="loadingimg" src="../../image/loading.gif" v-if="loadingImage">
    <form v-on:submit.prevent="sendImage" v-else>
      <div>
        <div id="test">
          <img id = "head-img" src="../../image/drug2.gif" alt="loading">
          <h1 id="head">이약뭐약?</h1>
        </div>
        <label class="form-label" for="drug-img" id="upload-label">Image</label>
        <input type="file" class="form-control" id="drug-img" accept="image/*">  
        <input class="btn btn-primary" type="submit" value="Upload" @change="sendImage" id="upload-submit">
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data:function(){
    return {
      loadingImage:false,
      druglist:[],
    }
  },
  methods:{
    sendImage:function(){
      var url = 'http://192.168.0.22:8080/api/post';//바꿔야 하는 부분
      var frm = new FormData();
      var photoFile = document.getElementById("drug-img");
      frm.append("drug-img", photoFile.files[0]);
      console.log(frm);
      this.loadingImage = true;
      axios.post(url, frm, {
        headers:{
          'Content-Type':'multipart/form-data'
        }
      })
      .then(result => {
        this.druglist = result.data
         localStorage.setItem("druglist", JSON.stringify(this.druglist));
         window.location.href = 'http://192.168.0.22:8081/character'
      });
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dongle:wght@700&display=swap');
*{
  font-family: 'Dongle', sans-serif;
  background-color: #faebd7;
}
#upload-form{
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%, -50%);
}
#test{
  height:85px;
}
#head{
  display: inline-block;
  font-size:100px;
}
#head-img{
  height:70px;
  margin-bottom:40px;
}
#upload-label{
  font-size:50px;
  height: 50px;
}
#drug-img{
  margin-bottom: 7px;
  font-size:20px;
}
#upload-submit{
  font-size:20px;
}
@media screen and (max-width:768px){
  *{
    font-family: 'Dongle', sans-serif;
    background-color: #faebd7;
  }
  #upload-form{
    width:60%;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
  }
  #test{
    height:60px;
  }
  #head{
    display: inline-block;
    font-size:70px;
  }
  #head-img{
    height:40px;
    margin-bottom:30px;
  }
  #upload-label{
    font-size:35px;
    height: 35px;
  }
  #drug-img{
    margin-bottom: 7px;
    font-size:20px;
  }
  #upload-submit{
    font-size:20px;
  }
}
</style>