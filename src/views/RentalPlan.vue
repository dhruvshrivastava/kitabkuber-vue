<template>

        <div class="lg:flex items-center justify-between">
            <div class="lg:w-1/2 w-full">
                <p class="text-base leading-4 text-gray-600 dark:text-gray-200">Choose your plan</p>
                <h1 role="heading" class="md:text-5xl text-3xl font-bold leading-10 mt-3 text-gray-800 dark:text-white">Our rental plans</h1>
                <p role="contentinfo" class="text-base leading-5 mt-5 text-gray-600 dark:text-gray-200">KitabKuber provides rental plans exclusively curated for students. Rent books at affordable tariffs and save big.</p>
                <div class="w-56">
                    <button onclick="toggleIt()" class="bg-gray-100 dark:bg-gray-800 shadow rounded-full flex items-center mt-10 rounded-full">
                        <div class="bg-green-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white rounded-full py-4 px-6" id="annually">
                            <router-link to = "/enquiry">Submit Enquiry</router-link></div>
                    </button>
                </div>
            </div>
            <div class="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8" role="list">
                <img src="https://i.ibb.co/0n6DSS3/bgimg.png" class="absolute w-full -ml-12 mt-24" alt="background circle images" />
                <div role="listitem" class="bg-white dark:bg-gray-800 cursor-pointer shadow rounded-lg p-8 relative z-30">
                    <div class="md:flex items-center justify-between">
                        <h2 class="text-2xl font-semibold leading-6 text-gray-800 dark:text-white">For books within Rs.500 - Rs.1000</h2>
                        <p class="text-2xl font-semibold md:mt-0 mt-4 leading-6 text-gray-800 dark:text-white">Daily Rent of Rs.2</p>
                    </div>
                    <p class="md:w-80 text-base leading-6 mt-4 text-gray-600 dark:text-gray-200">Total amount at the end of the rental period will be deducted
                        from the security deposit. The balance would be refunded. You can choose multiple books.
                    </p>
                </div>
                <div role="listitem" class="bg-white dark:bg-gray-800 cursor-pointer shadow rounded-lg mt-3 flex relative z-30">
                    <div class="w-2.5 h-auto bg-green-700 rounded-tl-md rounded-bl-md"></div>
                    <div class="w-full p-8">
                        <div class="md:flex items-center justify-between">
                            <h2 class="text-2xl font-semibold leading-6 text-gray-800 dark:text-white">For books within Rs.1000 - Rs.2000</h2>
                            <p class="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800 dark:text-white">Daily Rent of Rs.4<span class="font-normal text-base">/mo</span></p>
                        </div>
                        <p class="md:w-80 text-base leading-6 mt-4 text-gray-600 dark:text-gray-200">Total amount at the end of the rental period will be deducted
                        from the security deposit. The balance would be refunded. You can choose multiple books.</p>
                    </div>
                </div>
                <div role="listitem" class="bg-white dark:bg-gray-800 cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7">
                    <div class="md:flex items-center justify-between">
                        <h2 class="text-2xl font-semibold leading-6 text-gray-800 dark:text-white">For books above Rs.2000</h2>
                        <p class="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800 dark:text-white">Daily Rent of Rs.7<span class="font-normal text-base">/mo</span></p>
                    </div>
                    <p class="md:w-80 text-base leading-6 mt-4 text-gray-600 dark:text-gray-200">Total amount at the end of the rental period will be deducted
                        from the security deposit. The balance would be refunded. You can choose multiple books.</p>
                </div>
            </div>
        </div>
        
    
</template>
<script>

export default {
    name: 'RentalPlan',
    mounted() {
      document.title = 'KitabKuber | Rental Plans'
    }
}

let monthly = document.getElementById("monthly");
let annually = document.getElementById("annually");

let flag = false;
const toggleIt = () => {
    if (!flag) {
        monthly.classList.add("bg-indigo-700");
        monthly.classList.add("text-white");
        monthly.classList.remove("bg-gray-100");
        monthly.classList.remove("text-gray-600");
        annually.classList.remove("bg-indigo-700");
        annually.classList.remove("text-white");
        annually.classList.add("bg-gray-100");
        annually.classList.add("text-gray-600");
    } else {
        monthly.classList.remove("bg-indigo-700");
        monthly.classList.remove("text-white");
        monthly.classList.add("bg-gray-100");
        monthly.classList.add("text-gray-600");
        annually.classList.add("bg-indigo-700");
        annually.classList.add("text-white");
        annually.classList.remove("bg-gray-100");
        annually.classList.remove("text-gray-600");
        flag = false;
    }
};
</script>