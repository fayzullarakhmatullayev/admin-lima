<template>
  <div v-if="isModalOpen" class="modal-small">
    <div class="modal">
      <div class="modal-title"><slot name="title" /></div>

      <slot name="top" />
      <div class="modal-close" @click="$emit('closeModal')">&times;</div>
      <div class="modal-geolocation__btns">
        <button
          @click.prevent="$emit('closeModal')"
          class="modal-geolocation__btn btn__red"
        >
          Нет
        </button>
        <button
          @click="$emit('approve')"
          class="modal-geolocation__btn btn__blue"
        >
          Да
        </button>
      </div>
    </div>
    <div class="overlay" @click="$emit('closeModal')"></div>
  </div>
</template>

<script>
export default {
  emits: ["closeModal"],
  props: ["isModalOpen", "modalProps"],
};
</script>

<style></style>
