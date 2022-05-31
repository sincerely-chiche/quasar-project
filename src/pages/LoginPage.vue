<template>
  <q-page class="items-center justify-evenly">
    <div class="bg-indigo-900 relative overflow-hidden h-screen">
      <img
        src="https://wallpaperaccess.com/full/334698.jpg"
        class="absolute h-full w-full object-cover"
      />

      <div
        class="container mx-auto px-6 md:px-12 relative z-10 flex justify-between items-center py-32 xl:py-40"
      >
        <div
          v-if="$q.screen.gt.sm"
          class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10"
        >
          <span class="font-bold uppercase text-yellow-400"> Himalaya </span>
          <h1 class="font-bold text-6xl sm:text-7xl text-white leading-tight mt-4">
            Let yourself be carried by nature
          </h1>
          <a
            href="#"
            class="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10"
          >
            Discover
          </a>
        </div>
        <div class="w-full lg:w-2/5 xl:w-2/5 flex flex-col items-center relative z-10">
          <div
            class="min-h-full flex items-center justify-center py-12 px-6 sm:px-8 lg:px-12 bg-white rounded shadow-xl"
          >
            <div class="max-w-md w-full space-y-8">
              <div>
                <img
                  class="mx-auto h-12 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
                <h2 class="mt-6 text-center text-2xl font-extrabold text-gray-900">
                  Sign in to your account
                </h2>
              </div>
              <form class="mt-8 space-y-6" action="#" method="POST">
                <input type="hidden" name="remember" value="true" />
                <div class="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label for="email-address" class="sr-only">Email address</label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      autocomplete="email"
                      v-model="loginDetails.email"
                      required
                      class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Email address"
                    />
                  </div>
                  <div>
                    <label for="password" class="sr-only">Password</label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      v-model="loginDetails.password"
                      required
                      class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      placeholder="Password"
                    />
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    />
                    <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                      Remember me
                    </label>
                  </div>

                  <div class="text-sm">
                    <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    @click.prevent="login"
                    type="submit"
                    class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                      <!-- Heroicon name: solid/lock-closed -->
                      <svg
                        class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </span>
                    Sign in
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts" setup>
// import { ref } from "vue";

import { UserInfo } from "@firebase/auth";
import { useQuasar } from "quasar";
import { firebaseAuth, auth } from "src/boot/firebase";
import { useAuthStore } from "src/stores/auth";
import { reactive } from "vue-demi";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const loginDetails = reactive({
  email: "",
  password: "",
});
const $q = useQuasar();

function login() {
  firebaseAuth
    .signInWithEmailAndPassword(auth, loginDetails.email, loginDetails.password)
    .then((user) => {
      authStore.saveUserDetails(user.user as UserInfo);
      if (user) router.replace("/");
    })
    .catch((err) => {
      console.log(err);
      $q.notify(err.toString());
    });
}
</script>
