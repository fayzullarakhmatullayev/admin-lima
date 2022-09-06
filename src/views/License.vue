<template>
  <div class="page">
    <the-filter :isfilter="true" @filterAdd="isAddOpen = !isAddOpen">
      <template #name>Лицензии</template>
    </the-filter>
    <the-table :head="tableHead">
      <tr v-for="licence in licenses" :key="licence.id">
        <td>{{ licence.number }}</td>
        <td>{{ licence.system }}</td>
        <td>{{ licence.company }}</td>
        <td>{{ licence.lid }}</td>
        <td>{{ licence.tarif }}</td>
        <td>{{ licence.date_start }}</td>
        <td>{{ licence.date_end }}</td>
        <td>
          <table-user img="profile.jpg" :name="licence.staff" />
        </td>
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
    <modal
      @closeModal="isAddOpen = false"
      :isModalOpen="isAddOpen"
      class="licence-modal"
    >
      <template #title>Добавление лицензии</template>
      <div class="modal-form">
        <div class="input-group">
          <input
            type="number"
            placeholder=" "
            class="input"
            name="name"
            required
            id="name"
          />
          <label for="name" class="input-label">Номер</label>
        </div>
        <div class="form-select">
          <select class="select">
            <option>Система</option>
            <option>Система</option>
            <option>Система</option>
          </select>
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
import { reactive, ref } from "vue";
import TheFilter from "@/components/TheFilter.vue";
import TheTable from "@/components/TheTable.vue";
import TableButtons from "@/components/TableButtons.vue";
import TableUser from "@/components/TableUser.vue";
import Modal from "@/components/Modal.vue";
import ModalSmall from "@/components/ModalSmall.vue";

const isAddOpen = ref(false);
const isEditOpen = ref(false);
const confirmToDelete = ref(false);

const tableHead = reactive([
  "Номер",
  "Система",
  "Компания",
  "Лид",
  "Тариф",
  "Дата Н.",
  "Дата О.",
  "Ответственный",
]);

const licenses = reactive([
  {
    id: 1,
    number: "0000-0000-0000-0000",
    system: "PROCRM",
    company: "MEGAPRODUCT",
    lid: "Борис Тимофеев",
    tarif: "PROPLAN",
    date_start: "08.05.2021",
    date_end: "08.05.2022",
    staff: "Азиза Артыкова",
  },
]);
</script>
