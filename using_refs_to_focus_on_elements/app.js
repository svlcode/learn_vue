const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Vio',
      lastName: 'Slaniceanu',
    };
  },
  methods: {
    focus(elem) {
      elem.focus();
      elem.select();
    },
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
}).mount('#app');
