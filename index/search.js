import Component from '../component.js';

export class Search extends Component {
    
    // onRender(dom){
    //     // const searchBar = document.querySelectorAll('input[name = search-bar]');
    //     // const radios = document.querySelectorAll('input[name = sort]');
    //     let form = document.querySelector('form');


    // //     form.addEventListener('submit', () => {
    // //         event.preventDefault();
    // //         let formData = new FormData(form);
    // //         let queryString = window.location.hash.slice(1);
    // //         const searchParams = new URLSearchParams(queryString);
    // //         //{ name : pokeme.pokemon, image : pokeme.url_image, height : pokeme.height, weight : pokeme.weight, attack : pokeme.attack, defense : pokeme.defense, hp : pokeme.hp };
    // //         searchParams.set('types', formData.get('searchbar'));
    // //         searchParams.set('sort', formData('sort'));
    // //         searchParams.set('page', 1);
    // //         window.location.hash = searchParams.toString();
    // //     });
    // // }
    
    
    
    renderHTML(){
        return /*html*/ `
            <form>
                <label>Sort By:</label>
                <label>Name</label>
                <input type="radio" name ="sort" value = "name">
                <label>Attack</label>
                <input type="radio" name ="sort" value = "attack">
                <label>Defence</label>
                <input type="radio" name ="sort" value = "defense">
                <label>Search</label>
                <input type = "text" name = "searchbar" value = "Enter Keyword">
            </form>
    `;
    }
}