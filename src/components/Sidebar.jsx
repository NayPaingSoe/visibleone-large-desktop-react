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
    <aside className="sidebar" style={{ paddingLeft: '2rem' }}>
      <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
        <h2 className="section-title" style={{ margin: 0 }}>More News</h2>
        <div className="arrows text-gray text-xs">
          <span style={{ marginRight: '1rem', cursor: 'pointer' }}>&lt;</span>
          <span style={{ cursor: 'pointer' }}>&gt;</span>
        </div>
      </div>
      
      <div style={{ borderBottom: '1px solid var(--color-border)', marginBottom: '2rem' }}></div>

      <div className="news-list">
        {newsItems.map((item, index) => (
          <div key={index} className="news-item" style={{ marginBottom: '2rem' }}>
            <div className="category uppercase text-xs font-bold" style={{ color: 'var(--color-accent)', marginBottom: '0.5rem' }}>
              {item.category}
            </div>
            <h3 className="font-bold" style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
            <p className="text-gray text-sm" style={{ marginBottom: '0.5rem', lineHeight: '1.6' }}>{item.excerpt}</p>
            <div className="time text-xs text-gray flex items-center">
              <span style={{ marginRight: '0.5rem' }}>🕒</span> {item.time}
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
