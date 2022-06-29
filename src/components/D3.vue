<template>
    <div>
    <d3-network ref='net' :net-nodes="nodes" :net-links="links" :options="options" @node-click="onClick" />
    </div>
</template>

<script>
import D3Network from 'vue-d3-network'
import 'vue-d3-network/dist/vue-d3-network.css'
import axios from 'axios'
import Swal from 'sweetalert2'


export default {
    components: {
        D3Network
    },
    data() {
        return {
            nodes: null,
            links: null,
            nodeSize: 20,
            canvas: false,
            name_employee: '',
            dialog: false
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
    created() {
        this.getData()
    },
    methods: {
        async getData() {
            let res = await axios.get('http://localhost:5000/api/v1/employee')
            if (res) {
                this.links = res.data.data.links
                this.nodes = res.data.data.nodes
            }
            console.log(this.links)
            console.log(this.nodes)
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
        }
    }
}
</script>
<style scoped>
#cyto {
  height: 100%;
  display: block;
  border: 1px solid blue;
}
</style>