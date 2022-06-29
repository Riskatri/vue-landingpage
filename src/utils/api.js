import axios from 'axios';
export default {
    async get(url, params, callback) {
        let data = await axios.get(url, {params})
            .then(res => {
                if (callback) {
                    return callback(res, null)
                }
                return res
            }).catch(error => {
                if(callback) {
                    return callback(error.res, error)
                }
            })
        return data
    }
}