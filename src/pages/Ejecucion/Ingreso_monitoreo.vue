<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-sm">
      <q-toolbar class="bg-positive text-white">
        <q-toolbar-title icon="close" glossy
          >Registro de monitoreo</q-toolbar-title
        >
      </q-toolbar>
    </div>

    <q-card>
      <div v-if="loading" class="q-pa-md flex flex-center">
        <q-spinner-hourglass color="red" size="4em"></q-spinner-hourglass>
      </div>
      <div class="q-pa-md" v-else>
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
              v-model="datos.monto"
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
              v-model="datos.ejecutado"
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
              type="number"
              label="Ejecucion monitoreada"
              label-color="primary"
              color="accent"
              outlined
              dense
              :rules="[numberRule]"
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
            <label style="font-weight: bold">Edades</label>
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
              type="number"
              label="Cantidad niños "
              label-color="primary"
              color="accent"
              outlined
              dense
              :rules="[numberRule]"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="CantidadNinas"
              type="number"
              label="Cantidad niñas "
              label-color="primary"
              color="accent"
              outlined
              dense
              :rules="[numberRule]"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="CantidadAdultoMayor"
              type="number"
              label="Cantidad adulto mayor "
              label-color="primary"
              color="accent"
              outlined
              dense
              :rules="[numberRule]"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="CantidadMujeresEmbarazadas"
              type="number"
              label="Cantidad mujeres embarazadas"
              label-color="primary"
              color="accent"
              outlined
              dense
              :rules="[numberRule]"
            >
            </q-input>
          </div>
          <div class="col-12 col-md-4">
            <q-input
              v-model="CantidadDiscapacidad"
              type="number"
              label="Cantidad con discapacidad"
              label-color="primary"
              color="accent"
              outlined
              dense
              :rules="[numberRule]"
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
            <div v-if="position" class="col-12 col-md-6">
              <q-input
                v-model="position.latitude"
                label="Latitud"
                outlined
                autogrow
                disable
              />
            </div>
            <div v-if="position" class="col-12 col-md-6">
              <q-input
                v-model="position.longitude"
                label="Longitud"
                outlined
                autogrow
                disable
                align="left"
              />
            </div>
          </div>
          <div class="col-12">
            <div class="col-12 col-md-6 q-pa-md flex flex-center">
              <q-btn
                label="Tomar Foto"
                @click="takePhoto"
                color="primary"
                class="q-mr-sm"
              />
              <q-btn
                label="Seleccionar desde galeria"
                @click="takePhotoFromGallery"
                color="primary"
                align="right"
              />
            </div>
          </div>

          <div class="col-12">
            <div class="col-12 col-md-6">
              <q-list>
                <q-item v-for="(image, index) in photos" :key="index">
                  <q-item-section
                    @click="viewImage(image.idf + image.imgbase64)"
                  >
                    <q-img
                      :src="image.idf + image.imgbase64"
                      alt="image"
                      width="10"
                      no-native-menu
                    >
                      <div
                        @click.stop="removeImage(index)"
                        class="absolute-bottom text-subtitle1 text-center"
                      >
                        <q-icon name="delete"></q-icon>
                        Eliminar
                      </div>
                    </q-img>
                  </q-item-section>
                </q-item>
              </q-list>
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
              @click="regresar()"
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
              :disabled="isdisable"
            />
          </div>
        </div>
      </div>
    </q-card>
    <q-dialog v-model="isDialogOpen" full-width full-height>
      <q-card class="q-pa-none">
        <q-img :src="currentImage" style="height: 100vh; width: 100%" />
        <q-btn
          icon="close"
          class="absolute-top-right"
          color="negative"
          @click="isDialogOpen = false"
          flat
          round
          dense
        />
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from '../../stores/login';
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

