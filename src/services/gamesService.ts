import axios from 'axios';


const API_URL_LIBRARY: string = "";

let token: string | null = null;

const setToken: Function = (newToken: String) => {
    token = `bearer ${newToken}`
}

const getUsersGames: Function = async () => {
    const request = await axios.get(API_URL_LIBRARY);
    return request.data;
}

const addNewGameFromGameList: Function = async (game: Object) => {
    const cfg: Object = {
        headers: {
            Authorization: token
        }
    } 
    const request =  await axios.post(API_URL_LIBRARY, game, cfg)
    return request.data;
}

const addNonClientGame: Function = async (game: Object) => {
    const cfg: Object = {
        headers: {
            Authorization: token
        }
    }
    const request = await axios.post(API_URL_LIBRARY, game, cfg)
    return request.data
}

const gameService = {getUsersGames, addNewGameFromGameList, addNonClientGame, setToken}
export default gameService