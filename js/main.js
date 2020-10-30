const home = {
    template: `
        <div id="home">
            <h1>OpenPGP.JS</h1>
            <p>本站工具可以帮助你轻松的 <router-link to="/encrypt">加密</router-link>，<router-link to="/decrypt">解密</router-link>，<router-link to="/sign">签名</router-link>和<router-link to="/verify">验证</router-link></p>
        </div>
    `
};

const routes = [
    {
        path: '/',
        component: home
    }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    el: '#app',
    router
})