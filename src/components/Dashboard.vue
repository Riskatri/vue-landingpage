<template>
<v-app>
  <v-container fluid>
    <v-row>
        <v-col cols="12" class="p-0">
        <v-col cols="6" class="p-0">
            <v-select
                item-text="text"
                item-value="value"
                :items="items"
                v-model="dashboard"
                label="Dashboard"
                outlined
                dense
            />
        </v-col>
        <v-col cols="6" class="p-0">
           <v-text-field v-model="tahun"
           outlined dense
           label="Tahun"
           />
        </v-col>
        <v-col cols="6">
            <v-btn text class="btn btn-primary" small @click="onLink" color="primary" :href="link"
             target="_blank"
            >Dashboard</v-btn>
        </v-col>
        </v-col>
      <!-- <v-col cols="12" md="12" sm="12" xs="12">
        <v-card style="height: 330vh;">
          <v-card-text>
            <img src="../assets/capture2.png" />
            <iframe
              width="100%"
              height="2000"
              seamless
              frameBorder="0"
              :src="superset_url"
              style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px"
            ></iframe>
          </v-card-text>
        </v-card>
        <v-card style="height: 330vh;">
          <v-card-text>
            <iframe
              width="100%"
              height="2000"
              seamless
              frameBorder="0"
              :src="superset_url"
              style="overflow:hidden;overflow-x:hidden;overflow-y:hidden;height:100%;width:100%;position:absolute;top:0px;left:0px;right:0px;bottom:0px"
            ></iframe>
          </v-card-text>
        </v-card>
      </v-col> -->
    </v-row>
  </v-container>
</v-app>
</template>>

<script>
// import cap from '../assets/capture2.png'

  export default {
    data: () => ({
      superset_url: 'http://165.232.163.63/superset/dashboard/10/?native_filters_key=fGaLDEOdDQRO238CjzK8uBpNrH5ktHTRz9WVqeV3ESRlNgZTilh7Dfs0tSwo0-X7?standalone=true',
    //   img: cap,
      tahun: '',
      items: [ {
          text: 'Dashboard Gudang Depoharkan',
          value: '01'
      }, 
        {
          text: 'Dashboard Pergerakan Keluar Masuk Aset',
          value: '02'
        }
      ],
      dashboard: '',
      link: ''
    }),
    methods: {
        onLink() {
            switch(this.dashboard) {
                case '01':
                    this.link = `http://165.232.163.63/superset/dashboard/14/?native_filters=(NATIVE_FILTER-z01b_o5au:(__cache:(label:'${this.tahun}',validateStatus:!f,value:!('${this.tahun}')),extraFormData:(filters:!((col:tahun_pengadaan,op:IN,val:!('${this.tahun}')))),filterState:(label:'${this.tahun}',validateStatus:!f,value:!('${this.tahun}')),id:NATIVE_FILTER-z01b_o5au,ownState:()))`
                break
                case '02': 
                    this.link = `http://165.232.163.63/superset/dashboard/5/?native_filters=(NATIVE_FILTER-c7cfFUGyD:(__cache:(label:'${this.tahun}',validateStatus:!f,value:!('${this.tahun}')),extraFormData:(filters:!((col:tahun_pengadaan,op:IN,val:!('${this.tahun}')))),filterState:(label:'${this.tahun}',validateStatus:!f,value:!('${this.tahun}')),id:NATIVE_FILTER-c7cfFUGyD,ownState:()))`
                break
                default: break
            }
        }
    }
  }
</script>

<style scoped>
</style>
