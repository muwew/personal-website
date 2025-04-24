export default function Footer() {
  return (
    <footer className="bg-[var(--foreground)] shadow-inner px-6 py-4 text-center text-sm text-[var(--background)]">
      © {new Date().getFullYear()} Marvell Ung. All rights reserved.
    </footer>
  );
}
