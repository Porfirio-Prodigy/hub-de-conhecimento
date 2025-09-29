"use client";

import { Globe, BookOpen, Zap } from "lucide-react";

const colors = {
  primary: "#1E3A8A",
  secondary: "#3B82F6",
  light: "#F9FAFB",
  dark: "#111827",
};

const features = [
  {
    icon: <Globe className="w-10 h-10 text-blue-600" />,
    title: "Agregador de Conteúdos",
    description:
      "Centraliza links e posts de blogs de tecnologia, finanças, idiomas e mais em um único espaço.",
  },
  {
    icon: <BookOpen className="w-10 h-10 text-blue-600" />,
    title: "Organização Inteligente",
    description:
      "Os conteúdos são organizados por categoria e relevância, facilitando a busca e leitura.",
  },
  {
    icon: <Zap className="w-10 h-10 text-blue-600" />,
    title: "Acesso Rápido",
    description:
      "Clique e acesse diretamente o blog ou artigo original sem perder tempo navegando em múltiplos sites.",
  },
];

export default function SobrePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <section className="text-center space-y-4">
        <h1
          className="text-4xl font-extrabold"
          style={{ color: colors.primary }}
        >
          Sobre o Hub de Conhecimento
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Nosso hub de conhecimento é um agregador que organiza links e posts de
          blogs externos, permitindo que você acesse conteúdos de qualidade
          sobre tecnologia, finanças, idiomas e muito mais.
        </p>
      </section>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {features.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center p-6 bg-white shadow-sm rounded-lg hover:shadow-md transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {item.title}
            </h3>
            <p className="text-gray-600 mt-2">{item.description}</p>
          </div>
        ))}
      </section>

      <section className="text-center space-y-4">
        <h2 className="text-2xl font-bold" style={{ color: colors.primary }}>
          Nossa Missão
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Criar um ambiente centralizado e acessível para quem deseja aprender
          mais e se manter atualizado. Aqui, o conhecimento está ao seu alcance
          com apenas alguns cliques.
        </p>
      </section>
    </div>
  );
}
