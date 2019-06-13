<template>
  <div>
    <m-swiper></m-swiper>

  </div>
</template>


<script>
import { getRecommendData } from "@/api/api";
import MSwiper from "@/components/Swiper/swiper";
export default {
  data() {
    return {};
  },
  created() {
    this._getRecommendData();
  },
  methods: {
    _getRecommendData() {
      getRecommendData().then(res => {
        console.log(res);
      });
    }
  },
  components: { MSwiper }
};
</script>
