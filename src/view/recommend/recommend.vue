<template>
  <div>

  </div>
</template>


<script>
import { getRecommendData } from "@/api/api";
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
  }
};
</script>
