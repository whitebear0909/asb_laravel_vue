// Main layouts
import LayoutBackend from "@/layouts/variations/Backend.vue";
import LayoutSimple from "@/layouts/variations/Simple.vue";

// Frontend: Landing
const Landing = () => import("@/views/Landing.vue");
// Pages: Auth
const AuthSignIn = () => import("@/views/pages/auth/SignIn.vue");
const AuthSignUp = () => import("@/views/pages/auth/AuthSignUp.vue");

const Dashboard = () => import("@/views/pages/Dashboard.vue");
const Calendar = () => import("@/views/plugins/Calendar.vue");
const UserList = () => import("@/views/pages/users/UserList.vue");
const UserEdit = () => import("@/views/pages/users/UserEdit.vue");
export default [
    {
        path: "/",
        component: LayoutSimple,
        meta: {
            guestOnly: true,
        },
        children: [
            {
                path: "/",
                name: "Home",
                component: Landing,
            },
            {
                path: "login",
                name: "login",
                component: AuthSignIn,
            },
            {
                path: "register",
                name: "Register",
                component: AuthSignUp,
            },
        ],
    },
    {
        path: "/",
        component: LayoutBackend,
        meta: {
            authOnly: true,
        },
        children: [
            {
                path: "dashboard",
                name: "Dashboard",
                component: Dashboard,
                meta: {
                    activeOnly: true,
                },
            },
            {
                path: "calendar",
                name: "Calendar",
                component: Calendar,
                meta: {
                    activeOnly: true,
                },
            },
            {
                path: "users",
                name: "UserList",
                component: UserList,
                meta: {
                    activeOnly: true,
                },
            },
            {
                path: "users/edit/:id",
                name: "UserEdit",
                component: UserEdit,
                meta: {
                    activeOnly: true,
                },
            },
            {
                path: "users/create",
                name: "UserCreate",
                component: UserEdit,
                meta: {
                    activeOnly: true,
                },
            },
        ],
    },
];
