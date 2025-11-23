import { useState } from "react";
import { Header } from "@/components/Header";
import { LeftSidebar } from "@/components/LeftSidebar";
import { RightSidebar } from "@/components/RightSidebar";
import { PostCard } from "@/components/PostCard";
import { CreatePost } from "@/components/CreatePost";
import { fakeUsers, fakePosts, Post, Comment } from "@/data/fakeData";

const Index = () => {
  const currentUser = fakeUsers[0];
  const [posts, setPosts] = useState<Post[]>(fakePosts);

  const handleLike = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const handleComment = (postId: number, content: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          const newComment: Comment = {
            id: post.comments.length + 1,
            userId: currentUser.id,
            content,
            timestamp: new Date(),
          };
          return {
            ...post,
            comments: [...post.comments, newComment],
          };
        }
        return post;
      })
    );
  };

  const handleRepost = (postId: number) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) =>
        post.id === postId
          ? { ...post, reposts: post.reposts + 1 }
          : post
      )
    );
  };

  const handleCreatePost = (content: string) => {
    const newPost: Post = {
      id: posts.length + 1,
      userId: currentUser.id,
      content,
      timestamp: new Date(),
      likes: 0,
      comments: [],
      reposts: 0,
      isLiked: false,
    };
    setPosts([newPost, ...posts]);
  };

  const getUserById = (userId: number) => {
    return fakeUsers.find((user) => user.id === userId) || currentUser;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="mx-auto max-w-7xl px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Sidebar */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-20">
              <LeftSidebar currentUser={currentUser} />
            </div>
          </aside>

          {/* Main Feed */}
          <div className="lg:col-span-6">
            <CreatePost currentUser={currentUser} onCreatePost={handleCreatePost} />
            
            <div className="space-y-0">
              {posts.map((post) => (
                <PostCard
                  key={post.id}
                  post={post}
                  user={getUserById(post.userId)}
                  onLike={handleLike}
                  onComment={handleComment}
                  onRepost={handleRepost}
                />
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-20">
              <RightSidebar suggestedUsers={fakeUsers.slice(1, 6)} />
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Index;
