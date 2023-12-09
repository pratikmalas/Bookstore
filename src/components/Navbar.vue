<template>
  <nav style="margin-bottom: 20px;" class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <router-link to="/" class="nav-link "><b>Home</b></router-link>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/login" class="nav-link " ><b>Login</b></router-link>
          </li>
          <li class="nav-item">
            <router-link to="/cart" class="nav-link "><b>Cart</b></router-link>
          </li>
        </ul>
        <form class="d-flex" @submit.prevent="$router.push(`/book?=${searchQuery}`)">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
</template>
<script>
export default {};
</script>
<style>
.nav-link{
  font-size: larger;
  color: black;
  
}
.nav-link:hover{
  font-size: larger;
  color: tomato;
}
</style>