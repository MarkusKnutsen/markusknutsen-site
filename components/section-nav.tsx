"use client";

const links = [
  { href: "#about", label: "About" },
  { href: "#impact", label: "Impact" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" }
];

export function SectionNav() {
  return (
    <nav className="sectionNav" aria-label="Section navigation">
      {links.map((link) => (
        <a key={link.href} href={link.href} className="sectionNav__link">
          {link.label}
        </a>
      ))}
    </nav>
  );
}
