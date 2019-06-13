<template>
  <div ref="warpper">
    <slot />
  </div>
</template>


<script>
import BScroll from "better-scroll";

export default {
  props: {
    /*
     * 1 滚动的时候会派发scroll事件,会截流
     * 2 滚动的时候实时派发scroll事件，不会截流
     * 3 除了实时派发scroll事件， 在swiper情况下仍然能实时派发scroll事件
     */
    // 有时候我们需要知道滚动的位置。当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。如果没有设置该值，其默认值为 0，即不派发 scroll 事件
    proType: {
      type: Number,
      default: 1
    },
    // better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true。
    click: {
      type: Boolean,
      default: true
    },
    // 当设置为 true 的时候，可以开启横向滚动。
    scrollX: {
      type: Boolean,
      default: true
    },
    // 当设置为 true 的时候,可以开启纵向滚动。
    scrollY: {
      type: Boolean,
      default: true
    },
    // 当快速在屏幕上滑动一段距离的时候，会根据滑动的距离和时间计算出动量，并生成滚动动画。设置为 true 则开启动画。
    momentum: {
      type: Boolean,
      default: true
    },
    // 当滚动超过边缘的时候会有一小段回弹动画。设置为 true 则开启动画。
    bounce: {
      type: Boolean,
      default: true
    },
    // 设置回弹动画的动画时长。
    bounceTime: {
      type: Number,
      default: 700
    },
    /**
     * 是否派发滚动事件
     */
    listenScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 列表的数据
     */
    data: {
      type: Array,
      default: null
    },
    /**
     * 是否派发滚动到底部的事件，用于上拉加载
     */
    pullup: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发顶部下拉的事件，用于下拉刷新
     */
    pulldown: {
      type: Boolean,
      default: false
    },
    /**
     * 是否派发列表滚动开始的事件
     */
    beforeScroll: {
      type: Boolean,
      default: false
    },
    /**
     * 当数据更新后，刷新scroll的延时。
     */
    refreshDelay: {
      type: Number,
      default: 20
    }
  },
  created() {
    setTimeout(() => {
      this._init();
    }, 20);
  },
  methods: {
    _init() {
      if (!this.$refs.wrapper) {
        return;
      }
      // better-scroll 初始化
      this.scroll = new BScroll(this.$refs.wrapper, {
        proType: this.proType,
        click: this.click,
        scrollX: this.scrollX,
        bounceTime: this.bounceTime,
        scrollY: this.scrollY,
        bounce: this.bounce
      });

      // 是否派发滚动事件
      if (this.listenScroll) {
        this.scroll.on("scroll", pos => {
          this.$emit("scroll", pos);
        });
      }
      // 是否派发滚动到底部的事件，用于上拉加载
      if (this.pullup) {
        this.scroll.on("scrollEnd", () => {
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            this.$emit("scrollToEnd");
          }
        });
      }
      // 是否派发顶部下拉事件，用于下拉刷新
      if (this.pulldown) {
        this.scroll.on("touchend", pos => {
          // 下拉动作
          if (pos.y > 50) {
            this.$emit("pulldown");
          }
        });
      }
      // 是否派发列表滚动开始的事件
      if (this.beforeScroll) {
        this.scroll.on("beforeScrollStart", () => {
          this.$emit("beforeScroll");
        });
      }
    },
    // 组件自带的方法
    refresh() {
      // 代理better-scroll的refresh方法
      this.scroll && this.scroll.refresh();
    },
    disable() {
      // 代理better-scroll的disable方法
      this.scroll && this.scroll.disable();
    },
    enable() {
      // 代理better-scroll的enable方法
      this.scroll && this.scroll.enable();
    },
    scrollTo() {
      // 代理better-scroll的scrollTo方法
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      // 代理better-scroll的scrollToElement方法
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    }
  }
};
</script>
