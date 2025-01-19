const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },
  methods: {},
  computed: {
    boxAClasses() {
      if (this.boxASelected) return 'demo active';
      return 'demo';
    },
    boxBClasses() {
      return { active: this.boxBSelected };
    },
    boxCClasses() {
      return { active: this.boxCSelected };
    },
  },
});
app.mount('#styling');
