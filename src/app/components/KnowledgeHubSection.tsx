"use client";

const KnowledgeHubSection = () => {
  const features = [
    {
      title: "Agregador de Conteúdos",
      description:
        "Centraliza links e posts de blogs de tecnologia, finanças, idiomas e mais em um único espaço.",
      icon: "🌐",
    },
    {
      title: "Organização Inteligente",
      description:
        "Os conteúdos são organizados por categoria e relevância, facilitando a busca e leitura.",
      icon: "📚",
    },
    {
      title: "Acesso Rápido",
      description:
        "Clique e acesse diretamente o blog ou artigo original sem perder tempo navegando em múltiplos sites.",
      icon: "⚡",
    },
  ];

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          Hub de Conhecimento
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Nosso hub de conhecimento é um agregador que organiza links e posts de blogs externos,
          permitindo que você acesse conteúdos de qualidade sobre tecnologia, finanças, idiomas e muito mais.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex flex-col items-center text-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-6xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KnowledgeHubSection;
