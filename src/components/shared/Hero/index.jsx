export default function Hero(){
    return(
        <>
        <div className="row align-items-center border rounded-3 shadow-lg p-4 mb-5">
          <div className="col-lg-7">
            <h1 className="fw-bold">
              Atomic Habits
            </h1>
            <p className="lead">
              Buku karya James Clear yang membantu kamu membangun kebiasaan baik dan menghilangkan kebiasaan buruk secara konsisten.
            </p>

            <button className="btn btn-primary me-2">Buy Now</button>
            <button className="btn btn-outline-secondary">Detail</button>
          </div>

          <div className="col-lg-5">
            <img
              src="https://picsum.photos/500/400"
              className="img-fluid rounded"
              alt=""
            />
          </div>
        </div>

        </>
    )
}