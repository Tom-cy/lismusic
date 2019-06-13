  <template>
  <div class="recommend">
    <div>
      <!-- 轮播图 -->
      <div
        v-if="recommdends.length"
        class="slider-wrapper"
      >
        <!-- 轮播图 -->
        <m-slider>
          <div
            v-for='item in recommdends'
            :key='item.id'
          >
            <a :href="item.linkUrl">
              <img
                :src="item.picUrl"
                class="needsclick"
                alt=""
              >
            </a>
          </div>
        </m-slider>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecommendData } from "@/api/api";

import MSlider from "@/components/Swiper";
export default {
  name: "recommend",
  data() {
    return {
      recommdends: [],
      radioList: [],
      songList: [],
      discList: []
    };
  },
  components: {
    MSlider
  },
  created() {
    this._getRecommendData();
  },
  methods: {
    _getRecommendData() {
      getRecommendData().then(res => {
        this.recommdends = res.data.slider;
        this.radioList = res.data.radioList;
        this.songList = res.data.songList;
      });
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~styles/variable'
.recommend
  position fixed
  width 100%
  top 88px
  bottom 0
</style>
