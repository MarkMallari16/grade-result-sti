<script setup>
import { ref } from "vue";

const prelim = ref("");
const midterm = ref("");
const preFinal = ref("");
const finals = ref("");
const finalGrade = ref(null);
const remarks = ref(null);

const resultRef = ref(null);

const errors = ref({
  prelim: "",
  midterm: "",
  preFinal: "",
  finals: "",
});

//calculating final grade
const calculateGrade = () => {
  if (!validateAllFields()) {
    return;
  }
  const TERM_PERCENTAGE = 0.2;
  const FINALS_TERM_PERCENTAGE = 0.4;

  const p = parseFloat(prelim.value) || 0;
  const m = parseFloat(midterm.value) || 0;
  const pF = parseFloat(preFinal.value) || 0;
  const f = parseFloat(finals.value) || 0;

  finalGrade.value = (
    (p + m + pF) * TERM_PERCENTAGE +
    f * FINALS_TERM_PERCENTAGE
  ).toFixed(2);

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
const validateAllFields = () => {
  errors.value.prelim = validateInput("Prelim", prelim.value);
  errors.value.midterm = validateInput("Midterm", midterm.value);
  errors.value.preFinal = validateInput("Pre-Final", preFinal.value);
  errors.value.finals = validateInput("Finals", finals.value);

  return (
    !errors.value.prelim &&
    !errors.value.midterm &&
    !errors.value.preFinal &&
    !errors.value.finals
  );
};
</script>

<template>
  <header class="mb-1 text-center py-4">
    <h1 class="text-4xl font-black">Grades Calculator</h1>
  </header>
  <main>
    <div class="flex flex-col justify-center items-center m-5 lg:m-0">
      <div class="bg-base-200 h-full w-full lg:w-1/3 rounded-lg p-10">
        <div>
          <label for="prelim" class="font-medium">Prelim</label>
          <input
            v-model="prelim"
            type="text"
            id="prelim"
            class="mt-1 block input input-bordered w-full"
            placeholder="Enter Grade in Prelim"
          />
          <p class="mt-1 text-red-500" v-if="errors.prelim">{{ errors.prelim }}</p>
        </div>

        <div class="mt-4">
          <label for="midterm" class="font-medium">Midterm</label>
          <input
            v-model="midterm"
            type="text"
            id="midterm"
            class="mt-1 block input input-bordered w-full"
            placeholder="Enter Grade in Midterm"
          />
          <p class="mt-1 text-red-500" v-if="errors.midterm">{{ errors.midterm }}</p>
        </div>

        <div class="mt-4">
          <label for="preFinal" class="font-medium">Pre-Final</label>
          <input
            v-model="preFinal"
            type="text"
            id="preFinal"
            class="mt-1 block input input-bordered w-full"
            placeholder="Enter Grade in Pre-FInal"
          />
          <p class="mt-1 text-red-500" v-if="errors.preFinal">{{ errors.preFinal }}</p>
        </div>

        <div class="mt-4">
          <label label for="finals" class="font-medium">Finals</label>
          <input
            v-model="finals"
            type="text"
            id="finals"
            class="mt-1 block input input-bordered w-full"
            placeholder="Enter Grade in Finals"
          />
          <p class="mt-1 text-red-500" v-if="errors.finals">{{ errors.finals }}</p>
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
      <dialog class="modal" v-if="finalGrade !== null" ref="resultRef">
        <div class="modal-box">
          <form method="dialog">
            <div class="flex justify-between items-center">
              <h1 class="text-2xl font-bold">Result</h1>
              <button className="btn btn-sm btn-circle btn-ghost  right-2 top-2">
                ✕
              </button>
            </div>
          </form>
          <div class="mt-5 h-full w-full rounded-lg">
            <p class="text-lg font-bold">Final Grade: {{ finalGrade }}</p>
            <p class="text-lg font-bold">
              Remarks:
              <span :class="finalGrade.value >= 75 ? 'text-green-500' : 'text-red-500'">{{
                remarks
              }}</span>
            </p>
          </div>
        </div>
      </dialog>
    </div>
  </main>
</template>
