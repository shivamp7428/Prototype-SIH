

export default function Navbar() {
  return (
    <nav className="bg-white shadow px-20 py-4 flex justify-between items-center">
      <div className="text-2xl flex gap-1 font-bold text-blue-700 font-serif">
       <img src="https://i.pinimg.com/564x/40/3a/ba/403aba3b6d1d40e0e38eea78a5848bff.jpg" alt="logo" width={30} height={10} />
       Ayursutra Panchakarma
      </div>
      <div className="flex gap-10 font-bold font-serif">
        <a href="/" className="hover:text-blue-600">Home</a>
        <a  href="/about" className="hover:text-blue-600">About</a>
        <a href="/services" className="hover:text-blue-600">Services</a>
        <a href="/contact" className="hover:text-blue-600">Contact</a>
        <a href="/login" className="hover:text-blue-600">Login</a>
        <a href="/signup" className="hover:text-blue-600">Signup</a>
      </div>
    </nav>
  );
}
