import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { User } from "@/data/fakeData";
import { Plus, Info, TrendingUp } from "lucide-react";

interface RightSidebarProps {
  suggestedUsers: User[];
}

const newsItems = [
  { title: "Tech layoffs continue", time: "1d ago", readers: "5,234" },
  { title: "AI transformation in enterprises", time: "2h ago", readers: "12,456" },
  { title: "Remote work trends 2024", time: "5h ago", readers: "8,901" },
  { title: "Startup funding reaches new high", time: "1d ago", readers: "6,789" },
  { title: "Skills in demand for 2024", time: "3d ago", readers: "15,234" },
];

export function RightSidebar({ suggestedUsers }: RightSidebarProps) {
  return (
    <div className="space-y-2">
      {/* News Card */}
      <Card className="border-border bg-card p-4 shadow-sm">
        <div className="mb-3 flex items-center justify-between">
          <h3 className="font-semibold text-foreground">LinkedIn News</h3>
          <Info className="h-4 w-4 text-muted-foreground" />
        </div>
        <div className="space-y-3">
          {newsItems.map((item, index) => (
            <button
              key={index}
              className="w-full text-left hover:bg-secondary/50 rounded p-2 -mx-2 transition-colors"
            >
              <div className="flex items-start gap-2">
                <TrendingUp className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm text-foreground line-clamp-2">
                    {item.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {item.time} • {item.readers} readers
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </Card>

      {/* People You May Know Card */}
      <Card className="border-border bg-card p-4 shadow-sm">
        <h3 className="mb-3 font-semibold text-foreground">People you may know</h3>
        <div className="space-y-4">
          {suggestedUsers.slice(0, 5).map((user) => (
            <div key={user.id} className="flex items-start gap-3">
              <img
                src={user.avatar}
                alt={user.name}
                className="h-12 w-12 rounded-full object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm text-foreground hover:text-primary hover:underline cursor-pointer truncate">
                  {user.name}
                </h4>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                  {user.headline}
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-8 gap-1 text-primary border-primary hover:bg-primary/5"
                >
                  <Plus className="h-4 w-4" />
                  <span>Connect</span>
                </Button>
              </div>
            </div>
          ))}
        </div>
        <Button variant="ghost" className="w-full mt-3 text-muted-foreground hover:bg-secondary">
          Show more
        </Button>
      </Card>

      {/* Footer */}
      <div className="px-4 py-3 text-center">
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <a href="#" className="hover:text-primary hover:underline">About</a>
          <a href="#" className="hover:text-primary hover:underline">Accessibility</a>
          <a href="#" className="hover:text-primary hover:underline">Help Center</a>
          <a href="#" className="hover:text-primary hover:underline">Privacy</a>
          <a href="#" className="hover:text-primary hover:underline">Terms</a>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          LinkedIn Clone © 2024
        </p>
      </div>
    </div>
  );
}
