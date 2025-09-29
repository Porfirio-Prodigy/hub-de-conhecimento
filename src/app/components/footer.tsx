"use client";

import { Github, Linkedin, Instagram } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold text-white">Hub de Conhecimento</h2>
          <p className="mt-2 text-sm text-gray-400">
            Centralize seu aprendizado em um só lugar: tecnologia, finanças,
            idiomas e muito mais.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Navegação</h3>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                Início
              </Link>
            </li>
            <li>
              <Link href="/sobre" className="hover:text-white transition">
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="/categorias" className="hover:text-white transition">
                Categorias
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-white transition">
                Contato
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white">Conecte-se</h3>
          <div className="flex gap-4 mt-3">
            <Link
              href="https://github.com/Porfirio-Prodigy"
              target="_blank"
              className="hover:text-white transition"
            >
              <Github className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/joao-porfirio0/"
              target="_blank"
              className="hover:text-white transition"
            >
              <Linkedin className="w-6 h-6" />
            </Link>
            <Link
              href="https://www.instagram.com/j__porfirio/"
              target="_blank"
              className="hover:text-white transition"
            >
              <Instagram className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hub de Conhecimento. Todos os direitos
        reservados.
      </div>
    </footer>
  );
}
