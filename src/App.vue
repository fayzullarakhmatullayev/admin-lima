<template>
  <div>
    <component :is="layout"></component>
  </div>
</template>

<script>
import MainLayout from "./layouts/MainLayout.vue";
import EmptyLayout from "./layouts/EmptyLayout.vue";

export default {
  components: { MainLayout, EmptyLayout },
};
</script>
<script setup>
import { useRoute } from "vue-router";
import { computed, onMounted } from "vue";
import { useParams } from "./use/useParams";
import axios from "axios";

const route = useRoute();
const layout = computed(() => (route.meta.layout || "empty") + "-layout");
</script>
