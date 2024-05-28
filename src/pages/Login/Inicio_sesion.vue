<template>
  <div class="q-pa-md">
    <div class="row q-gutter-md row justify-center items-center" id="hero">
      <div class="col-lg-6 col-md-6 col-xs-12">
        <q-card class="col-12">
          <q-card-section class="bg-deep">
            <h4
              class="text-h5 q-my-md text-center"
              style="color: #132843; font-weight: bold"
            >
              Iniciar sesión
            </h4>
          </q-card-section>
          <q-card-section class="q-px-lg">
            <q-form class="q-pa-md col-12">
              <q-input
                ref="email"
                square
                clearable
                v-model="email"
                type="email"
                label="Usuario"
                lazy-rules
                :rules="[(val) => (val && val.length > 0) || 'Campo requerido']"
              >
                <template v-slot:prepend>
                  <q-icon name="contacts" />
                </template>
              </q-input>
              <q-input
                square
                v-model="password"
                label="Contraseña"
                :type="isPwd ? 'password' : 'text'"
              >
                <template v-slot:prepend>
                  <q-icon name="lock" />
                </template>
                <template v-slot:append>
                  <q-icon
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    class="cursor-pointer"
                    @click="isPwd = !isPwd"
                  ></q-icon>
                </template>
              </q-input>
              <div>
                <br />
              </div>
            </q-form>
            <div class="q-px-lg" style="text-align: center">
              <q-btn
                unelevated
                class="btn-fixed-width"
                icon="login"
                color="primary"
                label="Ingresar"
                @click="ingresar"
              />
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import { ref } from 'vue';

export default {
  data() {
    return {
      email: '',
      password: '',
      confirm: null,
      isPwd: ref(true),
    };
  },
  methods: {
    redirect(redirect) {
      this.$router.push(redirect);
    },
  },
};
</script>
<style scoped>
.card {
  margin-bottom: 0px;
}
.card-content {
  min-height: 160px;
}
button {
  margin-bottom: 4%;
}
h4 {
  font-weight: 300px;
}
.q-pt-xl {
  padding-top: 0px;
}
#hero {
  background-image: url('/3055.jpg');
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
  height: 600px;
}
.q-card > div {
  border-left: 0;
  border-right: 0;
  box-shadow: none;
  margin-bottom: 10px;
  margin-top: 30px;
}
.q-card__section--vert {
  padding: 6px;
}
</style>
