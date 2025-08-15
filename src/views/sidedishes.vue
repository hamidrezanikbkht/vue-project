<template>
    <div class="product-list">
        <teleport v-if="pop" to="body">
            <div class="menu-overlay" @click="pop = false">
                <div class="menu-content" @click.stop>
                    <div class="delet">
                        <p>Add New Product</p>
                        <div style=" background-color: white;  cursor: pointer" @click="dle">✖️ </div>
                    </div>

                    <div style="background-color: white;" class="divinput">
                        <label>Name of the Product</label>
                        <input v-model="name" type="text" />
                    </div>

                    <div style="background-color: white;" class="divinput">
                        <label>Ingredients</label>
                        <input v-model="ingredients" type="text" />
                    </div>

                    <div class="check">
                        <input type="checkbox" v-model="vegan" />
                        <p>Suitable for Vegans</p>
                    </div>

                    <div style="background-color: white;" class="pg">
                        <div style="background-color: white;">
                            <label style="background-color: white;">Gram</label>
                            <input style="background-color: white;" v-model.number="gram" type="number" />
                        </div>
                        <div style="background-color: white;">
                            <label style="background-color: white;">Calory</label>
                            <input v-model.number="kalery" type="number" />
                        </div>
                    </div>

                    <div style="background-color: white;" class="price">
                        <label style="background-color: white;">Price of the Product</label>
                        <input v-model.number="price" placeholder="$" type="number" />
                    </div>

                    <div style="background-color: white;" class="divinput">
                        <label>Image</label>
                        <input id="file-upload" type="file" @change="change" hidden />
                        <label for="file-upload" class="upload-btn">
                            📷 Upload Image
                        </label>
                    </div>


                    <button @click="submitForm">Add Product</button>
                </div>
            </div>




        </teleport>
        <teleport to="body">
       <div v-if="porodact"
    style="width: 300px; position: fixed; top: 0; right: 0; height: 100%; background: white; box-shadow: -2px 0 10px rgba(0,0,0,0.1); border-radius: 10px 0 0 10px; padding: 20px; display: flex; flex-direction: column; gap: 10px; z-index: 100;">
    
<div v-if="porodact" class="menu-overlay" @click="porodactfalse">
    <div class="menu-content" @click.stop>
        <div class="delet">
            <p>Product Info</p>
            <div style="cursor: pointer; background-color: white;" @click="porodactfalse">✖️</div>
        </div>

        <div style="background-color: white;" class="divinput">
            <label>Name</label>
            <p style="background-color: white;">{{ porodactch.name }}</p>
        </div>

        <div style="background-color: white;" class="divinput">
            <label>Ingredients</label>
            <p style="background-color: white;">{{ porodactch.ingredients }}</p>
        </div>

        <div class="check" style="background-color: white;">
            <p style="background-color: white;">Calory: {{ porodactch.kalery }}</p>
            <p style="background-color: white;">Gram: {{ porodactch.gram }}</p>
        </div>

        <div style="background-color: white;" class="price">
            <label style="background-color: white;">Price</label>
            <p style="background-color: white;">${{ porodactch.price }}</p>
        </div>

        <div style="background-color: white;" class="divinput">
            <label>Image</label>
            <img :src="porodactch.img || 'https://via.placeholder.com/150'" alt="" style="width:100%; border-radius: 8px;" />
        </div>
    </div>
</div>

</div>

        </teleport>

        <div v-for="(value, index) in selectedProduct" :key="value.id" class="product-card">
            <figure>
                <img :src="value.img || 'https://via.placeholder.com/150'" alt="" />
            </figure>
            <div class="info">
                <h2>{{ value.name }}</h2>
                <p class="weight">{{ value.gram }} g</p>
                <p class="desc">{{ value.ingredients }}</p>
                <div class="price-row">
                    <span class="pricee">${{ value.price }}</span>
                    <div>
                        <span @click="poro(value)">👁️</span>
                        <span @click="() => onEditClick(value)">⚙️</span>
                    </div>
                </div>
            </div>
        </div>

        <!-- کارت Add New Product -->
        <div class="product-card add-new" @click="onAddClick">
            <figure></figure>
            <div class="info">
                <div class="add-inner">+</div>
                <div class="add-label">Add New Product</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const name = ref("");
const ingredients = ref("");
const vegan = ref(false);
const gram = ref(0);
const kalery = ref(0);
const price = ref(0);
const img = ref(null);

const selectedProduct = ref([]);
const porodactch = ref(null)
const pop = ref(false);
const editProduct = ref(null); 
const porodact = ref(false)
const poro = (value) => {
    porodact.value = true
    console.log(value);
    porodactch.value = value



}
const porodactfalse = () => {
    porodact.value = false
}

const onEditClick = (product) => {
    name.value = product.name;
    ingredients.value = product.ingredients;
    vegan.value = product.vegan;
    gram.value = product.gram;
    kalery.value = product.kalery;
    price.value = product.price;
    img.value = null; 
    editProduct.value = product; 
    pop.value = true; 
};


const onAddClick = () => pop.value = true;

const change = (e) => {
    img.value = e.target.files[0];
};

