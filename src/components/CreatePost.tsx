import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { User } from "@/data/fakeData";
import { Image, Video, FileText, Briefcase } from "lucide-react";

interface CreatePostProps {
  currentUser: User;
  onCreatePost: (content: string) => void;
}

export function CreatePost({ currentUser, onCreatePost }: CreatePostProps) {
  const [postContent, setPostContent] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = () => {
    if (postContent.trim()) {
      onCreatePost(postContent);
      setPostContent("");
      setIsOpen(false);
    }
  };

  return (
    <Card className="mb-2 border-border bg-card p-4 shadow-sm">
      <div className="flex gap-3">
        <img
          src={currentUser.avatar}
          alt={currentUser.name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <button className="flex-1 rounded-full border border-border bg-background px-4 py-2 text-left text-muted-foreground hover:bg-muted transition-colors">
              Start a post
            </button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="flex items-center gap-3">
                <img
                  src={currentUser.avatar}
                  alt={currentUser.name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-foreground">{currentUser.name}</p>
                  <p className="text-sm text-muted-foreground">Post to Anyone</p>
                </div>
              </DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <Textarea
                placeholder="What do you want to talk about?"
                value={postContent}
                onChange={(e) => setPostContent(e.target.value)}
                className="min-h-[200px] resize-none border-0 focus-visible:ring-0 text-base"
                autoFocus
              />
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-secondary">
                    <Image className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-secondary">
                    <Video className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-secondary">
                    <FileText className="h-5 w-5" />
                  </Button>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:bg-secondary">
                    <Briefcase className="h-5 w-5" />
                  </Button>
                </div>
                <Button
                  onClick={handleSubmit}
                  disabled={!postContent.trim()}
                  className="bg-primary hover:bg-primary/90"
                >
                  Post
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      
      <div className="mt-3 flex items-center justify-around border-t border-border pt-3">
        <Button variant="ghost" size="sm" className="flex gap-2 text-primary hover:bg-primary/5">
          <Image className="h-5 w-5" />
          <span className="hidden sm:inline">Photo</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex gap-2 text-success-green hover:bg-success-green/5">
          <Video className="h-5 w-5" />
          <span className="hidden sm:inline">Video</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex gap-2 text-[#e07b39] hover:bg-[#e07b39]/5">
          <Briefcase className="h-5 w-5" />
          <span className="hidden sm:inline">Job</span>
        </Button>
        <Button variant="ghost" size="sm" className="flex gap-2 text-[#c37d16] hover:bg-[#c37d16]/5">
          <FileText className="h-5 w-5" />
          <span className="hidden sm:inline">Article</span>
        </Button>
      </div>
    </Card>
  );
}
