<template>
  <div v-if="isModalOpen">
    <div class="modal">
      <div class="modal-title"><slot name="title" /></div>
      <slot name="top" />
      <form @submit.prevent="$emit('submitHandler')">
        <slot />
        <slot name="confirm" />
        <div class="modal-buttons">
          <button @click.prevent="$emit('closeModal')" class="btn btn-red">
            Закрыть
          </button>
          <button class="btn btn-blue" type="submit">Добавить</button>
        </div>
      </form>
      <div class="modal-close" @click="$emit('closeModal')">&times;</div>
    </div>
    <div class="overlay" @click="$emit('closeModal')"></div>
  </div>
</template>

<script>
export default {
  emits: ["closeModal", "submitHandler"],
  props: ["isModalOpen"],
};
</script>

<style></style>
