<template>
  <div class='center3'>
    <ul id="uleft">
      <li v-for="drug in druglist" v-bind:key="drug">
          <img id="drugimg" v-bind:src="drug['image']">
          <a id="link" href="http://192.168.0.22:8081/result" v-on:click="sendData(drug)">&nbsp;&nbsp;{{drug['drug_name']}}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data:function(){
    return {
      druglist:JSON.parse(localStorage.getItem("druglist")),
    };
  },
  methods:{
    sendData:function(drug){
      localStorage.setItem("drug", JSON.stringify(drug));
    }
  }
}
</script>

<style>
.center3{
  width:90%;  
  position: absolute;
  left:50%;
  transform: translate(-50%);
}
#uleft{
  padding-left:0px;
  margin-top:5px;
  margin-bottom: 5px;
}
li{
  margin-top:5px;
  list-style-type: none;
  border-bottom: 2px black solid;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#drugimg{
  width:100px;
  margin-bottom:5px;
}
#link{
  text-decoration-line: none;
  color:black;
  font-size:30px;
}
</style>
