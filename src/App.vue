<template>
  <div class="bg-white">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="fixed inset-0 flex z-40 lg:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
          <div class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
            <div class="px-4 pt-5 pb-2 flex">
              <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400" @click="open = false">
                <span class="sr-only">Close menu</span>
                <XIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>


            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                <a :href="page.href" class="-m-2 p-2 block font-medium text-gray-900">{{ page.name }}</a>
              </div>
            </div>

            <div class="border-t border-gray-200 py-6 px-4 space-y-6">
              <div class="flow-root">
                <a href="/login/" class="-m-2 p-2 block font-medium text-gray-900">Sign in</a>
              </div>
              <div class="flow-root">
                <a href="/register/" class="-m-2 p-2 block font-medium text-gray-900">Create account</a>
              </div>
            </div>

          </div>
        </TransitionChild>
      </Dialog>
    </TransitionRoot>

    <header class="relative bg-white">

      <nav aria-label="Top" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="border-b border-gray-200">
          <div class="h-16 flex items-center">
            <button type="button" class="bg-white p-2 rounded-md text-gray-400 lg:hidden" @click="open = true">
              <span class="sr-only">Open menu</span>
              <MenuIcon class="h-6 w-6" aria-hidden="true" />
            </button>

            <!-- Logo -->
            <div class="ml-4 flex lg:ml-0">
              <a href="/">
                <span class="sr-only">Workflow</span>
                <img class="h-40 w-auto" src="./assets/logo.png" alt=""/>
              </a>
            </div>


                 <div class="ml-auto flex items-center" v-if="$store.state.isAuthenticated">
              <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a href="/my-account/" class="text-sm font-medium text-gray-700 hover:text-gray-800">My account</a>
                 </div>
                 </div>

            <div class="ml-auto flex items-center" v-else>
              <div class="p-10">

  <div class="dropdown inline-block relative">
    <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
      <span class="mr-1">View Categories</span>
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
    </button>
    <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
      <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/sat">SAT</a></li>
      <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/ielts">IELTS</a></li>
      <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/gre">GRE</a></li>
      <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/gmat">GMAT</a></li>
      <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/toefl">TOEFL</a></li>
      <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/ielts">IELTS</a></li>
      <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/iit-jee">IIT-JEE</a></li>
      <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/bank-po">BANK PO</a></li>
      <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/nda">NDA</a></li>
      <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/ssc">SSC</a></li>
      <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/neet">NEET</a></li>
      <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="/celpip">CELPIP</a></li>
    </ul>
  </div>

</div>
              <div class="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                <a href="/login/" class="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</a>
                <span class="h-6 w-px bg-gray-200" aria-hidden="true" />
                <a href="/register/" class="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</a>
              </div>
              </div>
              <!-- Search -->
              <div class="flex lg:ml-4">
                  <span class="sr-only">Search</span>
                  <form method="get" action="/search">
                    <div class = "control">
                      <input type = "text" class = "submit" placeholder="Search Books" name = "query">
                    </div>
                  </form>
              </div>
            
          </div>
          <router-view></router-view>
        </div>
      </nav>
    </header>
  </div>
</template>


<script>
import { ref } from 'vue'
import axios from 'axios'
import {
  Dialog,
  DialogOverlay,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { MenuIcon, SearchIcon, XIcon } from '@heroicons/vue/outline'

export default {
  beforeCreate() {
    this.$store.commit('initializeStore')
    const token = this.$store.state.token
    if (token) {
        axios.defaults.headers.common['Authorization'] = "Token " + token
    } else {
        axios.defaults.headers.common['Authorization'] = ""
    }
  },


  components: {
    Dialog,
    DialogOverlay,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
    MenuIcon,
    XIcon,
  },

  setup() {
    const open = ref(false)

    return {
      open,
    }
  },
}
</script>
<style>
.dropdown:hover .dropdown-menu {
  display: block;
}

</style>