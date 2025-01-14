const Footer = () => (
  <footer className="bg-gray-800 p-4 mt-auto">
    <div className="container mx-auto text-center text-white">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} CareerCatalyst. All Rights Reserved.
      </p>
      <div className="mt-2">
        <a href="/privacy-policy" className="text-gray-300 hover:text-white mx-2">
          Privacy Policy
        </a>
        <a href="/terms-of-service" className="text-gray-300 hover:text-white mx-2">
          Terms of Service
        </a>
        <a href="/contact" className="text-gray-300 hover:text-white mx-2">
          Contact Us
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
