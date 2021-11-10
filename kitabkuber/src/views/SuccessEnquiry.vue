<template>
  <div class="bg-gray-50">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span class="block">Your enquiry has been submitted succesfully.</span>
        <span class="block text-green-600">We are currently processing your request. We will contact you shortly.</span>
      </h2>

    </div>
      <div class="bg-white">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Continue browsing our catalog</h2>

      <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        <div v-for="product in latestProducts" :key="product.id" class="group relative">
          <div class="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
            <img :src="product.get_thumbnail" class="w-full h-full object-center object-cover lg:w-full lg:h-full" />
          </div>
          <div class="mt-4 flex justify-between">
            <div>
             <strong> <h2 class="text-m text-gray-900">
                <router-link v-bind:to="product.get_absolute_url">
                  <span aria-hidden="true" class="absolute inset-0" />
                  {{ product.name }}
                </router-link>
              </h2></strong>
              
              <p class="mt-1 text-sm  font-medium text-black-500">Monthly Rent: Rs.{{ product.rent }}</p>
              <p class="text-sm font-medium text-gray-900">Deposit: Rs.{{ product.deposit }}</p>

            </div>
             <p class="text-sm font-medium text-gray-900">MRP: Rs.{{ product.mrp }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Success',
    data() {
        return {
            latestProducts: []
        }
    },
    mounted() {
        this.getLatestProducts()

        document.title = 'Success Enquiry | KitabKuber'
    },
    methods: {
        async getLatestProducts() {
            await axios
            .get('/api/v1/latest-books/')
            .then(response => {
                this.latestProducts = response.data
            })
            .catch(error => {
                console.log(error)
            })
        }
    }
}
</script>
