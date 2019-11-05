import Component from '../component.js';

export class Search extends Component {
    
    onRender(form){
        // const searchBar = document.querySelectorAll('input[name = search-bar]');
        // const radios = document.querySelectorAll('input[name = sort]')
        //const radioButtons = document.querySelectorAll('input[name = radio]');
        const searchBarInput = document.querySelectorAll('input[name = searchbar]');
        
        const updateControls = () => {
            let queryString = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(queryString);
            searchBarInput.value = searchParams.get('pokemon') || '';
            //let sortBy = searchParams.get('sort'); //this will be where the radio buttons update
            // if (sortBy) {
            //     radioButtons.forEach((radioButton) => {
            //         radioButton.checked = radioButton.value === sortBy;
            //     });
            // }
        };

        updateControls();

        window.addEventListener('hashchange', () => {
            updateControls();
        });



        form.addEventListener('submit', (event) => {
            event.preventDefault();
            const formData = new FormData(form);
            let queryString = window.location.hash.slice(1);
            let searchParams = new URLSearchParams(queryString);
            searchParams.set('pokemon', formData.get('searchbar'));
            searchParams.set('page', 1);
            searchParams.set('sort', formData.get('sort'));
            window.location.hash = searchParams.toString();
        });
    }
    
    
    
    renderHTML(){
        return /*html*/ `
            <form>
                <label>Sort By:</label>
                <label>Name</label>
                <input type="radio" name ="sort" value = "name" checked>
                <label>Attack</label>
                <input type="radio" name ="sort" value = "attack">
                <label>Defence</label>
                <input type="radio" name ="sort" value = "defense">
            <!-- </form>    
            <form> -->
                <label>Search</label>
                <input type = "text" name = "searchbar" value = "Enter Keyword">
            </form>
    `;
    }
}