<template>
  <div class="divp">
    <ul class="ula">
      <li>
        <RouterLink to="/maincourses" class="link">
          <span class="icon">🍔</span> Main Courses
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/sidedishes" class="link">
          <span class="icon">🍟</span> Side Dishes
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/drinks" class="link">
          <span class="icon">🥤</span> Drinks
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/other" class="link">
          <span class="icon">🍕</span> Other
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.divp {
    grid-column: 3 / 13;
    grid-row: 3 / 4;
    margin-left: 12%;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: white;
    border-radius: 10px;
    padding: 5px 0;
}

.ula {
    width: 100%;
    list-style-type: none;
    display: flex;
    gap: 40px;
    margin-left: 30px;
    padding: 0;
    background-color: white;
    border-radius: 10px;
}

.ula li {
    cursor: pointer;
    position: relative;
    padding: 5px 10px;
    display: flex;
    align-items: center;
    gap: 8px;
    background-color: white;
}

.ula li::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: transparent;
    transition: background-color 0.3s;
}

.ula li:hover::after {
    background-color: rgb(44 44 44);
}

.icon {
    font-size: 24px;
        background-color: white;

}

.link {
    display: flex;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    color: black;
    background-color: white;
}
</style>
