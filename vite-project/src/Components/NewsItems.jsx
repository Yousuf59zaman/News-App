// NewsItems.js
const NewsItems = ({ title, description, url, urlToImage }) => {
  return (
    <div className="card bg-dark text-light m-2" style={{ maxWidth: "300px" }}>
      <img src={urlToImage} style={{ height: "200px", objectFit: "cover", width: "100%" }} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description? description.slice(0, 90) : "lorem em ipsum lorem em ipsumlorem em ipsum"}</p>
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
};

export default NewsItems;
