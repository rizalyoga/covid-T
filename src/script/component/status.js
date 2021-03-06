import sembuhIlustration from "../../images/healthy.svg";
import positifIlustration from "../../images/positif.svg";
import meninngalIlustration from "../../images/death.svg";
import dirawatIlustration from "../../images/hospital.svg";
import format from "../formatAngka.js";

class statusCovid extends HTMLElement {
  set covidItem(item) {
    this._covidItem = item;
    this.render();
  }

  render() {
    this.innerHTML = `    
    <section id="status">
        <h1 class="text-center">Status Covid-19 Indonesia</h1>
    <div class="status-row mt-4">
        <div class="status-col">
            <img src="${positifIlustration}" />
            <h4 class="mt-3 fw-bold fs-2" >${format(this._covidItem.positif)}</h4>
            <h4 class="fw-bold stats">Orang Positif</h4>
        </div>
        <div class="status-col">
            <img src="${dirawatIlustration}" />
            <h4 class="mt-3 fw-bold fs-2" >${format(this._covidItem.dirawat)}</h4>
            <h4 class="fw-bold stats">Orang Dirawat</h4>
        </div>
        <div class="status-col">
            <img src="${sembuhIlustration}" />
            <h4 class="mt-3 fw-bold fs-2" >${format(this._covidItem.sembuh)}</h4>
            <h4 class="fw-bold stats">Orang Sembuh</h4>
        </div>
        <div class="status-col">
            <img src="${meninngalIlustration}" />
            <h4 class="mt-3 fw-bold fs-2" >${format(this._covidItem.meninggal)}</h4>
            <h4 class="fw-bold stats">Orang Meninggal</h4>
        </div>
    </div>
  </section>`;
  }
}

customElements.define("status-covid", statusCovid);
