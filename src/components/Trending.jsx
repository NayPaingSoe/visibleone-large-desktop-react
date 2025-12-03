import React from "react";

const Trending = () => {
  const trendingItems = [
    {
      image: "/trending1.webp",
      title: "Dolore magna aliqua",
      excerpt:
        "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
      time: "2m ago",
    },
    {
      image: "/trending2.webp",
      title: "Morbi eleifend a libero",
      excerpt:
        "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
      time: "1h ago",
    },
    {
      image: "/trending3.webp",
      title: "Morbi eleifend a libero",
      excerpt:
        "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.",
      time: "3h ago",
    },
  ];

  return (
    <section className="trending">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Trending</h2>
          <div className="arrows">
            <span className="arrow-left"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#554f4f" d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z"></path></svg></span>
            <span className="arrow-right"><svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="#554f4f" d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"></path></svg></span>
          </div>
        </div>

        <div className="grid-3-col">
          {trendingItems.map((item, index) => (
            <div key={index} className="card trending-card">
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="trending-card-content">
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
                <div className="time">
                  <span>🕒</span> {item.time}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
