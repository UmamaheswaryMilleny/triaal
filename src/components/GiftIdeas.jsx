const GiftIdeas = () => {
    const ideas = [
      {
        title: "Love Letter",
        img: "https://images.unsplash.com/photo-1614797582568-643df3b5a7c3?auto=format&fit=crop&w=800&q=80",
        link: "https://www.papercards.com/love-letters",
      },
      {
        title: "Chocolates",
        img: "https://images.unsplash.com/photo-1615475399513-bc4e5a05ec8e?auto=format&fit=crop&w=800&q=80",
        link: "https://www.cadburygiftsdirect.co.uk/valentines",
      },
      {
        title: "Flowers",
        img: "https://unsplash.com/photos/assorted-candies-zAOBpEE_vV4",
        link: "https://unsplash.com/photos/assorted-candies-zAOBpEE_vV4",
      },
    ];
  
    return (
      <section id="gifts" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-valentine text-deepRed mb-12">Gift Ideas 🎁</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {ideas.map((gift, index) => (
              <a
                key={index}
                href={gift.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform duration-300 shadow-lg rounded-lg p-4 bg-softPink block"
              >
                <img
                  src={gift.img}
                  alt={gift.title}
                  className="h-40 w-full object-cover rounded"
                />
                <h3 className="text-xl mt-4 font-semibold text-romantic">{gift.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default GiftIdeas;
  