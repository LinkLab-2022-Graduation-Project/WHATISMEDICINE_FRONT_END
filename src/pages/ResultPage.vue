<template>
    <div id="center2">
        <table class="table table-condensed">
            <tr>
                <td><img id="dimg" v-bind:src="druginfo['image']"></td>
            </tr>
            <th colspan="2" id="iN">{{druginfo['drug_name']}}</th>
            <tr>
                <td colspan="2" v-on:click="lookone('one')"><button>효능</button></td>
            </tr>
            <tr id = "one">
                <td colspan="2" v-html="effectiveness">{{effectiveness}}</td>
            </tr>
            <tr>
                <td colspan="2" v-on:click="lookone('two')"><button>보관방법</button></td>
            </tr>
            <tr id = "two">
                <td colspan="2" v-html="how_to_save">{{how_to_save}}</td>
            </tr>
            <tr>
                <td colspan="2" v-on:click="lookone('three')"><button>사용방법</button></td>
            </tr>
            <tr id = "three">
                <td colspan="2" v-html="usage_capacity">{{usage_capacity}}</td>
            </tr>
            <tr>
                <td colspan="2" v-on:click="lookone('four')"><button>주의사항</button></td>
            </tr>
            <tr id = "four">
                <td colspan="2" v-html="precautions">{{precautions}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    data:function(){
    return {
      druginfo:JSON.parse(localStorage.getItem("drug")),
      con:'',
      effectiveness:'',
      how_to_save:'',
      usage_capacity:'',
      precautions:'',
    };
  },
  methods:{
    lookone:function(data){
        this.conone = document.getElementById(data);
        if(this.conone.style.display=='none'){
            this.conone.style.display = 'inline';
        }else{
            this.conone.style.display = 'none';
        }
        this.effectiveness = this.druginfo['effectiveness'].split("\\n").join("\n").split('\n').join('<br />');
        this.how_to_save = this.druginfo['how_to_save'].split("\\n").join("\n").split('\n').join('<br />');
        this.usage_capacity = this.druginfo['usage_capacity'].split("\\n").join("\n").split('\n').join('<br />');
        this.precautions = this.druginfo['precautions'].split("\\n").join("\n").split('\n').join('<br />');
    }
  },
  mounted() {
    this.con = document.getElementById("one");
    this.con.style.display = 'none';
    this.con = document.getElementById("two");
    this.con.style.display = 'none';
    this.con = document.getElementById("three");
    this.con.style.display = 'none';
    this.con = document.getElementById("four");
    this.con.style.display = 'none';
  }
}
</script>
<style>
#center2{
  width:90%;  
  position: absolute;
  left:50%;
  transform: translate(-50%);
}
button{
    border:none;
    color:black;
}
#iN{
    font-size: 40px;
}
table, td, th {
    text-align: center;
    font-size:25px;
}
#dimg{
    width:90%;
    height: 50%;
}
</style>