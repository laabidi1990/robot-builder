
import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '../home/HomePage.vue';
import BuildRobot from '../build/BuildRobot.vue';
import PartInfo from '../parts/PartInfo.vue';
import BrowseParts from '../parts/BrowseParts.vue';
import RobotHeads from '../parts/RobotHeads.vue';
import RobotArms from '../parts/RobotArms.vue';
import RobotTorsos from '../parts/RobotTorsos.vue';
import RobotBases from '../parts/RobotBases.vue';
import SidebarStandard from '../sidebars/SidebarStandard.vue';
import SidebarBuild from '../sidebars/SidebarBuild.vue';
import ShoppingCart from '../cart/ShoppingCart.vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'Home',
        components: {
            default: HomePage,
            sidebar: SidebarStandard,
        },
    }, {
        path: '/build',
        name: 'Build',
        components: {
            default: BuildRobot,
            sidebar: SidebarBuild,
        },
    }, {
        path: '/parts/browse',
        name: 'BrowseParts',
        component: BrowseParts,
        children: [
            {
                path: 'heads',
                name: 'BrowseRobotHeads',
                component: RobotHeads,
            },
            {
                path: 'arms',
                name: 'BrowseRobotArms',
                component: RobotArms,
            },
            {
                path: 'torsos',
                name: 'BrowseRobotTorsos',
                component: RobotTorsos,
            },
            {
                path: 'bases',
                name: 'BrowseRobotBases',
                component: RobotBases,
            },
        ],
    }, {
        path: '/parts/:partType/:id',
        name: 'Parts',
        component: PartInfo,
        props: true,
        beforeEnter(to, from, next) {
            const isValidId = Number.isInteger(Number(to.params.id));
            next(isValidId);
        },
    }, {
        path: '/cart',
        name: 'Cart',
        component: ShoppingCart,
    }], 
});
