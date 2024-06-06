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
          <div class="col-12 col-md-4">
            <q-input
              v-model="EjecucionMonitoreada"
              type="text"
              label="Ejecucion monitoreada"
              label-color="primary"
              color="accent"
              outlined
              dense
            >
            </q-input>
          </div>
          <div class="col-12">
            <p id="titulos">CATEGORIZACION DE LOS PARTICIPANTES</p>
          </div>
          <div class="col-12" v-if="datoslista.unidades">
            <label style="font-weight: bold">Unidad de accion</label>
            <q-option-group
              :options="datoslista.unidades"
              type="checkbox"
              v-model="unidad_accion"
            />
          </div>
          <div class="col-12" v-if="datoslista.generos">
            <label style="font-weight: bold">Genero</label>
            <q-option-group
              :options="datoslista.generos"
              type="checkbox"
              v-model="genero"
            />
          </div>
          <div class="col-12" v-if="datoslista.areas">
            <label style="font-weight: bold">Area</label>
            <q-option-group
              :options="datoslista.areas"
              type="checkbox"
              v-model="area"
            />
          </div>
          <div class="col-12" v-if="datoslista.generos">
            <label style="font-weight: bold"
              >Pueblos originario o afrodescendiente</label
            >
            <q-option-group
              :options="datoslista.gruposoriginarios"
              type="checkbox"
              v-model="pueblo"
            />
          </div>
          <div class="col-12" v-if="datoslista.generos">
            <label style="font-weight: bold">Grupos vulnerable</label>
            <q-option-group
              :options="datoslista.vulnerables"
              type="checkbox"
              v-model="grup_vulnerable"
            />
          </div>
          <div class="col-12" v-if="datoslista.generos">
            <label style="font-weight: bold">Area de accion</label>
            <q-option-group
              :options="datoslista.areaaccion"
              type="checkbox"
              v-model="area_accion"
            />
          </div>
          <div class="col-12" v-if="datoslista.generos">
            <label style="font-weight: bold">Area de accion</label>
            <q-option-group
              :options="datoslista.edades"
              type="checkbox"
              v-model="edadlist"
            />
          </div>
          <div class="col-12">
            <p id="titulos">REGISTROS DATOS DEMOGRAFICOS</p>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="CantidadNinos"
              type="text"
              label="Cantidad niños "
              label-color="primary"
              color="accent"
              outlined
              dense
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="CantidadNinas"
              type="text"
              label="Cantidad niñas "
              label-color="primary"
              color="accent"
              outlined
              dense
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="CantidadAdultoMayor"
              type="text"
              label="Cantidad adulto mayor "
              label-color="primary"
              color="accent"
              outlined
              dense
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="CantidadMujeresEmbarazadas"
              type="text"
              label="Cantidad mujeres embarazadas"
              label-color="primary"
              color="accent"
              outlined
              dense
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="CantidadDiscapacidad"
              type="text"
              label="Cantidad con discapacidad"
              label-color="primary"
              color="accent"
              outlined
              dense
            >
            </q-input>
          </div>
          <div class="col-12">
            <p id="titulos">REGISTROS DE ANALISIS</p>
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="Observaciones"
              label="Observaciones"
              outlined
              autogrow
            />
          </div>
          <div class="col-12 col-md-6">
            <q-input
              v-model="Sugerencias"
              label="Sugerencias"
              outlined
              autogrow
            />
          </div>

          <div class="col-12">
            <q-btn label="Get Coordinates" @click="getCoordinates" />
            <div v-if="coordinates">
              <div class="col-12 col-md-6">
                <q-input
                  v-model="coordinates.latitude"
                  label="Latitud"
                  outlined
                  autogrow
                  disable
                />
              </div>
              <div class="col-12 col-md-6">
                <q-input
                  v-model="coordinates.longitude"
                  label="Longitud"
                  outlined
                  autogrow
                  disable
                />
              </div>
            </div>
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
              @click="guardarinfo"
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
import { useStore } from '../../stores/login';

export default {
  setup() {
    const store = useStore();
    return { store };
  },
  data() {
    return {
      coordinates: null,
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
    toggleFullScreen() {
      this.isFullScreen = !this.isFullScreen;
    },
    guardarinfo() {
      const listadounidades = this.datoslista.unidades.map((item) => ({
        id: item.value,
        check: this.unidad_accion.includes(item.value),
      }));

      const listadogeneros = this.datoslista.generos.map((item) => ({
        id: item.value,
        check: this.genero.includes(item.value),
      }));

      const listadoareas = this.datoslista.areas.map((item) => ({
        id: item.value,
        check: this.area.includes(item.value),
      }));

      const listadopueblos = this.datoslista.gruposoriginarios.map((item) => ({
        id: item.value,
        check: this.pueblo.includes(item.value),
      }));

      const listadovulnerables = this.datoslista.vulnerables.map((item) => ({
        id: item.value,
        check: this.grup_vulnerable.includes(item.value),
      }));

      const listadoareasaccion = this.datoslista.areaaccion.map((item) => ({
        id: item.value,
        check: this.area_accion.includes(item.value),
      }));

      const listadoedades = this.datoslista.edades.map((item) => ({
        id: item.value,
        check: this.edadlist.includes(item.value),
      }));

      this.$apiLogin
        .post('/api/EjecucionMonitoreada/Guardarinfo', {
          listadounidades: listadounidades,
          listadogeneros: listadogeneros,
          listadoareas: listadoareas,
          listadopueblos: listadopueblos,
          listadovulnerables: listadovulnerables,
          listadoareasaccion: listadoareasaccion,
          listadoedades: listadoedades,
          IDFicha: this.datos.idFicha,
          IDCodigoInstitucion: this.datos.idInstitucionPorFicha,
          IDComponentePorFicha: this.datos.idcomponentePorFicha,
          Observaciones: this.Observaciones,
          Sugerencias: this.Sugerencias,
          CantidadNinos: this.CantidadNinos,
          CantidadNinas: this.CantidadNinas,
          CantidadAdultoMayor: this.CantidadAdultoMayor,
          CantidadDiscapacidad: this.CantidadDiscapacidad,
          CantidadMujeresEmbarazadas: this.CantidadMujeresEmbarazadas,
          EjecucionReportada: this.datos.ejecutado,
          EjecucionMonitoreada: this.EjecucionMonitoreada,
          Latitude: this.coordinates.latitude,
          Longitude: this.coordinates.longitude,
          empleado:
            this.store.user[
              'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
            ],
        })
        .then(() => {
          this.$swal.fire({
            title: 'Guardado con exito!',
            confirmButtonColor: '#2979ff',
            icon: 'success',
            showConfirmButton: true,
            timer: 3000,
          });
          this.$router.push({ path: '/ejecucion_monitoreada' });
        })
        .catch(() => {
          this.error = 'Ocurrió un error';
          // eslint-disable-next-line no-alert
          alert('Datos Incorrectos..');
        });
    },
    listaitems() {
      this.$apiLogin
        .get('/api/EjecucionMonitoreada/Listaritems')
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

    getCoordinates() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            this.coordinates = {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            };
          },
          (error) => {
            console.error('Error getting location: ', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
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
