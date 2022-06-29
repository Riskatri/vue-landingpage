<template>
<div class="layout">
    <nav v-bind:class="active" v-on:click.prevent>
        <a href="#" class="d3" v-on:click="viz1('d3')">D3-Graph</a>
        <a href="#" class="neovis" v-on:click="neovis">Neovis</a>
        <a href="#" class="cy" v-on:click="cy">Cytoscape</a>
        <a href="#" class="cy" v-on:click="sigma">Sigma</a>
        <a href="#" class="contact" v-on:click="cpr">Cypher Query</a>
        <a href="#" class="contact" v-on:click="superset">Superset</a>
    </nav>
    <div v-if="vis1"> <d3-network ref='net' :net-nodes="nodes" :net-links="links" :options="options" @node-click="onClick" /> </div>
    <v-btn text class="pink lighten-3" @click="neovis" disabled>Graph Visualization Using Library</v-btn>
</div>
</template>

<script>
import Vuetify from 'vuetify'
import Vue from 'vue'
import { mapActions } from 'vuex'
import D3Network from 'vue-d3-network'
import 'vue-d3-network/dist/vue-d3-network.css'
import axios from 'axios'
import Swal from 'sweetalert2'
import 'cytoscape-qtip'

Vue.use(Vuetify)

export default {
    components: {
        // LandingPage,
        D3Network
    },
    // computed: {
    // ...mapGetters(['isLoggedIn'])
    // },
    data() {
        return {
            title: 'P H Y S I C S',
            active: 'd3',
            nodes: null,
            links: null,
            nodeSize: 20,
            canvas: false,
            name_employee: '',
            dialog: false,
            vis1: true,
            edges: null,
            cypher: false,
            data: {
                query: ''
            }
        }
    },
    computed: {
        options() {
            return {
                force: 3000,
                size:{ w:600, h:600},
                nodeSize: this.nodeSize,
                nodeLabels: true,
                linkLabels:true,
                canvas: this.canvas
            }
        }
    },
    created(){
        this.getData()
        // this.draw()
    },
    methods: {
        ...mapActions(['logout']),
        neovis() {
            this.$router.push('/neovis')
        },
        d3(){
            this.$router.push('/d3-graph')
        },
        cpr() {
            this.$router.push('/cypher')
        },
        cy(){
            this.$router.push('/ppt')
        },
        sigma() {
            this.$router.push('/sigma')
        },
        superset() {
            this.$router.push('/dashboard')
        },
        logoutUser() {
            this.logout()
        },
        makeActive(item){
            console.log(item)
			// When a model is changed, the view will be automatically updated.
			this.active = item;
            this.cypher = true
            this.vis1 = false
		},
        viz1(item){
            this.active = item
            this.vis1 = true
        },
        async getData() {
            let res = await axios.get('http://localhost:5000/api/v1/employee')
            if (res) {
                this.links = res.data.data.links
                this.nodes = res.data.data.nodes
            }
        },
        onClick(event, node) {
            if(node.label == 'Employee') {
                Swal.fire(
                    {
                        title: 'Employee',
                        html: '<p> name: ' + node.name + '</p>'
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
    },
}
</script>

<style scoped>
    #viz {
        width: 100%;
        height: 700px;
    }
    #cy {
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 200;
    }
    .layout {
        padding-right: 50%;
    }
    body{
        font:15px/1.3 'Open Sans', sans-serif;
        color: #5e5b64;
        text-align:center;
    }

    a, a:visited {
        outline:none;
        color:#389dc1;
    }

    a:hover{
        text-decoration:none;
    }

    section, footer, header, aside, nav{
        display: block;
    }

/*-------------------------
	The menu
--------------------------*/

nav{
	display:inline-block;
	margin:60px auto 45px;
	background-color:#5597b4;
	box-shadow:0 1px 1px #ccc;
	border-radius:2px;
}

nav a{
	display:inline-block;
	padding: 18px 30px;
	color:#fff !important;
	font-weight:bold;
	font-size:16px;
	text-decoration:none !important;
	line-height:1;
	text-transform: uppercase;
	background-color:transparent;

	-webkit-transition:background-color 0.25s;
	-moz-transition:background-color 0.25s;
	transition:background-color 0.25s;
    }

    nav a:first-child{
        border-radius:2px 0 0 2px;
    }

    nav a:last-child{
        border-radius:0 2px 2px 0;
    }

    nav.d3 .d3,
    nav.neovis .neovis,
    nav.cy .cy,
    nav.contact .contact{
        background-color:#e35885;
    }

    p{
        font-size:22px;
        font-weight:bold;
        color:#7d9098;
    }

    p b{
        color:#ffffff;
        display:inline-block;
        padding:5px 10px;
        background-color:#c4d7e0;
        border-radius:2px;
        text-transform:uppercase;
        font-size:18px;
    }

</style>