import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lightbulb, Clock, Zap, CheckCircle, AlertTriangle } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ExplanationPanelProps {
  code: string;
}

export const ExplanationPanel = ({ code }: ExplanationPanelProps) => {
  // Mock analysis data - in a real app, this would come from AI API
  const analysis = {
    explanation: [
      {
        line: 1,
        code: "def hello_world():",
        explanation: "Defines a function named 'hello_world' that takes no parameters."
      },
      {
        line: 2,
        code: "    print('Hello, World!')",
        explanation: "Prints the string 'Hello, World!' to the console."
      },
      {
        line: 4,
        code: "hello_world()",
        explanation: "Calls the hello_world function to execute it."
      }
    ],
    complexity: {
      time: "O(1)",
      space: "O(1)"
    },
    errors: [],
    suggestions: [
      "Consider adding a docstring to document the function's purpose.",
      "You could make this function more flexible by accepting a parameter."
    ]
  };

  return (
    <Card className="h-full shadow-card">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg flex items-center gap-2">
          <div className="p-1.5 rounded-md bg-accent/10">
            <Lightbulb className="h-4 w-4 text-accent" />
          </div>
          AI Analysis
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex-1">
        <ScrollArea className="h-[calc(100vh-240px)] p-6">
          <div className="space-y-6">
            {/* Code Explanation */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-success" />
                Line-by-Line Explanation
              </h3>
              <div className="space-y-3">
                {analysis.explanation.map((item, index) => (
                  <div key={index} className="border rounded-lg p-3 bg-muted/30">
                    <div className="flex items-start gap-3">
                      <Badge variant="outline" className="text-xs">
                        Line {item.line}
                      </Badge>
                      <div className="flex-1">
                        <code className="text-sm bg-card px-2 py-1 rounded border">
                          {item.code}
                        </code>
                        <p className="text-sm text-muted-foreground mt-2">
                          {item.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Complexity Analysis */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <Zap className="h-4 w-4 text-warning" />
                Complexity Analysis
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="border rounded-lg p-3 text-center">
                  <Clock className="h-5 w-5 text-muted-foreground mx-auto mb-1" />
                  <p className="text-sm text-muted-foreground">Time Complexity</p>
                  <p className="font-mono font-semibold text-lg">{analysis.complexity.time}</p>
                </div>
                <div className="border rounded-lg p-3 text-center">
                  <Zap className="h-5 w-5 text-muted-foreground mx-auto mb-1" />
                  <p className="text-sm text-muted-foreground">Space Complexity</p>
                  <p className="font-mono font-semibold text-lg">{analysis.complexity.space}</p>
                </div>
              </div>
            </div>

            {/* Suggestions */}
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-accent" />
                Improvement Suggestions
              </h3>
              <div className="space-y-2">
                {analysis.suggestions.map((suggestion, index) => (
                  <div key={index} className="border rounded-lg p-3 bg-accent/5">
                    <p className="text-sm">{suggestion}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};