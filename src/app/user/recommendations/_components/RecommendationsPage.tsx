'use client';
import React, { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, AlertCircle, ArrowLeft, Utensils, Pill } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/redux/store';
// import { getRecommendations } from '@/app/redux/actions/userActions'; // You'll need to create this action
import { toast } from 'sonner';

// Define proper TypeScript interfaces
interface FoodRecommendation {
  title: string;
  description: string;
  foods: string[];
}

interface DietRecommendation {
  overview: string;
  recommendations: FoodRecommendation[];
}

interface Supplement {
  name: string;
  dosage: string;
  benefits: string;
  precautions: string;
}

interface RecommendationData {
  disease: string;
  diet: DietRecommendation;
  supplements: Supplement[];
}

// Mock data for recommendations
const mockRecommendations: RecommendationData = {
  disease: 'Common Cold',
  diet: {
    overview:
      'A diet rich in vitamin C, zinc, and antioxidants can help boost your immune system and reduce the duration of cold symptoms.',
    recommendations: [
      {
        title: 'Increase Vitamin C Intake',
        description:
          'Consume foods rich in vitamin C such as citrus fruits, berries, and leafy greens to boost your immune system.',
        foods: ['Oranges', 'Strawberries', 'Kiwi', 'Bell peppers', 'Broccoli'],
      },
      {
        title: 'Stay Hydrated',
        description:
          'Drink plenty of fluids to thin mucus and keep your throat moist. Warm liquids can be especially soothing.',
        foods: [
          'Water',
          'Herbal tea',
          'Clear broth',
          'Warm lemon water with honey',
        ],
      },
      {
        title: 'Include Zinc-Rich Foods',
        description:
          'Zinc may help reduce the duration of cold symptoms when consumed at the onset of illness.',
        foods: [
          'Lean meats',
          'Oysters',
          'Pumpkin seeds',
          'Chickpeas',
          'Yogurt',
        ],
      },
    ],
  },
  supplements: [
    {
      name: 'Vitamin C',
      dosage: '1000mg daily',
      benefits:
        'May reduce the duration of cold symptoms and support immune function.',
      precautions: 'High doses may cause digestive upset in some individuals.',
    },
    {
      name: 'Zinc Lozenges',
      dosage: '15-30mg every 2 hours while awake',
      benefits:
        'May reduce the duration of cold symptoms when taken within 24 hours of symptom onset.',
      precautions:
        'Do not use for more than 5-7 days. May cause nausea or altered taste.',
    },
    {
      name: 'Echinacea',
      dosage: 'As directed on product label',
      benefits: 'May help reduce symptoms and duration of the common cold.',
      precautions:
        'Not recommended for people with autoimmune disorders or allergies to plants in the daisy family.',
    },
  ],
};