const submitForm = async () => {
    if (!name.value || !ingredients.value) {
        alert("لطفاً نام و مواد تشکیل دهنده را وارد کنید");
        return;
    }

    let base64Image = null;
    if (img.value) {
        const toBase64 = (file) =>
            new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = (error) => reject(error);
            });
        base64Image = await toBase64(img.value);
    }

    const payload = {
        name: name.value,
        ingredients: ingredients.value,
        vegan: vegan.value,
        gram: gram.value,
        kalery: kalery.value,
        price: price.value,
        ...(base64Image && { img: base64Image }),
    };

    try {
        let res, updatedProduct;
        if (editProduct.value) {
            res = await fetch(`https://67a720d9510789ef0dfd0df6.mockapi.io/sideDishes${editProduct.value.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            updatedProduct = await res.json();

            const index = selectedProduct.value.findIndex(p => p.id === editProduct.value.id);
            if (index !== -1) selectedProduct.value[index] = updatedProduct;
        } else {
            res = await fetch("https://67a720d9510789ef0dfd0df6.mockapi.io/sideDishes", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            updatedProduct = await res.json();
            selectedProduct.value.push(updatedProduct);
        }

        pop.value = false;

        name.value = "";
        ingredients.value = "";
        vegan.value = false;
        gram.value = 0;
        kalery.value = 0;
        price.value = 0;
        img.value = null;
        editProduct.value = null;

    } catch (err) {
        console.error("Error submitting product:", err);
        alert("مشکلی در ارسال محصول وجود دارد.");
    }
};
const dle = () => {
    pop.value = false
}

onMounted(async () => {
    try {
        const res = await fetch("https://67a720d9510789ef0dfd0df6.mockapi.io/sideDishes");
        selectedProduct.value = await res.json();
    } catch (err) {
        console.error("Error fetching products:", err);
    }
});
</script>

<style scoped>
.product-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    padding: 20px;
    background-color: #f0f2f5;
}

.product-card {
    background-color: #fff;
    border-radius: 15px;
    width: calc(25% - 20px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.product-card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-bottom: 1px solid #eee;
}

.info {
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: center;
    text-align: center;
    background-color: white;
}

.info h2 {
    font-size: 1.2rem;
    font-weight: 600;
    color: #333;
    background-color: white;

}

.info .weight,
.info .desc {
    font-size: 0.9rem;
    color: #666;
    background-color: white;

}

.price-row {
    width: 100%;
    margin-top: 10px;
    font-size: 1.05rem;
    font-weight: 600;
    color: #1abc9c;
    display: flex;
    justify-content: space-between;
    gap: 10px;
    background-color: white;


    div {
        display: flex;
        gap: 5px;
        cursor: pointer;
        background-color: white;


        span {
            background-color: white;

            &&:hover {
                scale: 1.2;
                transition: all 0.4s;
            }
        }
    }
}

.pricee {
    background-color: white;
}

.add-new {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 2px dashed #ccc;
    border-radius: 15px;
    padding: 20px;
    transition: all 0.3s;
}

.add-new:hover {
    border-color: #1abc9c;
    background-color: #e8f7f3;
}

.add-inner {
    font-size: 2.5rem;
    font-weight: bold;
    width: 70px;
    height: 70px;
    border-radius: 12px;
    border: 1px solid #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s, box-shadow 0.3s;
    background-color: white;
}

.add-inner:hover {
    transform: scale(1.2);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
}

.add-label {
    margin-top: 8px;
    font-weight: 500;
    color: #555;
    background-color: white;
}

.menu-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: flex-end;
    z-index: 9999;
    backdrop-filter: blur(2px);

}

.menu-content {
    background-color: white;
    width: 350px;
    max-width: 90%;
    padding: 30px;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-shadow: -4px 0 15px rgba(0, 0, 0, 0.1);
}

.menu-content .delet {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;

}

.menu-content .delet p {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0;
    background-color: white !important;

}

.divinput label {
    font-weight: 500;
    color: #555;
    display: block;
    margin-bottom: 5px;
    background-color: white;

}

.divinput input {
    width: 100%;
    padding: 10px 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: border-color 0.3s;
    background-color: white !important;

}

.divinput input:focus {
    border-color: #1abc9c;
    outline: none;
    background-color: white;

}

.check {
    display: flex;
    align-items: center;
    gap: 10px;
    padding-top: 10px;
    background-color: white;

}

.check p {
    margin: 0;
    font-size: 0.95rem;
    color: #555;
    background-color: white;

}

.pg {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    background-color: white;

}

.pg input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: border-color 0.3s;
    background-color: white;

}

.pg input:focus {
    border-color: #1abc9c;
    outline: none;
    background-color: white;

}

.price input {
    width: 100%;
    padding: 10px;
    margin-top: 5px;
    border: 1px solid #ddd;
    border-radius: 8px;
    transition: border-color 0.3s;
    background-color: white;

}

.price input:focus {
    border-color: #1abc9c;
    outline: none;
}

.menu-content button {
    padding: 12px;
    background-color: #1abc9c;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
}

.menu-content button:hover {
    background-color: #17a589;
    transform: translateY(-2px);
}


.upload-btn {
    display: inline-block;
    padding: 10px 15px;
    background-color: #f7f7f7;
    border: 2px dashed #1abc9c;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 500;
    color: #1abc9c;
    text-align: center;
    transition: all 0.3s ease;
}

.upload-btn:hover {
    background-color: #e8f7f3;
    border-color: #16a085;
    color: #16a085;
}
</style>
