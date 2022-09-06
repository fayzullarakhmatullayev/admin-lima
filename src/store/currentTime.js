import { defineStore } from "pinia";

export const useCurrentTime = defineStore("currentTime", {
  state: () => ({ currentTime: null, interval: null }),
  actions: {
    renderDate() {
      const zeros = (i) => {
        return i < 10 ? "0" + i : i;
      };
      const setDate = (date) => {
        return `${zeros(date.getHours())}:${zeros(date.getMinutes())}:${zeros(
          date.getSeconds()
        )}`;
      };
      this.currentTime = setDate(new Date());
      this.interval = setInterval(() => {
        this.currentTime = setDate(new Date());
      }, 1000);
    },
    clearInterval() {
      clearInterval(this.interval);
    },
  },
});
