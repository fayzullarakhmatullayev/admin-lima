<template>
  <div class="sidebar">
    <ul class="sidebar-menu">
      <li class="sidebar-menu__list">
        <router-link exact :to="{ name: 'home' }" class="sidebar-menu__link">
          <i class="icofont-chart-histogram-alt"></i>
          <p>Рабочий стол</p>
        </router-link>
      </li>
      <li class="sidebar-menu__list">
        <router-link :to="{ name: 'license' }" class="sidebar-menu__link">
          <i class="icofont-ui-text-chat"></i>
          <p style="margin-bottom: 5px">Лицензии</p>
        </router-link>
      </li>
      <li class="sidebar-menu__list">
        <router-link :to="{ name: 'tariffs' }" class="sidebar-menu__link">
          <i class="icofont-ui-text-chat"></i>
          <p style="margin-bottom: 5px">Тарифы</p>
        </router-link>
      </li>
      <li class="sidebar-menu__list">
        <router-link :to="{ name: 'systems' }" class="sidebar-menu__link">
          <i class="icofont-ui-text-chat"></i>
          <p style="margin-bottom: 5px">Системы</p>
        </router-link>
      </li>
      <li class="sidebar-menu__list">
        <router-link
          :to="{ name: 'messages' }"
          class="sidebar-menu__link notif-wrapper"
        >
          <div class="sidebar-menu__content">
            <i class="icofont-ui-messaging"></i>
            <p>Сообщения</p>
          </div>
          <div class="notif">5</div>
        </router-link>
      </li>
      <li class="sidebar-menu__list">
        <router-link
          :to="{ name: 'notifications' }"
          class="sidebar-menu__link notif-wrapper"
          ><div class="sidebar-menu__content">
            <i class="icofont-notification"></i>
            <p>Уведомления</p>
          </div>
          <div class="notif">3</div>
        </router-link>
      </li>
      <li class="sidebar-menu__list">
        <router-link :to="{ name: 'leads' }" class="sidebar-menu__link">
          <i class="icofont-ui-text-chat"></i>
          <p style="margin-bottom: 5px">Лиды</p>
        </router-link>
      </li>
      <li class="sidebar-menu__list">
        <router-link :to="{ name: 'tasks' }" class="sidebar-menu__link">
          <i class="icofont-ui-text-chat"></i>
          <p style="margin-bottom: 5px">Задачи</p>
        </router-link>
      </li>
      <li class="sidebar-menu__list dropList">
        <div
          class="sidebar-menu__link dropdown"
          @click="clickDropdownHandler(0)"
          :class="{
            activeDrop: dropdownList[0].item,
          }"
        >
          <div class="sidebar-menu__content">
            <i class="icofont-listing-box"></i>
            <p>Справочники <i class="icofont-thin-down inner-array"></i></p>
          </div>
          <i class="icofont-thin-down dropdown-array"></i>
        </div>
        <ul
          class="dropdown-menu"
          :class="{
            activeDrop: dropdownList[0].item,
          }"
        >
          <li class="dropdown-menu__list">
            <router-link
              :to="{ name: 'list-doctors' }"
              class="dropdown-menu__link"
              >Врачи</router-link
            >
          </li>
          <li class="dropdown-menu__list">
            <router-link :to="{ name: 'list-lpu' }" class="dropdown-menu__link"
              >ЛПУ</router-link
            >
          </li>
          <li class="dropdown-menu__list">
            <router-link
              :to="{ name: 'list-pharmacy' }"
              class="dropdown-menu__link"
              >Аптеки</router-link
            >
          </li>
          <li class="dropdown-menu__list">
            <router-link
              :to="{ name: 'list-distributors' }"
              class="dropdown-menu__link"
              >Оптовики</router-link
            >
          </li>
        </ul>
      </li>
      <li class="sidebar-menu__list dropList">
        <div
          class="sidebar-menu__link dropdown"
          @click="clickDropdownHandler(1)"
          :class="{
            activeDrop: dropdownList[1].item,
          }"
        >
          <div class="sidebar-menu__content">
            <i class="icofont-pie-chart"></i>
            <p>Отчёты <i class="icofont-thin-down inner-array"></i></p>
          </div>
          <i class="icofont-thin-down dropdown-array"></i>
        </div>
        <ul
          class="dropdown-menu"
          :class="{
            activeDrop: dropdownList[1].item,
          }"
        >
          <li class="dropdown-menu__list">
            <router-link :to="{ name: 'reports' }" class="dropdown-menu__link"
              >Общие отчёты</router-link
            >
          </li>
        </ul>
      </li>
      <li class="sidebar-menu__list dropList">
        <div
          class="sidebar-menu__link dropdown"
          @click="clickDropdownHandler(2)"
          :class="{
            activeDrop: dropdownList[2].item,
          }"
        >
          <div class="sidebar-menu__content">
            <i class="icofont-question"></i>
            <p>База знаний <i class="icofont-thin-down inner-array"></i></p>
          </div>
          <i class="icofont-thin-down dropdown-array"></i>
        </div>
        <ul
          class="dropdown-menu"
          :class="{
            activeDrop: dropdownList[2].item,
          }"
        >
          <li class="dropdown-menu__list">
            <a href="#" @click.prevent class="dropdown-menu__link"
              >Тестирование</a
            >
          </li>
          <li class="dropdown-menu__list">
            <a href="#" @click.prevent class="dropdown-menu__link"
              >Учебные пособия</a
            >
          </li>
        </ul>
      </li>
      <li class="sidebar-menu__list dropList">
        <div
          class="sidebar-menu__link dropdown"
          @click="clickDropdownHandler(3)"
          :class="{
            activeDrop: dropdownList[3].item,
          }"
        >
          <div class="sidebar-menu__content">
            <i class="icofont-settings"></i>
            <p>Настройки <i class="icofont-thin-down inner-array"></i></p>
          </div>
          <i class="icofont-thin-down dropdown-array"></i>
        </div>
        <ul
          class="dropdown-menu"
          :class="{
            activeDrop: dropdownList[3].item,
          }"
        >
          <li class="dropdown-menu__list">
            <router-link
              :to="{ name: 'settings' }"
              @click.prevent
              class="dropdown-menu__link"
              >Основные</router-link
            >
          </li>
          <li class="dropdown-menu__list">
            <router-link :to="{ name: 'branches' }" class="dropdown-menu__link"
              >Филиалы</router-link
            >
          </li>
          <li class="dropdown-menu__list">
            <router-link
              :to="{ name: 'departments' }"
              class="dropdown-menu__link"
              >Отделы</router-link
            >
          </li>
          <li class="dropdown-menu__list">
            <router-link :to="{ name: 'staff' }" class="dropdown-menu__link"
              >Сотрудники</router-link
            >
          </li>
          <li class="dropdown-menu__list">
            <router-link
              :to="{ name: 'rules-and-roles' }"
              class="dropdown-menu__link"
              >Роли и права</router-link
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const dropdownList = ref([
  { item: false },
  { item: false },
  { item: false },
  { item: false },
]);

const makeFalse = () => {
  dropdownList.value.forEach((list) => (list.item = false));
};
const clickDropdownHandler = (idx) => {
  if (!document.body.classList.contains("small-sidenav")) {
    dropdownList.value[idx].item = !dropdownList.value[idx].item;
  } else {
    makeFalse();
  }
};
</script>
