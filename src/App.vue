<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { auth } from "./boot/firebase";

export default defineComponent({
  name: "App",
  beforeMount() {
    auth.onAuthStateChanged((user) => {
      if (!user) this.$router.replace("/login");
    });
  },
});
</script>
