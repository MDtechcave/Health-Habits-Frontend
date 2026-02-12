<template>
  <nav class="navbar">
    <div class ="navbar-container">
    <div class="logo-section">
      <img 
        src="@/assets/logo.png" 
        alt="Health Habits Logo" 
        width="120"
      />
    </div>
</div>

    
    <div class="nav-links">
      <router-link to="/">Home</router-link>
      <router-link to="/meals">Meals</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  background: white;
  box-shadow: 0 2px 10px rgba(0,0,0,0.05);
  position: sticky;
  top: 0;
  z-index: 100;
  max-width: 1400px;
  margin: 0 auto;
 
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5%;
  max-width: 1400px;
  margin: 0 auto;
  height: 100px;
}


.logo-section {
  display: flex;
  align-items: center;
}



.nav-links {
  display: flex;
  gap: 25px;
  flex: 1;
  justify-content: center;
  padding: 0 30px;
}

.nav-links a {
  color: #333;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  padding: 5px 0;
}

.nav-links a:hover {
  color: #F57C00
}

.nav-links a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #F57C00;
  transition: width 0.3s;
}

.nav-links a:hover::after {
  width: 100%;
}

</style>