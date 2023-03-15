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
