import "../css/reviews.css";
import dummy from "../data/dummydata.json";

export default function Reviews() {
  const reviews = dummy.reviews; // Load all reviews from JSON

  return (
    <div className="review-wrapper">
      <h2 className="review-title">Recent reviews</h2>

      <div className="review-section">
        {reviews.map((item, index) => (
          <div className="review-card" key={index}>
            
            {/* USER AREA */}
            <div className="review-user">
              <img src={item.userImg} className="user-img" alt="" />
              <b className="user-name">{item.name}</b>
            </div>

            {/* RATING STAR COUNT */}
            <div className="rating-stars">
              {"⭐".repeat(item.rating)}
            </div>

            {/* REVIEW TEXT */}
            <p className="review-text">{item.review}</p>

            {/* COMPANY BOX */}
            <div className="company-box">
              <img src={item.companyImg} className="company-img" alt="" />
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
