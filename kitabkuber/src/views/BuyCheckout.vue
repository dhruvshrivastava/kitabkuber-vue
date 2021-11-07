<template>
    <div class="page-checkout">
        <div class="columns is-multiline">

  <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Book Information
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Book Details 
      </p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Book 
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            <img :src = "buy['thumbnail']">
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Book Name
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ buy["name"] }}
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            MRP
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ buy["mrp"] }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Total Payable
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ buy["mrp"] }}
          </dd>
        </div>
      </dl>
    </div>
  </div>
  <br>
    <div class="mt-10 sm:mt-0">
    <div class="md:grid md:grid-cols-3 md:gap-6">
      <div class="md:col-span-1">
        <div class="px-4 sm:px-0">
          <h3 class="text-lg font-medium leading-6 text-gray-900">Shipping Details</h3>
          <p class="mt-1 text-sm text-gray-600">
            Please enter your shipping details
          </p>
        </div>
      </div>
      <div class="mt-5 md:mt-0 md:col-span-2">
        <form>
          <div class="shadow overflow-hidden sm:rounded-md">
            <div class="px-4 py-5 bg-white sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                  <label for="first-name" class="block text-sm font-medium text-gray-700">First name</label>
                  <input type="text" name="first-name" v-model="first_name" id="first-name" autocomplete="given-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-3">
                  <label for="last-name" class="block text-sm font-medium text-gray-700">Last name</label>
                  <input type="text" name="last-name" v-model="last_name" id="last-name" autocomplete="family-name" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-4">
                  <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                  <input type="text" name="email-address" v-model="email" id="email-address" autocomplete="email" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
                <div class="col-span-6 sm:col-span-4">
                  <label for="email-address" class="block text-sm font-medium text-gray-700">Mobile Number</label>
                  <input type="text" name="mobile-number" v-model="phone" id="email-address" autocomplete="Mobile Number" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6">
                  <label for="street-address" class="block text-sm font-medium text-gray-700">Street address</label>
                  <input type="text" name="street-address" v-model="address" id="street-address" autocomplete="street-address" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label for="city" class="block text-sm font-medium text-gray-700">City</label>
                  <input type="text" name="city" id="city" v-model="city" autocomplete="address-level2" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="region" class="block text-sm font-medium text-gray-700">State / Province</label>
                  <input type="text" name="region" id="region" v-model="state" autocomplete="address-level1" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>

                <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label for="postal-code" class="block text-sm font-medium text-gray-700">Pincode</label>
                  <input type="text" name="postal-code" v-model="pincode" id="postal-code" autocomplete="postal-code" class="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" />
                </div>
              </div>
            </div>
            <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button @click="submitForm" type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Checkout
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Checkout',
    data() {
        return {
            buy: [],
            first_name: '',
            last_name: '',
            email: '',
            phone: '',
            address: '',
            city: '',
            state: '',
            pincode: '',
            errors: []
        }
    },
    mounted() {
        document.title = 'Checkout | KitabKuber'
        this.buy = this.$store.state.buy
        console.log(this.buy)
        
    },
    methods: {
       async submitForm() {
            this.errors = []
            if (this.first_name === '') {
                this.errors.push('The first name field is missing!')
            }
            if (this.last_name === '') {
                this.errors.push('The last name field is missing!')
            }
            if (this.email === '') {
                this.errors.push('The email field is missing!')
            }
            if (this.phone === '') {
                this.errors.push('The phone field is missing!')
            }
            if (this.address === '') {
                this.errors.push('The address field is missing!')
            }
            if (this.city === '') {
                this.errors.push('The address field is missing!')
            }
            if (this.state === '') {
                this.errors.push('The address field is missing!')
            }
            if (this.pincode === '') {
                this.errors.push('The zip code field is missing!')
            }

            const data = {
                'first_name': this.first_name,
                'last_name': this.last_name,
                'email': this.email,
                'address': this.address,
                'city': this.city,
                'state': this.state,
                'pincode': this.pincode,
                'phone': this.phone,
                'book_name': this.buy["name"],
                'mrp': this.buy["mrp"],
                'rent': this.buy["rent"],
                'deposit': this.buy["deposit"],
                "type":"buy",
                "rental_period":0

            }
            await axios
                .post('/api/v1/checkout/', data)
                .then(this.$router.push('/success'))
                .catch(error => {
                    this.errors.push('Something went wrong. Please try again')
                    console.log(error)
                })
        },

    },

}
</script>
