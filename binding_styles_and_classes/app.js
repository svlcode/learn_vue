let vm = Vue.createApp({
	data() {
		return {
			isPurple: false,
			selectedColor: '',
			size: 150,
			rotation: 0,
		};
	},
	computed: {
		circle_classes() {
			return {
				purple: this.isPurple,
			};
		},
		circle_styles() {
			const styles = {
				height: this.size + 'px',
				width: this.size + 'px',
				'line-height': this.size + 'px',
				transform: `rotate(${this.rotation}deg)`,
			};
			return styles;
		},
	},
}).mount('#app');
