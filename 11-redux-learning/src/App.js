import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";

function App() {
  return (
    <main className="bg-black mb-4">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
