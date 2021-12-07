import Home from "../components/Home.vue"
import {
  h,
} from "vue";
import {
  NIcon
} from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon,
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, {
    default: () => h(icon)
  });
}

const routes = [{
        path: "/show",
        name: "Show",
        key: "Show",
        label: "Code",
        hide: true,
        icon: renderIcon(BookIcon),
        component: () => import( /* webpackChunkName: "codeshow" */ "../views/CodeShow.vue")
    },
    {
        path: "/",
        name: "Index",
        key: "Index",
        label: "首页",
        hide: true,
        redirect: "/dashboard/initializer"
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        redirect: "/dashboard/initializer",
        component: Home,
        key: "Dashboard",
        label: "模板管理",
        children: [{
                path: "/dashboard/initializer",
                name: "Initializer",
                key: "Initializer",
                label: "所有模板",
                component: () => import( /* webpackChunkName: "initializer" */ "../views/Initializer.vue")
            },
            {
                path: "/dashboard/initializer_detail/:template",
                name: "InitializerDetail",
                key: "initializerDetail",
                label: "模板详情",
                hide: true,
                component: () => import( /* webpackChunkName: "initializer_detail" */
                    "../views/InitializerDetail.vue")
            },
        ]
    }
]
export default routes
