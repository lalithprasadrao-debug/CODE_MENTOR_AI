import { Code, BookOpen, Trophy, FileText } from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarProps {
  activeTab: "analyze" | "exercises" | "tutorials";
  onTabChange: (tab: "analyze" | "exercises" | "tutorials") => void;
}

export const Sidebar = ({ activeTab, onTabChange }: SidebarProps) => {
  const menuItems = [
    {
      id: "analyze" as const,
      label: "Code Analysis",
      icon: Code,
      description: "Analyze & debug code"
    },
    {
      id: "exercises" as const,
      label: "Exercises",
      icon: Trophy,
      description: "Practice coding"
    },
    {
      id: "tutorials" as const,
      label: "Tutorials",
      icon: BookOpen,
      description: "Learn step by step"
    }
  ];

  return (
    <aside className="w-64 bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <h2 className="font-semibold text-foreground mb-1">Learning Hub</h2>
        <p className="text-sm text-muted-foreground">Choose your learning path</p>
      </div>
      
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200",
                    "hover:bg-muted hover:shadow-sm",
                    isActive && "bg-primary text-primary-foreground shadow-glow"
                  )}
                >
                  <Icon className="h-5 w-5" />
                  <div className="text-left">
                    <div className="font-medium">{item.label}</div>
                    <div className={cn(
                      "text-xs",
                      isActive ? "text-primary-foreground/80" : "text-muted-foreground"
                    )}>
                      {item.description}
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <FileText className="h-4 w-4" />
          <span>Progress saved</span>
        </div>
      </div>
    </aside>
  );
};