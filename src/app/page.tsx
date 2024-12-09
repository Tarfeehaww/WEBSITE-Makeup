
import Image from "next/image"
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Home() {
    const data = [
        {
            name: 'Bob Mascara',
            price: '$12.99',
            image: '/images/Bob mascara.jpg',
            description: 'Achieve bold, dramatic lashes with Bob Mascara. This high-performance formula delivers intense volume and length without clumping.',
        },
        {
            name: 'Maybelline Fit Me Matte + Poreless Foundation',
            price: '$7.99',
            image: '/images/foundation.webp',
            description: 'Achieve a flawless, natural look with this lightweight, oil-free foundation.',
        },
        {
            name: 'Maybelline Fit Me Concealer',
            price: '$6.99',
            image: '/images/conceler.jpg',
            description: 'The Maybelline Fit Me Concealer is a lightweight, buildable formula that effectively hides imperfections and dark circles, giving you a flawless look.',
        },
        {
            name: 'Maybelline Fit Me Blush',
            price: '$6.99',
            image: '/images/blush.jpg',
            description: 'Add a natural flush to your cheeks with this lightweight, buildable blush that lasts all day.',
        },
        {
            name: 'Sleek Eyeshadow Palette',
            price: '$12.99',
            image: '/images/eyeshadow.jpg',
            description: 'Create stunning eye looks with the Sleek Eyeshadow Palette, featuring a mix of matte and shimmer shades for endless versatility.',
        },
        {
            name: 'Huda Beauty Highlighter',
            price: '$30.00',
            image: '/images/highligher.jpeg',
            description: 'Illuminate your features with the Huda Beauty Highlighter, featuring a silky formula that delivers a stunning glow and intense luminosity.',
        },
        {
            name: 'Liquid Eyeliner',
            price: '$8.99',
            image: '/images/linear.jpg',
            description: 'Achieve precise lines and bold definition with our Liquid Eyeliner. Its quick-drying, smudge-proof formula ensures a flawless look that lasts all day.',
        },
        {
            name: 'Jelly Tint',
            price: '$10.99',
            image: '/images/tints.jpeg',
            description: 'Get a fresh, dewy look with our Jelly Tint. This lightweight formula delivers a vibrant pop of color that blends seamlessly for a natural finish.',
        },
        {
            name: 'Maybelline Lipstick',
            price: '$9.49',
            image: '/images/lipstick.jpg',
            description: 'Experience vibrant color and creamy comfort with Maybelline Lipstick. This long-lasting formula provides a stunning finish that hydrates your lips.',
        },
        {
            name: 'Baby Primer',
            price: '$8.99',
            image: '/images/primer.webp',
            description: 'Achieve a smooth and even complexion with our Baby Primer. This lightweight formula helps to minimize the appearance of pores and creates a perfect canvas for makeup.',
        },
        {
            name: '24K Gold Serum',
            price: '$25.00',
            image: '/images/serum.webp',
            description: 'Revitalize your skin with our 24K Gold Serum. Infused with pure gold particles, this luxurious serum hydrates, brightens, and promotes a youthful glow.',
        },
    ];

    return (
        <main>
            
            <div className="bg-cover bg-center h-80" style={{ backgroundImage: "url('/images/cosmetics.jpg')" }}>
                <div className="flex items-center justify-center">
                    <h1 className="text-gray-100 text-6xl font-black">Welcome To MakeupShakeup</h1>
                </div>
            </div>
              <div className="w-3/4 m-auto mt-20">
              <h2 className="text-3xl  text-pink-800 font-bold text-center">About Us</h2>
              <p className="mt-4 text-center text-gray-600">
                  At MakeupShakeup, we believe that beauty is about enhancing your natural features and expressing yourself. 
                  Our curated collection of cosmetics is designed to inspire creativity and confidence. Whether you’re looking for everyday essentials or bold statement products, we have something for everyone.
              </p>
              <p className="mt-4 text-center text-gray-600">
                  We are passionate about quality and strive to provide products that are not only effective but also safe for your skin. 
                  Join us on this journey of self-expression and discover the transformative power of makeup!
              </p>
          </div>

            <div className="w-3/4 m-auto mt-10">
            <h2 className="text-3xl font-bold text-center text-pink-800 mb-6">Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {data.map((d, index) => (
                        <div key={index} className="bg-white h-[450px] text-brown-400 rounded-xl shadow-md transition-transform transform hover:scale-105">
                            <div className="h-56 rounded-t-xl bg-slate-100 flex justify-center items-center">
                                <Image src={d.image} alt={d.name} className="h-44 w-44 rounded-full" />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4 p-4">
                                <p className="text-xl font-semibold">{d.name}</p>
                                <p className="text-center">{d.description}</p>
                                <p>{d.price}</p>
                                <button className="bg-pink-400 font-bold text-white text-lg px-6 py-1 rounded-xl">Add To Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
          


            <div className="mt-10 mb-10">
                <h2 className=" text-3xl  text-pink-800 font-bold text-center">Contact Us</h2>
    <p className="mt-4 text-center text-gray-600">
        We would love to hear from you! Reach out to us through any of the platforms below.
    </p>
    <div className="flex justify-center space-x-6 mt-4">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-400">
            <i className="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-400">
            <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-400">
            <i className="fab fa-instagram"></i>
        </a>
        <a href="mailto:info@makeupshakeup.com" className="text-2xl hover:text-pink-400">
            <i className="fas fa-envelope"></i>
        </a>
        <a href="https://api.whatsapp.com/send?phone=YOUR_PHONE_NUMBER" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-pink-400">
            <i className="fab fa-whatsapp"></i>
        </a>
    </div>
</div>
        </main>
    );
}
