import axios from "axios";
import { defineStore } from "pinia";
import { useParams } from "@/use/useParams";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    token: localStorage.getItem("ADMIN_TOKEN"),
  }),
  getters: {
    getToken() {
      return this.token;
    },
    isAuthenticated() {
      return !!this.getToken;
    },
  },
  actions: {
    async login(params) {
      try {
        const res = await axios.post(`users/authenticate?${useParams(params)}`);
        if (res.status === 200) {
          this.token = res.data.accessToken;
          localStorage.setItem("ADMIN_TOKEN", res.data.accessToken);
          this.router.push("/").then(() => window.location.reload());
        }
      } catch (error) {}
    },
    logout() {
      this.token = null;
      localStorage.removeItem("ADMIN_TOKEN");
      this.router.push("/login");
    },
  },
});
