import axios from "axios";

let host = 'localhost'
let port = '38080'
let http = 'http://'

export default class Server{

    static async getAll(){
        const resp = await axios.get(http+host+':'+port+'/api/facts')
        return resp;
    }

    static async getById(id){
        const resp = await (
            await axios.get(
                http+host+':'+port+'/api/fact/'+id
                )
            ).data
        return resp;
    }

    static async addNew(data){
        const resp = await (
            await axios.post(
                http+host+':'+port+'/api/facts', data
            )
        ).data
        alert(resp)
        return resp;
    }

    static async getRecommendation(fact_id){
        const resp = await (
            await axios.get(
                http+host+':'+port+'/api/fact/get-recommendation/'+fact_id
                )
        )
        return resp
    }

    static async deleteFact(fact_id){
        const resp = await (
            await axios.delete(
                http+host+':'+port+'/api/fact/'+fact_id
            )
        ).data
        return resp
    }
}