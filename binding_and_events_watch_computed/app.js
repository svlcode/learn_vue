const vm = Vue.createApp({
  data() {
    return {
      firstName: 'Vio',
      lastName: 'Slaniceanu',
      url: 'https://google.com',
      raw_url: '<a href="https://google.com" target="_blank">Gooogle</a>',
      age: 20,
      power: 0,
    };
  },
  methods: {
    updateLastName(event) {
      console.log('input changed');
      this.lastName = event.target.value;
    },
    decrement() {
      this.age--;
    },
  },
  computed: {
    fullName() {
      console.log('fullName computed property was called.');
      return `${this.firstName} ${this.lastName.toUpperCase()}`;
    },
  },
  watch: {
    age(newValue, oldValue) {
      console.log(`age has changed from ${oldValue} to ${newValue}`);
    },
    power(value) {
      if (value > 10) this.power = 0;
    },
  },
}).mount('#app');
