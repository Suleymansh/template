import React from 'react'
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const {t}=useTranslation();
  return (
    <>
      <div className="container ">
        <footer className=" w-100 py-5">
          <div className="row">
            <div className="col-6 col-md-2 mb-3">
              <h5 className="guıd">{t("footer.1")}</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="." className="nav-link p-0 gr">
                    {t("footer.2")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="." className="nav-link p-0 text-body-secondary gr">
                    {t("footer.3")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="." className="nav-link p-0 text-body-secondary gr">
                    {t("footer.4")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="." className="nav-link p-0 text-body-secondary gr">
                    {t("footer.5")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="." className="nav-link p-0 text-body-secondary gr">
                    {t("footer.6")}
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-2 mb-3">
              <h5 className="guıd"> {t("footer.7")}</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="." className="nav-link p-0 text-body-secondary gr">
                    {t("footer.8")}
                  </a>
                </li>

                <li className="nav-item mb-2">
                  <a href="." className="nav-link p-0 text-body-secondary gr">
                    {t("footer.9")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="." className="nav-link p-0 text-body-secondary gr">
                    {t("footer.10")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="." className="nav-link p-0 text-body-secondary gr">
                    {t("footer.11")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="." className="nav-link p-0 text-body-secondary gr">
                    {t("footer.12")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-md-2 mb-3">
              <h5 className="guıd"> {t("footer.15")}</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="." className="nav-link p-0 text-body-secondary gr">
                    {t("footer.16")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="." className="nav-link p-0 text-body-secondary gr">
                    {t("footer.17")}
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="." className="nav-link p-0 text-body-secondary gr">
                    {t("footer.18")}
                  </a>
                </li>

                <li className="nav-item mb-2">
                  <a href="." className="nav-link p-0 text-body-secondary gr">
                    {t("footer.19")}
                  </a>
                </li>

                <li className="nav-item mb-2">
                  <a href="." className="nav-link p-0 text-body-secondary gr">
                    {t("footer.20")}
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-5 offset-md-1 mb-3 my-5">
              <form>
                <h5 className="guıd"> {t("footer.21")}</h5>
                {/* <p>Monthly digest of what's new and exciting from us.</p> */}
                <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    {t("footer.22")}
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button className=" sub" type="button">
                    {t("footer.23")}
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
            <p className="guıd"> {t("footer.24")}</p>
          </div> */}
        </footer>
      </div>
    </>
  );
}

export default Footer






























{/* <div class="container">
  <footer class="py-5">
    <div class="row">
      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-body-secondary">About</a></li>
        </ul>
      </div>

      <div class="col-md-5 offset-md-1 mb-3">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div class="d-flex flex-column flex-sm-row w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
      <p>© 2023 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
</div> */}