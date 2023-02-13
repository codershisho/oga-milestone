export default function Headnavi() {
  return (
    <div className="bg-green-500">
      <header className="flex justify-between items-center py-4">
        <div className="pl-3">oga-milestone</div>
        <nav className="hidden lg:flex gap-12">
          <a href="/home">Home</a>
          <a href="/member">Member</a>
        </nav>
        <div></div>
      </header>
    </div>
  );
}
