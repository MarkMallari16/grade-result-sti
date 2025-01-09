<script setup>
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";

const prelim = ref("");
const midterm = ref("");
const preFinal = ref("");
const finals = ref("");
const finalGrade = ref(null);
const remarks = ref(null);

const prelimWeight = ref(null);
const midtermWeight = ref(null);
const preFinalWeight = ref(null);
const finalsWeight = ref(null);

const resultRef = ref(null);

//creating error messages
const errors = ref({
  prelim: "",
  midterm: "",
  preFinal: "",
  finals: "",
  prelimWeight: "",
  midtermWeight: "",
  preFinalWeight: "",
  finalsWeight: "",
});

//calculating final grade
const calculateGrade = () => {
  if (!validateAllFields()) {
    return;
  }

  const p = parseFloat(prelim.value) || 0;
  const m = parseFloat(midterm.value) || 0;
  const pF = parseFloat(preFinal.value) || 0;
  const f = parseFloat(finals.value) || 0;

  const pW = parseFloat(prelimWeight.value) || 0;
  const mW = parseFloat(midtermWeight.value) || 0;
  const pFW = parseFloat(preFinalWeight.value) || 0;
  const fW = parseFloat(finalsWeight.value) || 0;

  //calculating final grade
  finalGrade.value = ((p * pW + m * mW + pF * pFW + f * fW) / 100).toFixed(2);

  if (finalGrade.value >= 75) {
    remarks.value = "Passed";
  } else {
    remarks.value = "Failed";
  }

  if (resultRef.value) {
    resultRef.value.showModal();
  }
};
const validateInput = (field, value) => {
  if (!value) {
    return `${field} is required!`;
  }
  if (isNaN(value)) {
    return `${field} should be a number!`;
  }
  return null;
};

//validations
const validateAllFields = () => {
  errors.value.prelim = validateInput("Prelim", prelim.value);
  errors.value.midterm = validateInput("Midterm", midterm.value);
  errors.value.preFinal = validateInput("Pre-Final", preFinal.value);
  errors.value.finals = validateInput("Finals", finals.value);

  errors.value.prelimWeight = validateInput("Weight", prelimWeight.value);
  errors.value.midtermWeight = validateInput("Weight", midtermWeight.value);
  errors.value.preFinalWeight = validateInput("Weight", preFinalWeight.value);
  errors.value.finalsWeight = validateInput("Weight", finalsWeight.value);

  return (
    !errors.value.prelim &&
    !errors.value.midterm &&
    !errors.value.preFinal &&
    !errors.value.finals &&
    !errors.value.prelimWeight &&
    !errors.value.midtermWeight &&
    !errors.value.preFinalWeight &&
    !errors.value.finalsWeight
  );
};

//clear all fields
const clearFields = () => {
  prelim.value = "";
  midterm.value = "";
  preFinal.value = "";
  finals.value = "";
  finalGrade.value = null;
  remarks.value = null;

  prelimWeight.value = null;
  midtermWeight.value = null;
  preFinalWeight.value = null;
  finalsWeight.value = null;

  if (resultRef.value) {
    resultRef.value.close();
  }
};
</script>

