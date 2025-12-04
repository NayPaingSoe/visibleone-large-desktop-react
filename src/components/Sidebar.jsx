import React from "react";

const Sidebar = () => {
  const newsItems = [
    {
      category: "Travel",
      title: "Article title",
      excerpt:
        "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...",
      time: "2 min ago",
    },
    {
      category: "Technology",
      title: "Article title",
      excerpt:
        "Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...",
      time: "2 min ago",
    },
  ];

  return (
    <aside className="sidebar">
      <div className="section-header">
        <h2 className="section-title">More News</h2>
        <div className="arrows">
          <span className="arrow-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="#554f4f"
                d="m14 18l-6-6l6-6l1.4 1.4l-4.6 4.6l4.6 4.6z"
              ></path>
            </svg>
          </span>
          <span className="arrow-right">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="#554f4f"
                d="M12.6 12L8 7.4L9.4 6l6 6l-6 6L8 16.6z"
              ></path>
            </svg>
          </span>
        </div>
      </div>

      <div className="sidebar-divider"></div>

      <div className="news-list">
        {newsItems.map((item, index) => (
          <div key={index} className="news-item">
            <div className="category">{item.category}</div>
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
            <div className="time">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#554f4f"
                    d="M12 4.75a7.25 7.25 0 1 0 0 14.5a7.25 7.25 0 0 0 0-14.5M3.25 12a8.75 8.75 0 1 1 17.5 0a8.75 8.75 0 0 1-17.5 0"
                  ></path>
                  <path
                    fill="#554f4f"
                    d="M12 7.25a.75.75 0 0 1 .75.75v3.69l1.78 1.78a.75.75 0 1 1-1.06 1.06l-2-2a.75.75 0 0 1-.22-.53V8a.75.75 0 0 1 .75-.75"
                    opacity={0.5}
                  ></path>
                </svg>
              </span>{" "}
              <span style={{ marginTop: "-5px" }}>{item.time}</span>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
