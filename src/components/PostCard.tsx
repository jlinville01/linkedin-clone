import { useState } from "react";
import { ThumbsUp, MessageSquare, Repeat2, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Post, User, Comment } from "@/data/fakeData";
import { formatTimestamp, formatNumber } from "@/lib/dateUtils";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  user: User;
  onLike: (postId: number) => void;
  onComment: (postId: number, content: string) => void;
  onRepost: (postId: number) => void;
}

export function PostCard({ post, user, onLike, onComment, onRepost }: PostCardProps) {
  const [showComments, setShowComments] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [isReposted, setIsReposted] = useState(false);

  const handleLike = () => {
    onLike(post.id);
  };

  const handleComment = () => {
    if (commentText.trim()) {
      onComment(post.id, commentText);
      setCommentText("");
    }
  };

  const handleRepost = () => {
    onRepost(post.id);
    setIsReposted(true);
    setTimeout(() => setIsReposted(false), 2000);
  };

  return (
    <Card className="mb-2 overflow-hidden border-border bg-card shadow-sm transition-shadow hover:shadow-md">
      <div className="p-4">
        {/* User Header */}
        <div className="mb-3 flex items-start gap-3">
          <img
            src={user.avatar}
            alt={user.name}
            className="h-12 w-12 rounded-full object-cover"
          />
          <div className="flex-1">
            <h3 className="font-semibold text-foreground hover:text-primary hover:underline cursor-pointer">
              {user.name}
            </h3>
            <p className="text-sm text-muted-foreground">{user.headline}</p>
            <p className="text-xs text-muted-foreground">
              {formatTimestamp(post.timestamp)} • 🌐
            </p>
          </div>
        </div>

        {/* Post Content */}
        <div className="mb-3">
          <p className="whitespace-pre-wrap text-foreground">{post.content}</p>
        </div>

        {/* Post Image */}
        {post.image && (
          <div className="mb-3 -mx-4">
            <img
              src={post.image}
              alt="Post content"
              className="w-full object-cover max-h-96"
            />
          </div>
        )}

        {/* Engagement Stats */}
        <div className="mb-3 flex items-center justify-between border-b border-border pb-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <div className="flex items-center justify-center h-5 w-5 rounded-full bg-primary">
              <ThumbsUp className="h-3 w-3 text-primary-foreground fill-current" />
            </div>
            <span>{formatNumber(post.likes)}</span>
          </div>
          <div className="flex gap-3">
            <span>{post.comments.length} comments</span>
            <span>{formatNumber(post.reposts)} reposts</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-around">
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "flex-1 gap-2 text-muted-foreground hover:bg-muted",
              post.isLiked && "text-primary font-semibold"
            )}
            onClick={handleLike}
          >
            <ThumbsUp className={cn("h-5 w-5", post.isLiked && "fill-current")} />
            <span>Like</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 gap-2 text-muted-foreground hover:bg-muted"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageSquare className="h-5 w-5" />
            <span>Comment</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className={cn(
              "flex-1 gap-2 text-muted-foreground hover:bg-muted",
              isReposted && "text-success-green font-semibold"
            )}
            onClick={handleRepost}
          >
            <Repeat2 className="h-5 w-5" />
            <span>Repost</span>
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="flex-1 gap-2 text-muted-foreground hover:bg-muted"
          >
            <Send className="h-5 w-5" />
            <span>Send</span>
          </Button>
        </div>

        {/* Comments Section */}
        {showComments && (
          <div className="mt-4 border-t border-border pt-4">
            <div className="mb-3 flex gap-3">
              <img
                src={user.avatar}
                alt="Your avatar"
                className="h-10 w-10 rounded-full object-cover"
              />
              <div className="flex-1">
                <Textarea
                  placeholder="Add a comment..."
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  className="min-h-[60px] resize-none"
                />
                <div className="mt-2 flex justify-end">
                  <Button
                    size="sm"
                    onClick={handleComment}
                    disabled={!commentText.trim()}
                  >
                    Post
                  </Button>
                </div>
              </div>
            </div>

            {/* Existing Comments */}
            {post.comments.length > 0 && (
              <div className="space-y-3">
                {post.comments.map((comment) => (
                  <CommentItem key={comment.id} comment={comment} />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </Card>
  );
}

function CommentItem({ comment }: { comment: Comment }) {
  return (
    <div className="flex gap-3">
      <img
        src={`https://i.pravatar.cc/150?img=${comment.userId}`}
        alt="Commenter"
        className="h-8 w-8 rounded-full object-cover"
      />
      <div className="flex-1 rounded-lg bg-secondary p-3">
        <p className="text-sm font-semibold text-foreground">User {comment.userId}</p>
        <p className="text-sm text-foreground">{comment.content}</p>
        <p className="mt-1 text-xs text-muted-foreground">
          {formatTimestamp(comment.timestamp)}
        </p>
      </div>
    </div>
  );
}
