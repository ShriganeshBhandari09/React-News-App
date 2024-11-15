const NewsCard = ({ title, description, img, url }) => {
  return (
    <>
      <div className="news-card card" style={{width:"18rem"}}>
        <img src={img} className="card-img-top" alt="..." loading="lazy" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a onClick={()=>{window.open(url)}} className="btn btn-primary">
            Read More
          </a>
        </div>
      </div>
    </>
  );
};


NewsCard.propTypes

export default NewsCard;
