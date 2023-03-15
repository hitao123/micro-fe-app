// import { initGlobalState, registerMicroApps, runAfterFirstMounted, start } from 'qiankun';
// /**
//  * 主应用 **可以使用任意技术栈**
//  * 以下分别是 React 和 Vue 的示例，可切换尝试
//  */
// import render from './render';

// /**
//  * Step1 初始化应用（可选）
//  */
// render({ loading: true });

// const loader = (loading) => render({ loading });

// /**
//  * Step2 注册子应用
//  */

// registerMicroApps(
//     [
//         {
//             name: 'react-app',
//             entry: '//localhost:3001',
//             container: '#sub-app',
//             loader,
//             activeRule: '/react-app',
//         },
//         {
//             name: 'vue-app',
//             entry: '//localhost:8081',
//             container: '#sub-app',
//             loader,
//             activeRule: '/vue-app',
//         },
//     ],
//     {
//         beforeLoad: [
//             (app) => {
//                 console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
//             },
//         ],
//         beforeMount: [
//             (app) => {
//                 console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
//             },
//         ],
//         afterUnmount: [
//             (app) => {
//                 console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
//             },
//         ],
//     },
// );

// const { onGlobalStateChange, setGlobalState } = initGlobalState({
//     user: 'qiankun',
// });

// onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

// setGlobalState({
//     ignore: 'master',
//     user: {
//         name: 'master',
//     },
// });

// /**
//  * Step3 设置默认进入的子应用
//  */
// // setDefaultMountApp('/vue-app');

// /**
//  * Step4 启动应用
//  */
// start();

// runAfterFirstMounted(() => {
//     console.log('[MainApp] first app mounted');
// });

import { useEffect } from 'react'
import { initGlobalState, registerMicroApps, start } from 'qiankun';

const SubApp = () => {
    useEffect(() => {
        registerMicroApps(
            [
                {
                    name: 'react-app',
                    entry: '//localhost:3001',
                    container: '#sub-app',
                    activeRule: (location) => {
                        return location.href.includes('/react-app')
                    },
                },
                {
                    name: 'vue-app',
                    entry: '//localhost:8082',
                    container: '#sub-app',
                    activeRule: (location) => {
                        return location.href.includes('/vue-app')
                    },
                },
            ],
            {
                beforeLoad: [
                    (app) => {
                        console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
                    },
                ],
                beforeMount: [
                    (app) => {
                        console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
                    },
                ],
                afterUnmount: [
                    (app) => {
                        console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
                    },
                ],
            },
        );
        const { onGlobalStateChange, setGlobalState } = initGlobalState({
            user: 'qiankun',
        });

        onGlobalStateChange((value, prev) => console.log('[onGlobalStateChange - master]:', value, prev));

        setGlobalState({
            ignore: 'master',
            user: {
                name: 'master',
            },
        });

        start()

    }, [])

    return <div id="sub-app">
        
    </div>
}



export default SubApp
