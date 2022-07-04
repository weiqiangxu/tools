<template>
    <div class="tdesign-demo-item--layout">
        <t-layout  style="height: 100vh">
            <t-aside>
                <t-menu theme="light" :value="activeMenu" style="margin-right: 50px" height="550px" :onChange="changeHandler">
<!--                    <img slot="logo" width="136" class="t-menu__logo&#45;&#45;center" src="https://www.tencent.com/img/index/menu_logo_hover.png" alt="logo">-->
                    <img slot="logo" width="136" class="t-menu__logo--center" :src="require('@/svg/logo.png')" alt="logo">
                    <t-menu-item v-for="(menu, key) in menuOps" :key="key" :value="key">
                        <t-icon slot="icon" :name="key == '/home/index' ? 'home' : 'app'"/>{{menu}}
                    </t-menu-item>
                </t-menu>
            </t-aside>
            <t-layout>
                <t-content>
                    <transition name="fade-transform" mode="out-in">
                        <keep-alive>
                            <router-view></router-view>
                        </keep-alive>
                    </transition>
                </t-content>
                
            </t-layout>
        </t-layout>
    </div>
</template>

<script>
export default {
    components: {
    },
    data() {
        return {
            containerH: '100vh',
            user: {},
            staff_header: '',
            menuOps: {
                '/home/index': '首页',
                '/home/encode': 'urlencode编码',
                '/home/json': 'JSON在线解析',
                '/home/md5':'md5加密',
                // '/home/compare': '代码比对',
                '/home/format': '代码格式化',
                '/home/SQLFormat': 'SQL格式化',
                '/home/crontab': 'Crontab在线',
            },
            activeMenu: '/home/encode',
        };
    },
    watch: {
        $route(newRoute, from) {
            console.log("$route change", newRoute)
            if (this.menuOps[newRoute.path]) {
                this.activeMenu = newRoute.path;
            }
        }
    },
    mounted() {
        let currPath = this.$route.path || '';
        if (this.menuOps[currPath]) {
            this.activeMenu = currPath;
        }

        // 等待checklogin返回用户数据后，再加载用户信息
        setTimeout(() => {
            if (window._user && window._user.name) {
                this.user = window._user;
                this.staff_header = "http://dayu.oa.com/avatars/" + this.user.name + "/profile.jpg";
            }
        }, 0)
    },
    methods: {
        toHome() {
            this.activeMenu = '/home/index';
            console.log(this.activeMenu);
            if (this.$route.path == '/home/index') {
                return;
            }
            this.$router.push({
                path:'/home/index',
            });
        },
        changeHandler(path) {
            this.activeMenu = path;
            // let path = '/' + active.split('_')[0] + '/' + active.split('_')[1];
            if (path[0] == '/') {
                path = path.substr(1);
            }
            path = '/' + path;
            if (this.$route.path == path) {
                return;
            }
            this.$router.push({
                path: path,
            });
        },
    },
}
</script>