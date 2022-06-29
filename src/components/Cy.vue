<template>
    <div style="padding-top:150px">
     <!-- <network ref="network"
        :nodes="nodes"
        :edges="edges"
        :options="options">
    </network> -->
    <div id="cy"></div>
    </div>
</template>

<script>
// import { Network } from 'vue-vis-network'
import cytoscape from 'cytoscape'
import img from '../assets/client.jpg'
import pj from '../assets/project.jpg'
import axios from 'axios'
import 'cytoscape-qtip'
import Swal from 'sweetalert2'

export default {
    components: {
        // Network
    },
    data() {
        return {
            // nodes: [
            //     {id: 1,  label: 'circle',  shape: 'circle' },
            //     {id: 2,  label: 'ellipse', shape: 'ellipse'},
            //     {id: 3,  label: 'database',shape: 'database'},
            //     {id: 4,  label: 'box',     shape: 'box'    },
            //     {id: 5,  label: 'diamond', shape: 'diamond'},
            //     {id: 6,  label: 'dot',     shape: 'dot'},
            //     {id: 7,  label: 'square',  shape: 'square'},
            //     {id: 8,  label: 'triangle',shape: 'triangle'},
            // ],
            // edges: [
            //     {from: 1, to: 2},
            //     {from: 2, to: 3},
            //     {from: 2, to: 4},
            //     {from: 2, to: 5}, 
            //     {from: 5, to: 6},
            //     {from: 5, to: 7},
            //     {from: 6, to: 8}
            // ],
            // options: {
            //     nodes: {
            //         borderWidth: 4
            //     },
            //     edges: {
            //         color: 'lightgray'
            //     }
            // }
            nodes: null,
            edges: null
        }
    },
    mounted(){
        // this.getData()
        this.getDatafromApi()
    },
    methods: {
        async getDatafromApi(){
            let res = await axios.get('http://localhost:5000/api/v1/employee/cy')
            if(res) {
                var cy = cytoscape({
                container: document.getElementById('cy'),
                style: [
					{
						selector: 'node',
						css: {
							width: 50,
							height: 50,
							// 'background-color':'#61bffc',
							content: 'data(name)',
                            // 'background-image': img
						}
						
					},
                    {
						selector: 'edge',
						css: {
							// 'background-color':'#61bffc',
							content: 'data(name)',
                            // 'background-image': img
						}
						
					},
                    {
                        selector: '.employee',
                        css: {
                            'background-color':'#61bffc',
                            content: 'data(name)',
                            "background-image": img,
                            "background-width": ["24px", "20px", "20px"],
                            "background-height": ["24px", "20px", "20px"],
                        }
                    },
                    {
                        selector: '.project',
                        css: {
                            content: 'data(name)',
                            "background-image": pj,
                            "background-width": ["24px", "20px", "20px"],
                            "background-height": ["24px", "20px", "20px"],
                        }
                    }
				],
                elements: {
                    nodes: res.data.data.nodes,
                    edges: res.data.data.links
                },
                layout: {
                    name: 'breadthfirst',
                    directed: true,
                    padding: 10,
                    fit: true
                }
            })
            cy.on('tap', '.employee', function(evt){
                var node = evt.target;
                Swal.fire({
                    title: 'Employee',
                    html: '<p> Name: ' + node._private.data.name + '</p> <br/>' +
                        '<p> Status: '+ node._private.data.status + '</p>'
                })
            });
            cy.on('tap', '.project', function(evt){
                var node = evt.target;
                Swal.fire({
                    title: 'Project',
                    html: '<p> Name: ' + node._private.data.name + '</p> <br/>' +
                        '<p> Client: '+ node._private.data.client + '</p> <br/>' + 
                        '<p> Period: '+ node._private.data.period_fr + ' s/d ' + node._private.data.period_to + '</p> <br/>'
                })
            });
            return cy
            }
        },
    }
}
</script>
<style scoped>
    #cy {
        height: 100%;
        width: 100%;
        position: absolute;
        left: 0;
        top: 200;
    }
</style>
