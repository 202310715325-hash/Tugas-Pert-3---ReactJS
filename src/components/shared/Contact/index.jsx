import Header from "../Header";

export default function Contact(){
    return(
        <>
        <Header />

        <section className="mt-5">
          <div className="text-center mb-4">
            <h2>Contact Us</h2>
            <p className="text-muted">Kami senang mendengar dari kamu!</p>
          </div>

          <div className="row justify-content-center">
            <div className="col-md-6">
              <form className="p-4 border rounded shadow-sm bg-white">
                
                <div className="form-floating mb-3">
                  <input type="text" className="form-control" id="name" placeholder="Nama" />
                  <label htmlFor="name">Nama</label>
                </div>

                <div className="form-floating mb-3">
                  <input type="email" className="form-control" id="email" placeholder="Email" />
                  <label htmlFor="email">Email</label>
                </div>

                <div className="form-floating mb-3">
                  <textarea 
                    className="form-control" 
                    placeholder="Pesan" 
                    id="message" 
                    style={{ height: '120px' }}
                  ></textarea>
                  <label htmlFor="message">Pesan</label>
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Kirim Pesan
                </button>

              </form>
            </div>
          </div>
        </section>

        </>
    )
}