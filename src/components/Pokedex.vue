<template>

    <div class="flex flex-col h-screen justify-between">

        <Navbar />

        <div class="container my-12 mx-auto">

            <div class="grid lg:grid-cols-2 justify-center items-center">
                <div class="bg-red-600 w-full h-auto col-span-1 rounded-lg lg:rounded-3xl flex flex-col justify-center items-center p-8">

                    <div class="grid grid-col-1 lg:grid-cols-3 mb-6 w-full">
                        <div class="lg:col-span-2 flex items-center">
                            <!-- <div class="animate-pulse bg-blue-500 h-16 w-16 rounded-full mr-2">
                                
                            </div> -->

                            <div class="flex justify-center items-center mr-6">
                                <span :class="isLoading ? 'animate-ping' : ''" class="absolute inline-flex h-14 w-14 rounded-full bg-sky-400 opacity-75"></span>
                                <span class="relative inline-flex rounded-full h-14 w-14 bg-sky-500 border-2 border-sky-50"></span>
                            </div>

                            <div :class="(!statusP && message != '') ? 'bg-red-800 animate-pulse' : 'bg-red-900'" class=" h-6 w-6 rounded-full border-2 border-red-50 mr-2">

                            </div>

                            <div :class="isLoading ? 'bg-yellow-500 animate-pulse' : 'bg-yellow-800'" class="bg-yellow-800 h-6 w-6 rounded-full border-2 border-yellow-50 mr-2">

                            </div>

                            <div :class="statusP ? 'bg-green-500 animate-pulse' : 'bg-green-800'" class=" h-6 w-6 rounded-full border-2 border-green-50 mr-2">

                            </div>

                        </div>

                        <div class="lg:col-span-1">

                        </div>
                    </div>

                    <div class="bg-gray-300 h-44 w-full rounded-lg flex justify-center items-center">
                        <img :src="imageP" class="h-full w-auto" alt="">
                    </div>

                </div>

                <div class="bg-red-700 mx-4 lg:mx-0 h-auto col-span-1 rounded-b-md lg:rounded-r-3xl lg:rounded-l-none p-4 lg:p-8 flex flex-col items-center justify-center">
                    <div class="flex items-center">
                        <div class="relative mr-1 lg:mr-4">
                            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg class="w-5 h-5 text-gray-400" viewBox="0 0 24 24" fill="none">
                                    <path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </span>

                            <input v-model="pokemon" type="text" class="w-full py-2 pl-10 pr-4 text-xs lg:text-lg text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300" placeholder="Buscar pokemon">
                        </div>


                        <a v-on:click="search" class="w-8 h-8 lg:w-10 lg:h-10 cursor-pointer border-2 border-white bg-amber-400 hover:bg-amber-500 rounded-full flex flex-col justify-center items-center">
                            <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64" height="64" viewBox="0 0 128 128" style=" fill:#ffffff;">    
                                <path d="M 56.599609 21.599609 C 34.099609 21.599609 15.800781 40.100781 15.800781 62.800781 C 15.800781 85.600781 34.099609 104 56.599609 104 C 66.899609 104 76.3 100.09922 83.5 93.699219 L 85.800781 96 L 83.699219 98.199219 C 82.499219 99.399219 82.499219 101.3 83.699219 102.5 L 101.69922 120.69922 C 102.29922 121.29922 103.00078 121.59961 103.80078 121.59961 C 104.60078 121.59961 105.40039 121.29922 105.90039 120.69922 L 113.90039 112.59961 C 115.00039 111.39961 115.00078 109.50039 113.80078 108.40039 L 95.800781 90.199219 C 95.200781 89.599219 94.499219 89.300781 93.699219 89.300781 C 92.899219 89.300781 92.099609 89.599219 91.599609 90.199219 L 89.5 92.400391 L 87.199219 90 C 93.499219 82.7 97.400391 73.200781 97.400391 62.800781 C 97.400391 40.100781 79.099609 21.599609 56.599609 21.599609 z M 56.599609 27.699219 C 75.799609 27.699219 91.400391 43.500391 91.400391 62.900391 C 91.400391 82.300391 75.799609 98 56.599609 98 C 37.399609 98 21.800781 82.300391 21.800781 62.900391 C 21.800781 43.500391 37.399609 27.699219 56.599609 27.699219 z M 56.699219 40.199219 C 47.199219 40.199219 38.7 46.300781 35.5 55.300781 C 35 56.600781 35.699609 58.199609 37.099609 58.599609 C 37.399609 58.699609 37.7 58.800781 38 58.800781 C 39.1 58.800781 40.1 58.1 40.5 57 C 42.9 50.1 49.499219 45.400391 56.699219 45.400391 C 58.099219 45.400391 59.300781 44.200781 59.300781 42.800781 C 59.300781 41.400781 58.099219 40.199219 56.699219 40.199219 z M 37.699219 64.900391 C 36.299219 64.900391 35.099609 66 35.099609 67.5 L 35.099609 67.900391 C 35.199609 69.300391 36.300781 70.5 37.800781 70.5 C 39.200781 70.5 40.400391 69.300391 40.400391 67.900391 L 40.400391 67.599609 C 40.400391 66.099609 39.300781 64.900391 37.800781 64.900391 L 37.699219 64.900391 z M 93.800781 96.599609 L 107.59961 110.59961 L 103.80078 114.40039 L 90 100.40039 L 93.800781 96.599609 z"></path>
                            </svg>
                        </a>
                    </div>

                    <div class="bg-green-900 h-32 w-full rounded-md mt-4">
                        <div v-if="statusP" class=" flex flex-col h-full w-full justify-center items-center">
                            <p class="text-green-500 text-2xl"> #{{ idP }}  <span class="font-bold">{{ nameP.toUpperCase() }}</span></p>
                            <p class="text-green-500 text-lg">{{ typeP[0].toUpperCase() }}{{ typeP.slice(1)}}</p>
                        </div>

                        <div v-else class=" flex flex-col h-full w-full justify-center items-center">
                            <p class="text-green-500 text-center text-md">{{ message }}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <Footer />
        
        
    </div>
  
</template>

<script setup>
    import {computed, ref} from 'vue'
    import getPokemon from '../helpers/getPokemon';
    import Navbar from './navbar.vue'
    import Footer from './Footer.vue'

    const pokemon = ref('')
    const nameP = ref('')
    const imageP = ref('')
    const idP = ref('')
    const typeP = ref('')
    const isLoading = ref(false)
    const statusP = ref(false)
    const message = ref('')
        
    const search = async() => {

        isLoading.value = true

        const {status, id, name, image, type} = await getPokemon(pokemon.value)

        if( status ){
            idP.value = id
            nameP.value = name
            imageP.value = image
            typeP.value = type
            message.value = ''
            statusP.value = status
        }else{
            statusP.value = status
            message.value = `No existe el pokemon ${pokemon.value}`
            idP.value = ''
            nameP.value = ''
            imageP.value = ''
            typeP.value = ''
        }

        isLoading.value = false
    }
    
</script>

<style>

</style>