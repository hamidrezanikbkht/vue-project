<script setup>
import { Squares2X2Icon } from '@heroicons/vue/24/solid'
import { ShoppingBagIcon } from '@heroicons/vue/24/outline'
import { CakeIcon } from '@heroicons/vue/24/solid'
import { MapPinIcon } from '@heroicons/vue/24/solid'
import { UserIcon } from '@heroicons/vue/24/solid'



</script>

<template>
    <nav class="nav">
      <figure>
        <img src="" alt="" />
      </figure>
      <ul class="ul">
        <li class="li flex items-center gap-2">
          <Squares2X2Icon class="Squares2X2Icon" />
          dashboard
        </li>
        <li class="li">
          <ShoppingBagIcon class="ShoppingBagIcon" />
          orders
        </li>
        <li class="li">
          <CakeIcon class="CakeIcon" />
          products
        </li>
        <li class="li">
          <MapPinIcon class="MapPinIcon" />
          restaurants
        </li>
        <li class="li">
          <UserIcon class="UserIcon" />
          drivers
        </li>
      </ul>
    </nav>
</template>


<style scoped>


.nav {
  background-color: white;
  border-radius: 20px 20px 0px 20px;
    grid-column: 1 / 3; 
    grid-row: 1 / 14; 
    

}

figure {
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: inherit;
  border-radius: 20px 0px 0px 0px
}

.ul {
background-color: white;
  transition: all 2s;
      border-radius: 20px 0px 20px 20px;
  padding-top: 20px;



}

.li {
  position: relative;
    background-color: white;

  list-style-type: none;
  width: 100%;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: larger;
  display: flex;
  padding-left: 15%;
  align-items: center;
  gap: 8px;
  transition: background-color 0.3s ease;
  cursor: pointer;
}

.li::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 0;  
  height: 100%;
  background: linear-gradient(180deg, rgb(148, 212, 191), rgb(173, 205, 115));
  transition: width 0.3s ease;
}

.li:hover {
  background-color: rgb(247, 253, 251);
}

.li:hover::after {
  width: 4px;  
}


.Squares2X2Icon {
  width: 20px;
  background-color: white;

}

.ShoppingBagIcon {
  fill: black;
  width: 20px;
  background-color: white;

}

.CakeIcon {
  width: 20px;
  background-color: white;


}

.MapPinIcon {
  width: 20px;
  background-color: white;


}

.UserIcon {
  width: 20px;
  background-color: white;


}
</style>