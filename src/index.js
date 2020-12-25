import Icon from './components/Icon/index'
import SvgAnimation from './components/SvgAnimation/index'
import BetterLoading from './components/BetterLoading/index'
import BetterFlyBox from './components/BetterFlyBox/index'
import Container from './components/Container/index'
import CountTo from './components/VueCountTo/index'
import VueEcharts from './components/VueEcharts/index'
import BaseScrollList from './components/BaseScrollList/index'

export default function(Vue) {
    Vue.use(Icon);
    Vue.use(SvgAnimation);
    Vue.use(BetterLoading);
    Vue.use(BetterFlyBox);
    Vue.use(Container);
    Vue.use(CountTo);
    Vue.use(VueEcharts);
    Vue.use(BaseScrollList);

}
