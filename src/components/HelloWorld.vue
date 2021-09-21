<template>
  
  <div class="rounded-md relative mb-12 px-6 pt-52 mapa h-64 w-full  bg-no-repeat bg-center bg-cover  content-center place-content-center flex  items-center"  >

    <div class="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white "/>

      <svg xmlns="http://www.w3.org/2000/svg" class="absolute top-1/2 lef-1/2 h-12 w-12 transform -translate-x-1/2 -translate-y-1/2" viewBox="0 0 20 20" fill="#F53D6B">
        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
      </svg>

      <div class="relative z-10">
        <div class="flex justify-center">
          <div class="perfil rounded-full w-16 h-16 bg-no-repeat mb-2" />
        </div>
        <div class="flex space-x-1.5 items-center">

          <h2 class="text-2xl font-medium">Ray Silva de arrudaa</h2>
          <div class="flex ">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="#3b9a14">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <!-- <p>Subscribe</p> -->
          </div>
        </div>
        
        
      </div>
  </div>

  <div class="px-6">
      <p class="text-gray-700 py-0.5 mb-1.5">Rayarruda9876@gmail.com - Maringá, paraná (2:13 AM)</p>
            <div class="flex items-center py-1 justify-center">
              <div class="border-r pr-3">
                <h5 class="text-gray-500">First seen</h5>
                <p>10 Set, 2021</p>
              </div>
              <div class="border-r pl-1.5 pr-3">
                <h5 class="text-gray-500">Revenue</h5>
                <p>$25,009.88</p>
              </div>
              <div class="pl-3">
                <h5 class="text-gray-500">MRR</h5>
                <p>$12.88</p>
              </div>
            </div>
            
        </div>

</template>



<script>
export default {
  name: 'app',
  imgBack: '../assets/back.png',
  color: '#333333'
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

.mapa{
  background-image: url('../assets/back.png');

}

.perfil{
  background-image: url('../assets/foto.jfif');
  background-position: center;
  background-size:cover;
  
}

</style>