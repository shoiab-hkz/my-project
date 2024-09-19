import React from 'react';

const articles = [
  {
    id: 1,
    title: '8 Great Design Trends That Are Coming Back',
    category: 'Design',
    author: 'Bibi Aziz',
    imageUrl: 'https://via.placeholder.com/400x250', 
  },
  {
    id: 2,
    title: '5 Great Marketing Trends To Follow in 2021',
    category: 'Design',
    author: 'Popal ',
    imageUrl: 'https://via.placeholder.com/400x250', 
  },
  {
    id: 3,
    title: 'How to Design a Memorable Brand Identity',
    category: 'Design',
    author: 'Haidary',
    imageUrl: 'https://via.placeholder.com/400x250', 
  }
];

const LearningCenter = () => {
  return (
    <div className="py-10">
      <h1 className="text-4xl font-bold mb-4 text-gray-800 text-center mb-10">Learning Center</h1>
      <p className="text-center text-gray-600 mb-10">
        Discover great content to grow your skills in Design, Development and Marketing.
      </p>
      
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articles.map(article => (
          <div key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img className="w-full h-40 object-cover" src={article.imageUrl} alt={article.title} />
            <div className="p-6">
              <span className="inline-block bg-blue-500 text-white text-xs font-bold rounded-full px-3 py-1 mb-2">
                {article.category}
              </span>
              <h2 className="font-bold text-xl mb-2">{article.title}</h2>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat feugiat congue viverra facilisis.
              </p>
              <div className="mt-4 flex items-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src="https://via.placeholder.com/100x100" 
                  alt={article.author}
                />
                <div className="ml-4">
                  <p className="text-sm font-semibold">{article.author}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
          More Articles
        </button>
      </div>
    </div>
  );
};

export default LearningCenter;
