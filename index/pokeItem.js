import Component from '../component.js';
//import { goGetPokemonGo } from '../service/pokeapi.js'

export class PokeItem extends Component {
    renderHTML(){
        const { name, image, height, weight, attack, defense, hp } = this.props;
        return /*html*/`
    <section class = "image">
        <h5>${name}</h5>
        <img src= ${image}>
    <div class = 'info'>
        <p>Height: ${height}</p>
        <p>Weight: ${weight}</p>
        <p>Attack: ${attack}</p>
        <p>Defense: ${defense}</p>
        <p>HP: ${hp}</p>
        <p>But We Don't Need to Tell You That!</p>
    </div>
    </section>`;
    }
}