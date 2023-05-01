export default function Header() {
  return (
    <nav className="flex items-center text-center justify-center flex-wrap p-7">
      <div className="flex space-x-7 items-center text-[#6B705C] text-xl">
        <a href="#">Home</a>
        <a href="#">About</a>
        <span className="font-semibold text-4xl tracking-tight">
          Moments by Mandy
        </span>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
      </div>
    </nav>
  );
}
