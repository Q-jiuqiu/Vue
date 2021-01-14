<template>
  <div class="filter">
    {{ mydata | capitalize }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      mydata: "sichuan"
    };
  },
  filters: {
    capitalize: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style></style>
