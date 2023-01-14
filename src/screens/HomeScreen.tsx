import PostList from "../components/PostList";

interface Props {
  userEmail: string;
}

const HomeScreen = ({ userEmail }: Props) => {
  return userEmail ? (
    <div className="text-center mb-auto">
      <PostList />
    </div>
  ) : (
    <div className="mt-24">
      <h1 className="text-center font-nunito font-semibold text-5xl my-5">
        Welcome!
      </h1>
      <br />
      <h2 className="text-center font-nunito font-semibold text-3xl">
        Please login or sign up.
      </h2>
      <h4 className="mt-12 text-center font-nunito font-semibold text-xl">
        If you just logged in, please refresh the page to see your posts.
      </h4>
    </div>
  );
};

export default HomeScreen;
