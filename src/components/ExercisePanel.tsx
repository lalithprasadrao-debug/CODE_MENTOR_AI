import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, Star, Clock, Code2, ChevronRight } from "lucide-react";

export const ExercisePanel = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState<"beginner" | "intermediate" | "advanced">("beginner");

  const exercises = {
    beginner: [
      {
        id: 1,
        title: "Hello World Variations",
        description: "Create different versions of the classic Hello World program",
        points: 10,
        timeEstimate: "5 min",
        completed: true
      },
      {
        id: 2,
        title: "Variables and Data Types",
        description: "Practice declaring and using different variable types",
        points: 15,
        timeEstimate: "10 min",
        completed: false
      },
      {
        id: 3,
        title: "Simple Calculations",
        description: "Write programs that perform basic arithmetic operations",
        points: 15,
        timeEstimate: "8 min",
        completed: false
      }
    ],
    intermediate: [
      {
        id: 4,
        title: "List Manipulation",
        description: "Work with lists: sorting, filtering, and transforming data",
        points: 25,
        timeEstimate: "15 min",
        completed: false
      },
      {
        id: 5,
        title: "Function Design",
        description: "Create reusable functions with proper parameters and return values",
        points: 30,
        timeEstimate: "20 min",
        completed: false
      }
    ],
    advanced: [
      {
        id: 6,
        title: "Algorithm Implementation",
        description: "Implement classic algorithms like binary search or quicksort",
        points: 50,
        timeEstimate: "30 min",
        completed: false
      }
    ]
  };

  const difficulties = [
    { id: "beginner" as const, label: "Beginner", color: "bg-success" },
    { id: "intermediate" as const, label: "Intermediate", color: "bg-warning" },
    { id: "advanced" as const, label: "Advanced", color: "bg-destructive" }
  ];

  const totalExercises = Object.values(exercises).flat().length;
  const completedExercises = Object.values(exercises).flat().filter(ex => ex.completed).length;
  const progressPercentage = (completedExercises / totalExercises) * 100;

  return (
    <div className="space-y-6">
      {/* Progress Overview */}
      <Card className="shadow-card">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="p-1.5 rounded-md bg-primary/10">
              <Trophy className="h-4 w-4 text-primary" />
            </div>
            Your Progress
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Overall Completion</span>
              <span className="text-sm text-muted-foreground">
                {completedExercises}/{totalExercises} exercises
              </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1">
                <Star className="h-3 w-3 text-warning" />
                <span>15 points earned</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-3 w-3 text-muted-foreground" />
                <span>5 min spent today</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Difficulty Selection */}
      <div className="flex gap-2">
        {difficulties.map((difficulty) => (
          <Button
            key={difficulty.id}
            variant={selectedDifficulty === difficulty.id ? "default" : "outline"}
            onClick={() => setSelectedDifficulty(difficulty.id)}
            className="flex-1"
          >
            <div className={`w-2 h-2 rounded-full ${difficulty.color} mr-2`} />
            {difficulty.label}
          </Button>
        ))}
      </div>

      {/* Exercise List */}
      <div className="space-y-3">
        {exercises[selectedDifficulty].map((exercise) => (
          <Card key={exercise.id} className="shadow-card hover:shadow-lg transition-shadow cursor-pointer">
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold">{exercise.title}</h3>
                    {exercise.completed && (
                      <Badge variant="outline" className="text-success border-success">
                        Completed
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">
                    {exercise.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3" />
                      <span>{exercise.points} points</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{exercise.timeEstimate}</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2 ml-4">
                  <Button size="sm" variant={exercise.completed ? "outline" : "default"}>
                    <Code2 className="h-3 w-3 mr-1" />
                    {exercise.completed ? "Review" : "Start"}
                  </Button>
                  <ChevronRight className="h-4 w-4 text-muted-foreground" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};