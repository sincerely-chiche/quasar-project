<template>
  <q-page padding>
    <header class="">
      <div class="d-carousel shadow w-full rounded-box">
        <div id="item1" class="d-carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=8B7BCDC2"
            class="w-full"
          />
        </div>
        <div id="item2" class="d-carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=500B67FB"
            class="w-full"
          />
        </div>
        <div id="item3" class="d-carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=A89D0DE6"
            class="w-full"
          />
        </div>
        <div id="item4" class="d-carousel-item w-full">
          <img
            src="https://api.lorem.space/image/car?w=800&h=200&hash=225E6693"
            class="w-full"
          />
        </div>
      </div>
      <div class="flex justify-center w-full py-2 gap-2">
        <a href="#item1" class="d-btn d-btn-xs">1</a>
        <a href="#item2" class="d-btn d-btn-xs">2</a>
        <a href="#item3" class="d-btn d-btn-xs">3</a>
        <a href="#item4" class="d-btn d-btn-xs">4</a>
      </div>
    </header>
    <div class="d-stats shadow mt-10 w-full">
      <div class="d-stat">
        <div class="d-stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div class="d-stat-title">Total Likes</div>
        <div class="d-stat-value text-primary">25.6K</div>
        <div class="d-stat-desc">21% more than last month</div>
      </div>

      <div class="d-stat">
        <div class="d-stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            class="inline-block w-8 h-8 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div class="d-stat-title">Page Views</div>
        <div class="d-stat-value text-secondary">2.6M</div>
        <div class="d-stat-desc">21% more than last month</div>
      </div>

      <div class="d-stat">
        <div class="d-stat-figure text-secondary">
          <div class="d-avatar d-online">
            <div class="w-16 rounded-full">
              <img src="https://api.lorem.space/image/face?w=128&h=128" />
            </div>
          </div>
        </div>
        <div class="d-stat-value">86%</div>
        <div class="d-stat-title">Tasks done</div>
        <div class="d-stat-desc text-secondary">31 tasks remaining</div>
      </div>
    </div>
    <div class="w-full">
      <ul class="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100 w-full">
        <li>
          <article>
            <a
              rel="noopener noreferrer"
              href="#"
              class="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900"
            >
              <h3
                class="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9"
              >
                Earum at ipsa aliquid quis, exercitationem est.
              </h3>
              <time
                datetime=""
                class="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400"
                >Oct 13, 2020</time
              >
              <p
                class="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique saepe
                exercitationem numquam, labore necessitatibus deleniti quasi. Illo porro
                nihil necessitatibus debitis delectus aperiam, fuga impedit assumenda
                odit, velit eveniet est.
              </p>
            </a>
          </article>
        </li>
        <li>
          <article>
            <a
              rel="noopener noreferrer"
              href="#"
              class="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900"
            >
              <h3
                class="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9"
              >
                Earum at ipsa aliquid quis, exercitationem est.
              </h3>
              <time
                datetime=""
                class="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400"
                >Oct 13, 2020</time
              >
              <p
                class="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique saepe
                exercitationem numquam, labore necessitatibus deleniti quasi. Illo porro
                nihil necessitatibus debitis delectus aperiam, fuga impedit assumenda
                odit, velit eveniet est.
              </p>
            </a>
          </article>
        </li>
        <li>
          <article>
            <a
              rel="noopener noreferrer"
              href="#"
              class="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900"
            >
              <h3
                class="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9"
              >
                Earum at ipsa aliquid quis, exercitationem est.
              </h3>
              <time
                datetime=""
                class="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400"
                >Oct 13, 2020</time
              >
              <p
                class="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique saepe
                exercitationem numquam, labore necessitatibus deleniti quasi. Illo porro
                nihil necessitatibus debitis delectus aperiam, fuga impedit assumenda
                odit, velit eveniet est.
              </p>
            </a>
          </article>
        </li>
        <li>
          <article>
            <a
              rel="noopener noreferrer"
              href="#"
              class="grid p-4 overflow-hidden md:grid-cols-5 rounded-xl lg:p-6 xl:grid-cols-12 hover:dark:bg-gray-900"
            >
              <h3
                class="mb-1 ml-8 font-semibold md:col-start-2 md:col-span-4 md:ml-0 xl:col-start-3 xl:col-span-9"
              >
                Earum at ipsa aliquid quis, exercitationem est.
              </h3>
              <time
                datetime=""
                class="row-start-1 mb-1 md:col-start-1 xl:col-span-2 dark:text-gray-400"
                >Oct 13, 2020</time
              >
              <p
                class="ml-8 md:col-start-2 md:col-span-4 xl:col-start-3 xl:col-span-9 md:ml-0 dark:text-gray-300"
              >
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique saepe
                exercitationem numquam, labore necessitatibus deleniti quasi. Illo porro
                nihil necessitatibus debitis delectus aperiam, fuga impedit assumenda
                odit, velit eveniet est.
              </p>
            </a>
          </article>
        </li>
      </ul>
    </div>
  </q-page>
</template>

<script>
export default {};
</script>

<style></style>