const RecommendationsPage: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const disease = searchParams.get('disease');
  const dispatch = useDispatch<AppDispatch>();

  const [recommendations, setRecommendations] =
    useState<RecommendationData | null>(null);

  // Uncomment when you have the Redux action implemented
  // const {
  //   response: recommendationsData,
  //   loading: isLoading,
  //   error: errorMessage,
  // } = useSelector((state: RootState) => state.userFeatures.recommendations);

  // For demo purposes, using local state
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  useEffect(() => {
    if (!disease) {
      setErrorMessage('No disease specified. Please make a prediction first.');
      setIsLoading(false);
      return;
    }

    loadRecommendations(disease);
  }, [disease]);

  const loadRecommendations = async (diseaseName: string): Promise<void> => {
    setIsLoading(true);
    try {
      // Uncomment when you have the Redux action implemented
      // await dispatch(getRecommendations(diseaseName));

      // For demo purposes, simulate API call
      setTimeout(() => {
        setRecommendations(mockRecommendations);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setErrorMessage('Failed to load recommendations. Please try again.');
      setIsLoading(false);
    }
  };

  const handleBackToPrediction = (): void => {
    router.push('/user/predict');
  };

  if (isLoading) {
    return (
      <div className="container mx-auto w-full py-12 max-w-4xl font-mabry">
        <div className="flex flex-col items-center justify-center h-64">
          <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
          <p className="text-lg">Loading recommendations for {disease}...</p>
        </div>
      </div>
    );
  }

  if (errorMessage) {
    return (
      <div className="container mx-auto w-full py-12 max-w-4xl font-mabry">
        <Alert variant="destructive" className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{errorMessage}</AlertDescription>
        </Alert>
        <Button onClick={handleBackToPrediction}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Prediction
        </Button>
      </div>
    );
  }

  if (!recommendations) {
    return null;
  }

  return (
    <div className="container mx-auto w-full py-8 max-w-4xl font-mabry">
      <div className="flex items-center mb-6">
        <Button
          variant="ghost"
          onClick={handleBackToPrediction}
          className="mr-2"
        >
          <ArrowLeft className="h-4 w-4 mr-1" />
        </Button>
        <h1 className="text-3xl font-bold">
          Recommendations for {recommendations.disease}
        </h1>
      </div>

      <p className="text-muted-foreground mb-8">
        Based on your symptoms and prediction results, we've compiled
        personalized dietary and supplement recommendations to help manage your
        condition.
      </p>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="all">All Recommendations</TabsTrigger>
          <TabsTrigger value="diet">
            <Utensils className="h-4 w-4 mr-2" />
            Dietary Plan
          </TabsTrigger>
          <TabsTrigger value="supplements">
            <Pill className="h-4 w-4 mr-2" />
            Supplements
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          {/* Diet Section */}
          <Card>
            <CardHeader className="bg-muted/30">
              <CardTitle className="flex items-center">
                <Utensils className="h-5 w-5 mr-2" />
                Dietary Recommendations
              </CardTitle>
              <CardDescription>
                Nutrition guidance to help manage {recommendations.disease}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  {recommendations.diet.overview}
                </p>

                {recommendations.diet.recommendations.map((rec, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">{rec.title}</h3>
                    <p className="text-muted-foreground mb-3">
                      {rec.description}
                    </p>
                    <div>
                      <h4 className="text-sm font-medium mb-2">
                        Recommended Foods:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {rec.foods.map((food, i) => (
                          <Badge key={i} variant="secondary">
                            {food}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Supplements Section */}
          <Card>
            <CardHeader className="bg-muted/30">
              <CardTitle className="flex items-center">
                <Pill className="h-5 w-5 mr-2" />
                Recommended Supplements
              </CardTitle>
              <CardDescription>
                Supplements that may help with {recommendations.disease}{' '}
                symptoms
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Alert className="bg-amber-50 border-amber-200">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                  <AlertTitle className="text-amber-800">
                    Important Note
                  </AlertTitle>
                  <AlertDescription className="text-amber-700">
                    Always consult with a healthcare professional before
                    starting any supplement regimen.
                  </AlertDescription>
                </Alert>

                {recommendations.supplements.map((supplement, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">
                        {supplement.name}
                      </h3>
                      <Badge variant="outline">{supplement.dosage}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {supplement.benefits}
                    </p>
                    <div className="bg-muted/30 p-3 rounded-md">
                      <h4 className="text-sm font-medium mb-1">Precautions:</h4>
                      <p className="text-sm text-muted-foreground">
                        {supplement.precautions}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="diet">
          <Card>
            <CardHeader className="bg-muted/30">
              <CardTitle className="flex items-center">
                <Utensils className="h-5 w-5 mr-2" />
                Dietary Recommendations
              </CardTitle>
              <CardDescription>
                Nutrition guidance to help manage {recommendations.disease}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-6">
                <p className="text-muted-foreground">
                  {recommendations.diet.overview}
                </p>

                {recommendations.diet.recommendations.map((rec, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h3 className="text-lg font-semibold mb-2">{rec.title}</h3>
                    <p className="text-muted-foreground mb-3">
                      {rec.description}
                    </p>
                    <div>
                      <h4 className="text-sm font-medium mb-2">
                        Recommended Foods:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {rec.foods.map((food, i) => (
                          <Badge key={i} variant="secondary">
                            {food}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="supplements">
          <Card>
            <CardHeader className="bg-muted/30">
              <CardTitle className="flex items-center">
                <Pill className="h-5 w-5 mr-2" />
                Recommended Supplements
              </CardTitle>
              <CardDescription>
                Supplements that may help with {recommendations.disease}{' '}
                symptoms
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <Alert className="bg-amber-50 border-amber-200">
                  <AlertCircle className="h-4 w-4 text-amber-600" />
                  <AlertTitle className="text-amber-800">
                    Important Note
                  </AlertTitle>
                  <AlertDescription className="text-amber-700">
                    Always consult with a healthcare professional before
                    starting any supplement regimen.
                  </AlertDescription>
                </Alert>

                {recommendations.supplements.map((supplement, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold">
                        {supplement.name}
                      </h3>
                      <Badge variant="outline">{supplement.dosage}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-3">
                      {supplement.benefits}
                    </p>
                    <div className="bg-muted/30 p-3 rounded-md">
                      <h4 className="text-sm font-medium mb-1">Precautions:</h4>
                      <p className="text-sm text-muted-foreground">
                        {supplement.precautions}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={handleBackToPrediction}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Prediction
        </Button>
        <Button onClick={() => router.push('/user/history')}>
          View Past Predictions
        </Button>
      </div>
    </div>
  );
};

export default RecommendationsPage;
