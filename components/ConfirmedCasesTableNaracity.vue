<template>
  <ul :class="$style.container">
    <li :class="[$style.box, $style.tall, $style.tested]">
      <div :class="[$style.pillar_tested]">
        <div :class="$style.content">
          <span> {{ $t('PCR検査数') }}<br />({{ $t('累計') }}) </span>
          <span>
            <strong>{{ 検査実施人数 }}</strong>
            <span :class="$style.unit">{{ $t('人') }}</span>
          </span>
        </div>
      </div>
    </li>
    <li :class="[$style.box, $style.tall, $style.tested]">
      <div :class="[$style.pillar_tested]">
        <div :class="$style.content">
          <span> {{ $t('感染者数') }}<br />({{ $t('累計') }}) </span>
          <span>
            <strong>{{ 感染者数累計 }}</strong>
            <span :class="$style.unit">{{ $t('人') }}</span>
          </span>
        </div>
      </div>
    </li>
    <li :class="[$style.box, $style.tall, $style.parent, $style.confirmed]">
      <div :class="$style.pillar">
        <div :class="$style.content">
          <span>{{ $t('感染者数') }}<br />({{ $t('現在') }})</span>
          <span>
            <strong>{{ 現在感染者数 }}</strong>
            <span :class="$style.unit">{{ $t('人') }}</span>
          </span>
        </div>
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box, $style.hospitalized]">
          <div :class="$style.pillar">
            <div :class="$style.content">
              <!-- eslint-disable vue/no-v-html-->
              <span v-html="$t('入院中')" />
              <!-- eslint-enable vue/no-v-html-->
              <span>
                <strong>-</strong>
                <span :class="$style.unit">{{ $t('人') }}</span>
              </span>
            </div>
          </div>
        </li>
        <li :class="[$style.box, $style.minor]">
          <div :class="$style.pillar">
            <div :class="$style.content">
              <!-- eslint-disable vue/no-v-html-->
              <span v-html="$t('宿泊療養')" />
              <!-- eslint-enable vue/no-v-html-->
              <span>
                <strong>-</strong>
                <span :class="$style.unit">{{ $t('人') }}</span>
              </span>
            </div>
          </div>
        </li>
      </ul>
    </li>
    <li :class="[$style.box, $style.tall, $style.deceased]">
      <div :class="$style.pillar">
        <div :class="$style.content">
          <!-- eslint-disable vue/no-v-html-->
          <span v-html="$t('亡くな<br />られた方')" />
          <!-- eslint-enable vue/no-v-html-->
          <span>
            <strong>{{ 死亡 }}</strong>
            <span :class="$style.unit">{{ $t('人') }}</span>
          </span>
        </div>
      </div>
    </li>
    <li :class="[$style.box, $style.tall, $style.recovered]">
      <div :class="$style.pillar">
        <div :class="$style.content">
          <!-- eslint-disable vue/no-v-html-->
          <span v-html="$t('退院<br />した方')" />
          <!-- eslint-enable vue/no-v-html-->
          <span>
            <strong>{{ 退院等累計 }}</strong>
            <span :class="$style.unit">{{ $t('人') }}</span>
          </span>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

/* eslint-disable vue/prop-name-casing */
export default Vue.extend({
  props: {
    検査実施人数: {
      type: Number,
      required: true
    },
    感染者数累計: {
      type: Number,
      required: true
    },
    現在感染者数: {
      type: Number,
      required: true
    },
    入院中: {
      type: Number,
      required: true
    },
    宿泊療養: {
      type: Number,
      required: true
    },
    自宅療養: {
      type: Number,
      required: true
    },
    死亡: {
      type: Number,
      required: true
    },
    退院等累計: {
      type: Number,
      required: true
    }
  },
  methods: {
    /** 桁数に応じて位置の調整をする */
    getAdjustX(input: number) {
      const length = input.toString(10).length
      switch (length) {
        case 1: {
          return 3
        }
        case 2: {
          return 0
        }
        case 3: {
          return -3
        }
        case 4: {
          return -8
        }
        default: {
          return 0
        }
      }
    }
  }
})
</script>

<style lang="scss" module>
$default-bdw: 3px;
$default-boxh: 150px;
$default-boxdiff: 35px;

// .container > .box > (.group > .box > ...) .pillar > .content

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  color: $green-1;
  line-height: 1.35;

  * {
    box-sizing: border-box;
  }
  // override default styles
  padding-left: 0 !important;

  ul {
    padding-left: 0;
  }
}

.pillar {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 0 0 auto;
  text-align: center;
  width: 100%;
  border: $default-bdw solid $green-1;
}

.pillar_tested {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 0 0 auto;
  text-align: center;
  width: 100%;
  border: $default-bdw solid $gray-1;
}

.group {
  display: flex;
  flex: 0 0 auto;
  padding-left: 0;
  padding-top: $default-bdw;
  border-top: $default-bdw solid $green-1;
  border-left: $default-bdw solid $green-1;
}

