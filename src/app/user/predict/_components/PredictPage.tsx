'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Loader2, AlertCircle, Search } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
import { getDisease } from '@/app/redux/actions/userActions';
import { toast } from 'sonner';

// Available symptoms list
const symptoms_list = [
  'fever',
  'cough',
  'headache',
  'fatigue',
  'chills',
  'sore throat',
  'shortness of breath',
  'runny nose',
  'body aches',
  'nausea',
  'vomiting',
  'diarrhea',
  'loss of taste',
  'loss of smell',
  'dizziness',
  'rash',
  'abdominal pain',
  'joint pain',
  'chest pain',
];

// Mock response for testing
const mockResponse = {
  disease: 'Common Cold',
  confidence: 0.85,
  description:
    "The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold.",
};

interface PredictionResult {
  disease: string;
  confidence: number;
  description?: string;
}

export default function PredictPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<PredictionResult | null>(null);

  const {
    response: diesase,
    loading: diseaseLoading,
    error: diseaseError,
  } = useSelector((state: RootState) => state.userFeatures.predicted_disease);

  const toggleSymptom = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const handleSubmit = async () => {
    if (selectedSymptoms.length === 0) {
      setError('Please select at least one symptom');
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await dispatch(getDisease(selectedSymptoms));
      if (response?.success) toast.success('Disease guessed');
      //   // Simulate API call with a timeout
      //   setTimeout(() => {
      //     // Mock dispatch of request
      //     // const response = await fetch("https://9fd2-49-156-81-173.ngrok-free.app/disease/predict", {
      //     //   method: "POST",
      //     //   headers: {
      //     //     "Content-Type": "application/json",
      //     //     // "Authorization": `Bearer ${localStorage.getItem('token')}`
      //     //   },
      //     //   body: JSON.stringify({ symptoms: selectedSymptoms })
      //     // });

      //     // Using mock data instead
      //     const data = mockResponse;
      //     setResult(data);
      //     setIsLoading(false);
      //   }, 1500); // Simulate network delay
      setResult(mockResponse);
    } catch (error: any) {
      setError('Failed to predict disease. Please try again.');
      setIsLoading(false);
    }
  };

  const handleViewRecommendations = () => {
    if (result) {
      router.push(`/user/recommendations?disease=${result.disease}`);
    }
  };

  // Filter symptoms based on search query
  const filteredSymptoms = searchQuery
    ? symptoms_list.filter((symptom) =>
        symptom.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : symptoms_list;

  return (
    <div className="container mx-auto w-full py-8 max-w-4xl font-mabry">
      <h1 className="text-3xl font-bold mb-6">Disease Prediction</h1>

      {!result ? (
        <Card>
          <CardHeader>
            <CardTitle>Select Your Symptoms</CardTitle>
            <CardDescription>
              Click on the symptoms you are experiencing for an accurate
              prediction
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {/* Selected symptoms display */}
              <div>
                <h3 className="text-sm font-medium mb-2">Selected Symptoms:</h3>
                <div className="flex flex-wrap gap-2 min-h-12 p-2 border rounded-md bg-muted/20">
                  {selectedSymptoms.length > 0 ? (
                    selectedSymptoms.map((symptom) => (
                      <Badge
                        key={symptom}
                        variant="secondary"
                        className="px-3 py-1.5 cursor-pointer hover:bg-secondary/80"
                        onClick={() => toggleSymptom(symptom)}
                      >
                        {symptom} ✕
                      </Badge>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-sm p-1">
                      No symptoms selected. Please select from the options
                      below.
                    </p>
                  )}
                </div>
              </div>

              {/* Search bar */}
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for symptoms..."
                  className="pl-8"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* All symptoms as buttons */}
              <div className="border rounded-md p-4">
                <h3 className="text-sm font-medium mb-3">
                  {searchQuery ? 'Search Results:' : 'All Symptoms:'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {filteredSymptoms.length > 0 ? (
                    filteredSymptoms.map((symptom) => (
                      <Button
                        key={symptom}
                        variant={
                          selectedSymptoms.includes(symptom)
                            ? 'default'
                            : 'outline'
                        }
                        size="sm"
                        onClick={() => toggleSymptom(symptom)}
                        className="mb-1"
                      >
                        {symptom}
                      </Button>
                    ))
                  ) : (
                    <p className="text-muted-foreground text-sm">
                      No matching symptoms found
                    </p>
                  )}
                </div>
              </div>

              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Button
              variant="outline"
              onClick={() => setSelectedSymptoms([])}
              disabled={selectedSymptoms.length === 0}
            >
              Clear All
            </Button>
            <Button
              onClick={handleSubmit}
              disabled={isLoading || selectedSymptoms.length === 0}
              className="min-w-32"
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Analyzing...
                </>
              ) : (
                'Predict Disease'
              )}
            </Button>
          </CardFooter>
        </Card>
      ) : (
        <Card>
          <CardHeader className="bg-muted/50">
            <CardTitle className="flex justify-between items-center">
              Prediction Results
              <Badge
                variant={result.confidence > 0.7 ? 'default' : 'outline'}
                className="ml-2"
              >
                {Math.round(result.confidence * 100)}% Confidence
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Predicted Disease
                </h3>
                <p className="text-2xl font-bold text-primary">
                  {result.disease}
                </p>
              </div>

              {result.description && (
                <div>
                  <h3 className="text-lg font-semibold mb-1">Description</h3>
                  <p className="text-muted-foreground">{result.description}</p>
                </div>
              )}

              <div>
                <h3 className="text-lg font-semibold mb-1">
                  Based on Symptoms
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedSymptoms.map((symptom) => (
                    <Badge key={symptom} variant="outline">
                      {symptom}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between border-t pt-6">
            <Button variant="outline" onClick={() => setResult(null)}>
              New Prediction
            </Button>
            <Button onClick={handleViewRecommendations}>
              View Recommendations
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
