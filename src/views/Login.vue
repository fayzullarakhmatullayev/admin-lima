<template>
  <div class="login">
    <div class="login-left">
      <div class="login-logo__wrapper">
        <p class="navbar-logo">ADMIN</p>
        <div class="navbar-notif lang" @click="isLangOpen = !isLangOpen">
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
      </div>
      <form class="login-form" @submit.prevent="submitHandler">
        <h2 class="login-form__title">Форма входа</h2>
        <p class="login-form__subtitle">Войдите в свою учётную запись</p>
        <div class="login-form__control">
          <input type="text" placeholder="Логин" required v-model="user" />
        </div>
        <div class="login-form__control">
          <input
            type="password"
            placeholder="Пароль"
            required
            v-model="password"
          />
        </div>
        <label class="login-form__container">
          <input
            type="checkbox"
            class="login-form__checkbox"
            v-model="remember"
          />
          <span class="login-form__checkmark"></span>
          <p>запомнить меня</p>
        </label>
        <button type="submit" class="login-form__btn">
          <i class="icofont-sign-in"></i>Вход
        </button>
      </form>
    </div>
    <div class="login-right">
      <login-svg />
    </div>
  </div>
</template>

<script setup>
import LoginSvg from "@/components/LoginSvg.vue";
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { onClickOutside } from "@vueuse/core";
import { storeToRefs } from "pinia";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "vue-router";

const router = useRouter();

const { login, logout } = useAuthStore();
const { isAuthenticated } = storeToRefs(useAuthStore());

const isLangOpen = ref(false);
const langIndex = ref(0);
const langRef = ref(null);
const user = ref("");
const password = ref("");
const remember = ref("");

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
const submitHandler = () => {
  if (user.value !== "" && password.value !== "") {
    login({ login: user.value, password: password.value });
    user.value = "";
    password.value = "";
  }
};
onMounted(() => {
  logout();
});
</script>
