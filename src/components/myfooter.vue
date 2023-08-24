<template>
 
 <div>
    <div id="footer">
        <form @submit.prevent="add" id="iform">
         <input  type="text" placeholder="enter your question here" v-model="message" @keyup-enter="add">
         <!-- <button type="submit" ><i class="fas fa-paper-plane" style="font-size: 20px;"></i></button> -->
         <button type="submit" >send</button>
        </form>
    </div>
</div>
</template>

<script>
//import axios from 'axios'
//import bus from '@/bus.js'
export default {
  
  name:'MyFooter',
  props:['addmessage','selectedsectionmessages'],
   data(){
    return{ 
        message:'',
        config: {
                isPreview: true
            }
    }
   },
  
   methods:{
    
    add(){
       if(!this.message.trim()) return
       const obj1={role:"user",content:this.message}
       this.addmessage(obj1)
       const obj2={role:"",content:""}
       //    axios.post('https://ai.fakeopen.com/v1/chat/completions',
    //     JSON.stringify({
    //          "model": "gpt-3.5-turbo-16k",
    //               "messages": [
    //         {
    //         "role": "user",
    //        "content": this.message
    //         }
    //      ],
    //      //"temperature": 1,
    //       "stream":true
    //    }),{
    //   headers:{
    //     'Authorization': 'Bearer pk-this-is-a-real-free-pool-token-for-everyone',
    //     'Content-Type': 'application/json',
    //     'Accept':'text/event-stream'
    //   }
    //  }
    //   )
      
       fetch('https://ai.fakeopen.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'text/event-stream' ,
                    'Authorization':'Bearer pk-this-is-a-real-free-pool-token-for-everyone'
                },
                body: JSON.stringify(
                    {
                        "model": "gpt-3.5-turbo-16k",
                        "messages": [
                            {
                                "role": "user",
                                "content": this.message
                            }
                        ],
                        // "temperature": 1,
                        "stream": true
                    }
                )
            }).then(response => {
          obj2.role="assistant"
          //console.log(response)
          const reader=response.body.getReader();
          const decoder=new TextDecoder('utf-8');
          let chunk='';
          const processsteam=({done,value})=>{
            if(done){return;}
            chunk+=decoder.decode(value);
            if(chunk.indexOf('\n\n')!==-1){
              const parts=chunk.split('\n\n');
              chunk=parts.pop();
              parts.forEach(data=>{
                data=data.trim().split('data: ')[1];
                if(data==="[DONE]"){
                  return
                }
                data=JSON.parse(data)
                obj2.content+=data.choices[0]?.delta?.content??'';
              })
            }
            return reader.read().then(processsteam);
          };
          return reader.read().then(processsteam)
          // obj2={role:"assistant",content:response.data.choices[0].message.content}
          
         // obj2.content=response.data.choices[0].message.content
      //  const obj2={role:"assistant",content:response.data.choices[0].message.content}
         
          // console.log(response.data.choices[0].message.content)
        })
         .catch(error => {
          console.log(error)
        })
       
        
        this.message=''

        this.addmessage(obj2)
       
    //     if(this.messages.length>0){
    //       const mappedMessages = this.messages.map(message => message.content).join('\n');
    //       axios.post('https://ai.fakeopen.com/v1/chat/completions',{
    //           "model": "gpt-3.5-turbo-16k",
    //               "messages": [
    //         {
    //         "role": "user",
    //        "content": '总结以下内容:'+mappedMessages
    //         }
    //      ],
    //      "temperature": 1,
    //       "stream": false
    //    },{
    //   headers:{
    //     'Authorization': 'Bearer pk-this-is-a-real-free-pool-token-for-everyone',
    //     'Content-Type': 'application/json'
    //   }
    //  }
    //   )
    //   .then(response=>{
    //     console.log(response)
    //   })
    //   .catch(error => {
    //       console.log(error)
    //     })
    //     }
    },
    
   }
}
</script>

<style scoped>
#footer{
  position: sticky;
  bottom:-10px;
}
  input{
    width:800px;
    height: 50px;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid rgba(216, 214, 214, 0.933);
    border-radius: 10px;
    margin: 10px;
    font-size: 17px;
    box-shadow: 1px 1px 1px #ccc;
    outline: none;
  }
 
  button{
    height: 50px;
    width: 50px;
    border: 1px solid rgba(216, 214, 214, 0.933);
    border-radius: 5px;
    background-color: #fff;
  }
  button:hover{
    box-shadow: 1px 1px 1px #ccc;
  }
  
</style>