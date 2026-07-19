<template>
  <div class="modal fade" id="hybridQuickViewModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
      <div class="modal-content border-0" v-if="hybrid">
        <div class="modal-header border-0 justify-content-center position-relative" style="background: #555;">
          <img v-if="hybrid.logoUrl" :src="hybrid.logoUrl" :alt="hybrid.nombre" style="height: 2.5rem; width: auto; object-fit: contain;" @error="hybrid.logoUrl = ''" />
          <h5 v-if="!hybrid.logoUrl" class="modal-title fw-bold mb-0 text-white text-center">{{ hybrid.nombre }}</h5>
          <button type="button" class="btn-close btn-close-white position-absolute end-0 me-3" data-bs-dismiss="modal" aria-label="Cerrar" style="top:50%;transform:translateY(-50%);"></button>
        </div>
        <div class="modal-body">
          <div class="row g-4">
            <div class="col-3">
              <div class="d-flex flex-column gap-2">
                <div class="card border-0 bg-light">
                  <img :src="hybrid.imagenes.planta || baseUrl + 'images/fichas/samurai/planta.jpg'" :alt="hybrid.nombre + ' planta'" class="card-img-top" style="object-fit: cover; height: 90px;" />
                  <div class="card-body text-center p-2">
                    <small class="text-muted fw-semibold">PLANTA</small>
                  </div>
                </div>
                <div class="card border-0 bg-light">
                  <img :src="hybrid.imagenes.mazorca || baseUrl + 'images/fichas/samurai/mazorca.jpg'" :alt="hybrid.nombre + ' mazorca'" class="card-img-top" style="object-fit: cover; height: 90px;" />
                  <div class="card-body text-center p-2">
                    <small class="text-muted fw-semibold">MAZORCA</small>
                  </div>
                </div>
                <div class="card border-0 bg-light">
                  <img :src="hybrid.imagenes.grano || baseUrl + 'images/fichas/samurai/grano.jpg'" :alt="hybrid.nombre + ' grano'" class="card-img-top" style="object-fit: cover; height: 90px;" />
                  <div class="card-body text-center p-2">
                    <small class="text-muted fw-semibold">GRANO</small>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-9">
              <div class="row g-3">
                <div class="col-7">
                  <div class="card border-0 h-100 d-flex align-items-center justify-content-center">
                    <img :src="hybrid.imagenes.general || baseUrl + 'images/fichas/samurai/general.png'" :alt="hybrid.nombre" style="max-height: 280px; max-width: 100%; object-fit: contain;" />
                  </div>
                </div>
                <div class="col-4">
                  <div class="d-flex flex-column gap-2 h-100">
                    <div class="bg-white shadow-sm rounded p-2" style="flex: 1;">
                      <span class="badge bg-gold text-dark fw-bold me-2">1</span>
                      <small><strong>Excelente sanidad de planta</strong> — Tolerancia a Fusarium y al acame.</small>
                    </div>
                    <div class="bg-white shadow-sm rounded p-2" style="flex: 1;">
                      <span class="badge bg-gold text-dark fw-bold me-2">2</span>
                      <small><strong>Alta calidad de grano</strong> — Excelente rendimiento y comercialización.</small>
                    </div>
                    <div class="bg-white shadow-sm rounded p-2" style="flex: 1;">
                      <span class="badge bg-gold text-dark fw-bold me-2">3</span>
                      <small><strong>Doble propósito</strong> — Grano y forraje.</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer border-0 justify-content-center">
          <a :href="baseUrl + 'hibridos/' + hybrid.slug" class="btn btn-gold px-4">
            <i class="fas fa-file-alt me-2"></i>Ver ficha técnica
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const raw = import.meta.env.BASE_URL || '/'
const baseUrl = raw.endsWith('/') ? raw : raw + '/'

interface Hybrid {
  id: string
  nombre: string
  slug: string
  ciclo: string
  diasCosecha: number
  potencialRendimiento: string
  tecnologia: string
  descripcionLarga: string
  logoUrl?: string
  imagenes: {
    planta: string
    mazorca: string
    grano: string
    general: string
  }
}

const hybrid = ref<Hybrid | null>(null)

onMounted(() => {
  const modal = document.getElementById('hybridQuickViewModal')
  if (modal) {
    modal.addEventListener('show.bs.modal', (e: Event) => {
      const trigger = (e as any).relatedTarget as HTMLElement
      const data = trigger?.dataset
      if (data) {
        hybrid.value = {
          id: data.id || '',
          nombre: data.nombre || '',
          slug: data.slug || '',
          ciclo: data.ciclo || '',
          diasCosecha: parseInt(data.dias) || 0,
          potencialRendimiento: data.rendimiento || '',
          tecnologia: data.tecnologia || '',
          descripcionLarga: data.descripcion || '',
          logoUrl: data.logo || '',
          imagenes: {
            planta: data.planta || '',
            mazorca: data.mazorca || '',
            grano: data.grano || '',
            general: data.general || '',
          },
        }
      }
    })
  }
})
</script>