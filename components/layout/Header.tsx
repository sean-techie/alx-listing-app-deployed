import React from "react";


const Header: React.FC = () => {
return (
<header className="w-full bg-white shadow-sm">
<div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="text-2xl font-bold">Listing<span className="text-indigo-600">App</span></div>
<nav className="hidden md:flex gap-3 text-sm text-gray-600">
<a className="hover:text-indigo-600">Rooms</a>
<a className="hover:text-indigo-600">Villas</a>
<a className="hover:text-indigo-600">Mansions</a>
<a className="hover:text-indigo-600">Countryside</a>
</nav>
</div>


<div className="flex-1 max-w-md mx-6 hidden lg:block">
<div className="relative">
<input
aria-label="search"
placeholder="Search city, state or property"
className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
/>
<button className="absolute right-1 top-1/2 -translate-y-1/2 px-3 py-1 rounded-md text-sm bg-indigo-600 text-white">Search</button>
</div>
</div>


<div className="flex items-center gap-3">
<button className="text-sm">Sign in</button>
<button className="text-sm bg-indigo-600 text-white px-3 py-1 rounded-md">Sign up</button>
</div>
</div>
</header>
);
};


export default Header;