export default {
  mounted() {
    this.getCurrentPosition();
  },
  setup() {
    const store = useStore();
    const photos = ref([]);
    const listadoimagenes = ref([]);
    const isDialogOpen = ref(false);
    const currentImage = ref(null);

    const takePhoto = async () => {
      const image = await Camera.getPhoto({
        source: CameraSource.Camera,
        quality: 90,
        resultType: CameraResultType.Base64,
      });
      photos.value.push({
        format: image.format,
        imgbase64: image.base64String,
        idf: `data:image/${image.format};base64,`,
      });
    };
    const takePhotoFromGallery = async () => {
      const result = await Camera.pickImages({
        quality: 90,
        limit: 10, // Define el límite de imágenes a seleccionar
      });
      result.photos.forEach(async (photo) => {
        photos.value.push({
          format: photo.format,
          imgbase64: await convertWebPathToBase64(photo.webPath),
          idf: `data:image/${photo.format};base64,`,
        });
      });
    };
    const removeImage = (index) => {
      photos.value.splice(index, 1);
    };
    const viewImage = (image) => {
      currentImage.value = image;
      isDialogOpen.value = true;
    };
    const convertWebPathToBase64 = async (webPath) => {
      const response = await fetch(webPath);
      const blob = await response.blob();
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          resolve(reader.result.split(',')[1]);
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
      });
    };
    return {
      store,
      photos,
      takePhoto,
      takePhotoFromGallery,
      removeImage,
      viewImage,
      isDialogOpen,
      currentImage,
      // dataURLtoFile,
      // blobURLtoFile,
      listadoimagenes,
      convertWebPathToBase64,
    };
  },
  data() {
    return {
      loading: false,
      isdisable: false,
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
      numberRule: (val) => !isNaN(val) || 'Solo se permiten numeros',
    };
  },

  methods: {
    setDefaultValue() {
      if (this.numberValue === null || this.numberValue === '') {
        this.numberValue = 0;
      }
    },
    regresar() {
      this.$router.push({ path: '/ejecucion_monitoreada' });
    },
    async getCurrentPosition() {
      try {
        const coordinates = await Geolocation.getCurrentPosition();
        this.position = {
          latitude: coordinates.coords.latitude,
          longitude: coordinates.coords.longitude,
        };
      } catch (e) {
        alert(e);
        this.error = e.message;
      }
    },
    toggleFullScreen() {
      this.isFullScreen = !this.isFullScreen;
    },
    async guardarinfo() {
      this.isdisable = true;
      this.loading = true;
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
      let datosfotos = [];
      await this.photos.forEach((element) => {
        datosfotos.push({
          imgb64: element.imgbase64,
          format: element.format,
        });
      });
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
          CantidadNinos:
            this.CantidadNinos === null || this.CantidadNinos === ''
              ? 0
              : this.CantidadNinos,
          CantidadNinas:
            this.CantidadNinas === null || this.CantidadNinas === ''
              ? 0
              : this.CantidadNinas,
          CantidadAdultoMayor:
            this.CantidadAdultoMayor === null || this.CantidadAdultoMayor === ''
              ? 0
              : this.CantidadAdultoMayor,
          CantidadDiscapacidad:
            this.CantidadDiscapacidad === null ||
            this.CantidadDiscapacidad === ''
              ? 0
              : this.CantidadDiscapacidad,
          CantidadMujeresEmbarazadas:
            this.CantidadMujeresEmbarazadas === null ||
            this.CantidadMujeresEmbarazadas === ''
              ? 0
              : this.CantidadMujeresEmbarazadas,
          EjecucionReportada: this.datos.ejecutado == null ? 0 : 0,
          EjecucionMonitoreada:
            this.EjecucionMonitoreada === null ||
            this.EjecucionMonitoreada === ''
              ? 0
              : this.EjecucionMonitoreada,
          Latitude: this.position.latitude,
          Longitude: this.position.longitude,
          archivos: datosfotos,
          empleado:
            this.store.user[
              'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
            ],
        })
        .then(() => {
          this.isdisable = false;
          this.loading = false;
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
          this.isdisable = false;
          this.error = 'Ocurrió un error';
          // eslint-disable-next-line no-alert
          alert('Datos Incorrectos..');
        });
    },
    listaitems() {
      this.loading = true;
      this.$apiLogin
        .get('/api/EjecucionMonitoreada/Listaritems')
        .then((respuesta) => {
          this.datoslista = respuesta.data;
          this.loading = false;
        })
        .catch(() => {
          this.error = 'Ocurrió un error';
          // eslint-disable-next-line no-alert
          alert('Datos Incorrectos..');
        });
    },
    buscar() {
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
q-img {
  display: block;
  width: 100px; /* Puedes ajustar el tamaño de la imagen */
  height: auto;
  cursor: pointer;
}
</style>
asyncasync
