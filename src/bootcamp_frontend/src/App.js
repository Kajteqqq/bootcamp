import { html, render } from 'lit-html';
import logo from './logo2.svg';

class App {

  constructor() {
    this.#render();
  }


  #render() {
    let body = html`
      <main>
        <img src="${logo}" alt="DFINITY logo" />
        <br />
        <br />
        <form action="#">
          <label for="name">Enter your name: &nbsp;</label>
          <input id="name" alt="Name" type="text" />
          <button type="submit">Click Me!</button>
        </form>
        <section id="greeting"></section>
      </main>
    `;
    render(body, document.getElementById('root'));
    document
      .querySelector('form')
  }
}

export default App;
//napisałem poprawnie ten kod i dalej ten błąd sie wyswietla