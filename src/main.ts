import Vue from 'vue';
import App from './App.vue';


class AppCore {
    private instance?: Vue;

    private init() {
        this.instance = new Vue({
            el: '#app',
            render: h => h(App)
        });
    }

    constructor() {
        this.init()
    }

}

new AppCore();