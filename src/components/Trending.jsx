import React from 'react';

const Trending = () => {
  const trendingItems = [
    {
      image: 'https://placehold.co/400x250/004d40/white?text=Nature',
      title: 'Dolore magna aliqua',
      excerpt: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.',
      time: '2m ago'
    },
    {
      image: 'https://placehold.co/400x250/ff6f00/white?text=Umbrellas',
      title: 'Morbi eleifend a libero',
      excerpt: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.',
      time: '1h ago'
    },
    {
      image: 'https://placehold.co/400x250/0d47a1/white?text=Snow',
      title: 'Morbi eleifend a libero',
      excerpt: 'Lorem ipsum dolor sit amet, ipsum labitur lucilius mel id, ad has appareat.',
      time: '3h ago'
    }
  ];

  return (
    <section className="trending" style={{ marginBottom: '4rem' }}>
      <div className="container">
        <div className="flex justify-between items-center" style={{ marginBottom: '1.5rem' }}>
          <h2 className="section-title" style={{ margin: 0 }}>Trending</h2>
          <div className="arrows text-gray text-xs">
            <span style={{ marginRight: '1rem', cursor: 'pointer' }}>&lt;</span>
            <span style={{ cursor: 'pointer' }}>&gt;</span>
          </div>
        </div>

        <div className="grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem' }}>
          {trendingItems.map((item, index) => (
            <div key={index} className="card">
              <div className="card-image" style={{ marginBottom: '1rem', borderRadius: '4px', overflow: 'hidden' }}>
                <img src={item.image} alt={item.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
              </div>
              <h3 className="font-bold" style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{item.title}</h3>
              <p className="text-gray text-sm" style={{ marginBottom: '0.75rem', lineHeight: '1.6' }}>{item.excerpt}</p>
              <div className="time text-xs text-gray flex items-center">
                <span style={{ marginRight: '0.5rem' }}>🕒</span> {item.time}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trending;
