<template>
<div>
<div class = "card">
<div class = "content">
 <div class="bg-white shadow overflow-hidden">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Review Order
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Shipping Details 
      </p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Delivering to
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ first_name }}, {{ email }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Mobile Number
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ phone }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Book Name
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ book_name }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Total Payable
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ display_total }}
          </dd>
        </div>
      </dl>
    </div>
  </div>

</div>

<div class = "grid grid-cols-3 gap-1">
<div><button type="submit" 
            class="mt-10 w-50 bg-gray-600 border border-transparent py-3 px-8 flex text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 foc
            us:ring-indigo-500" @click="submitCOD">
            Place Order via Cash on Delivery
            </button></div>
<div><button id="rzp-button1" class="mt-10 w-50 bg-blue-600 border border-transparent py-3 px-8 flex text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 foc
            us:ring-indigo-500" >Online Payment using Razorpay</button></div>
<div><br><br><a href="https://razorpay.com/" target="_blank"> <img referrerpolicy="origin" src = "https://badges.razorpay.com/badge-dark.png " style = "height: 45px; width: 113px;" alt = "Razorpay | Payment Gateway | Neobank"></a>
</div><br>

</div></div></div>

</template>


<script>
import axios from 'axios'

export default {
    name: 'PaymentOptions',

    data() {
        return {
            orders: [],
            order_id: null,
            order: null,
            total: 0,
            options: {},
            book_name: null,
            first_name: null, 
            email: null, 
            phone: null,
            address: null,
            city: null,
            state: null,
            pincode: null,
            phone: null,
            mrp: null,
            rent: null,
            deposit: null,
            thumbnail: null,
            display_total: 0
        }
    },
    mounted() {
        document.title = 'Payment Options | KitabKuber'
        this.getMyOrders()
        
        this.order = this.$store.state.order
        this.display_total = this.order["total"]
        this.total = this.order["total"]*100
        this.book_name = this.order["book_name"]
        this.first_name = this.order["first_name"]
        this.email = this.order["email"]
        this.phone = this.order["phone"]
        
        var options = {
                "key": "rzp_live_o773T9iMnfqoc5",
                "amount": this.total, 
                "currency": "INR",
                "name": "KitabKuber",
                "description": this.book_name,
                "image": "https://example.com/your_logo",
                "order_id": this.order_id, 
                "handler": function(response) {
                    alert("Transaction successful.")
                    location.href = '/success'
                },
                
                "prefill": {
                    "name": this.first_name,
                    "email": this.email,
                    "contact": this.phone
                },
                "notes": {
                    "address": "KitabKuber, Shop No. C-019, 81 Business Street, Sector 86, Faridabad, Haryana"
                },
                "theme": {
                    "color": "#3399cc"
                }
                
    };  

                var rzp1 = new Razorpay(options);
            rzp1.on('payment.failed', function (response){
                    this.flag = false
                    alert(response.error.code);
                    alert(response.error.description);
                    alert(response.error.source);
                    alert(response.error.step);
                    alert(response.error.reason);
                    alert(response.error.metadata.order_id);
                    alert(response.error.metadata.payment_id);
            });
            
            document.getElementById('rzp-button1').onclick = function(e, response){
                rzp1.open();
                e.preventDefault();
                
            }
            this.submitOrder()
    },
    methods: {

        async getMyOrders() {
            await axios
                .get('/api/v1/get-rp-order/')
                .then(response => {
                    this.orders = response.data
                    this.order_id = this.orders[0].id
                })
                .catch(error => {
                    console.log(error)
                })
        },

        async submitCOD() {
            await axios
            .post('/api/v1/checkout/', this.order)
            this.$router.push('/success')
            
        },
        async submitOrder() {
            this.order["payment"] = "razorpay"
            await axios 
            .post('/api/v1/checkout/', this.order)
        }
        
        },


    }


</script>
