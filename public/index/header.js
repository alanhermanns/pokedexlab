import Component from '../component.js';
export class Header extends Component {
    renderHTML() {
        return /*html*/`
        <section id = "header">
            <h1>PokéDex</h1>
            <p>All the Pokémon</p>
        </section>>`;
    }
}