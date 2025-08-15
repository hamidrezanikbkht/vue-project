<script setup>
import Navbar from './components/Navbar.vue';
import Section from './components/Section.vue';
import Serch from './components/Serch.vue';
import Tab from './components/Tab.vue';

</script>
<template>
  <div class="div ">
    <Navbar/>
    <Serch/>
    <Tab/>
    <Section/>

  </div>
</template>
<style scoped>
.div {

  background-color: rgb(245 245 245);
  margin-top: auto;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  overflow: hidden;
  
  padding: 0;
display: grid;
grid-template-columns: 100px 100px  100px 100px 100px 100px 100px 100px 100px 100px 100px 100px  100px 100px 100px 100px 100px 100px 100px 100px 100px ;
 grid-template-rows: 50px 50px 50px 50px 50px 50px 50px 50px 50px  50px  50px  50px   50px 50px 50px 50px  50px 50px; /* دو ردیف */
  border-radius: 20px 20px 20px 20px 20px 20px 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
}</style>