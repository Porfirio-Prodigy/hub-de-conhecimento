"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-[#F9FAFB] border-b border-[#E5E7EB] sticky top-0 z-10">
      <div className="flex items-center justify-between py-0 px-10 max-w-7xl mx-auto">
        {/* H1 escondido para SEO */}
        <h1 className="sr-only">Hub de Conhecimento</h1>

        {/* Logo */}
        <Link href="/" aria-label="Ir para a página inicial" className="group">
          <Image
            src="/logo.svg"
            alt="Logo Hub de Conhecimento"
            width={180}
            height={60}
            className="group-hover:hidden"
            priority
          />
          <Image
            src="/logo-hover.svg"
            alt="Logo Hub de Conhecimento"
            width={180}
            height={60}
            className="hidden group-hover:flex"
            priority
          />
        </Link>

        {/* Navegação Desktop */}
        <nav aria-label="Navegação principal" className="hidden md:block">
          <ul className="flex gap-6 text-[#1E3A8A] font-medium">
            <li>
              <Link
                href="/sobre-nos"
                className="hover:text-[#3B82F6] transition-colors"
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="#tecnologia"
                className="hover:text-[#3B82F6] transition-colors"
              >
                Tecnologia
              </Link>
            </li>
            <li>
              <Link
                href="#economia"
                className="hover:text-[#3B82F6] transition-colors"
              >
                Economia
              </Link>
            </li>
          </ul>
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-[#1E3A8A]"
          aria-label="Abrir menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menu Mobile */}
      {open && (
        <nav
          aria-label="Menu Mobile"
          className="md:hidden bg-[#F9FAFB] border-t border-[#E5E7EB]"
        >
          <ul className="flex flex-col p-4 gap-4 text-[#1E3A8A] font-medium">
            <li>
              <Link
                href="/sobre"
                className="hover:text-[#3B82F6] transition-colors"
                onClick={() => setOpen(false)}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                href="#tecnologia"
                className="hover:text-[#3B82F6] transition-colors"
                onClick={() => setOpen(false)}
              >
                Tecnologia
              </Link>
            </li>
            <li>
              <Link
                href="#economia"
                className="hover:text-[#3B82F6] transition-colors"
                onClick={() => setOpen(false)}
              >
                Economia
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
