<script setup>

</script>

<template>
  <header class=" mb-4 text-center p-5">
    <h1 class="text-4xl font-black">Grades Calculator</h1>
    <p>Mark Mallari</p>
  </header>

  <main  class="flex justify-center m-5 lg:m-0">
   <div class="bg-base-300 h-full w-full   lg:w-1/3 rounded-lg p-10">
      <div>

      <label for="">Enter Grade in Prelim</label>
      <input type="text" id="prelim" class="mt-1 block input input-bordered w-full">
      </div>

      <div class="mt-4">
      <label for="">Enter Grade in Midterm</label>
      <input type="text" id="midterm" class="mt-1 block input input-bordered w-full">
      </div>

      <div class="mt-4">
      <label for="">Enter Grade in Pre-Final</label>
      <input type="text" id="preFinal" class="mt-1 block input input-bordered w-full">
      </div>

      <div class="mt-4">
      <label for="">Enter Grade in Finals</label>
        <input type="text" id="finals" class="mt-1 block input input-bordered w-full">
      </div>

    <div class="mt-4">
      <button class="uppercase font-black btn btn-primary w-full">Calculate</button>
    </div>
    
   </div>
  </main>
</template>


