<template>
  <!-- 项目介绍卡片 -->
  <div class="about">
    <img class="bg" src="~@img/training/project/bt.png" />
    <div class="info">
      <div class="title">
        <span class="to">电力机房搬迁项目电力机房搬迁项目电力机房搬迁项目电力机房</span>
        <div class="status">进行中</div>
        <div class="status status_success">
          <img src="~@img/training/icon/play.png" alt="" class="icon mr2" />
          进行中
        </div>
      </div>
      <div class="city">
        <img src="~@img/training/icon/adress.png" alt="" class="icon" />
        <!-- TODO: title -->
        <span class="to">厦门市 福州市 泉州市 三明市 龙岩市 宁德市 厦门市 福州市 泉州市
          三明市 泉州市 三明市
        </span>
      </div>
      <div class="project">
        <div class="project_item">
          <img src="~@img/training/icon/tag.png" alt="" class="icon" />
          <span>项目类型：数据通信</span>
        </div>
        <div class="project_item ml40">
          <img src="~@img/training/icon/clock.png" alt="" class="icon" />
          <span>项目周期：2022-08-01 ~ 2022-08-31</span>
        </div>
      </div>
      <!-- 注意事项 -->
      <div class="notice">
        注意事项: <br />
        申请需提供身份证照片验证身份。申请需提供身份证照片验证身份。申请需提供身份证照片验证身份。申请需提供身份证照片验证身份。申请需提供身份证照片验证身份。申请需提供身份证照片验证身份。申请需提供身份证照片验证身份。注意事项：申请需提供身份证照片验证身份。申请需提供身份证照片验证身份。申请需提供身份证照片验证身份。申请需提供身份证照片验证身份。申请需提供身份证照片验证身份。申请需提供身份证照片。
      </div>
    </div>
    <div class="r" v-show="false">
      <div class="btn">立即申请</div>
      <div class="time">
        <img src="~@img/training/icon/clock.png" alt="" class="icon" />
        申请截止：2022-7-20
      </div>
    </div>
    <div class="r-ing" v-if="true">
      <!-- 进度 -->
      <div class="progress">
        <i-circle :percent="80" size="72" :stroke-color="['#FFBA4E', '#FB771A']">
          <span class="demo-Circle-inner" style="font-size: 24px">80%</span>
        </i-circle>
      </div>
      <!-- 距交付 -->
      <div class="push">距交付: 15天</div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {

  },
  components: {

  }
}
</script>
<style lang='stylus' scoped>
.about {
  position: relative;
  width: 1064px;
  min-height: 216px;
  background: #FCFDFE;
  opacity: 1;
  border: 1px solid #F0F2F7;
  padding-bottom: 18px;
  box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.1);

  .bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 48px;
    height: 48px;
  }

  .info {
    margin-top: 22px;
    display: flex;
    flex-direction: column;
    padding-left: 16px;
    font-size: 14px;
    font-weight: 500;
    color: #6A7487;
    line-height: 22px;

    .title {
      display: flex;
      align-items: center;

      span {
        max-width: 800px;
        font-size: 20px;
        font-weight: 500;
        color: #383838;
        line-height: 24px;
      }

      .status {
        display: flex;
        align-items: center;
        margin-left: 8px;
        padding: 6px 13px;
        // height: 24px;
        background: #EFEEEE;
        border-radius: 4px 4px 4px 4px;
        opacity: 1;
        font-size: 14px;
        font-weight: 500;
        color: #6A7487;
        line-height: 15px;
      }

      .status_success {
        padding: 3px 6px;
        background: #39AFFD;
        color: #FFFFFF;
      }
    }

    .city {
      display: flex;
      align-items: center;
      margin-top: 14px;
      height: 22px;

      span {
        width: 492px;
      }
    }

    .project {
      display: flex;
      margin-top: 14px;

      .project_item {
        display: flex;
        align-items: center;
      }
    }

    .notice {
      margin-top: 14px;
    }
  }

  .r {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    top: 22px;
    right: 26px;

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px 18px;
      height: 32px;
      background: #FE8836;
      border-radius: 4px 4px 4px 4px;
      font-size: 14px;
      font-weight: bold;
      color: #FFFFFF;
      // line-height: 20px;
      cursor: pointer;
    }

    .btn-success {
      background: #20C092;
      cursor: default;
    }

    .btn-error {
      background: #F56C6C;
    }

    .btn-disabled {
      color: #6A7487;
      background: #E7E7E7;
    }

    .time {
      display: flex;
      align-items: center;
      margin-top: 8px;
      font-size: 14px;
      font-weight: 500;
      color: #FE8836;
      line-height: 22px;
    }
  }

  // 进度条
  .r-ing {
    position: absolute;
    top: 25px;
    right: 33px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .progress {
      width: 72px;
      height: 72px;
    }

    .push {
      margin-top: 11px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      font-size: 14px;
      font-weight: 500;
      color: #86909C;
      line-height: 22px;
    }
  }
}

.icon {
  width: 18px;
  height: 18px;
  margin-right: 4px;
}
</style>
