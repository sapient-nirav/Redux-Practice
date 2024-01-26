import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts);

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  const renderedPosts = orderedPosts.map((post) => (
    <article
      key={post.id}
      className="bg-gray-300 border-3 border-red-300 max-w-md p-4 rounded mx-auto  shadow mb-4"
    >
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-700">{post.content.substring(0, 100)}</p>
      <div className="flex items-center justify-between mt-4">
        <p className="text-gray-500">
          <PostAuthor userId={post.userId} />
          <span className="mx-2">•</span>
          <TimeAgo timestamp={post.date} />
        </p>
      </div>
      <ReactionButtons post={post} />
    </article>
  ));

  return (
    <section  className="pb-4">
      <h2 className="text-2xl font-bold mb-4 text-white mx-auto text-center">Posts</h2>
      {renderedPosts}
    </section>
  );
};

export default PostsList;
