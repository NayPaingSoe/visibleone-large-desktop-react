import React from 'react';

const Sidebar = () => {
  const newsItems = [
    {
      category: 'Travel',
      title: 'Article title',
      excerpt: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...',
      time: '2 min ago'
    },
    {
      category: 'Technology',
      title: 'Article title',
      excerpt: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat...',
      time: '2 min ago'
    }
  ];

  return (
    <aside className="sidebar">
      <div className="section-header">
        <h2 className="section-title">More News</h2>
        <div className="arrows">
          <span className="arrow-left">&lt;</span>
          <span className="arrow-right">&gt;</span>
        </div>
      </div>
      
      <div className="sidebar-divider"></div>

      <div className="news-list">
        {newsItems.map((item, index) => (
          <div key={index} className="news-item">
            <div className="category">
              {item.category}
            </div>
            <h3>{item.title}</h3>
            <p>{item.excerpt}</p>
            <div className="time">
              <span>🕒</span> {item.time}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
