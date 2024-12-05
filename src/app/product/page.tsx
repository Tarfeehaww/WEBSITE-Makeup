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
            <div className="max-w-6xl mx-auto px-4 mt-10">
                <h2 className="text-3xl font-bold text-center text-pink-800 mb-6">Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.map((d, index) => (
                        <div
                            key={index}
                            className="bg-white h-[450px] text-gray-600 rounded-xl shadow-md transition-transform transform hover:scale-105"
                        >
                            <div className="h-56 rounded-t-xl bg-slate-100 flex justify-center items-center">
                                <img
                                    src={d.image}
                                    alt={d.name}
                                    className="h-44 w-44 rounded-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col justify-center items-center gap-4 p-4 text-center">
                                <p className="text-xl font-semibold">{d.name}</p>
                                <p className="text-sm">{d.description}</p>
                                <p className="text-lg font-medium">{d.price}</p>
                                <button className="bg-pink-500 hover:bg-pink-600 font-bold text-white text-lg px-6 py-2 rounded-xl">
                                    Add To Cart
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
