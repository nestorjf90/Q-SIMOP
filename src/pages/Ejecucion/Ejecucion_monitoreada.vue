<template>
  <div class="q-pa-md">
    <div class="row q-col-gutter-sm">
      <div class="col-6 col-md-6">
        <q-btn
          color="primary"
          icon="fa-solid fa-file-pdf"
          label="Exportar PDF"
          @click="confirm = true"
          push
          no-caps
        />
      </div>
      <div class="col-6 col-md-6">
        <q-btn
          color="primary"
          icon="fa-regular fa-file-excel"
          label="Exportar XLS"
          @click="confirm = true"
          push
          no-caps
        />
      </div>
      <div class="col-12">
        <q-table
          title="Treats"
          :rows="rows"
          :columns="columns"
          row-key="name"
          selection="multiple"
          v-model:selected="selected"
          :filter="filter"
          grid
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
                    label="Agregar"
                    flat
                    dense
                    @click="redirect('/ingreso_monitoreo')"
                  />
                </q-card-section>
                <q-separator></q-separator>
                <q-list dense>
                  <q-item
                    v-for="col in props.cols.filter(
                      (col) => col.name !== 'desc'
                    )"
                    :key="col.name"
                  >
                    <q-item-section>
                      <q-item-label>{{ col.label }}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-item-label caption>{{ col.value }}</q-item-label>
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
    label: 'Institucion',
    field: 'institucion',
    sortable: true,
  },

  {
    name: 'componente',
    label: 'Componente',
    field: 'componente',
  },
  { name: 'medida', label: 'Unidad de medida', field: 'medida' },
  { name: 'meta', label: 'Meta', field: 'meta' },
  { name: 'moneda', label: 'Moneda', field: 'moneda' },
  { name: 'tasa', label: 'Tasa de cambio', field: 'tasa' },
  { name: 'monto', label: 'Monto', field: 'monto' },
  { name: 'ejecutado', label: 'Ejecutado', field: 'ejecutado' },
  {
    name: 'monto_beneficiario',
    label: 'Monto por beneficiario',
    field: 'monto_beneficiario',
  },
];

const rows = [
  {
    institucion: 'Institucion Hondureño de seguridad social',
    componente: 'Pensiones otorgadas a los drechohabientes',
    meta: 'beneficiar',
    moneda: 'LPS',
    tasa: 24.6,
    monto: '8,089,987',
    ejecutado: '0.00',
    monto_beneficiario: '129,406.75',
  },
  {
    institucion: 'Institucion Hondureño de seguridad social',
    componente: 'Pensiones otorgadas a los drechohabientes',
    meta: 'beneficiar',
    moneda: 'LPS',
    tasa: 24.6,
    monto: '8,089,987',
    ejecutado: '0.00',
    monto_beneficiario: '129,406.75',
  },
  {
    institucion: 'Institucion Hondureño de seguridad social',
    componente: 'Pensiones otorgadas a los drechohabientes',
    meta: 'beneficiar',
    moneda: 'LPS',
    tasa: 24.6,
    monto: '8,089,987',
    ejecutado: '0.00',
    monto_beneficiario: '129,406.75',
  },
];
export default {
  setup() {
    return {
      filter: ref(''),
      selected: ref([]),
      columns,
      rows,
    };
  },
  data() {
    return {
      confirm: ref(false),
      Aseguradoras: [],
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
  created() {},
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
  },
};
</script>
