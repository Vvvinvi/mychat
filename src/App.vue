
<template>
  <div id="app">
    <MySide :sections="sections" :selectsection="selectsection" :selectedsectionid="selectedsectionid" :addsection="addsection"></MySide>
    <div class="container">
    <MyContent :selectedsectionmessages="selectedsectionmessages" :selectedsectionid="selectedsectionid"/>
    <MyFooter :addmessage="addmessage"  :selectedsectionmessages="selectedsectionmessages"/>
    </div>
  </div>
</template>

<script>
import MyFooter from"./components/myfooter.vue"
import MyContent from"./components/content.vue"
import MySide from"./components/side.vue"

export default {
  name: 'App',
  components: {
    MyFooter,
    MyContent,
    MySide
  },
  data(){
    return{
      sections:[
        // {
        //   //id:Date.now(),
        //   id:1,
        //   messages:[
        //     {
        //         role: "assistant",
        //         content: "很高兴认识你，有什么需要我帮忙的吗？"
        //     },
        //   ],
        // }

      ],
     selectedsectionid:null,
      
    }
  },
  
  methods:{
    addmessage(obj){
      this.selectedsectionmessages.push(obj)
      // console.log(this.messages)
    },
    selectsection(section){
      this.selectedsectionid=section.id;
    },
    addsection(){
      const sectionobj={
        id:Date.now(),
        messages:[
            {
                role: "assistant",
                content:"很高兴认识你，有什么需要我帮助的吗？"
            },
          ],
      };
      this.sections.push(sectionobj);
    },
    
    
    

  },
  computed:{
     selectedsectionmessages(){
      const selectedsection=this.sections.find(section=>section.id===this.selectedsectionid);
      return selectedsection?selectedsection.messages:[];
     } 
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 30px;
  display: flex;
  justify-content: left;
}
.container{
  text-align: center;
  width: 1250px;
}

</style>
