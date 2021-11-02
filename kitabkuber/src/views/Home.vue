<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-white overflow-hidden">
    <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
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
        <div>
          <div class="mt-10">
            <!-- Decorative image grid -->
            <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
              <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div class="flex items-center space-x-8 lg:space-x-8">
                  <div class="flex-shrink-0 grid grid-cols-2 gap-y-6 lg:gap-y-8">
                    <div class="w-44 h-full rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                     <img src="../assets/ielts.png" alt="" class="object-center object-cover" />
                    </div>
                    <div class="w-45 h-full rounded-lg overflow-hidden">
                      <img src="../assets/jee.jpeg" alt="" class="object-center object-cover" />
                    </div>
                    <div class="w-44 h-full rounded-lg overflow-hidden">
                      <img src="../assets/toefl.png" alt="" class=" object-center object-cover" />
                    </div>

                    <div class="w-44 h-full rounded-lg overflow-hidden">
                      <img src="../assets/gmat.png" alt="" class="object-center object-cover" />
                    </div>
                    <div class="w-45 h-full rounded-lg overflow-hidden">
                      <img src="../assets/gre.png" alt="" class=" object-center object-cover" />
                    </div>
                    <div class="w-44 h-full rounded-lg overflow-hidden">
                       <img src="../assets/sat.png" alt="" class=" w-25 h-25 object-center object-cover" />
                    </div>
                  </div>

                </div>
              </div>
            </div>

        <router-link to = "/books/"> <a href="/books/" class="inline-block text-center bg-green-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-green-700">Browse Catalog</a> </router-link>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>

export default {
    name: 'Home'
}


</script>
