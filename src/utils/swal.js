import Vue from 'vue'
import VueSweetalert2 from 'vue-sweetalert2'

Vue.use(VueSweetalert2)

export default {
    toast (message) {
        Vue.swal({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 3000,
          type: 'success',
          title: 'Info:',
          text: message,
        })
    },
    success (message) {
        Vue.swal(
            'success',
            message || 'Success',
            'success'
        )
    },
    error (message) {
        Vue.swal(
            'Oops..',
            message || 'error',
            'error'
        )
    }
}