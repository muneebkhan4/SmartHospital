const footer = () => {
  return (
    <>
      <footer
        style={{ paddingTop: "30px", backgroundColor: "rgb(172, 207, 224)" }}
      >
        <iframe
          className="center"
          title="maps"
          width={305}
          height={200}
          frameborder="2"
          referrerpolicy="no-referrer-when-downgrade"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThJBgktGX9Hhh3VXHoX7H3lANNRVd47A0B6Q&usqp=CAU"
          allowfullscreen
        ></iframe>

        <div className="container">
          <footer className="py-5">
            <div className="row">
              <div className="col-2">
                <h5>Section</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Home
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Features
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      FAQs
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="/" className="nav-link p-0 text-muted">
                      About
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-4 offset-1">
                <form>
                  <h5>Subscribe to our newsletter</h5>
                  <p>Monthly digest of whats new and exciting from us.</p>
                  <div className="d-flex w-100 gap-2">
                    <label for="newsletter1" className="visually-hidden">
                      Email address
                    </label>
                    <input
                      id="newsletter1"
                      type="text"
                      className="form-control"
                      placeholder="Email address"
                    />
                    <button className="btn btn-primary" type="button">
                      Subscribe
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="d-flex justify-content-between py-4 my-4 border-top">
              <p>© 2023 Hopital. All rights reserved.</p>
              <ul className="list-unstyled d-flex">
                <li className="ms-3">
                  <a className="link-dark" href="/">
                    <svg className="bi" width="24" height="24"></svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="/">
                    <svg className="bi" width="24" height="24"></svg>
                  </a>
                </li>
                <li className="ms-3">
                  <a className="link-dark" href="/">
                    <svg className="bi" width="24" height="24"></svg>
                  </a>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </footer>
    </>
  );
};

export default footer;
