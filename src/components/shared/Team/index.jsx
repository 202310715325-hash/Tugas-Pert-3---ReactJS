import Header from "../Header";

export default function Team() {
  return (
    <>
      <Header />
      <section className="text-center mt-5">
        <h2>Our Team</h2>
        <p className="text-muted">Tim kreatif di balik BookStore</p>

        <div className="row mt-4">
          {["Aditya", "Pratama", "Lilani"].map((name, i) => (
            <div className="col-md-4" key={i}>
              <img
                src={`https://picsum.photos/150?random=${i + 100}`}
                className="rounded-circle mb-3"
                alt={name}
              />
              <h5>{name}</h5>
              <p className="text-muted">Web Developer</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}