.box {
  display: flex;

  &.parent {
    border-top: $default-bdw solid $green-1;
    border-left: $default-bdw solid $green-1;
    position: relative;
    padding-top: $default-boxdiff - $default-bdw * 2;

    &::after {
      content: '';
      display: block;
      position: absolute;
      top: -1px;
      right: 0;
      height: $default-boxdiff - $default-bdw - 2;
      border-left: $default-bdw solid $green-1;
    }

    > .pillar {
      margin-top: -($default-boxdiff - $default-bdw * 2);
      border-top: none;
      border-right: none;
      border-left: none;
    }
  }

  &.tested {
    display: flex;
    flex: 0 0 auto;
    // [6列] 1/6セル
    width: calc((100% - #{$default-bdw} * 3) / 6);
    color: $gray-1;
  }

  &.confirmed {
    margin-left: $default-bdw;
    width: 100%;

    > .pillar {
      // [3列] 1/3
      width: calc((100% + #{$default-bdw} * 2) / 3 - #{$default-bdw} * 3);
    }

    > .group {
      // [3列] 2/3
      width: calc((100% + #{$default-bdw} * 2) / 3 * 2 + #{$default-bdw});
    }
  }

  /* &.hospitalized {
    margin-left: $default-bdw;
    // [5列] 3/5
    width: calc(100% / 5 * 3 - #{$default-bdw});

    > .pillar {
      // [3列] 1/3
      width: calc((100% + #{$default-bdw} * 2) / 3 - #{$default-bdw} * 3);
    }

    > .group {
      // [3列] 2/3
      width: calc((100% + #{$default-bdw} * 2) / 3 * 2 + #{$default-bdw});
    }
  } */

  &.hospitalized,
  &.minor,
  &.severe {
    margin-left: $default-bdw;
    // [2列] 1/2
    width: calc(100% / 2 - #{$default-bdw});
  }

  &.deceased,
  &.recovered {
    margin-left: $default-bdw;
    // [2列] 1/2
    width: calc(100% / 3 - #{$default-bdw});
    color: $gray-1;
  }
}

.content {
  min-height: $default-boxh;
  padding: 10px 2px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  > span {
    display: block;

    @include font-size(16);

    &:last-child {
      margin-top: 0.1em;
    }

    &:not(:last-child) {
      word-break: break-all;
    }
  }
  span strong {
    @include font-size(18);
  }

  span.unit {
    @include font-size(16);
  }
}

@function px2vw($px, $vw: 0) {
  @if $vw > 0 {
    @return ceil($px / $vw * 100000vw) / 1000;
  } @else {
    @return $px * 1px;
  }
}

@mixin override($vw, $bdw, $fz, $boxh, $boxdiff) {
  .pillar,
  .pillar_tested {
    border-width: px2vw($bdw, $vw);
  }

  .group {
    padding-top: px2vw($bdw, $vw);
    border-top-width: px2vw($bdw, $vw);
    border-left-width: px2vw($bdw, $vw);
  }

  .content {
    > span {
      @include font-size($fz);
    }
    span strong {
      @include font-size($fz + 2);
    }

    span.unit {
      @include font-size($fz);
    }
  }

  .box {
    &.parent {
      border-top-width: px2vw($bdw, $vw);
      border-left-width: px2vw($bdw, $vw);
      padding-top: px2vw($boxdiff, $vw) - px2vw($bdw, $vw) * 2;

      &::after {
        height: px2vw($boxdiff - $bdw, $vw);
        border-left-width: px2vw($bdw, $vw);
      }

      > .pillar {
        margin-top: px2vw((-($boxdiff - $bdw * 2)), $vw);
      }
    }

    &.tested {
      width: calc((100% - #{px2vw($bdw, $vw)} * 3) / 6);
    }

    &.confirmed {
      margin-left: px2vw($bdw, $vw);
      > .pillar {
        width: calc(
          (100% + #{px2vw($bdw, $vw)} * 2) / 3 - #{px2vw($bdw, $vw)} * 3
        );
      }

      > .group {
        width: calc(
          (100% + #{px2vw($bdw, $vw)} * 2) / 3 * 2 + #{px2vw($bdw, $vw)}
        );
      }
    }

    /* &.hospitalized {
      margin-left: px2vw($bdw, $vw);
      width: calc(100% / 5 * 3 - #{px2vw($bdw, $vw)});

      > .pillar {
        width: calc(
          (100% + #{px2vw($bdw, $vw)} * 2) / 3 - #{px2vw($bdw, $vw)} * 3
        );
      }

      > .group {
        width: calc(
          (100% + #{px2vw($bdw, $vw)} * 2) / 3 * 2 + #{px2vw($bdw, $vw)}
        );
      }
    } */

    &.hospitalized,
    &.minor,
    &.severe {
      margin-left: px2vw($bdw, $vw);
      width: calc(100% / 2 - #{px2vw($bdw, $vw)});
    }

    &.deceased,
    &.recovered {
      margin-left: px2vw($bdw, $vw);
      width: calc(100% / 3 - #{px2vw($bdw, $vw)});
    }
  }
}

// variables.scss Breakpoints: huge (1440)
@include lessThan(1440) {
  @include override(1440, 3, 15, 150, 35);
}

// Vuetify Breakpoints: Large (1264)
@include lessThan(1263) {
  @include override(1263, 2, 13, 107, 24);
}

// variables.scss Breakpoints: large (1170)
@include lessThan(1170) {
  @include override(1170, 2, 13, 107, 24);
}

// Vuetify Breakpoints: Small (960)
@include lessThan(959) {
  @include override(960, 4, 14, 180, 40);
}

@include lessThan(767) {
  @include override(960, 3, 14, 180, 40);
}

// Vuetify Breakpoints: Extra Small (600)
@include lessThan(600) {
  @include override(600, 3, 14, 150, 35);
}

@include lessThan(420) {
  @include override(600, 2, 12, 150, 35);
}
</style>
