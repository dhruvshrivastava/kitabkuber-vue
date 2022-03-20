<template>

  <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-md w-full space-y-8">
      <div>
        <h2 class="mt-6 text-center text-3xl  text-gray-900">
          Don't see a book you want in our catalog or want to rent a book? Submit an enquiry and our team will be in touch with you soon. 
        </h2>
      </div>
      <form class="mt-8 space-y-6" @submit.prevent='submitForm'>
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="username" class="sr-only">Enter Email</label>
            <input id="user_name" name="user_name" type="text" v-model = "user_name" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Enter Email" />
          </div>
          <div>
            <label for="book_name" class="sr-only">Book Name</label>
            <input id="book_name" name="book_name" type="text" v-model = "book_name" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Book Name" />
          </div>
          <div>
            <label for="publication_name" class="sr-only">Publication Name</label>
            <input id="publication_name" name="publication_name" type="text" v-model = "publication_name" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Publication Name" />
          </div>
          <div>
            <label for="edition" class="sr-only">Edition</label>
            <input id="edition" name="edition" type="number" v-model = "edition" required="" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Edition Year" />
          </div>
        </div>

        <div>
          <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Submit Enquiry
          </button>
          <br>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'Enquiry',
    data() {
        return {
            user_name: '',
            book_name: '',
            publication_name: '',
            edition: '',
            errors: []
        }
    },
    mounted() {
        document.title = 'Submit Enquiry | KitabKuber'
    },
    methods: {
        async submitForm() {
            const formData = {
                user_name: this.user_name,
                book_name: this.book_name,
                publication_name: this.publication_name,
                edition: this.edition
            }
            await axios
                .post("/api/v1/enquiry", formData)
                .then(response => {
                    this.$router.push('/success-enquiry')})
                .catch(error => {

                        this.errors.push('Something went wrong. Please try again')
                        
                        console.log(JSON.stringify(error))
                    }
                )
        }
    }
}
</script>