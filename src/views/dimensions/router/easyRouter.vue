<template>
  <div class="easyRouter"></div>
</template>

<script>
import Vue from "vue";

const NotFound = { template: "<p>Page not found</p>" };
const Home = { template: "<p>home page</p>" };
const About = { template: "<p>about page</p>" };

const routes = {
  "/": Home,
  "/about": About
};

export default {};
</script>

<style></style>
