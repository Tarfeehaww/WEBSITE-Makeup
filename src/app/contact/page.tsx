import '@fortawesome/fontawesome-free/css/all.min.css';

export default function Contact (){
    return(
        <div><h2 className="text-3xl  text-pink-800 font-bold text-center">Contact Us</h2>
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
    )
}