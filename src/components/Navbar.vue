<template>
  <div class="navbar">
    <span class="logo-name">Attilius Games</span>
    <div>
      <span class="game-name">Candy Crush</span>
      <span class="players-info">100k+ Players</span>
    </div>
    <span class="menu">Menu</span>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style>
.navbar {
  background-color: black;
  color: white;
  width: 100%;
  height: 35px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 11;
}

.logo-name {
  margin-left: 10px;
}

.menu {
  margin-right: 10px;
}

.game-name {
  margin-right: 5px;
}

.players-info {
  color: #a4a4a4;
}

span {
  font-size: 14px;
}
</style>
