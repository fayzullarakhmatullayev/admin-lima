<template>
  <div class="navbar">
    <div class="navbar-wrapper">
      <div class="navbar-left">
        <router-link :to="{ name: 'home' }" class="navbar-logo">
          ADMIN
        </router-link>

        <div class="navbar-resize" @click="smallNav">
          <i class="icofont-outdent"></i>
        </div>
        <div class="navbar-resize full-screen" @click="requestFullScreen">
          <i class="icofont-expand"></i>
        </div>
        <div class="navbar-search">
          <input type="text" placeholder="Поиск..." />
          <span class="icofont icofont-search"></span>
        </div>
      </div>
      <div class="navbar-right">
        <div class="navbar-time">
          {{ currentTime }}
        </div>
        <div class="navbar-notif notification">
          <i
            class="notification-icon icofont-notification"
            @click="isNotifOpen = true"
          ></i>
          <span>5</span>
          <div
            class="navbar-notif__menu"
            ref="notifRef"
            :class="{ 'active-notif': isNotifOpen }"
          >
            <ul>
              <li>
                <div class="time">11:00</div>
                <div class="message">
                  напоминание о заплонированном посещении
                </div>
              </li>
              <li>
                <div class="time">11:00</div>
                <div class="message">вам поставлена задача</div>
              </li>
              <li class="all">
                <a href="#">Смотреть всё</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="navbar-notif lang" @click="isLangOpen = true">
          <div class="language">
            {{ languages[langIndex].name }}
          </div>
          <ul v-if="isLangOpen" class="lang-list" ref="langRef">
            <li
              v-for="(lang, index) in languages"
              :key="lang.name"
              @click.stop="changeLangHandler(index)"
            >
              <img :src="lang.img" :alt="lang.name" />{{ lang.name }}
            </li>
          </ul>
        </div>
        <div class="navbar-profile">
          <img
            src="@/assets/image/profile.jpg"
            alt="profile"
            @click="dropdown = true"
          />
          <div
            class="navbar-profile__menu"
            :class="{ 'active-profile': dropdown }"
            ref="dropdownRef"
          >
            <ul>
              <li>
                <a href="#">Мой профиль</a>
              </li>
              <li>
                <a href="#">Календарь</a>
              </li>
              <li>
                <a href="#" @click.prevent="logout">Выход</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <teleport to="body">
    <div class="overlay-mobile" @click="emit('removeElement')"></div>
  </teleport>
</template>

<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from "vue";
import { storeToRefs } from "pinia";
import { useCurrentTime } from "../store/currentTime";
import { onClickOutside } from "@vueuse/core";
import { useAuthStore } from "@/store/auth";
const { logout } = useAuthStore();

const emit = defineEmits();

// Gets from Store the current Time
const { currentTime } = storeToRefs(useCurrentTime());
const { renderDate, clearInterval } = useCurrentTime();

// Onclick makes display full screen
const requestFullScreen = () => {
  const body = document.body;
  const requestMethod =
    body.requestFullScreen ||
    body.webkitRequestFullScreen ||
    body.mozRequestFullScreen ||
    body.msRequestFullScreen;

  if (requestMethod) {
    // Native full screen.
    requestMethod.call(body);
  } else if (typeof window.ActiveXObject !== "undefined") {
    // Older IE.
    const wscript = new ActiveXObject("WScript.Shell");

    if (wscript !== null) {
      wscript.SendKeys("{F11}");
    }
  }
};

// Variables
const isLangOpen = ref(false);
const langRef = ref(null);
const isNotifOpen = ref(false);
const notifRef = ref(null);
const langIndex = ref(0);
const windowWidth = ref(0);

// If notifications clicked to other place close the notification
onClickOutside(notifRef, () => (isNotifOpen.value = false));

// Languages
const languages = computed(() => [
  {
    name: "RU",
    img: "./ru.jpg",
    value: "ru",
  },
  { name: "УЗ", img: "./uz.gif", value: "uz" },
  { name: "O'Z", img: "./uz.gif", value: "uz" },
  {
    name: "EN",
    img: "./en.png",
    value: "en",
  },
]);
// If languages clicked not to languages closes
onClickOutside(langRef, () => (isLangOpen.value = false));

// Changes languages on click
const changeLangHandler = (idx) => {
  langIndex.value = idx;
  isLangOpen.value = false;
};

// Profile Dropdown refs
const dropdown = ref(false);
const dropdownRef = ref(null);
// Closes dropdown if clicked outside
onClickOutside(dropdownRef, () => (dropdown.value = false));

// gets window width
const getWindowWidth = () => {
  windowWidth.value = document.documentElement.clientWidth;
};

// Onclick makes sidebar small
const smallNav = () => {
  document.body.classList.toggle("small-sidenav");
  if (windowWidth.value < 575) {
    document.body.classList.remove("small-sidenav");
    document.body.classList.toggle("mobile-sidenav");
  }
  emit("makeFalse");
};

onMounted(() => {
  renderDate();
  nextTick(function () {
    window.addEventListener("resize", getWindowWidth);
    //Init
    getWindowWidth();
  });
});
// Destroys listeners and interval
onBeforeUnmount(() => {
  clearInterval();
  window.removeEventListener("resize", getWindowWidth);
});
</script>
