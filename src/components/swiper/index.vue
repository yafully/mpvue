/**
 * 
 * @authors YafullyZhao (yafully@gmail.com)
 * @date    2019-03-18 12:09:48
 * @Wx原生swiper封装
 */
<template>
	<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :style="{height:height + 'px'}">
        <block v-for="(item, index) in images" :index="index" :key="item.id">
            <swiper-item>
                <a :href="item.link" v-if="item.link !==''" class="swiper-link"></a>
                <image :src="item.url" class="slide-image" mode="widthFix"/>
            </swiper-item>
        </block>
    </swiper>
</template>

<script>
export default {
	name: 'Sliders',
	props: {
	    images: {
			type: Array
	    },
	    indicatorDots: {
    		type: Boolean,
      		default: true
	    },
	    autoplay: {
    		type: Boolean,
      		default: true
	    },
	    interval: {
	    	type: Number,
      		default: 3000
	    },
	    duration: {
	    	type: Number,
      		default: 500
	    },
	    height: {
	    	type: String
	    }
	},
	data() {
	    return {
	    }
	},
	mounted () {
		
	}
}
</script>

<style lang="less">
  .swiper{
    .slide-image{width:750rpx;}
    .swiper-link{position: absolute;z-index:1;width:100%;height: 100%;top:0;left:0;}
    .wx-swiper-dots.wx-swiper-dots-horizontal{
	     margin-bottom: 2rpx;
	}
	.wx-swiper-dot{
	    width:20rpx;
	    display: inline-flex;
	    height: 5rpx;
	    margin-left: 10rpx;
	    justify-content:space-between;
	}
	.wx-swiper-dot::before{
	    content: '';
	    flex-grow: 1; 
	    background: rgba(255,255,255,0.8);
	    border-radius: 8rpx
	}
	.wx-swiper-dot-active::before{
	    background:rgba(0,0,0,0.8);   
	}
  }
</style>
