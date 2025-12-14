import "../css/reviews.css";

export default function Reviews({ reviews }) {
  if (!reviews || reviews.length === 0) {
    return <p className="no-reviews">No reviews found</p>;
  }

  return (
    <div className="review-wrapper">
      <h2 className="review-title">Recent Reviews</h2>

      <div className="review-section">
        {reviews.map((item, index) => (
          <div className="review-card" key={index}>

            {/* USER AREA */}
            <div className="review-user">
              <img src={item.userImg} className="user-img" alt={item.name} />
              <b className="user-name">{item.name}</b>
            </div>

            {/* RATING */}
            <div className="rating-stars">
              {"⭐".repeat(item.rating)}
            </div>

            {/* REVIEW TEXT */}
            <p className="review-text">{item.review}</p>

            {/* COMPANY BOX */}
            <div className="company-box">
              <img src={item.companyImg} className="company-img" alt={item.company} />
              <div className="company-details">
                <b>{item.company}</b>
                <p className="company-link">{item.companySite}</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
