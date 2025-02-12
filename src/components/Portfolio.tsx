import { useState } from 'react';
import { Film, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const portfolioItems = [
    {
      embedUrl: "https://www.instagram.com/reel/DEZrwVkSrTA/embed",
      reelUrl: "https://www.instagram.com/reel/DEZrwVkSrTA",
      category: "animation",
      title: "Motion Design",
      description: "Creative animation showcase"
    },
    {
      embedUrl: "https://www.instagram.com/reel/DB3lBQmS5BZ/embed",
      reelUrl: "https://www.instagram.com/reel/DB3lBQmS5BZ",
      category: "video",
      title: "Video Production",
      description: "Professional video editing"
    },
    {
      embedUrl: "https://www.instagram.com/reel/DBQO4XRyWtL/embed",
      reelUrl: "https://www.instagram.com/reel/DBQO4XRyWtL",
      category: "animation",
      title: "3D Animation",
      description: "3D character animation"
    },
    {
      embedUrl: "https://www.instagram.com/reel/C_qb5vkyUxo/embed",
      reelUrl: "https://www.instagram.com/reel/C_qb5vkyUxo",
      category: "video",
      title: "Commercial",
      description: "Brand promotional video"
    },
    {
      embedUrl: "https://www.instagram.com/reel/C9ztip-hRb2/embed",
      reelUrl: "https://www.instagram.com/reel/C9ztip-hRb2",
      category: "design",
      title: "UI Animation",
      description: "Interactive interface design"
    },
    {
      embedUrl: "https://www.instagram.com/reel/C9msSqiJZ2B/embed",
      reelUrl: "https://www.instagram.com/reel/C9msSqiJZ2B",
      category: "design",
      title: "Motion Graphics",
      description: "Dynamic visual effects"
    },
    {
      embedUrl: "https://www.instagram.com/reel/C-AdNt0Bh1l/embed",
      reelUrl: "https://www.instagram.com/reel/C-AdNt0Bh1l",
      category: "animation",
      title: "Character Design",
      description: "Animated character showcase"
    },
    {
      embedUrl: "https://www.instagram.com/reel/C-SXFcbB4yj/embed",
      reelUrl: "https://www.instagram.com/reel/C-SXFcbB4yj",
      category: "video",
      title: "Short Film",
      description: "Narrative storytelling"
    }
  ];

  const categories = ['all', 'animation', 'video', 'design'];

  const filteredItems = selectedCategory === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === selectedCategory);

  return (
    <section id='portfolio' className="min-h-screen py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Film className="w-8 h-8 text-blue-600" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-pink-600 bg-clip-text text-transparent">
              Portfolio
            </h2>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore my creative work across different mediums and styles
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-blue-50'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <a
              key={index}
              href={item.reelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <iframe
                  src={item.embedUrl}
                  className="w-full h-full rounded-t-xl pointer-events-none"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-600 mb-2">
                  {item.category}
                </span>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <ExternalLink className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-gray-600">{item.description}</p>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all duration-300" />
            </a>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No items found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
