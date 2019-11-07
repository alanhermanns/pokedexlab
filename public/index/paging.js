import Component from '../component.js';

export class Paging extends Component {
    
    onRender(dom){
        let forthButton = dom.querySelector('.next');

        forthButton.addEventListener('click', () => {
            let queryString = window.location.hash.slice(1);
            let searchParams = new URLSearchParams(queryString);

            let currentPageNumber = searchParams.get('page');

            if (currentPageNumber){
                searchParams.set('page', parseInt(currentPageNumber) + 1);
            } else {
                searchParams.set('page', 1);
            }
            window.location.hash = searchParams.toString();
        });
        let froButton = dom.querySelector('.previous');
        froButton.addEventListener('click', () => {
            let queryString = window.location.hash.slice(1);
            let searchParams = new URLSearchParams(queryString);
            let currentPageNumber = parseInt(searchParams.get('page'));
            if (currentPageNumber === 1){return;}
            searchParams.set('page', currentPageNumber - 1);
            window.location.hash = searchParams.toString();
        });
        

    
    }
    renderHTML(){
        return /*html*/`

        <p> &lt;&lt; <button class = 'previous'>&lt;</button> page #number <button class = 'next'>&gt;</button> &gt;&gt; </p>
        `;
    }
}
