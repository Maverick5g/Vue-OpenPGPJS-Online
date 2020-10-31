const home = {
    template: `
        <div id="container">
            <br>
            <h1>OpenPGP.JS</h1>
            <p>本站工具可以帮助你轻松的 <router-link to="/encrypt">加密</router-link>，<router-link to="/decrypt">解密</router-link>，<router-link to="/sign">签名</router-link>和<router-link to="/verify">验证</router-link></p>
        </div>
    `
};

const encrypt = {
    template: `
        <div id="container">
            <br>
            <p>Encrypt</p>
            <form class="was-validated">
                <div class="mb-3">
                <label for="validationTextarea">Public Key</label>
                <textarea v-model="key" class="form-control" id="validationTextarea" placeholder="Public Key" style="height: 10cm;" required></textarea>
                </div>
            </form>
            <form class="was-validated">
                <div class="mb-3">
                <label for="validationTextarea">Message</label>
                <textarea class="form-control" id="validationTextarea" placeholder="Message" style="height: 10cm;" required></textarea>
                </div>
            </form>
            <br>
            <button class="btn btn-primary" v-on:click="encrypt">Encrypt it!</button><br>
            <br>
            <router-link to="/">Go back</router-link>
            </div>
    `,
    data() {
        return {
            key: null
        }
    },
    methods: {
        encrypt() {
            console.log(this.key)
        }
    }
}

const routes = [
    {
        path: '/',
        component: home
    },
    {
        path:'/encrypt',
        component: encrypt
    }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    router
})