<template>
  <NavBar />
  <header class="mb-1 text-center py-4">
    <h1 class="text-4xl font-black">Grades Calculator</h1>
    <p class="font-normal">Mark Mallari</p>
  </header>
  <main>
    <div class="flex flex-col justify-center items-center m-5 lg:m-0">
    
      <div class="bg-base-200 h-full w-full lg:w-1/2 rounded-lg px-6 lg:px-5 py-10">
        <h1 class="text-2xl font-bold mb-4">Calculate your Final Grade</h1>
        <div>
          <div class="flex gap-4">
            <div class="w-full">
              <label for="prelim" class="font-medium">Prelim</label>
              <input
                v-model="prelim"
                type="number"
                id="prelim"
                class="mt-1 block input input-bordered w-full"
                placeholder="Enter Grade in Prelim"
              />
              <p class="mt-1 text-red-500" v-if="errors.prelim">{{ errors.prelim }}</p>
            </div>
            <div class="w-full">
              <label for="prelimWeight" class="font-medium">Weight</label>
              <input
                v-model="prelimWeight"
                type="number"
                id="prelimWeight"
                class="mt-1 block input input-bordered w-full"
                placeholder="Enter Weight"
              />
              <p class="mt-1 text-red-500" v-if="errors.prelimWeight">
                {{ errors.prelimWeight }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <div class="flex gap-4">
            <div class="w-full">
              <label for="midterm" class="font-medium">Midterm</label>
              <input
                v-model="midterm"
                type="number"
                id="midterm"
                class="mt-1 block input input-bordered w-full"
                placeholder="Enter Grade in Midterm"
              />
              <p class="mt-1 text-red-500" v-if="errors.midterm">{{ errors.midterm }}</p>
            </div>
            <div class="w-full">
              <label for="midtermWeight" class="font-medium">Weight</label>
              <input
                v-model="midtermWeight"
                type="number"
                id="midtermWeight"
                class="mt-1 block input input-bordered w-full"
                placeholder="Enter Weight"
              />
              <p class="mt-1 text-red-500" v-if="errors.midtermWeight">
                {{ errors.midtermWeight }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <div class="flex gap-4">
            <div class="w-full">
              <label for="preFinal" class="font-medium">Pre-Finals</label>
              <input
                v-model="preFinal"
                type="number"
                id="preFinal"
                class="mt-1 block input input-bordered w-full"
                placeholder="Enter Grade in Pre-Finals"
              />
              <p class="mt-1 text-red-500" v-if="errors.preFinal">
                {{ errors.preFinal }}
              </p>
            </div>
            <div class="w-full"> 
              <label for="preFinalWeight" class="font-medium">Weight</label>
              <input
                v-model="preFinalWeight"
                type="number"
                id="preFinalWeight"
                class="mt-1 block input input-bordered w-full"
                placeholder="Enter Weight"
              />
              <p class="mt-1 text-red-500" v-if="errors.preFinalWeight">
                {{ errors.preFinalWeight }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <div class="flex gap-4">
            <div class="w-full">
              <label for="finals" class="font-medium">Finals</label>
              <input
                v-model="finals"
                type="number"
                id="finals"
                class="mt-1 block input input-bordered w-full"
                placeholder="Enter Grade in Finals"
              />
              <p class="mt-1 text-red-500" v-if="errors.finals">
                {{ errors.finals }}
              </p>
            </div>
            <div class="w-full">
              <label for="finalsWeight" class="font-medium">Weight</label>
              <input
                v-model="finalsWeight"
                type="number"
                id="finalsWeight"
                class="mt-1 block input input-bordered w-full"
                placeholder="Enter Weight"
              />
              <p class="mt-1 text-red-500" v-if="errors.finalsWeight">
                {{ errors.finalsWeight }}
              </p>
            </div>
          </div>
        </div>

        <div class="mt-4">
          <button
            @click="calculateGrade"
            class="uppercase font-black btn btn-primary w-full"
          >
            Calculate
          </button>
        </div>
      </div>

      <!--Modal-->
      <dialog class="modal" ref="resultRef">
        <div class="modal-box">
          <form method="dialog">
            <div class="flex justify-between items-center">
              <h1 class="text-2xl font-bold">Result</h1>
              <button className="btn btn-sm btn-circle btn-ghost right-2 top-2">✕</button>
            </div>
          </form>
          <div v-if="finalGrade !== null" class="py-5 h-full w-full rounded-lg">
            <h1 class="text-lg font-bold mb-2">
              Remarks:
              <span :class="finalGrade >= 75 ? 'text-green-500' : 'text-red-500'">{{
                remarks
              }}</span>
            </h1>
            <p class="text-lg font-bold">Final GWA: {{ finalGrade }}</p>
            <div class="flex justify-end mt-4">
              <button @click="clearFields" class="btn btn-secondary text-end">
                Calculate Again
              </button>
            </div>
          </div>
        </div>
      </dialog>
      <!--End Modal-->
    </div>
  </main>
</template>
