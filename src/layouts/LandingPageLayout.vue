<template >
 <q-layout view="lHh Lpr lFf">
   <q-header class="bg-white">
     <q-toolbar>
       <q-toolbar-title> Lojee </q-toolbar-title>
       <div>
        <q-btn color="indigo" label="Visit" to="/dashboard"  unelevated/> 
       </div>
     </q-toolbar>
   </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

 </q-layout>
</template>

<script>
export default {

}
</script>

