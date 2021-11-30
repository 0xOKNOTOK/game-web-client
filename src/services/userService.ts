import axios  from 'axios'

const API_URL = ''

const loginPost: Function = async (credentials: object) => {
    const request = await axios.get(API_URL, credentials);
    return request.data;

}

export default loginPost
