/**
 *  修改node_modules/react-navigation目录下对应文件，解决返回到制定页面的bug
 */
function heheda() {
    if (action.type === NavigationActions.BACK) {
        let backRouteIndex = null;
        if (action.key) {

            const backRoute = state.routes.find(
                /* $FlowFixMe */
                /* 修改源码 */
                route => route.routeName === action.key||route.key===action.key
                /* (route: *) => route.key === action.key */
            );
            /*end:修改源码*/
            /* $FlowFixMe */
            console.log('backRoute =====', backRoute);
            backRouteIndex = state.routes.indexOf(backRoute);
            console.log('backRoute =====', backRouteIndex);
        }

        if (backRouteIndex == null) {
            return StateUtils.pop(state);
        }
        if (backRouteIndex >= 0) {
            return {
                ...state,
                routes: state.routes.slice(0, backRouteIndex + 1),
                index: backRouteIndex - 1 + 1,
            };
        }
    }
}
/**
链接：http://www.jianshu.com/p/b877115fff1b。*/