import { NextResponse } from "next/server";
import { apiList } from "./apiList";

export async function GET() {
  try {
    // Busca posts de programação
    const programacaoData = await Promise.all(
      apiList.programacao.map(async site => {
        const res = await fetch(`${site.url}?_embed`);
        const posts = await res.json();
        return { site: site.name, posts, link: site.link };
      })
    );

    // Busca posts de economia
    const economiaData = await Promise.all(
      apiList.economia.map(async site => {
        const res = await fetch(`${site.url}?_embed`);
        const posts = await res.json();
        return { site: site.name, posts, link: site.link };
      })
    );

    return NextResponse.json(
      { programacao: programacaoData, economia: economiaData },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Erro ao buscar dados externos", details: error },
      { status: 500 }
    );
  }
}
