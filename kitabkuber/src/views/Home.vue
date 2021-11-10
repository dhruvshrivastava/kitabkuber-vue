<template>
<div>
<div class="flex flex-col justify-between md:flex-row md:px-12 lg:px-20 p-4 dark:bg-gray-800 transition duration-500">
  <div class="text-container md:mt-10 md:w-1/2">
        <div class="sm:max-w-lg">
          <h1 class="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">
            Looking to Rent Books?
          </h1>
          <h1 class="text-4xl font font-extrabold tracking-tight text-green-900 sm:text-6xl">
            Here's KitabKuber
          </h1>
          <p class="mt-4 text-xl text-gray-500">KitabKuber lets you buy or rent exam preparation books at affordable rates. Our rental 
            plans are exclusively curated for students so that they can focus on their exams and save big. 
          </p>
        </div>


    <div class="buttons-container flex space-x-2 md:space-x-4 text-white dark:text-white my-12">
      <router-link to = "/books/"><buton class="font-semibold rounded-md text-sm md:text-base bg-green-500 px-4 py-2 md:px-8 md:py-4 cursor-pointer transform transition duration-200 hover:shadow-xl hover:-translate-y-1"> <span class="hidden lg:inline-block">Browse</span> Catalog </buton>
      </router-link>
    </div>
  </div>
  <div class="image-container md:w-1/2 md:mt-15 md:-mr-20">
  <img src = "../assets/background.jpeg" class = "h-full">
  </div></div><hr><br>
<div>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center" style="background-color: #F8F0E3"><br>
        <h2 class="text-base text-green-600 font-semibold tracking-wide uppercase">Why KitabKuber?</h2>
        <p class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          A better way to rent books. 
        </p>
        <p class="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
          Our affordable rental plans and knack for customer satisfaction make us the #1 book rental platform for students. 
        </p><br>
      </div>

    </div>
  </div><br><div>
<footer class="footer-1 py-8 sm:py-12">

    <div class="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-6 sm:mt-12 sm:pt-12 border-t">
      <div class="sm:w-full px-4 md:w-1/6">
        <strong>Copyright 2021, KitabKuber</strong>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
        <h6 class="font-bold mb-2">Address</h6>
        <address class="not-italic mb-4 text-sm">
          C-019, 81 Business Street<br>
         Faridabad, Haryana, 121002
        </address>
      </div>
      <div class="px-4 sm:w-1/2 md:w-1/4 mt-4 md:mt-0">
        <h6 class="font-bold mb-2">Contact Us </h6>
        <p class="mb-4 text-sm">Mobile: +91 9599541241<br> Email: kitabkuber@gmail.com</p>
      </div>
      <div class="px-4 md:w-1/4 md:ml-auto mt-6 sm:mt-4 md:mt-0">
        <p> Don't see a book you want in our catalog? Submit an enquiry and we'll get that sorted. </p><br>
        <router-link to="/enquiry"><button class="px-4 py-2 bg-green-800 hover:bg-green-900 rounded text-white">Submit Enquiry</button></router-link>
      </div>
    </div>
 
</footer></div>
  </div>    

</template>
<script>

export default {
    name: 'Home'
}


</script>
