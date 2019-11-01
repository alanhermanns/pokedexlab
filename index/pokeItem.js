import Component from '../component.js';
//import { goGetPokemonGo } from '../service/pokeapi.js'

export class PokeItem extends Component {
    renderHTML(){
        const { name, image } = this.props;
        return /*html*/`
        <section class = "image">
        <h5>${name}</h5>
        <img src= ${image}>
    </section>`;
    }
}