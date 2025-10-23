export default function Navbar() {
  return (
    <nav className="bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-indigo-600">AI Study Planner</h1>
      <div className="space-x-4">
        <a href="#features" className="hover:text-indigo-600">Features</a>
        <a href="#about" className="hover:text-indigo-600">About</a>
        <a href="#contact" className="hover:text-indigo-600">Contact</a>
      </div>
    </nav>
  );
}