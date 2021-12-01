import Vue from 'vue'
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Row from './row.vue'
import Col from './col.vue'
import Layout from './layout.vue'
import Header from './header.vue'
import Sider from './sider.vue'
import Content from './content.vue'
import Footer from './footer.vue'
import Toast from './toast.vue'
import Collapse from './collapse.vue'
import CollapseItem from './collapse-item.vue'
import Cascader from './cascader.vue'
import Popover from './popover.vue'
import Tabs from './tabs.vue'
import TabsHead from './tabs-head.vue'
import TabsBody from './tabs-body.vue'
import TabsItem from './tabs-item.vue'
import TabsPane from './tabs-pane.vue'

import plugin from './plugin'

Vue.component('l-button', Button)
Vue.component('l-button-group', ButtonGroup)
Vue.component('l-cascader', Cascader)
Vue.component('l-col', Col)
Vue.component('l-collapse', Collapse)
Vue.component('l-collapse-item', CollapseItem)
Vue.component('l-content', Content)
Vue.component('l-footer', Footer)
Vue.component('l-header', Header)
Vue.component('l-icon', Icon)
Vue.component('l-input', Input)
Vue.component('l-layout', Layout)
Vue.component('l-popover', Popover)
Vue.component('l-row', Row)
Vue.component('l-sider', Sider)
Vue.component('l-tabs', Tabs)
Vue.component('l-tabs-body', TabsBody)
Vue.component('l-tabs-head', TabsHead)
Vue.component('l-tabs-item', TabsItem)
Vue.component('l-tabs-pane', TabsPane)
Vue.component('l-toast', Toast)
Vue.use(plugin)

import createElement from 'vue'

const h = createElement


new Vue({
    el: '#app',
    data: {
        source: [{
            name: '浙江',
            children: [
                {
                    name: '杭州',
                    children: [
                        { name: '上城' },
                        { name: '下城' },
                        { name: '江干' },
                    ]
                },
                {
                    name: '嘉兴',
                    children: [
                        { name: '南湖' },
                        { name: '秀洲' },
                        { name: '嘉善' },
                    ]
                },
            ]
        }, {
            name: '福建',
            children: [
                {
                    name: '福州',
                    children: [
                        { name: '鼓楼' },
                        { name: '台江' },
                        { name: '仓山' },
                    ]
                },
            ]
        }, {
            name: '安徽',
            children: [{
                name: '合肥',
                children: [{
                    name: '瑶海'
                }, {
                    name: '庐阳'
                }]
            }]
        }]
    },
    created() {
    },
    methods: {
    }
})