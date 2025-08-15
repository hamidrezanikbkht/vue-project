import { defineStore } from 'pinia'

export const useProductStore = defineStore('products', {
  state: () => ({
    allProducts: [] 
  }),
  actions: {
    async fetchAllProducts() {
      const urls = [
       "https://67a720d9510789ef0dfd0df6.mockapi.io/sideDishes",
        "https://67a720d9510789ef0dfd0df6.mockapi.io/mainCourses"
        
      ]
      
      const allData = []

      for (const url of urls) {
        const res = await fetch(url)
        const data = await res.json()
        allData.push(...data)
      }

      this.allProducts = allData
    }
  }
})
