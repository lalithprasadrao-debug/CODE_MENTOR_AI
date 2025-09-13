import { useState } from "react";
import { Sidebar } from "@/components/Sidebar";
import { CodeEditor } from "@/components/CodeEditor";
import { ExplanationPanel } from "@/components/ExplanationPanel";
import { ExercisePanel } from "@/components/ExercisePanel";
import { Header } from "@/components/Header";

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<"analyze" | "exercises" | "tutorials">("analyze");
  const [code, setCode] = useState("# Write your Python code here\ndef hello_world():\n    print('Hello, World!')\n\nhello_world()");

  return (
    <div className="flex h-screen bg-background">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 flex gap-4 p-4 overflow-hidden">
          {activeTab === "analyze" && (
            <>
              <div className="w-1/2 flex flex-col gap-4">
                <CodeEditor value={code} onChange={setCode} />
              </div>
              <div className="w-1/2">
                <ExplanationPanel code={code} />
              </div>
            </>
          )}
          
          {activeTab === "exercises" && (
            <div className="w-full">
              <ExercisePanel />
            </div>
          )}
          
          {activeTab === "tutorials" && (
            <div className="w-full flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Interactive Tutorials</h2>
                <p className="text-muted-foreground">Coming soon! Step-by-step coding lessons.</p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};