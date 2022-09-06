<template>
  <div class="page">
    <the-filter :isfilter="true" @filterAdd="isAddOpen = !isAddOpen">
      <template #name>Тарифы</template>
    </the-filter>
    <the-table :head="['Название', 'Сумма', 'Описание', 'Длительность']">
      <tr v-for="tarif in tariffs" :key="tarif.id">
        <td>{{ tarif.name }}</td>
        <td>{{ prettify(tarif.sum) }}</td>
        <td>{{ tarif.desc }}</td>
        <td>{{ tarif.duration }}</td>
        <td>
          <table-buttons
            :deleteButton="true"
            @delete="confirmToDelete = true"
            @edit="isEditOpen = true"
          />
        </td>
      </tr>
    </the-table>
  </div>
  <teleport to="body">
    <!-- Add new tarif -->
    <modal @closeModal="isAddOpen = false" :isModalOpen="isAddOpen">
      <template #title>Добавление тарифа</template>
      <div class="modal-form">
        <div class="input-group">
          <input
            type="text"
            placeholder=" "
            class="input"
            name="name"
            required
            id="name"
          />
          <label for="name" class="input-label">Название</label>
        </div>
        <div class="input-group">
          <input
            type="text"
            placeholder=" "
            class="input"
            name="desc"
            required
            id="desc"
          />
          <label for="desc" class="input-label">Описание</label>
        </div>
        <div class="input-group">
          <input
            type="number"
            placeholder=" "
            class="input"
            name="sum"
            required
            id="sum"
          />
          <label for="sum" class="input-label">Сумма</label>
        </div>
        <div class="input-group">
          <input
            type="date"
            placeholder=" "
            class="input"
            name="duration"
            required
            id="duration"
          />
          <label for="duration" class="input-label">Длительность</label>
        </div>
      </div>
    </modal>
    <!-- Edits tarif -->
    <modal @closeModal="isEditOpen = false" :isModalOpen="isEditOpen">
      <template #title>Изменить тарифа</template>
      <div class="modal-form">
        <div class="input-group">
          <input
            type="text"
            placeholder=" "
            class="input"
            name="name"
            required
            id="name"
          />
          <label for="name" class="input-label">Название</label>
        </div>
        <div class="input-group">
          <input
            type="text"
            placeholder=" "
            class="input"
            name="desc"
            required
            id="desc"
          />
          <label for="desc" class="input-label">Описание</label>
        </div>
        <div class="input-group">
          <input
            type="number"
            placeholder=" "
            class="input"
            name="sum"
            required
            id="sum"
          />
          <label for="sum" class="input-label">Сумма</label>
        </div>
        <div class="input-group">
          <input
            type="date"
            placeholder=" "
            class="input"
            name="duration"
            required
            id="duration"
          />
          <label for="duration" class="input-label">Длительность</label>
        </div>
      </div>
    </modal>
    <!-- Confirms to delete -->
    <modal-small
      :isModalOpen="confirmToDelete"
      @closeModal="confirmToDelete = false"
    >
      <template #title>Вы действительно хотите удалить?</template>
    </modal-small>
  </teleport>
</template>

<script setup>
import TheFilter from "@/components/TheFilter.vue";
import TheTable from "@/components/TheTable.vue";
import TableButtons from "@/components/TableButtons.vue";
import Modal from "@/components/Modal.vue";
import ModalSmall from "@/components/ModalSmall.vue";
import { prettify } from "@/use/PrettifySum";
import { reactive, ref } from "vue";
const isAddOpen = ref(false);
const isEditOpen = ref(false);
const confirmToDelete = ref(false);

const tariffs = reactive([
  {
    id: 1,
    name: "PROPLAN",
    sum: "350000",
    desc: "Подходит для малого бизнеса",
    duration: "1 месяц",
  },
]);
</script>
