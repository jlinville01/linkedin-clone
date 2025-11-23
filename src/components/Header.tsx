import { Search, Home, Users, Briefcase, MessageSquare, Bell, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-card shadow-sm">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between gap-4">
          {/* Logo and Search */}
          <div className="flex items-center gap-2 flex-1 max-w-md">
            <div className="flex items-center justify-center h-9 w-9 rounded bg-primary flex-shrink-0">
              <span className="text-xl font-bold text-primary-foreground">in</span>
            </div>
            <div className="relative w-full">
              <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search"
                className="pl-8 h-9 bg-secondary/50 border-secondary"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-0.5 h-auto py-2 px-3 text-muted-foreground hover:text-foreground">
              <Home className="h-5 w-5" />
              <span className="text-xs hidden sm:inline">Home</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-0.5 h-auto py-2 px-3 text-muted-foreground hover:text-foreground">
              <Users className="h-5 w-5" />
              <span className="text-xs hidden sm:inline">Network</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-0.5 h-auto py-2 px-3 text-muted-foreground hover:text-foreground">
              <Briefcase className="h-5 w-5" />
              <span className="text-xs hidden sm:inline">Jobs</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-0.5 h-auto py-2 px-3 text-muted-foreground hover:text-foreground">
              <MessageSquare className="h-5 w-5" />
              <span className="text-xs hidden sm:inline">Messaging</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-0.5 h-auto py-2 px-3 text-muted-foreground hover:text-foreground">
              <Bell className="h-5 w-5" />
              <span className="text-xs hidden sm:inline">Notifications</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex flex-col items-center gap-0.5 h-auto py-2 px-3 text-muted-foreground hover:text-foreground border-l border-border ml-1 rounded-none">
              <User className="h-5 w-5" />
              <span className="text-xs hidden sm:inline">Me</span>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
