import React from "react";


const Footer: React.FC = () => {
return (
<footer className="w-full bg-gray-50 border-t mt-8">
<div className="max-w-7xl mx-auto px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center">
<div>© {new Date().getFullYear()} ListingApp — All rights reserved</div>
<div className="flex gap-4 mt-4 md:mt-0">
<a>Privacy</a>
<a>Terms</a>
<a>Contact</a>
</div>
</div>
</footer>
);
};


export default Footer;