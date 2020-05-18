Vue.component('error', {
  data() {
    return {
      text: ''
    }
  },
  methods: {
    setError(error) {
      try {
        this.text = error;
      } catch (e) {
        console.log(error);
      }

    }
  },
  computed: {
    isVisible() {
      return this.text !== '';
    }
  },
  template: `
    <div class="error-block" v-if="isVisible">
        <p class="error-msg">
           <button class="close-btn" @click="setError('')">&times;</button>
            {{ text }}
        </p>
    </div>
    `
});
