Vue.component('error', {
    props: ['error'],
    data() {
        return {
        }
    },
    template: 
        `<div class="errorMsg" v-show="error">Server does not response. Try later again!</div>`
});