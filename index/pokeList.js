import Component from '../component.js';
import { PokeItem } from '../index/pokeItem.js';
export class PokeList extends Component{
    onRender(dom) {
        const pokemon = this.props;
        pokemon.props.forEach(pokeme => {
            let props = { name : pokeme.pokemon, image : pokeme.url_image };
            const pokeItem = new PokeItem(props);
            let pokeDOM = pokeItem.renderDOM();
            dom.appendChild(pokeDOM);
        });
    }

    renderHTML(){
        return /*html*/`
        <div class = "image-list">
        </div>
        `;
    }
}