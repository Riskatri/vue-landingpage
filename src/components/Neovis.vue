<template>
<div>
    <section id="viz">
    </section>
</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import NeoVis from 'neovis.js';
// import LandingPage from './LandingPage.vue'
import imgProject from '../assets/project.jpg'
import client from '../assets/client.jpg'

export default {
    components: {
        // LandingPage,
    },
    computed: {
    ...mapGetters(['isLoggedIn'])
    },
    data() {
        return {
            title: 'P H Y S I C S',
        }
    },
    methods: {
        ...mapActions(['logout']),
        signIn() {
            this.$router.push('/register')
        },
        logoutUser() {
        this.logout()
        },
        draw() {
            var config = {
                container_id: "viz",
                server_url: "bolt://localhost:7687",
                server_user: "neo4j",
                server_password: "1234",
                labels: {
                    "Project": {
                        caption: 'project_name',
                        size: "total_employee",
                        image: imgProject,
                        community: "total_employee",
                        title_properties: [
                            "project_name",
                            "total_employee"
                        ]
                    },
                    "Employee": {
                        // caption: "name",
                        size: "total_project",
                        image: "https://i.ibb.co/qMKW1R2/pnspolri-ico.png",
                        title_properties: [
                            "name" ,
                            "status",
                            "total_project"
                        ],
                        "font": {
                                "size":20,
                        },  
                        community: "total_project"          
                    },
                    "Client": {
                        caption: 'client',
                        image: client,
                        size: '50px'
                    }
                },
                relationships: {
                    // "PARTNER": {
                    //     caption: true,
                    //     thickness: "count"
                    // },
                    "ACTED_IN": {
                        caption: false,
                        thickness: 'jumlah',
                    },
                    "CLIENT": {
                        thickness: '5px'
                    }
                },
                initial_cypher: "MATCH p=()-[r:ACTED_IN]->() RETURN p, count(*) as jumlah LIMIT 25",
                arrows: false,
                // hierarchical: true
            }

            var viz = new NeoVis(config);
            viz.render();
        }
    },
    mounted(){
        this.draw()
    }
}
</script>

<style scoped>
    #viz {
        width: 100%;
        height: 700px;
    }
</style>