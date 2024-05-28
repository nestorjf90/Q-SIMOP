<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-sm">
      <q-toolbar class="bg-positive text-white">
        <q-toolbar-title icon="close" glossy
          >Ingreso de monitoreo</q-toolbar-title
        >
      </q-toolbar>
    </div>

    <q-card>
      <div class="q-pa-md">
        <div class="row q-col-gutter-sm">
          <div class="col-12">
            <p id="titulos">Ficha ejecutiva de proyecto</p>
          </div>
          <div class="col-12">
            <q-input
              v-model="Proyecto"
              label-color="primary"
              color="accent"
              type="text"
              label="Proyecto"
              dense
              outlined
              disable
            ></q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="Estado"
              type="text"
              label="Estado"
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="descripcion_proyecto"
              label="Descripcion del proyecto"
              outlined
              autogrow
              disable
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="objetivo_proyecto"
              label="Objetivo del proyecto"
              outlined
              autogrow
              disable
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="sector"
              type="text"
              label="Sector"
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="sub_sector"
              type="text"
              label="Sub sector"
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="poolitica_publica"
              type="text"
              label="Politica publica"
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-xs-6 col-md-6">
            <span>Sector Promoción y Protección Humana</span>
          </div>
          <div class="col-xs-6 col-md-6">
            <span>Protección social</span>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="n_resolucion"
              type="text"
              label="N.o resolucion"
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="n_decreto"
              type="text"
              label="N.o decreto"
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-6 col-md-6">
            <q-input
              v-model="fecha_firma"
              type="text"
              label="Fecha firma"
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-6 col-md-6">
            <q-input
              v-model="fecha_efectividad"
              type="text"
              label="Fecha efectividad"
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-6 col-md-6">
            <q-input
              v-model="fecha_inicio"
              type="text"
              label="Fecha inicio"
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-6 col-md-6">
            <q-input
              v-model="fecha_cierre"
              type="text"
              label="Fecha cierre"
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="fecha_cierre_A"
              type="text"
              label="Fecha cierre ampliada"
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="presupuesto"
              type="text"
              label="Presupuestado"
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="ejecucion_total"
              type="text"
              label="Ejecucion total reportada"
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="ejecucion_monitoreada"
              type="text"
              label="Ejecucion monitoreada"
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-12">
            <p id="titulos">CATEGORIZACION DE LOS PARTICIPANTES</p>
          </div>
          <div class="col-12">
            <label style="font-weight: bold">Unidad de accion</label>
            <q-option-group
              :options="options"
              type="checkbox"
              v-model="unidad_accion"
            />
          </div>
          <div class="col-12">
            <label style="font-weight: bold">Genero</label>
            <q-option-group
              :options="generos"
              type="checkbox"
              v-model="genero"
            />
          </div>
          <div class="col-12">
            <label style="font-weight: bold">Area</label>
            <q-option-group :options="areas" type="checkbox" v-model="area" />
          </div>
          <div class="col-12">
            <label style="font-weight: bold"
              >Pueblos originario o afrodescendiente</label
            >
          </div>
          <div class="col-6">
            <q-option-group
              :options="pueblos1"
              type="checkbox"
              v-model="pueblo1"
            />
          </div>
          <div class="col-6">
            <q-option-group
              :options="pueblos2"
              type="checkbox"
              v-model="pueblo2"
            />
          </div>
          <div class="col-12">
            <label style="font-weight: bold">Grupos vulnerable</label>
          </div>
          <div class="col-6">
            <q-option-group
              :options="grup_vulnerables"
              type="checkbox"
              v-model="grup_vulnerable"
            />
          </div>
          <div class="col-6">
            <q-option-group
              :options="grup_vulnerables2"
              type="checkbox"
              v-model="grup_vulnerable2"
            />
          </div>
          <div class="col-12">
            <label style="font-weight: bold">Area de accion</label>
          </div>
          <div class="col-6">
            <q-option-group
              :options="area_acciones1"
              type="checkbox"
              v-model="area_accion1"
            />
          </div>
          <div class="col-6">
            <q-option-group
              :options="area_acciones2"
              type="checkbox"
              v-model="area_accion2"
            />
          </div>
          <div class="col-12">
            <p id="titulos">REGISTROS DATOS DEMOGRAFICOS</p>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="cant_boys"
              type="text"
              label="Cantidad niños "
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="cant_girls"
              type="text"
              label="Cantidad niñas "
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="cant_adulto"
              type="text"
              label="Cantidad adulto mayor "
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="cant_embarazadas"
              type="text"
              label="Cantidad mujeres embarazadas"
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="cant_discapacidad"
              type="text"
              label="Cantidad con discapacidad"
              label-color="primary"
              color="accent"
              outlined
              dense
              disable
            >
            </q-input>
          </div>
          <div class="col-12">
            <p id="titulos">REGISTROS DE ANALISIS</p>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="observaciones"
              label="Observaciones"
              outlined
              autogrow
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="segerencias"
              label="Sugerencias"
              outlined
              autogrow
            />
          </div>
          <div class="col-6">
            <q-btn
              color="red"
              label="Regresar"
              class="pull-right on-left"
              type="submit"
              no-caps
              icon="chevron_left"
              outlined
            />
          </div>
          <div class="col-6">
            <q-btn
              color="blue"
              label="Ingresar"
              class="pull-right on-left"
              type="submit"
              no-caps
              icon="save"
              outlined
            />
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    return {};
  },
  data() {
    return {
      isFullScreen: false,
      filter: ref(''),
      medium: ref(false),
      qeditor: ref(''),
      unidad_accion: ref([]),
      genero: ref([]),
      area: ref([]),
      pueblo1: ref([]),
      pueblo2: ref([]),
      grup_vulnerable: ref([]),
      grup_vulnerable2: ref([]),
      area_accion1: ref([]),
      area_accion2: ref([]),
      options: [
        { label: 'individuos', value: 'bat' },
        { label: 'Hogares', value: 'friend', color: 'bat' },
        { label: 'Familias', value: 'familias', color: 'bat' },
        { label: 'comunidades', value: 'comunidades', color: 'bat' },
        { label: 'infancia', value: 'infancia', color: 'bat' },
      ],
      generos: [
        { label: 'Femenino', value: 'f' },
        { label: 'Masculino', value: 'm', color: 'bat' },
        { label: 'Otros', value: 'o', color: 'bat' },
      ],
      areas: [
        { label: 'Rural', value: 'rural', color: 'bat' },
        { label: 'Urbano', value: 'urbano', color: 'bat' },
      ],
      pueblos1: [
        { label: 'Chorti', value: 'Chorti' },
        { label: 'Lencas', value: 'Lencas', color: 'bat' },
        { label: 'Misquitos', value: 'Misquitos', color: 'bat' },
        { label: 'Negros de habla inglesa', value: 'negros', color: 'bat' },
        { label: 'Nahuait', value: 'Nahuait', color: 'bat' },
      ],
      pueblos2: [
        { label: 'Pech', value: 'Pech' },
        { label: 'Tolupanes', value: 'Tolupanes', color: 'bat' },
        { label: 'Garifunas', value: 'Garifunas', color: 'bat' },
        { label: 'Tawakas', value: 'Tawakas', color: 'bat' },
        { label: 'Sin especificar', value: 'sin_especificar', color: 'bat' },
      ],
      grup_vulnerables: [
        {
          label: 'Mujeres embarazadas',
          value: 'muejeres_embarzadas',
          color: 'bat',
        },
        {
          label: 'Diversidad sexual',
          value: 'diversidad_sexual',
        },
        {
          label: 'Explotacion sexual comercial',
          value: 'explotacion_sexual_comercial',
          color: 'bat',
        },
        {
          label: 'Embarazo Adolescente',
          value: 'embarazo_adolesente',
          color: 'bat',
        },
        { label: 'En pobreza extrema', value: 'pobreza_extrema', color: 'bat' },
      ],
      grup_vulnerables2: [
        { label: 'Adulto Mayor', value: 'adulto_mayor', color: 'bat' },
        { label: 'Discapacidad', value: 'discapacidad', color: 'bat' },
        { label: 'Persona con VIH', value: 'vih', color: 'bat' },
        {
          label: 'Poblacion en situaciones de calle',
          value: 'm',
          color: 'bat',
        },
        {
          label: 'Victimas en violencia',
          value: 'm',
          color: 'bat',
        },
        {
          label: 'En pobreza',
          value: 'm',
          color: 'bat',
        },
      ],
      area_acciones1: [
        {
          label: 'Proteccion social',
          value: 'proteccion_social',
          color: 'bat',
        },
        { label: 'Economia social', value: 'economia_social', color: 'bat' },
        { label: 'Formacion social', value: 'formacion_social', color: 'bat' },
      ],
      area_acciones2: [
        {
          label: 'Inversion social',
          value: 'inversion_social',
          color: 'bat',
        },
        {
          label: 'Desarrollo social',
          value: 'desarrollo_social',
          color: 'bat',
        },
        {
          label: 'Seguridad alimentaria y nutricional',
          value: 'seguridad_alimentaria_nutricional',
          color: 'bat',
        },
      ],
      pagination: {
        rowsPerPage: 20,
      },
    };
  },

  methods: {
    redirect(redirect) {
      this.$router.push(redirect);
    },
    toggleFullScreen() {
      this.isFullScreen = !this.isFullScreen;
    },
  },
};
</script>
<style>
#contenedor_generales {
  background-color: #eceff1;
  border-bottom-width: 4px;
}

