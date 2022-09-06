<template>
  <div class="table-container">
    <div class="table-title"><slot name="title"></slot></div>
    <div class="table-wrapper">
      <table class="table">
        <thead class="thead">
          <tr>
            <th v-for="h in head" :key="h">{{ h }}</th>
            <th class="action">Действие</th>
          </tr>
        </thead>
        <tbody>
          <slot />
        </tbody>
      </table>
    </div>
    <slot name="pagination"></slot>
  </div>
</template>

<script>
export default {
  props: ["head"],
};
</script>

<style>
.thead tr th {
  white-space: nowrap;
}
</style>
