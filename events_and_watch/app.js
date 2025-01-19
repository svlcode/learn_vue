const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      inputValue: '',
      fullName: '',
      number: 0,
    };
  },
  watch: {
    number(newValue, oldValue) {
      if (newValue !== '') {
        if (!this.isNumeric(newValue)) {
          this.number = oldValue;
        }
      }
    },
  },
  methods: {
    getFullName() {
      if (this.name == '') {
        return '';
      } else {
        return this.name + ' ' + 'Slaniceanu';
      }
    },

    isNumeric(value) {
      if (!isNaN(value) && !isNaN(parseInt(value))) {
        return true;
      }
      return false;
    },

    showInputValue() {
      alert('Input: ' + this.inputValue);
      this.inputValue = '';
    },
    add() {
      this.counter++;
    },

    remove() {
      this.counter--;
    },
    setName(firstName, lastName) {
      this.name = firstName + ' ' + lastName;
    },

    setNameFromEvent(event) {
      this.name = event.target.value;
    },
  },
});

app.mount('#events');
