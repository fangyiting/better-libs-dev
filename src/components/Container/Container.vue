<template>
  <div id="better-container" :ref="refName">
    <template v-if="ready">
      <slot></slot>
    </template>

  </div>
</template>

<script>
import { ref,  getCurrentInstance, onMounted, onUnmounted, nextTick } from 'vue'
import { debounce } from "../../utils";

export default {
    name: "BetterContainer",
    props: {
        options: Object
    },
    setup(ctx) {
        const refName = 'betterContainer';
        const width = ref(0);
        const height = ref(0);
        const originalWidth = ref(0);
        const originalHeight = ref(0);
        const ready = ref(false);
        let content, dom, observer;
        const initSize = () => {
            return new Promise((resolve) => {
                nextTick(() => {
                    dom = content.$refs[refName];
                    //获取大屏真实尺寸
                    if(ctx.options && ctx.options.width && ctx.options.height) {
                        width.value = ctx.options.width;
                        height.value = ctx.options.height;
                    } else {
                        width.value = dom.clientWidth;
                        height.value = dom.clientHeight;
                    }
                    //获取画布宽高
                    if(!originalWidth.value || !originalHeight.value) {
                        originalWidth.value = window.screen.width;
                        originalHeight.value = window.screen.height;
                    }
                    // console.log(width.value, height.value, originalWidth.value, originalHeight.value);
                    resolve()
                });
            });

        };
        const updateSize = () => {
            if(width.value && height.value) {
                dom.style.width = `${width.value}px`;
                dom.style.height = `${height.value}px`
            } else {
                dom.style.width = `${originalWidth.value}px`;
                dom.style.height = `${originalHeight.value}px`
            }
        };
        const updateScale = () => {
            // 获取真实视口尺寸
            const currentWidth = document.body.clientWidth;
            const currentHeight = document.body.clientHeight;
            // 获取大屏最终宽高
            const realWidth = width.value || originalWidth.value;
            const realHeight = height.value || originalHeight.value;
            console.log(currentHeight, currentWidth);
            const widthScale = currentWidth / realWidth;
            const heightScale = currentHeight / realHeight;
            dom && ( dom.style.transform = `scale(${widthScale}, ${heightScale})`)
        };
        const initMutationObserver = () => {
            const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
            observer = new MutationObserver(onResize);
            observer.observe(dom, {
                attributes: true,
                attributeFilter: ['style'],
                attributeOldValue: true
            })
        };
        const removeMutationObserver = () => {
            if(observer) {
                observer.disconnect();
                observer.takeRecords();
                observer = null
            }
        };
        const onResize =async () => {
            await initSize();
            updateScale();
        };
        onMounted(async () => {
            ready.value = false;
            content = getCurrentInstance().ctx;
            await initSize();
            updateSize();
            updateScale();
            window.addEventListener('resize', debounce(100, onResize))
            initMutationObserver();
            ready.value = true;
        });
        onUnmounted(() => {
            window.removeEventListener('resize', onResize);
            removeMutationObserver()
        });
        console.log(require('vue'));
        return {
            refName,
            ready
        }
    }
}
</script>

<style lang="scss">
  #better-container {
    position: fixed;
    top: 0;
    left: 0;
    overflow: hidden;
    transform-origin: left top;
    z-index: 9999;
  }
</style>
