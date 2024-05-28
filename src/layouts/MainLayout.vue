<template>
  <q-layout
    view="lHh Lpr lFf"
    style="background: linear-gradient(#64aee5, #7de7da)"
  >
    <q-header elevated style="background-color: #eceff1">
      <q-toolbar>
        <q-toolbar-title>
          <a>
            <q-toolbar-title shrink class="row items-center justify-center">
              <center>
                <img src="" style="height: 50px; max-width: 980px" />
              </center>
            </q-toolbar-title>
          </a>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
    <q-footer reveal elevated class="bg-blue-grey-1 text-black">
      <q-toolbar>
        <q-toolbar-title style="font-size: 13px; font-weight: bold">
          <div class="q-pa-sm">
            <div class="row justify-center q-col-gutter-sm"></div>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  setup() {
    return {
      onClick() {
        // console.log('Clicked on a fab action')
      },
    };
  },
};
</script>
