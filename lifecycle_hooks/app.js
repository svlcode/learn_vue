let vm = Vue.createApp({
	data() {
		return {
			message: 'Hello world!',
		};
	},
	// this hook is called before the vue instance is initialized.
	// here we don't have access to the data (proxies have not been created yet).
	beforeCreate() {
		console.log('beforeCreate() function called');
	},
	created() {
		console.log('created() function called', this.message);
	},
	// this hook will be triggered once the template has been compiled.
	beforeMount() {
		console.log('beforeMount() function called', this.$el);
	},
	// this hook gets triggered after the templated is mounted into the page.
	mounted() {
		console.log('mounted() function called', this.$el);
	},
	//this hook gets called whenever an update to our data ocurs.
	//usually used for debugging.
	beforeUpdate() {
		console.log('beforeUpdate() function called');
	},
	//this hook gets called after an update to our data ocurs.
	updated() {
		console.log('updated() function called');
	},
	// this hook gets triggered just before vue instance is unmounted.
	// at this point you still have access to the data and methods.
	beforeUnmount() {
		console.log('beforeUnmount function called.');
	},
	// this hook gets called after the vue instance is unmounted.
	unmounted() {
		console.log('unmounted function called.');
	},
});
vm.mount('#app');
