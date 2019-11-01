import { Header } from '../index/header.js';

const header = new Header;
const headerDom = header.renderDOM();
document.body.prepend(headerDom);

