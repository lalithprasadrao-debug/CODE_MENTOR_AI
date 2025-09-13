import { Editor } from "@monaco-editor/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, RotateCcw, Bug } from "lucide-react";

interface CodeEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export const CodeEditor = ({ value, onChange }: CodeEditorProps) => {
  const handleEditorChange = (newValue: string | undefined) => {
    onChange(newValue || "");
  };

  return (
    <Card className="h-full shadow-card">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-primary/10">
              <Bug className="h-4 w-4 text-primary" />
            </div>
            Code Editor
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <RotateCcw className="h-3 w-3 mr-1" />
              Reset
            </Button>
            <Button size="sm" className="bg-success hover:bg-success/90">
              <Play className="h-3 w-3 mr-1" />
              Analyze
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0 flex-1">
        <div className="h-[calc(100vh-240px)] border rounded-lg overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage="python"
            value={value}
            onChange={handleEditorChange}
            theme="vs-dark"
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: "on",
              wordWrap: "on",
              automaticLayout: true,
              scrollBeyondLastLine: false,
              folding: true,
              renderLineHighlight: "gutter",
              selectOnLineNumbers: true,
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
};