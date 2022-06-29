<template>
    <div id="sigma-container"></div>
</template>
<script>
import sigma from 'sigma'
import 'graphology'

export default {
    methods: {
        getGraph(){
            var s = new sigma({
                rendered: {
                    container: document.getElementById('sigma-container'),
                    type: 'canvas'
                },
                settings: {
                    minArrowSize: 10,
                }
            })
            var nbNode = 50;
            var nbEdge = 100;
            var graph = {
            nodes: [],
            edges: []
            };
            for (let i = 0; i < nbNode; i++) {
                graph.nodes.push({ 
                    id:  i,
                    label: 'Node ' + i,
                    x: Math.random(),
                    y: Math.random(),
                    size: 1,
                    color: '#EE651D'
                });
            }
            for (let i = 0; i < nbEdge; i++) {
                graph.edges.push({ 
                    id: i, 
                    source: '' + (Math.random() * nbNode | 0), 
                    target: '' + (Math.random() * nbNode | 0),
                    color: '#202020',
                    type: 'curvedArrow'
                });
            }

            // load the graph
        s.graph.read(graph);
        // draw the graph
        s.refresh();
        // launch force-atlas for 5sec
        s.startForceAtlas2();
        window.setTimeout(function() {s.killForceAtlas2()}, 10000);
        }
    },
    mounted(){
        this.getGraph()
    }
}
</script>

<style scoped>
#sigma-container { width:100%; height:100%; background-color:#E1E1E1}
</style>