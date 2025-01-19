const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the course and learn Vue!',
      url: 'https://vuejs.org/',
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = this.getRandomNumber(0, 1);
      if (randomNumber === 0) {
        return 'Learn Vue';
      } else {
        return 'Master Vue';
      }
    },

    getRandomNumber(min, max) {
      const randomNumber = Math.random() * (max + 1);
      return Math.floor(randomNumber + min);
    },
  },
});

app.mount('#user-goal');
