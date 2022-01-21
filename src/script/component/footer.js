import footerLogo from "../../images/covid-logo.svg";

class footerCovid extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `    
    <section id="footer">
    <div class="container footer-row">
      <hr />
      <div class="footer-right-col">
        <div class="footer-info">
          <div class="footer-logo">
            <a href="#home"><img src="${footerLogo}" alt="footer-logo" /></a>
          </div>
        </div>
      </div>
    </div>
  </section>`;
  }
}

customElements.define("footer-covid", footerCovid);
