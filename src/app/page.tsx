import KnowledgeHubSection from "./components/KnowledgeHubSection";
import PostsList from "./components/PostsList";

export default function Home() {
  return (
    <main>
      <KnowledgeHubSection />
      <div id="#programacao" className="post-list max-w-7xl px-10 mx-auto">
        <PostsList category="programacao" />
      </div>

      <div id="economia" className="post-list max-w-7xl px-10 mx-auto">
        <PostsList category="economia" />
      </div>
    </main>
  );
}
