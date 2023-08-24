<template>
  <div class="chat-area">
    <div v-if="selectedsectionid" class="mycontent" v-chat-scroll> 
      <div class="item" v-for="(message,index) in selectedsectionmessages" :key="index">
         <div v-if="message.role=='assistant'" class="assist">
           <span class="assist-avater"><el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar></span>
           <div  class="assist-content">{{ message.content }}</div>
        </div>
       <div v-if="message.role=='user'" class="us">
        <span class="user-avatar"><el-avatar icon="el-icon-user-solid"></el-avatar></span>
        <div class="user-content">{{ message.content }}</div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
   name:'MyContent',
   props:['selectedsectionmessages','selectedsectionid'],
   data(){
    return {
       
    }
   },
   
  methods:{
    
  }

}
</script>

<style>
.chat-area{
    width: 100%;
    height:650px;
    overflow:auto;
}

.assist{
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}
.assist-content{

  background-color: rgb(235, 235, 235);
  width: 80%;
  font-size: 17px;
  padding: 10px;
  margin: 10px;
  text-align: left;
  border-radius: 8px;
  width:fit-content;
  color: black;
}
.assist-avatar{
  padding: 10px;
  margin: 10px;
}
.us{
  display: flex;
  flex-direction: row-reverse;
 
}
.user-avatar{
  margin: 5px;
}
.user-content{
  
  background-color: rgb(123, 173, 255);
  width: 80%;
  font-size: 17px;
  padding: 10px;
  margin: 10px;
  text-align: left;
  border-radius: 8px;
  width:fit-content;
  color: white;
}
</style>