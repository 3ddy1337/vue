Vue.createApp({
  name: "My Instance",
  data() {
    return {
      userName: "John Doe",
      age: 30,
    };
  },
  directives: {
    highlight: {
      mounted(el) {
        el.style.border = "1px solid red";
        el.style.backgroundColor = "pink";
      },
    },
  },
}).mount("#app");
