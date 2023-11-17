import axios from "axios";

export default class PostService{
    static async getAll(limit, page){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/', {
        params: {   
        _page: page,
        _limit: limit,
        }
        });
        return response
    }
} 