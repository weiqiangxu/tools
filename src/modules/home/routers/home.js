
const Frame = () => import('../views/Frame');
const Home = () => import('../views/Home');
const Json = () => import('../views/Json');
const Encode = () => import('../views/Encode');
const Compare = () => import('../views/Compare');
const Format = () => import('../views/Format');
const SQLFormat = () => import('../views/SQLFormat');
const md5 = () => import('../views/md5');
const Crontab = () => import('../views/crontab');


const routers = [
    {
        path: "/home",
        name: "home",
        component: Frame, // 父路由必须要有 <router-view></router-view>
        children: [
            {path: 'index', name: 'index', component: Home},
            {path: 'json', name: 'json', component: Json},
            {path: 'encode', name: 'encode', component: Encode},
            {path: 'compare', name: 'compare', component: Compare},
            {path: 'format', name: 'format', component: Format},
            {path: 'SQLFormat', name: 'SQLFormat', component: SQLFormat},
            {path: 'md5', name: 'md5', component: md5},
            {path: 'crontab', name: 'crontab', component: Crontab}
        ],
    }
];

export default routers;