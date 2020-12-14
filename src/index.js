import Test from './components/Test/index'
import Test2 from './components/Test2/index'
import Test3 from './components/Test3/index'
import Icon from './components/Icon/index'
import SvgAnimation from './components/SvgAnimation/index'
import BetterLoading from './components/BetterLoading/index'
import BetterFlyBox from './components/BetterFlyBox/index'
import Container from './components/Container/index'
import CountTo from './components/VueCountTo/index'
import VueEcharts from './components/VueEcharts/index'

export default function(Vue) {
    Vue.use(Test);
    Vue.use(Test2);
    Vue.use(Test3);
    Vue.use(Icon);
    Vue.use(SvgAnimation);
    Vue.use(BetterLoading);
    Vue.use(BetterFlyBox);
    Vue.use(Container);
    Vue.use(CountTo);
    Vue.use(VueEcharts);

}
