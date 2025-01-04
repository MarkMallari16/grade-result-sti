<script setup>
import { ref } from 'vue';

  const prelim = ref('');
  const midterm = ref('');
  const preFinal = ref('');
  const finals = ref('');
  const finalGrade = ref(null);
  
const calculateGrade = () => {
  const TERM_PERCENTAGE = 0.2;
  const FINALS_TERM_PERCENTAGE = 0.4;

  const p = parseFloat(prelim.value) || 0;
  const m = parseFloat(midterm.value) || 0;
  const pF = parseFloat(preFinal.value) || 0;
  const f = parseFloat(finals.value) || 0;

  finalGrade.value = (
    (p+m+pF) * TERM_PERCENTAGE + f * FINALS_TERM_PERCENTAGE
  ).toFixed(2);
}
</script>

<template>
  <header class="mb-4 text-center p-5">
    <h1 class="text-4xl font-black">Grades Calculator</h1>
  </header>
  <main >
   <div class="flex flex-col justify-center items-center m-5 lg:m-0">
 
      <div class="bg-base-300 h-full w-full   lg:w-1/3 rounded-lg p-10">
          <div>

          <label for="prelim">Prelim</label>
          <input v-model="prelim" type="text" id="prelim" class="mt-1 block input input-bordered w-full" placeholder="Enter Grade in Prelim">
          </div>

          <div class="mt-4">
          <label for="midterm">Midterm</label>
          <input v-model="midterm" type="text" id="midterm" class="mt-1 block input input-bordered w-full" placeholder="Enter Grade in Midterm">
          </div>

          <div class="mt-4">
            <label for="preFinal">Pre-Final</label>
            <input v-model="preFinal" type="text" id="preFinal" class="mt-1 block input input-bordered w-full" placeholder="Enter Grade in Pre-FInal">
          </div>

          <div class="mt-4">
            <label label for="finals">Finals</label>
            <input v-model="finals" type="text" id="finals" class="mt-1 block input input-bordered w-full" placeholder="Enter Grade in Finals">
          </div>

        <div class="mt-4">
          <button @click="calculateGrade" class="uppercase font-black btn btn-primary w-full">Calculate</button>
        </div>
      


    </div>
  <div v-if="finalGrade !== null" class="mt-10 bg-base-300 h-full w-full   lg:w-1/3 rounded-lg p-10">
    <p class="text-lg font-bold">Final Grade: {{ finalGrade }}</p>
   </div>
   </div>
  </main>
</template>


