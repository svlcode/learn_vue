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
      if (this.boxBSelected) return 'demo active';
      return 'demo';
    },
    boxCClasses() {
      if (this.boxCSelected) return 'demo active';
      return 'demo';
    },
  },
});
app.mount('#styling');
