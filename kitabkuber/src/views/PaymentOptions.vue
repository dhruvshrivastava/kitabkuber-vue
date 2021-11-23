<template>
<div>
<div class = "card">
<button type="submit" 
            class="mt-10 w-50 bg-green-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 foc
            us:ring-indigo-500" @click="submitCOD">
            Pay using Cash on Delivery 
            </button>
<button id="rzp-button1" class="mt-10 w-50 bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 foc
            us:ring-indigo-500" >Online Payment using Razorpay</button>

</div></div>

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
            thumbnail: null 
        }
    },
    mounted() {
        document.title = 'Payment Options | KitabKuber'
        this.getMyOrders()
        
        this.order = this.$store.state.order
        this.total = this.order["total"]*100
        this.book_name = this.order["book_name"]
        this.first_name = this.order["first_name"]
        this.email = this.order["email"]
        this.phone = this.order["phone"]
        
        var options = {
                "key": "rzp_test_nu2nF7P7OpVGhq",
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
            this.order["payment"] = "cod"
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