#contenedor_2 {
  border-radius: 15px;
  background-color: white;
  padding: 5px 20px;
  margin-bottom: 10px;
}

#titulos {
  font-size: 14px;
  font-weight: bold;
}

.color-picker-container {
  margin-top: 10px;
}

.custom-color-picker {
  appearance: none;
  border: none;
  width: 45px;
  height: 45px;
  border-radius: 50%;
  cursor: pointer;
  outline: none;
  padding: 0;
  margin: 0;
  transition: transform 0.2s ease-in-out;
}

.custom-color-picker::-webkit-color-swatch-wrapper {
  padding: 1;
}

.custom-color-picker::-webkit-color-swatch {
  border: none;
  border-radius: 50%;
  box-shadow: none;
}

.custom-color-picker:hover {
  transform: scale(1.1);
}

.custom-color-picker:focus {
  transform: scale(1.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.cerrar:hover {
  background: #ff5252;
  color: #ffffff;
}

.minim {
  transform: rotate(-180deg);
}

.minim:hover {
  background: #494a4b9f;
  color: #ffffff;
}

.maxi:hover {
  background: #494a4b9f;
  color: #ffffff;
}

.fullscreen-dialog {
  position: fixed;
  top: 0;
  left: 0;
  min-width: 100vw;
  min-height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  z-index: 1000;
}
</style>
