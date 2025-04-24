import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[var(--foreground)] shadow-md px-6 py-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-[var(--accent)]">My Portfolio</h1>
      <div className="space-x-4 text-[var(--background)] text-md">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/projects" className="hover:underline">Projects</Link>
      </div>
    </nav>
  );
}
