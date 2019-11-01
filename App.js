import Component from '../component.js';
import { goGetPokemonGo } from './service/pokeapi.js';
import { Header } from './index/header.js';
import { PokeList } from './index/pokeList.js';

export class App extends Component{
    async onRender(dom) {
        
        const header = new Header;
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);
        
        let pokemon = { props: [] };
        const pokeList = new PokeList(pokemon);
        const pokeListDOM = pokeList.renderDOM();
        dom.append(pokeListDOM);
        const rawPokeJsonResponse = await goGetPokemonGo();

        const resultantPokemonArray = rawPokeJsonResponse.results;
        pokeList.update({ props : resultantPokemonArray });

    }
    renderHTML(){
        return /*html*/ `
        <div>

        </div>
        `;
    }
}