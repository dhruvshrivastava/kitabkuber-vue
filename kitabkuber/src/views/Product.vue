<!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    theme: {
      extend: {
        gridTemplateRows: {
          '[auto,auto,1fr]': 'auto auto 1fr',
        },
      },
    },
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-white">
    <div class="pt-6">
      <nav aria-label="Breadcrumb">
        <ol role="list" class="max-w-2xl mx-auto px-4 flex items-center space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
          <li v-for="category in product.category" :key="category.id">
            <div class="flex items-center">
              <a :href="category.get_absolute_url" class="mr-2 text-sm font-medium text-gray-900">
                {{ category.name }}
              </a>
              <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-4 h-5 text-gray-300">
                <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
              </svg>
            </div>
          </li>
          <li class="text-sm">
            <a :href="product.get_absolute_url" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">
              {{ product.name }}
            </a>
          </li>
        </ol>
      </nav>

      <!-- Image gallery -->
      <div class="mt-6 max-w-2xl mx-auto sm:px-6 lg:max-w-2xl lg:px-8 lg:grid lg:grid-cols-1 lg:gap-x-8">
        <div class="hidden aspect-w-3 aspect-h-4 rounded-lg overflow-hidden lg:block">
          <img :src="product.get_image"  class="w-full h-50 object-center object-cover" />
        </div>
      </div>

      <!-- Product info -->
      <div class="max-w-2xl mx-auto pt-10 pb-16 px-4 sm:px-6 lg:max-w-7xl lg:pt-16 lg:pb-24 lg:px-8 lg:grid lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-7">
        <div class="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <h1 class="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            {{ product.name }}
          </h1>
        </div>

        <!-- Options -->
        <div class="mt-0 lg:mt-0 lg:row-span-3">
          <h2 class="sr-only">Book Information</h2>
          <p class="text-2xl text-gray-900"><strong>MRP:</strong> Rs.{{ product.mrp }}</p>
          <p class="text-2xl text-gray-900"><strong>Monthly Rent:</strong> Rs.{{ product.rent }}</p>
          <p class="text-2xl text-gray-900"><strong>Deposit:</strong> Rs.{{ product.deposit }}</p>


          <form class="mt-10">
            <button type="submit" class="mt-10 w-full bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Rent</button>
            <button type="submit" class="mt-10 w-full bg-yellow-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Buy</button>

          </form>
        </div>

        <div class="py-10 lg:pt-6 lg:pb-16 lg:col-start-1 lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
          <!-- Description and details -->
          <div>
            <h3 class="sr-only">Description</h3>

            <div class="space-y-5">
              <h3 class="text-base text-gray-900">{{ product.description }}</h3>
            </div>
          </div>

          <div class="mt-10">
            <h2 class="text-sm font-medium text-gray-900">Details</h2>

            <div class="mt-4 space-y-6">
              <h3 class="text-sm text-gray-600">
                  <ul>
                      <li> Delivery within 7-10 working days </li>
                      <li> Condition: {{ product.condition }} </li>
                  </ul>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { StarIcon } from '@heroicons/vue/solid'
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import axios from 'axios'

export default {
    name: 'Product',
    data() {
        return {
            product: {}
        }
    },
    mounted() {
        this.getProduct()
    },
    methods: {
        async getProduct() {
            const category_slug = this.$route.params.category_slug
            const book_slug = this.$route.params.book_slug

            await axios
                .get(`/api/v1/books/${category_slug}/${book_slug}`)
                .then(response => {
                    this.product = response.data
                    document.title = this.product.name + '| KitabKuber'
                })
                .catch(error => {
                    console.log(error)
                })
        }
    },

    components: {
        RadioGroup,
        RadioGroupLabel,
        RadioGroupOption,
        StarIcon,
    },
}
</script>