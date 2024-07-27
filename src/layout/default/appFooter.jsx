export function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="container-fluid my-12 gx-0">
        <div className="row g-0 gap-4">
          <div className="row gx-0 justify-content-center gap-12 text-center text-lg-start">
            <div className="col-md-3 col-lg">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-slate-900 fw-bold">Product</li>
                <li className="list-group-item list-group-item-slate-900">Pricing</li>
                <li className="list-group-item list-group-item-slate-900">Overview</li>
                <li className="list-group-item list-group-item-slate-900">Browse</li>
                <li className="list-group-item list-group-item-slate-900">Accessibility</li>
                <li className="list-group-item list-group-item-slate-900">Five</li>
              </ul>
            </div>
            <div className="col-md-3 col-lg">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-slate-900 fw-bold">Solutions</li>
                <li className="list-group-item list-group-item-slate-900">Brainstorming</li>
                <li className="list-group-item list-group-item-slate-900">Ideation</li>
                <li className="list-group-item list-group-item-slate-900">Wireframing</li>
                <li className="list-group-item list-group-item-slate-900">Research</li>
                <li className="list-group-item list-group-item-slate-900">Design</li>
              </ul>
            </div>
            <div className="col-md-3 col-lg">
              <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-slate-900 fw-bold">Support</li>
                <li className="list-group-item list-group-item-slate-900">Contact Us</li>
                <li className="list-group-item list-group-item-slate-900">Developers!!!</li>
                <li className="list-group-item list-group-item-slate-900">Documentation</li>
                <li className="list-group-item list-group-item-slate-900">Integrations</li>
                <li className="list-group-item list-group-item-slate-900">Reports</li>
              </ul>
            </div>
            <div className="col-12 col-lg">
              <div className="h-100 d-flex flex-column justify-content-between">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-slate-900 fw-bold">Get the app</li>
                  <li className="list-group-item list-group-item-slate-900 ">
                    <div className="d-flex flex-column align-items-center align-items-lg-start justify-content-start gap-3">
                      <a target="blank" href="https://www.apple.com/app-store/">
                        <img src="/assets/img/app-store.png" alt="" srcSet="" />
                      </a>
                      <a target="blank" href="https://play.google.com/store/">
                        <img src="/assets/img/google-store.png" alt="" srcSet="" />
                      </a>
                    </div>
                  </li>
                </ul>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item list-group-item-slate-900">Follow Us</li>
                  <li className="list-group-item list-group-item-slate-900">
                    <div className="d-flex gap-3 align-items-start justify-content-center justify-content-lg-start">
                      <i className="jam jam-youtube" />
                      <i className="jam jam-facebook" />
                      <i className="jam jam-twitter" />
                      <i className="jam jam-instagram" />
                      <a
                        target="blank"
                        className="text-light text-decoration-none d-flex"
                        href="https://www.linkedin.com/in/akifaycicek/">
                        <i className="jam jam-linkedin" />
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="row g-0 px-4 gap-6 align-items-center justify-content-center text-center">
            <div className="col-auto">Collers @ 2023. All rights reserved.</div>
            <div className="col-auto ms-lg-auto">
              <ul className="list-group list-group-flush list-group-horizontal-sm">
                <li className="list-group-item list-group-item-slate-900">Terms</li>
                <li className="list-group-item list-group-item-slate-900">Privacy</li>
                <li className="list-group-item list-group-item-slate-900">Contact</li>
                <li className="list-group-item list-group-item-slate-900">
                  <i className="jam jam-world" /> EN
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
