<template>
  <div class="app-main-layout">
    <navbar />
    <sidebar />
    <div class="app-page">
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
</script>
