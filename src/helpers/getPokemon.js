import pokemonApi from '../apis/pokemonApi';

const getPokemon = async(name = '') => {

    try {
        const { data } = await pokemonApi.get(`/${name.toLowerCase().trim()}`);
        
        console.log(data);

        return {
            status: true,
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            type: data.types[0].type.name
        }
    } catch (error) {
        return {
            status: false,
            id: null,
            name: null,
            image: null,
            type: null
        }
    }
    



    

}

export default getPokemon;