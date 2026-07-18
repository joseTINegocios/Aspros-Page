<template>
  <div class="hero-slider-wrapper position-relative">
    <div ref="swiperRef" class="swiper heroSwiper">
      <div class="swiper-wrapper">
        <div v-for="(slide, i) in slides" :key="i" class="swiper-slide">
          <div class="hero-slide">
            <div class="hero-bg" :style="{ backgroundImage: `url(${slide.imagen})` }"></div>
            <div class="hero-overlay" :style="{ background: `rgba(0,0,0,${slide.colorTexto === '#ffffff' ? 0.45 : 0.2})` }"></div>
            <div class="container hero-content" :style="{ color: slide.colorTexto }">
              <img v-if="slide.logo" :src="slide.logo" :alt="'Logo'" class="hero-logo img-fluid" />
              <h2 v-if="slide.titulo" class="hero-title" v-html="slide.titulo.replace(/\n/g, '<br>')"></h2>
              <ul class="hero-bullets">
                <li v-for="(bullet, j) in slide.bullets" :key="j">
                  <span :style="{ color: slide.colorHighlight }">•</span>
                  {{ bullet }}
                </li>
              </ul>
              <a :href="slide.link" class="btn btn-gold btn-lg">{{ slide.linkText }}</a>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Swiper from 'swiper'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'

interface HeroSlide {
  imagen: string
  logo?: string
  titulo?: string
  colorTexto: string
  colorHighlight: string
  bullets: string[]
  link: string
  linkText: string
}

const props = defineProps<{
  slides: HeroSlide[]
}>()

const swiperRef = ref<HTMLElement | null>(null)
let swiperInstance: Swiper | null = null

onMounted(() => {
  swiperInstance = new Swiper(swiperRef.value!, {
    modules: [Autoplay, Pagination, Navigation, EffectFade],
    loop: true,
    speed: 800,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  })
})

onUnmounted(() => {
  swiperInstance?.destroy()
})
</script>
