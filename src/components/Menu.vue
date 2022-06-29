<template>
    <v-container id="menu">
        <v-row>
            <v-col cols="5">
                <p> Force: {{opts.force}} </p>
                <input type="range" v-model.number="opts.force" @input="change" min="1" max="5000" step="1"/>
            </v-col>
            <v-col cols="7">
                <p> Link Thickness: {{opts.linkWidth}} </p>
                <input type="range" v-model.number="opts.linkWidth" @input="change" min="1" max="20" step="1"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="5">
                <p> Offset-X: {{opts.offset.x}} </p>
                <input type="range" v-model.number="opts.offset.x" @input="change" min="-100" max="100" step="1"/>
            </v-col>
            <v-col cols="7">
                <p> Offset-Y: {{opts.offset.y}} </p>
                <input type="range" v-model.number="opts.offset.y" @input="change" min="-100" max="100" step="1"/>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="5"> 
                <p> Node Labels: <input type="checkbox" v-model="opts.nodeLabels" @input="change"/> <br/> </p>
                <p> Link Labels: <input type="checkbox" v-model="opts.linkLabels" @input="change"/></p>
            </v-col>
            <v-col cols="7" md="4"> 
                <p> Node Size: {{opts.nodeSize}} </p>
                <v-text-field outlined dense type="number" v-model.number="opts.nodeSize" @input="change" min="20" max="100" step="1"/>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.use(Vuetify)

export default {
    name: 'd3-menu',
    props: ['links', 'nodes', 'options'],
    data() {
        let data = {
            options: {
                force: 3000,
                size:{ w:600, h:600},
                nodeSize: 20,
                nodeLabels: true,
                linkLabels: true,
                canvas: false,
                linkWidth: 1,
                offset: {
                    x: 0,
                    y: 0
                }
            }
        }
        return {
            opts: data.options,

        }
    },
    created() {
        this.opts = this.options
    },
    methods: {
        change() {
            this.$emit('options', this.opts)
        }
    }
}
</script>
<style scoped>
p {
    /* padding-top: 20px; */
    font-family: 'Courier New', Courier, monospace;
}
#menu {
    border: 1px solid;
    border-style: dashed;
    margin-top: 30px;
}
</style>