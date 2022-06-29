<template>
<v-app>
    <v-container>
        <v-row style="padding-top:50px">
        <v-col cols="8" sm="8" md="5">
            <v-textarea v-model="query" label="Cypher Query" outlined dense/>
        <v-btn @click="runQuery" style="background-color:cadetblue; color: white"> Run </v-btn>
        <d3-menu :nodes="nodes" :links="links" :options="options" @options="changeOptions" style="padding-top:50px"/>
        </v-col>
        <v-col cols="4" sm="6" md="7">
            <div style="border:1px solid;border-style:solid">
                <h2 style="margin-bottom:20px">  Graph Visualization </h2>
                <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <template v-slot:activator="{ on, attrs}">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on" @click="dialog==true"> Add Node </v-btn>
                    </template>
                    <v-card>
                        <v-card-title> Select Labels </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text> 
                            <v-select outlined dense label="Select Labels" v-bind:items="labels" item-text="label" item-value="value" v-model="label"/>
                        </v-card-text>
                        <v-data-table v-if="show" :headers="headers" :items="items">
                            <template v-slot:item.value="props">
                                <v-text-field v-model="props.item.value"></v-text-field>
                            </template>
                        </v-data-table>
                        <v-card-actions>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="dialog = false"
                            >
                                Close
                            </v-btn>
                            <v-btn
                                color="blue darken-1"
                                text
                                @click="dialog = false"
                            >
                                Save
                            </v-btn>
                            </v-card-actions>
                    </v-card>                   
                </v-dialog> 
                </v-row>
                <d3-network v-if="show" ref='net' :net-nodes="nodes" :net-links="links" :options="options" @node-click="onClick"/>
            </div>
        </v-col>
        </v-row>
    </v-container>
</v-app>
</template>
<script> 
import Vue from 'vue'
import Vuetify from 'vuetify'
import axios from 'axios'
import D3Network from 'vue-d3-network'
import 'vue-d3-network/dist/vue-d3-network.css'
import Swal from 'sweetalert2'
import D3Menu from './Menu.vue'

Vue.use(Vuetify)

export default {
    components: {
        D3Network,
        D3Menu,
    },
    data(){
        return {
            query: '',
            nodes: null,
            links: null,
            nodeSize: 20,
            canvas: false,
            name_employee: '',
            dialog: false,
            show: false,
            options: {
                force: 3000,
                size:{ w:600, h:600},
                nodeSize: 20,
                nodeLabels: true,
                linkLabels: true,
                canvas: false,
                offset: {
                    x:0,
                    y:0
                },
                linkWidth: 1
            },
            labels: [],
            label: '',
            headers: [
                {text: 'Properties', value: 'data'},
                { text: 'Value', value: 'value'}
            ],
            items: [],
            itemsVal: []
        }
    },
    // computed: {
    //     options() {
    //         return {
    //             force: 3000,
    //             size:{ w:600, h:600},
    //             nodeSize: this.nodeSize,
    //             nodeLabels: true,
    //             linkLabels:true,
    //             canvas: this.canvas
    //         }
    //     }
    // },
    watch: {
        'label': async function(val) {
            for(const item of this.labels) {
                if(item.value == val) {
                    this.show = true
                    this.label = item.label
                    await axios.get('http://localhost:5000/api/v1/label/properties', {
                        params: {
                            n: this.label
                        }
                    }).then((res) => {
                        this.items = res.data.data
                        console.log(this.items)
                    })
                }
            }
        },
    },
    created(){
        this.getLabels()
        // this.getDataProperties()
    },

    methods: {
        async runQuery() {
            this.show = true
            let res = await axios.post('http://localhost:5000/api/v1/employee/cypher', {
                statements: [
                    {
                        statement: this.query
                    }
                ]
            })
            if(res) {
                this.links = res.data.data.links
                this.nodes = res.data.data.nodes
            }
        },
        onClick(event, node) {
            console.log('a')
            if(node.label == 'Employee') {
                Swal.fire(
                    {
                        title: 'Employee',
                        html: '<p> Name: ' + node.name + '</p>'
                    }
                )
            } else if(node.label == 'Project') {
                Swal.fire({
                    title: 'Project',
                    html: '<p> Project Name: ' + node.name + '</p>'
                })
            } else if(node.label == 'Relationship') {
                Swal.fire({
                    title: 'Links',
                    html: '<p> Roles: ' + node.properties + '</p>'
                })
            }
        },
        changeOptions(options) {
            this.options = Object.assign({}, options)
            console.log(this.options)
        },
        async getLabels(){
            // this.show = true
            if(this.label == '') {
                this.show = false
            }
            let res = await axios.get('http://localhost:5000/api/v1/label')
            if(res.status == 200) {
                this.labels = res.data.data
            }
        },
        // async getDataProperties() {
        //     let res = await axios.get('http://localhost:5000/api/v1/label/properties?n=Employee')
        //     if(res.status == 200) {
        //         this.items = res.data.data
        //     }
        // }
    }
}
</script>
<style scoped>
#cyto {
  height: 100%;
  display: block;
  border: 1px solid blue;
}
h2 {
    font-family: 'Courier New', Courier, monospace;
    background-color: cadetblue;
    font-weight: 600;
    text-align: center;
}
</style>