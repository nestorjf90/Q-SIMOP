<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-sm">
      <div class="col-12">
        <q-select
          v-model="selectedYear"
          :options="yearOptions"
          label="Selecionar año"
          @update:model-value="buscar(selectedYear)"
          outlined
          dense
        />
      </div>
      <div class="q-pa-md">
        <q-table
          flat
          bordered
          grid
          title="Lista de prioridad de monitoreo de programas"
          :rows="rows"
          :columns="columns"
          row-key="name"
          :filter="filter"
          hide-header
        >
          <template v-slot:top-right>
            <q-input
              borderless
              dense
              debounce="300"
              v-model="filter"
              placeholder="Search"
            >
              <template v-slot:append>
                <q-icon name="search"></q-icon>
              </template>
            </q-input>
          </template>

          <template v-slot:item="props">
            <div
              class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3 grid-style-transition"
              :style="props.selected ? 'transform: scale(0.95);' : ''"
            >
              <q-card
                bordered
                flat
                :class="
                  props.selected
                    ? $q.dark.isActive
                      ? 'bg-grey-9'
                      : 'bg-grey-2'
                    : ''
                "
              >
                <q-card-section>
                  <q-btn
                    color="primary"
                    icon="add"
                    label="Monitorear"
                    flat
                    dense
                    @click="
                      redirect(
                        `/ingreso_monitoreo/${props.row.idComponentePorFicha}`
                      )
                    "
                  />
                </q-card-section>
                <q-separator></q-separator>
                <q-list dense>
                  <q-item
                    v-for="col in props.cols.filter(
                      (col) => col.name !== 'desc'
                    )"
                    :key="col.name"
                    style="text-align: initial"
                  >
                    <q-item-section>
                      <p>
                        <strong>{{ col.label }}</strong>
                      </p>
                    </q-item-section>
                    <q-item-section>
                      <p>{{ col.value }}</p>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card>
            </div>
          </template>
        </q-table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
const columns = [
  {
    name: 'institucion',
    label: 'Institución',
    field: 'descripcionInstitucion',
    sortable: true,
  },

  {
    name: 'componente',
    label: 'Componente',
    field: 'descripcionComponente',
  },
  { name: 'medida', label: 'Unidad de medida', field: 'unidadM' },
  { name: 'meta', label: 'Meta', field: 'meta' },
  { name: 'moneda', label: 'Moneda', field: 'moneda' },
  { name: 'tasa', label: 'Tasa de cambio', field: 'tasaDeCambio' },
  { name: 'monto', label: 'Monto', field: 'monto' },
  { name: 'ejecutado', label: 'Ejecutado', field: 'ejecutado' },
  {
    name: 'monto_beneficiario',
    label: 'Monto por beneficiario',
    field: 'montoPorBeneficiario',
  },
];
export default {
  setup() {
    return {
      filter: ref(''),
      selected: ref([]),
      columns,
    };
  },
  data() {
    return {
      confirm: ref(false),
      yearOptions: this.generateYearOptions(),
      Aseguradoras: [],
      rows: [],
      selectedYear: new Date().getFullYear(),
      dataCompany: {
        rtn: null,
        numerotelefono: null,
        nombre: null,
        direccion: null,
        email: null,
        codigo_productor: null,
        comision_porcentaje: null,
      },
      editedIndex: -1,
    };
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  created() {
    this.buscar(new Date().getFullYear());
  },
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'Agregar ejecución' : 'Actualizar Datos';
    },
  },
  watch: {
    confirm(val) {
      val || this.close();
    },
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    redirect(redirect) {
      this.$router.push(redirect);
    },
    generateYearOptions() {
      const currentYear = new Date().getFullYear();
      const startYear = currentYear - 10; // Cambia esto si necesitas otro rango de años
      const years = [];
      for (let year = currentYear; year >= startYear; year--) {
        years.push(year);
      }
      return years;
    },
    buscar(anio) {
      this.rows = [];
      this.$api
        .get(`api/EjecucionMonitoreada/ListarsdsPrioridades/${anio}`)
        .then((respuesta) => {
          this.rows = respuesta.data;
        })
        .catch(() => {
          this.error = 'Ocurrió un error';
          // eslint-disable-next-line no-alert
          alert('Datos Incorrectos..');
        });
    },
  },
};
</script>
