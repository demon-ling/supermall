import BackTop from "components/content/backTop/BackTop";

export const backTopMixin = {
    components: {
        BackTop,
    },
    data() {
        return {
            isShowBackTop: false,
        }
    },
    methods: {
        backClick() {
            this.$refs.scroll.scrollTo(0, 0, 500);
        },
        // 是否显示回到顶部
        listenShowBackTop(position) {
            this.isShowBackTop = -position.y > 1000;
        }
    },
}