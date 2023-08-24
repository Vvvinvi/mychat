<template>
<div class="summarycontainer">
  <div class="sumname">Content Summary</div>
  <div class="windows">
    <button class="windowsside" v-for="section in sections" :key="section.id" @click="selectsection(section)" :class="{active:section.id===selectedsectionid}">section{{ section.id }}</button>
    <button class="addsign" @click="addsection">+</button>
  </div>
  
</div>
</template>

<script>
//import bus from '@/bus.js'
export default {
    name:'MySide',   
    props:['sections','selectsection','selectedsectionid','addsection'],
   data(){
    return {
        
    }
   },
   
}
</script>

<style>
    .summarycontainer{
        margin:0 20px 0 0;
        padding: 0;
        border-right: 2px solid #ddd;
    }
    .sumname{
        width: 225px;
        height: 5%;
        text-align: center;
        font-size: 22px;
        line-height: 50px;
    }
     .windows{
        padding: 0;
        width: 225px;
        height: 95%;
        
        overflow:auto;
        text-align: center;
    
     }
     .windowsside{
        width: 210px;
        color: rgb(86, 86, 86);
        list-style: none;
        margin: 10px auto 0 auto;
        text-align: center;
        font-size: 18px;
        line-height: 30px;
        border-radius: 8px;
        height: 40px;
        background-color: rgba(245, 244, 244, 0.952);
     }
     .windowsside:hover{
      background-color: #f8f8f8d7;
     }
     .addsign{
      margin-top:10px;
      
      height: 40px;
      width: 40px;
      border-radius: 50%;
      font-size: 28px;
      color: rgb(86, 86, 86);
      line-height: 37px;
      background-color: rgba(245, 244, 244, 0.952);
     }
     .addsign:hover{
      background-color: #f8f8f8d7;
      color: rgb(117, 117, 117);
     }

</style>