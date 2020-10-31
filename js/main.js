const home = {
    template: `
           <div id="home" class="container">
            <router-link to="/encrypt"><card data-image="https://cdn.wallpaperhub.app/cloudcache/b/0/e/3/8/9/b0e389143d346e9a35b20141f714d8f03de7c788.jpg">
                <h1 slot="header">加密</h1>
                <p slot="content">提供对方的公钥和要加密的信息。</p>
            </card></router-link>
            <card data-image="https://cdn.wallpaperhub.app/cloudcache/5/f/a/f/e/c/5fafec1374353c8c15ddf4c185efb7968e56dfa6.jpg">
                <h1 slot="header">解密</h1>
                <p slot="content">提供您的私钥和加密后信息。</p>
            </card>
            <card data-image="https://cdn.wallpaperhub.app/cloudcache/b/5/5/1/c/6/b551c68f2b9bc6084675b8a3c031ab04aedeb272.jpg">
                <h1 slot="header">签名</h1>
                <p slot="content">提供您的私钥和要签名内容。</p>
            </card>
            <card data-image="https://cdn.wallpaperhub.app/cloudcache/4/3/2/8/6/c/43286c59ca230daed57457fd247367af729dea7d.jpg">
                <h1 slot="header">验证</h1>
                <p slot="content">提供对方的公钥和签名后消息。</p>
            </card>
        </div>

    `
};

const encrypt = {
    template: `
        <div id="encrypt">
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
                <textarea v-model="msg" class="form-control" id="validationTextarea" placeholder="Message" style="height: 10cm;" required></textarea>
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
            key: null,
            msg: ''
        }
    },
    methods: {
        async encrypt() {
            try {
                const begin = '-----BEGIN PGP PUBLIC KEY BLOCK-----';
                const end = '-----END PGP PUBLIC KEY BLOCK-----';
                const isKey = this.key.includes(begin) && this.key.includes(end)

                if (isKey) {
                    try {
                        const { data: encrypted } = await openpgp.encrypt({
                            message: openpgp.message.fromText(this.msg),
                            publicKeys: (await openpgp.key.readArmored(this.key)).keys
                        });

                        console.log(encrypted);
                    } catch (e) {
                        console.error(e);
                    }
                } else {
                    throw new Error('Not a PGP key')
                }
            } catch (e) {
                console.error(e);
            }
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