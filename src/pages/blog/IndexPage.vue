<template>
  <q-page padding>
    <div class="text-gray-600 body-font">
      <div
        class="w-full flex flex-col sm:flex-row sm:items-center sm:justify-end bg-gray-700 py-4 sm:py-2 px-4 rounded mb-4"
      >
        <q-input
          dark
          color="white"
          dense
          outlined
          clearable
          v-model="searchText"
          label="Search for a post"
        >
          <template v-slot:before>
            <q-icon @click="clearSearch" name="search" class="font-bold" />
          </template>
        </q-input>
      </div>
      <div class="text-left my-8 sm:mb-6">
        <p class="text-xl text-white">Welcome to my blog</p>
        <p class="text-xs text-gray-400">Something really cool goes here 🚀</p>
      </div>

      <div class="w-40">
        <q-select
          dark
          color="white"
          label="Select filter"
          label-color="white"
          class="text-white"
          dense
          clearable
          outlined
          v-model="selectedFilter"
          :options="filters"
          popup-content-class="bg-gray-800 text-white"
        />
      </div>

      <div class="py-10">
        <div class="flex flex-wrap -m-4">
          <div v-for="n in 9" :key="n" class="p-4 md:w-1/2 lg:w-1/3">
            <div
              class="h-full border-2 border-gray-200 shadow-md border-opacity-60 rounded-lg overflow-hidden"
            >
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center"
                :src="`https://picsum.photos/seed/${n}/600`"
                alt="blog"
              />
              <div class="p-6">
                <h2
                  class="tracking-widest text-xs title-font font-medium text-gray-100 mb-1"
                >
                  CATEGORY
                </h2>
                <h1 class="title-font text-lg font-medium text-gray-100 mb-3">
                  The Catalyzer
                </h1>
                <p class="leading-relaxed mb-3 text-white">
                  Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
                  microdosing tousled waistcoat.
                </p>
                <div class="flex items-center flex-wrap">
                  <router-link
                    :to="`/blog/${n}`"
                    class="text-white font-bold inline-flex items-center md:mb-2 lg:mb-0"
                  >
                    Learn More
                    <svg
                      class="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </router-link>
                  <span
                    class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200"
                  >
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle></svg
                    >1.2K
                  </span>
                  <span
                    class="text-gray-400 inline-flex items-center leading-none text-sm"
                  >
                    <svg
                      class="w-4 h-4 mr-1"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
                      ></path></svg
                    >6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full flex flex-row items-center justify-center sm:justify-end">
          <!-- <q-btn-toggle
        v-model="model"
        class="bg-gray-700 mt-10"
        no-caps
        unelevated
        toggle-color="white"
        text-color="white"
        :options="[
          {label: 'Previous', value: 'back'},
          {label: 'Next', value: 'forward'}
        ]"
      /> -->
          <q-btn-group class="mt-10" unelevated flat>
            <q-btn
              size="md"
              padding="sm"
              class="bg-gray-700"
              text-color="white"
              dense
              no-caps
              label="Previous"
              icon="arrow_left"
            />
            <q-btn
              size="md"
              padding="sm"
              class="bg-gray-700"
              text-color="white"
              dense
              no-caps
              label="Next"
              icon-right="arrow_right"
            />
          </q-btn-group>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from "vue";

const searchText = ref<string>("");
const filters = ref<Array<string>>(["All", "Hot", "Cold"]);
const selectedFilter = ref<string>("");

function clearSearch() {
  searchText.value = "";
}
</script>

<style></style>
