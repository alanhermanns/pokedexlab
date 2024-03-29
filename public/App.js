import Component from './component.js';
import { goGetPokemonGo } from './service/pokeapi.js';
import { Header } from './index/header.js';
import { PokeList } from './index/pokeList.js';
import { Search } from './index/search.js';
import { Paging } from './index/paging.js';

export class App extends Component{
    async onRender(dom) {
        
        const header = new Header;
        const headerDOM = header.renderDOM();
        dom.prepend(headerDOM);

        const options = new Search;
        const optionsDom = options.renderDOM();
        dom.append(optionsDom);

        const pages = new Paging;
        const pagesDom = pages.renderDOM();
        dom.append(pagesDom);

        let pokemon = { props: [] };
        const pokeList = new PokeList(pokemon);
        const pokeListDOM = pokeList.renderDOM();
        dom.append(pokeListDOM);
        const rawPokeJsonResponse = await goGetPokemonGo();

        const resultantPokemonArray = rawPokeJsonResponse.results;
        pokeList.update({ props : resultantPokemonArray });

        async function updateSearchAndLoad() {
            //const imageList = document.getElementsByClassName('image-list');
            document.body.children[0].lastChild.remove();
            let pokemon = { props: [] };
            const pokeList = new PokeList(pokemon);
            const pokeListDOM = pokeList.renderDOM();
            dom.append(pokeListDOM);
            const rawPokeJsonResponse = await goGetPokemonGo();
            const resultantPokemonArray = rawPokeJsonResponse.results;
            pokeList.update({ props : resultantPokemonArray });
        }

        window.addEventListener('hashchange', async() => { await updateSearchAndLoad(); });

    }

    renderHTML(){
        return /*html*/ `
        <div>

        </div>
        `;
    }
}