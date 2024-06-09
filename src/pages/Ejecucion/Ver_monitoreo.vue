<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-sm">
      <q-toolbar class="bg-positive text-white">
        <q-toolbar-title icon="close" glossy>Monitoreo</q-toolbar-title>
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
              v-model="datos.nombreProyecto"
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
              v-model="datos.estado"
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
              v-model="datos.descripcionGeneralProyecto"
              label="Descripcion del proyecto"
              outlined
              autogrow
              disable
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="datos.objetivoGeneralProyecto"
              label="Objetivo del proyecto"
              outlined
              autogrow
              disable
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="datos.numeroResolucionCongreso"
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
              v-model="datos.numeroRatificacionCongreso"
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
              v-model="datos.fechaFirma"
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
              v-model="datos.fechaEfectividad"
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
              v-model="datos.FechaInicio"
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
              v-model="datos.fechaCierre"
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
              v-model="datos.fechaCierreAmpliada"
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
          <div class="col-12 col-md-4" v-if="datoslista.monitoreo">
            <q-input
              v-model="datoslista.monitoreo.ejecucionMonitoreada"
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
          <label style="font-weight: bold">Unidad de accion</label>
          <div class="col-12">
            <q-checkbox
              v-for="unidad in datoslista.unidades"
              :key="unidad.label"
              v-model="unidad.value"
              :label="unidad.label"
              disable
            />
          </div>
          <div class="col-12" v-if="datoslista.generos">
            <label style="font-weight: bold">Genero</label>
            <q-checkbox
              v-for="item in datoslista.generos"
              :key="item.label"
              v-model="item.value"
              :label="item.label"
              disable
            />
          </div>
          <div class="col-12" v-if="datoslista.areas">
            <label style="font-weight: bold">Area</label>
            <q-checkbox
              v-for="item in datoslista.areas"
              :key="item.label"
              v-model="item.value"
              :label="item.label"
              disable
            />
          </div>
          <div class="col-12" v-if="datoslista.generos">
            <label style="font-weight: bold"
              >Pueblos originario o afrodescendiente</label
            >
            <q-checkbox
              v-for="item in datoslista.gruposoriginarios"
              :key="item.label"
              v-model="item.value"
              :label="item.label"
              disable
            />
          </div>
          <div class="col-12" v-if="datoslista.generos">
            <label style="font-weight: bold">Grupos vulnerable</label>
            <q-checkbox
              v-for="item in datoslista.vulnerables"
              :key="item.label"
              v-model="item.value"
              :label="item.label"
              disable
            />
          </div>
          <div class="col-12" v-if="datoslista.generos">
            <label style="font-weight: bold">Area de accion</label>
            <q-checkbox
              v-for="item in datoslista.areaacion"
              :key="item.label"
              v-model="item.value"
              :label="item.label"
              disable
            />
          </div>
          <div class="col-12" v-if="datoslista.generos">
            <label style="font-weight: bold">Area de accion</label>
            <q-checkbox
              v-for="item in datoslista.edades"
              :key="item.label"
              v-model="item.value"
              :label="item.label"
              disable
            />
          </div>
          <div class="col-12">
            <p id="titulos">REGISTROS DATOS DEMOGRAFICOS</p>
          </div>
          <div class="col-12 col-md-4" v-if="datoslista.monitoreo">
            <q-input
              v-model="datoslista.monitoreo.cantidadNinos"
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
          <div class="col-12 col-md-4" v-if="datoslista.monitoreo">
            <q-input
              v-model="datoslista.monitoreo.cantidadNinas"
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
          <div class="col-12 col-md-4" v-if="datoslista.monitoreo">
            <q-input
              v-model="datoslista.monitoreo.cantidadAdultoMayor"
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
          <div class="col-12 col-md-4" v-if="datoslista.monitoreo">
            <q-input
              v-model="datoslista.monitoreo.cantidadMujeresEmbarazadas"
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
          <div class="col-12 col-md-4" v-if="datoslista.monitoreo">
            <q-input
              v-model="datoslista.monitoreo.cantidadDiscapacidad"
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
          <div class="col-12 col-md-6" v-if="datoslista.monitoreo">
            <q-input
              v-model="datoslista.monitoreo.observaciones"
              label="Observaciones"
              outlined
              autogrow
              disable
            />
          </div>
          <div class="col-12 col-md-6" v-if="datoslista.monitoreo">
            <q-input
              v-model="datoslista.monitoreo.sugerencias"
              label="Sugerencias"
              outlined
              autogrow
              disable
            />
          </div>

          <div class="col-12">
            <div>
              <div class="col-12 col-md-6" v-if="datoslista.monitoreo">
                <q-input
                  v-model="datoslista.monitoreo.latitude"
                  label="Latitud"
                  outlined
                  autogrow
                  disable
                />
              </div>
              <div class="col-12 col-md-6" v-if="datoslista.monitoreo">
                <q-input
                  v-model="datoslista.monitoreo.longitude"
                  label="Longitud"
                  outlined
                  autogrow
                  disable
                />
              </div>
            </div>
          </div>

          <div class="col-12" v-if="datoslista.monitoreo">
            <q-page-container>
              <MapComponent
                :lat="datoslista.monitoreo.latitude"
                :lng="datoslista.monitoreo.longitude"
              />
            </q-page-container>
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
              @click="regresar()"
            />
          </div>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from '../../stores/login';
import MapComponent from 'components/MapLea.vue';

export default {
  components: {
    MapComponent,
  },
  setup() {
    const store = useStore();
    return { store };
  },
  data() {
    return {
      position: null,
      coordinates: {},
      datos: [],
      datoslista: [],
      isFullScreen: false,
      filter: ref(''),
      medium: ref(false),
      qeditor: ref(''),
      unidad_accion: ref([]),
      genero: ref([]),
      area: ref([]),
      pueblo: ref([]),
      grup_vulnerable: ref([]),
      area_accion: ref([]),
      edadlist: ref([]),
      pagination: {
        rowsPerPage: 20,
      },
      Observaciones: '',
      Sugerencias: '',
      CantidadNinos: 0,
      CantidadNinas: 0,
      CantidadAdultoMayor: 0,
      CantidadDiscapacidad: 0,
      CantidadMujeresEmbarazadas: 0,
      EjecucionMonitoreada: 0,
    };
  },

  methods: {
    regresar() {
      this.$router.push({ path: '/ingresos' });
    },
    toggleFullScreen() {
      this.isFullScreen = !this.isFullScreen;
    },
    listaitems() {
      this.$apiLogin
        .get(
          `/api/EjecucionMonitoreada/ListaritemsGuardados?id=${this.$route.params.idmonitoreo}`
        )
        .then((respuesta) => {
          this.datoslista = respuesta.data;
        })
        .catch(() => {
          this.error = 'Ocurrió un error';
          // eslint-disable-next-line no-alert
          alert('Datos Incorrectos..');
        });
    },
    buscar() {
      this.rows = [];
      this.$apiLogin
        .get(
          `/api/EjecucionMonitoreada/ListarDatosFichasDTO/${this.$route.params.id}`
        )
        .then((respuesta) => {
          this.datos = respuesta.data;
        })
        .catch(() => {
          this.error = 'Ocurrió un error';
          // eslint-disable-next-line no-alert
          alert('Datos Incorrectos..');
        });
    },
  },
  created() {
    this.buscar();
    this.listaitems();
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
