<template>
  <div ref="swiperRef" class="swiper featuredSwiper">
    <div class="swiper-wrapper">
      <div v-for="hybrid in hybrids" :key="hybrid.id" class="swiper-slide">
        <div class="hybrid-card h-100">
          <div class="hybrid-card-image" :style="{ backgroundImage: `url(${hybrid.imagenes.hero})` }">
            <span v-if="hybrid.destacado" class="hybrid-card-badge">Destacado</span>
          </div>
          <div class="hybrid-card-body">
            <h3 class="hybrid-card-title">{{ hybrid.nombre }}</h3>
            <p class="hybrid-card-desc">{{ hybrid.descripcionCorta }}</p>
            <div class="hybrid-card-meta mb-3">
              <span><i class="far fa-calendar-alt"></i> {{ hybrid.ciclo }}</span>
              <span><i class="fas fa-tachometer-alt"></i> {{ hybrid.potencialRendimiento }}</span>
            </div>
            <a :href="`/hibridos/${hybrid.slug}`" class="btn btn-outline-success w-100">Ver ficha técnica</a>
          </div>
        </div>
      </div>
    </div>
    <div class="swiper-pagination mt-4"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import Swiper from 'swiper'
import { Autoplay, Pagination } from 'swiper/modules'
import type { Hybrid } from '../../data/hybrids'

const props = defineProps<{
  hybrids: Hybrid[]
}>()

const swiperRef = ref<HTMLElement | null>(null)
let swiperInstance: Swiper | null = null

onMounted(() => {
  swiperInstance = new Swiper(swiperRef.value!, {
    modules: [Autoplay, Pagination],
    slidesPerView: 1,
    spaceBetween: 24,
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      576: { slidesPerView: 2 },
      992: { slidesPerView: 3 },
      1200: { slidesPerView: 4 },
    },
  })
})

onUnmounted(() => {
  swiperInstance?.destroy()
})
</script>
