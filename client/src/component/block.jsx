

export default function singleBlock(props) {
  return (
    <>
      <div className="col mb-4 card_block ">
        <div className="card">
          <img src={props.data.pic} loading="lazy" className="card-img-top" alt="..." />
          <div className="card-bodys my-scroll">
            <h5 className="card-title">{props.data.title}</h5>
            <h6 className="card-text">{props.data.subtitle}</h6>-
            <p className="card-text">{props.data.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
}
