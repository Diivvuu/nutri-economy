'use client';

import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const page = () => {
  // State for symptom checker
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [prediction, setPrediction] = useState<{
    severity: string;
    conditions: string[];
    recommendations: string[];
  } | null>(null);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState<
    { sender: string; text: string }[]
  >([]);

  // Common symptoms list
  const symptoms = [
    'Fever',
    'Cough',
    'Headache',
    'Fatigue',
    'Sore Throat',
    'Shortness of Breath',
    'Body Aches',
    'Nausea',
    'Diarrhea',
    'Rash',
  ];

  // Handle symptom selection
  const handleSymptomChange = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter((s) => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  // Mock AI prediction function
  const getPrediction = () => {
    // Simple mock prediction logic
    let severity = 'Low';
    let conditions = ['Common Cold'];
    let recommendations = ['Rest', 'Stay hydrated'];

    if (
      selectedSymptoms.includes('Fever') &&
      selectedSymptoms.includes('Cough')
    ) {
      severity = 'Moderate';
      conditions = ['Flu', 'COVID-19'];
      recommendations = [
        'Rest',
        'Stay hydrated',
        'Consider medical consultation',
      ];
    }

    if (selectedSymptoms.includes('Shortness of Breath')) {
      severity = 'High';
      conditions = ['Respiratory Infection', 'COVID-19'];
      recommendations = ['Seek medical attention', 'Monitor oxygen levels'];
    }

    setPrediction({
      severity,
      conditions,
      recommendations,
    });
  };

  // Handle chat submission
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatInput.trim()) return;

    // Add user message
    const newMessages = [...chatMessages, { sender: 'user', text: chatInput }];

    // Add AI response (mock)
    setTimeout(() => {
      setChatMessages([
        ...newMessages,
        {
          sender: 'ai',
          text: `Thank you for your question about "${chatInput}". Our health AI is here to help. Please consult with a healthcare professional for personalized advice.`,
        },
      ]);
    }, 500);

    setChatMessages(newMessages);
    setChatInput('');
  };

  // Health articles data
  const healthArticles = [
    {
      title: '10 Tips for Better Sleep',
      excerpt: 'Improve your sleep quality with these simple tips...',
    },
    {
      title: 'Understanding Nutrition Labels',
      excerpt: 'Learn how to read nutrition labels for healthier choices...',
    },
    {
      title: 'Benefits of Regular Exercise',
      excerpt: 'Discover how regular physical activity improves your health...',
    },
  ];

  // Health challenges data
  const healthChallenges = [
    {
      title: '7-Day Detox Challenge',
      description: 'Reset your body with this simple detox plan',
    },
    {
      title: '30-Day Weight Loss Program',
      description:
        'Sustainable weight loss through balanced nutrition and exercise',
    },
    {
      title: '21-Day Meditation Journey',
      description: 'Reduce stress and improve mental clarity',
    },
  ];

  return (
    <div className="health-section w-full max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-exo font-bold text-primary mb-6">
        Health & Wellness
      </h2>

      <Tabs defaultValue="symptomChecker" className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="symptomChecker" className="font-mabry">
            Symptom Checker
          </TabsTrigger>
          <TabsTrigger value="wellnessTips" className="font-mabry">
            Health & Wellness Tips
          </TabsTrigger>
        </TabsList>

        <TabsContent value="symptomChecker">
          <Card>
            <CardHeader>
              <CardTitle className="font-exo text-primary text-2xl">
                Symptom Checker
              </CardTitle>
              <CardDescription className="font-mabry">
                Select your symptoms below to get AI-based health predictions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="symptom-form">
                <h4 className="font-exo text-lg mb-4">Select your symptoms:</h4>
                <div className="symptom-checkboxes grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
                  {symptoms.map((symptom, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Checkbox
                        id={`symptom-${index}`}
                        checked={selectedSymptoms.includes(symptom)}
                        onCheckedChange={() => handleSymptomChange(symptom)}
                      />
                      <label
                        htmlFor={`symptom-${index}`}
                        className="font-mabry text-sm cursor-pointer"
                      >
                        {symptom}
                      </label>
                    </div>
                  ))}
                </div>
                <Button
                  onClick={getPrediction}
                  disabled={selectedSymptoms.length === 0}
                  className="w-full md:w-auto bg-primary hover:bg-primary/90 font-mabry"
                >
                  Check Symptoms
                </Button>
              </div>

              {prediction && (
                <div className="prediction-results mt-8 p-6 border rounded-lg bg-secondary/5">
                  <h4 className="font-exo text-xl mb-4 text-primary">
                    AI-Based Prediction
                  </h4>
                  <div className="severity flex items-center mb-4">
                    <span className="font-mabry mr-2">Severity Level:</span>
                    <Badge
                      className={`
                      ${
                        prediction.severity === 'Low'
                          ? 'bg-green-500'
                          : prediction.severity === 'Moderate'
                          ? 'bg-yellow-500'
                          : 'bg-red-500'
                      } 
                      text-white font-mabry
                    `}
                    >
                      {prediction.severity}
                    </Badge>
                  </div>
                  <div className="conditions mb-4">
                    <span className="font-mabry font-semibold">
                      Probable Conditions:
                    </span>
                    <ul className="list-disc pl-5 mt-2">
                      {prediction.conditions.map((condition, index) => (
                        <li key={index} className="font-mabry">
                          {condition}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="recommendations">
                    <span className="font-mabry font-semibold">
                      Recommendations:
                    </span>
                    <ul className="list-disc pl-5 mt-2">
                      {prediction.recommendations.map((rec, index) => (
                        <li key={index} className="font-mabry">
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="disclaimer mt-4 text-sm text-gray-500 font-mabry italic">
                    Note: This is not a medical diagnosis. Please consult with a
                    healthcare professional.
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="wellnessTips">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="font-exo text-primary text-xl">
                  Daily Health Articles
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="articles-list space-y-4">
                  {healthArticles.map((article, index) => (
                    <div
                      key={index}
                      className="article-card p-4 border rounded-lg hover:bg-secondary/5 transition-colors"
                    >
                      <h5 className="font-exo text-lg mb-2">{article.title}</h5>
                      <p className="font-mabry text-sm mb-2">
                        {article.excerpt}
                      </p>
                      <Button
                        variant="link"
                        className="p-0 h-auto font-mabry text-primary"
                      >
                        Read more
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="font-exo text-primary text-xl">
                  Guided Health Challenges
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="challenges-list space-y-4">
                  {healthChallenges.map((challenge, index) => (
                    <div
                      key={index}
                      className="challenge-card p-4 border rounded-lg hover:bg-secondary/5 transition-colors"
                    >
                      <h5 className="font-exo text-lg mb-2">
                        {challenge.title}
                      </h5>
                      <p className="font-mabry text-sm mb-3">
                        {challenge.description}
                      </p>
                      <Button
                        size="sm"
                        className="bg-primary hover:bg-primary/90 font-mabry"
                      >
                        Join Challenge
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="font-exo text-primary text-xl">
                Ask Our Health AI
              </CardTitle>
              <CardDescription className="font-mabry">
                Get answers to your health and wellness questions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="chat-messages bg-gray-50 p-4 rounded-lg h-64 overflow-y-auto mb-4">
                {chatMessages.length === 0 ? (
                  <p className="chat-placeholder text-gray-400 font-mabry text-center mt-20">
                    Ask a question about health, nutrition, or wellness...
                  </p>
                ) : (
                  chatMessages.map((msg, index) => (
                    <div
                      key={index}
                      className={`chat-message p-3 rounded-lg mb-3 max-w-[80%] ${
                        msg.sender === 'user'
                          ? 'bg-primary text-white ml-auto'
                          : 'bg-gray-200 text-gray-800'
                      }`}
                    >
                      <p className="font-mabry text-sm">{msg.text}</p>
                    </div>
                  ))
                )}
              </div>
              <form onSubmit={handleChatSubmit} className="flex gap-2">
                <Input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  placeholder="Type your health question here..."
                  className="font-mabry"
                />
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 font-mabry"
                >
                  Send
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-xs text-gray-500 font-mabry italic">
              Our AI provides general information only. Always consult
              healthcare professionals for medical advice.
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default page;
