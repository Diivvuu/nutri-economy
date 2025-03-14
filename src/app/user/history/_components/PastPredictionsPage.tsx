'use client';
import React, { useEffect, useState } from 'react';
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
import {
  Loader2,
  AlertCircle,
  Search,
  Calendar,
  Clock,
  ArrowRight,
} from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Input } from '@/components/ui/input';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
// import { getPastPredictions } from '@/app/redux/actions/userActions'; // You'll need to create this action
import { toast } from 'sonner';
import { format } from 'date-fns';

// Mock data for past predictions
const mockPastPredictions = [
  {
    id: '1',
    disease: 'Common Cold',
    confidence: 0.85,
    date: '2025-03-10T14:30:00Z',
    symptoms: ['fever', 'cough', 'sore throat', 'runny nose'],
    description:
      "The common cold is a viral infection of your nose and throat (upper respiratory tract). It's usually harmless, although it might not feel that way. Many types of viruses can cause a common cold.",
  },
  {
    id: '2',
    disease: 'Influenza',
    confidence: 0.92,
    date: '2025-03-05T09:15:00Z',
    symptoms: ['fever', 'chills', 'body aches', 'fatigue', 'cough'],
    description:
      'Influenza (flu) is a contagious respiratory illness caused by influenza viruses. It can cause mild to severe illness, and at times can lead to death. Flu is different from a cold and usually comes on suddenly.',
  },
  {
    id: '3',
    disease: 'Allergic Rhinitis',
    confidence: 0.78,
    date: '2025-02-28T16:45:00Z',
    symptoms: ['runny nose', 'sneezing', 'itchy eyes', 'fatigue'],
    description:
      'Allergic rhinitis, also known as hay fever, is an allergic response to specific allergens. Pollen is the most common allergen in seasonal allergic rhinitis.',
  },
];

interface PredictionResult {
  id: string;
  disease: string;
  confidence: number;
  date: string;
  symptoms: string[];
  description?: string;
}

export default function PastPredictionsPage() {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [predictions, setPredictions] =
    useState<PredictionResult[]>(mockPastPredictions);

  // Uncomment when you have the Redux action implemented
  // const {
  //   response: pastPredictions,
  //   loading: isLoading,
  //   error: errorMessage,
  // } = useSelector((state: RootState) => state.userFeatures.past_predictions);

  // For demo purposes, using local state
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    // Load past predictions when component mounts
    loadPastPredictions();
  }, []);

  const loadPastPredictions = async () => {
    setIsLoading(true);
    try {
      // Uncomment when you have the Redux action implemented
      // await dispatch(getPastPredictions());

      // For demo purposes, simulate API call
      setTimeout(() => {
        setPredictions(mockPastPredictions);
        setIsLoading(false);
      }, 1000);
    } catch (error: any) {
      setErrorMessage('Failed to load past predictions. Please try again.');
      setIsLoading(false);
    }
  };

  const handleViewDetails = (predictionId: string) => {
    // router.push(`/user/prediction-details/${predictionId}`);
  };

  const handleViewRecommendations = (disease: string) => {
    router.push(`/user/recommendations?disease=${disease}`);
  };

  // Filter predictions based on search query
  const filteredPredictions = searchQuery
    ? predictions.filter(
        (prediction) =>
          prediction.disease
            .toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          prediction.symptoms.some((symptom) =>
            symptom.toLowerCase().includes(searchQuery.toLowerCase())
          )
      )
    : predictions;

  return (
    <div className="container mx-auto w-full py-8 max-w-4xl font-mabry">
      <h1 className="text-3xl font-bold mb-6">Past Predictions</h1>

      {/* Search and filter */}
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by disease or symptom..."
            className="pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
          <span className="ml-2 text-lg">
            Loading your prediction history...
          </span>
        </div>
      ) : errorMessage ? (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
      ) : filteredPredictions.length === 0 ? (
        <Card>
          <CardContent className="py-10">
            <div className="text-center">
              <p className="text-muted-foreground mb-4">
                No predictions found.
              </p>
              <Button onClick={() => router.push('/user/predict')}>
                Make a New Prediction
              </Button>
            </div>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-6">
          {filteredPredictions.map((prediction) => (
            <Card key={prediction.id} className="overflow-hidden">
              <CardHeader className="bg-muted/30 pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl">
                      {prediction.disease}
                    </CardTitle>
                    <div className="flex items-center text-sm text-muted-foreground mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      {format(new Date(prediction.date), 'MMM d, yyyy')}
                      <Clock className="h-4 w-4 ml-3 mr-1" />
                      {format(new Date(prediction.date), 'h:mm a')}
                    </div>
                  </div>
                  <Badge
                    variant={
                      prediction.confidence > 0.8 ? 'default' : 'outline'
                    }
                    className="ml-2"
                  >
                    {Math.round(prediction.confidence * 100)}% Confidence
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-medium mb-1">Symptoms:</h3>
                    <div className="flex flex-wrap gap-2">
                      {prediction.symptoms.map((symptom) => (
                        <Badge key={symptom} variant="outline">
                          {symptom}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {prediction.description && (
                    <div>
                      <h3 className="text-sm font-medium mb-1">Description:</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {prediction.description}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t pt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => handleViewDetails(prediction.id)}
                >
                  View Details
                </Button>
                <Button
                  size="sm"
                  onClick={() => handleViewRecommendations(prediction.disease)}
                  className="flex items-center"
                >
                  Recommendations
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      <div className="mt-8 text-center">
        <Button onClick={() => router.push('/user/predict')} size="lg">
          Make a New Prediction
        </Button>
      </div>
    </div>
  );
}
