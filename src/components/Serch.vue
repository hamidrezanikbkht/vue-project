<script setup>
import { ref, computed, onMounted } from "vue";
import { useProductStore } from "./stroe/productStore";

const searchText = ref("");
const productStore = useProductStore();

onMounted(async () => {
  await productStore.fetchAllProducts();
});

const filteredProducts = computed(() => {
  const products = productStore.allProducts || [];
  if (!searchText.value) return [];
  return products.filter(product =>
    product.name.toLowerCase().includes(searchText.value.toLowerCase())
  );
});

function poro(product) {
  alert("نمایش محصول: " + product.name);
}
function onEditClick(product) {
  alert("ویرایش محصول: " + product.name);
}
</script>

<template>
  <div style=" margin-left: 50px; display: grid  ; grid-column: 4/13; background-color: #f5f5f5;">
    <div class="input-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor"
        stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M21 21l-4.35-4.35m0 0a7 7 0 1 0-9.9-9.9 7 7 0 0 0 9.9 9.9z" />
      </svg>
      <input type="text" placeholder="Search products..." v-model="searchText" class="input" style="width: 50%;">
    </div>

    <div v-if="searchText" class="search-results">
      <div v-if="filteredProducts.length" class="cards-grid">
        <div v-for="product in filteredProducts" :key="product.id" class="product-card">
          <figure><img :src="product.img || 'https://via.placeholder.com/150'" alt="" /></figure>
          <div style="background-color: white;" class="info">
            <h2 style="background-color: white;">{{ product.name }}</h2>
            <p style="background-color: white;" class="weight">{{ product.gram }} g</p>
            <p style="background-color: white;" class="desc">{{ product.ingredients }}</p>
            <div style="background-color: white;" class="price-row">
              <span style="background-color: white;" class="pricee">${{ product.price }}</span>
              <div style="background-color: white;">
                <span style="background-color: white;" @click="poro(product)">👁️</span>
                <span style="background-color: white;" @click="() => onEditClick(product)">⚙️</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p v-else>محصولی یافت نشد</p>
    </div>
  </div>
</template>

<style scoped>
.search-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  width: 90%;
  max-width: 900px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;

}

.input-wrapper {
  display: flex;
  align-items: center;
  width: 100%;

  padding: 15px 20px;
  border-radius: 30px;
  background-color: #f5f5f5;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
}

.icon {
  width: 24px;
  height: 24px;
  stroke: #888;
  margin-right: 12px;
  background-color: transparent;

}

.input {
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 18px;
  background-color: transparent;


}

.search-results {
  width: 100%;
  margin-top: 15px;
  max-height: 350px;
  overflow-y: auto;
  background: #fff;
  padding: 12px;
  border-radius: 15px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  height: 400px;
  z-index: 50;

}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 15px;

}

.product-card {
  display: flex;
  background-color: white;
  flex-direction: column;
  border-radius: 12px;
  overflow: hidden;
  transition: transform 0.2s, box-shadow 0.2s;
}

.product-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.product-card figure {
  margin: 0;
  width: 100%;
  height: 140px;
  overflow: hidden;

}

.product-card figure img {
  width: 100%;
  height: 100%;
  object-fit: cover;

}

.info {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.info h2 {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #333;
}

.weight,
.desc {
  font-size: 12px;
  color: #555;
}

.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.pricee {
  font-size: 14px;
  font-weight: 700;
  color: #1a73e8;

}

.price-row div span {
  cursor: pointer;
  margin-left: 8px;
  font-size: 16px;
  transition: transform 0.2s;
}

.price-row div span:hover {
  transform: scale(1.2);
}
</style>
