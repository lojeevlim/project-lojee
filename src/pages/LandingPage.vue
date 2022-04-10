<template >
  <div class="bg-main">
    <div class="row ">
      <div class="col">
        
      </div>
     <div class="col-6">
       <div class="text-right">
       <img  style="vertical-align: bottom;height:80vh"  class="" src="~assets/undraw_city_driver_re_0x5e.png" alt="" srcset="">
      </div>
     
     </div>

     <!-- <div class="col-6">
       <div class="text-left q-mt-xl">
          <h1 class="text-indigo-7 text-bold">
            Lojee
          </h1>
          <span>nmbjmb b,mvjk  mjnfgvjhfvmn mn,mn  ,mhkj tambok</span>
       </div>
     </div> -->

     <div  style="height:100vh" class="col-12 bg-indigo">
      
     </div>
    </div>


  </div>
</template>

<script>
import { users } from '../graphql-queries/users'

export default {
  methods:{
    async Users(){

      const user = await this.$apollo.query({
       query: users,
       fetchPolicy: 'network-only' 
      }).then((res) =>{
        console.log(res)
      })

    }
  },

  created(){
    this.Users()
  }
}
</script>

<style scope>
.bg-main{
 /* color: #43a047; */
 background-color: white;
 bottom: 0;
}

</style>