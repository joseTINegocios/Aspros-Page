<template>
  <form @submit.prevent="handleSubmit" class="contact-form">
    <div class="row g-2">
      <div class="col-md-6">
        <label for="name" class="form-label small mb-0">Nombre</label>
        <input type="text" id="name" v-model="form.name" class="form-control form-control-sm" required />
      </div>
      <div class="col-md-6">
        <label for="email" class="form-label small mb-0">Correo Electrónico</label>
        <input type="email" id="email" v-model="form.email" class="form-control form-control-sm" />
      </div>
      <div class="col-md-6">
        <label for="city" class="form-label small mb-0">Ciudad</label>
        <input type="text" id="city" v-model="form.city" class="form-control form-control-sm" required />
      </div>
      <div class="col-md-6">
        <label for="state" class="form-label small mb-0">Estado</label>
        <select id="state" v-model="form.state" class="form-select form-select-sm">
          <option value="">Selecciona un estado</option>
          <option v-for="s in estados" :key="s" :value="s">{{ s }}</option>
        </select>
      </div>
      <div class="col-md-6">
        <label for="phone" class="form-label small mb-0">Teléfono</label>
        <input type="tel" id="phone" v-model="form.phone" class="form-control form-control-sm" required />
      </div>
      <div class="col-md-6">
        <label for="zonaInteres" class="form-label small mb-0">Zona de interés</label>
        <select id="zonaInteres" v-model="form.zonaInteres" class="form-select form-select-sm">
          <option value="">Selecciona una zona</option>
          <option v-for="z in zonas" :key="z" :value="z">{{ z }}</option>
        </select>
      </div>
      <div class="col-12">
        <label for="message" class="form-label small mb-0">Mensaje</label>
        <textarea id="message" v-model="form.message" class="form-control form-control-sm" rows="2"></textarea>
      </div>
      <div class="col-12">
        <div class="form-check">
          <input type="checkbox" id="privacy" v-model="form.privacy" class="form-check-input" required />
          <label for="privacy" class="form-check-label small">
            He leído y estoy de acuerdo con el Aviso de Privacidad
          </label>
        </div>
      </div>
      <div class="col-12">
        <button type="submit" class="btn btn-gold w-100" :disabled="sending">
          {{ sending ? 'Enviando...' : 'Enviar mensaje' }}
        </button>
      </div>
      <div v-if="success" class="alert alert-success mb-0">Mensaje enviado con éxito. Nos pondremos en contacto contigo pronto.</div>
      <div v-if="error" class="alert alert-danger mb-0">{{ error }}</div>
    </div>
  </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const zonas = [
  'Norte', 'Pacífico', 'Occidente', 'Bajío', 'Centro', 'Sur', 'Todas',
]

const estados = [
  'Aguascalientes', 'Baja California', 'Baja California Sur', 'Campeche',
  'Chiapas', 'Chihuahua', 'Ciudad de México', 'Coahuila', 'Colima', 'Durango',
  'Estado de México', 'Guanajuato', 'Guerrero', 'Hidalgo', 'Jalisco',
  'Michoacán', 'Morelos', 'Nayarit', 'Nuevo León', 'Oaxaca', 'Puebla',
  'Querétaro', 'Quintana Roo', 'San Luis Potosí', 'Sinaloa', 'Sonora',
  'Tabasco', 'Tamaulipas', 'Tlaxcala', 'Veracruz', 'Yucatán', 'Zacatecas',
]

const form = reactive({
  name: '',
  email: '',
  city: '',
  state: '',
  phone: '',
  zonaInteres: '',
  message: '',
  privacy: false,
})

const sending = ref(false)
const success = ref(false)
const error = ref('')

async function handleSubmit() {
  sending.value = true
  error.value = ''
  success.value = false
  try {
    const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...form }),
    })
    if (res.ok) {
      success.value = true
      form.name = ''
      form.email = ''
      form.city = ''
      form.state = ''
      form.phone = ''
      form.zonaInteres = ''
      form.message = ''
      form.privacy = false
    } else {
      error.value = 'Error al enviar el mensaje. Intenta de nuevo.'
    }
  } catch {
    error.value = 'Error de conexión. Verifica tu internet e intenta de nuevo.'
  } finally {
    sending.value = false
  }
}
</script>
