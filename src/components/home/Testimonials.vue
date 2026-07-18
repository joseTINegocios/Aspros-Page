<template>
  <div ref="swiperRef" class="swiper testimonialSwiper">
    <div class="swiper-wrapper">
      <div v-for="t in testimonials" :key="t.id" class="swiper-slide">
        <div class="testimonial-card">
          <img :src="t.imagen" :alt="t.nombre" />
        </div>
      </div>
    </div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Swiper from 'swiper'
import { Autoplay, Navigation } from 'swiper/modules'

interface Testimonial {
  id: number
  nombre: string
  imagen: string
  texto: string
  hybrid?: string
}

const props = defineProps<{
  testimonials: Testimonial[]
}>()

const swiperRef = ref<HTMLElement | null>(null)
let swiperInstance: Swiper | null = null

onMounted(() => {
  swiperInstance = new Swiper(swiperRef.value!, {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      992: { slidesPerView: 4 },
      1200: { slidesPerView: 5 },
    },
  })
})

onUnmounted(() => {
  swiperInstance?.destroy()
})
</script>
