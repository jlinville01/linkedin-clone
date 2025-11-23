import { Card } from "@/components/ui/card";
import { User } from "@/data/fakeData";
import { formatNumber } from "@/lib/dateUtils";
import { Bookmark, Users } from "lucide-react";

interface LeftSidebarProps {
  currentUser: User;
}

export function LeftSidebar({ currentUser }: LeftSidebarProps) {
  return (
    <div className="space-y-2">
      {/* Profile Card */}
      <Card className="overflow-hidden border-border bg-card shadow-sm">
        <div className="relative h-16 bg-gradient-to-r from-primary/80 to-primary" />
        <div className="px-4 pb-4">
          <div className="relative -mt-8 mb-2">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="h-16 w-16 rounded-full border-4 border-card object-cover"
            />
          </div>
          <h3 className="font-semibold text-foreground hover:underline cursor-pointer">
            {currentUser.name}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">{currentUser.headline}</p>
          
          <div className="border-t border-border pt-3">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="text-muted-foreground">Connections</span>
              <span className="font-semibold text-primary">{formatNumber(currentUser.connections)}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Profile views</span>
              <span className="font-semibold text-primary">{Math.floor(Math.random() * 50) + 10}</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-border">
          <button className="w-full px-4 py-3 text-left text-sm text-muted-foreground hover:bg-secondary transition-colors">
            <div className="flex items-center gap-2">
              <Bookmark className="h-4 w-4" />
              <span>My items</span>
            </div>
          </button>
        </div>
      </Card>

      {/* Quick Links Card */}
      <Card className="border-border bg-card p-3 shadow-sm">
        <div className="space-y-2">
          <button className="w-full text-left text-sm text-primary hover:underline flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>Groups</span>
          </button>
          <button className="w-full text-left text-sm text-primary hover:underline">
            Events
          </button>
          <button className="w-full text-left text-sm text-primary hover:underline">
            Followed Hashtags
          </button>
        </div>
      </Card>
    </div>
  );
}
