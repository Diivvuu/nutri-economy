'use client';

import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';

const dietaryPreferencesOptions = [
  { value: 'no_preference', label: 'No Preference' },
  { value: 'vegetarian', label: 'Vegetarian' },
  { value: 'vegan', label: 'Vegan' },
  { value: 'keto', label: 'Keto' },
  { value: 'paleo', label: 'Paleo' },
];

type AllergyKey = 'gluten' | 'nuts' | 'dairy';

const DietForm = ({
  formSubmitted,
  setFormSubmitted,
}: {
  formSubmitted: boolean;
  setFormSubmitted: Dispatch<SetStateAction<boolean>>;
}) => {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [dietaryPreference, setDietaryPreference] = useState('');
  const [allergies, setAllergies] = useState<Record<AllergyKey, boolean>>({
    gluten: false,
    nuts: false,
    dairy: false,
  });
  const [dailyCalories, setDailyCalories] = useState(2000);
  const [activityLevel, setActivityLevel] = useState(3);

  // Explicitly type the allergen parameter as AllergyKey.
  const handleAllergyChange = (allergen: AllergyKey) => {
    setAllergies((prev) => ({
      ...prev,
      [allergen]: !prev[allergen],
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Collect all form data
      const formData = {
        age,
        weight,
        height,
        dietaryPreference,
        allergies,
        dailyCalories,
        activityLevel,
      };

      setFormSubmitted(true);
      console.log(formData);
    } catch (error: any) {
      console.error(error);
    }
  };

  return (
    <div className="mx-auto w-full p-6 bg-primary text-secondary font-exo">
      <h2 className="text-3xl font-bold mb-6 text-center">User Details</h2>
      <form
        onSubmit={handleSubmit}
        className="space-y-8 max-w-5xl w-full mx-auto bg-[#eaeaea21] p-5 rounded-3xl"
      >
        {/* Basic User Details */}
        <section>
          <h3 className="text-xl font-semibold mb-4">⿡ Basic User Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2">Age</label>
              <Input
                type="number"
                placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                min={1}
                max={120}
                required
                className="bg-secondary text-primary"
              />
            </div>
            <div>
              <label className="block mb-2">Weight (kg)</label>
              <Input
                type="number"
                placeholder="Enter weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                min={10}
                max={200}
                required
                className="bg-secondary text-primary"
              />
            </div>
            <div>
              <label className="block mb-2">Height (cm)</label>
              <Input
                type="number"
                placeholder="Enter height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                min={50}
                max={250}
                required
                className="bg-secondary text-primary"
              />
            </div>
          </div>
        </section>

        {/* Dietary Preferences */}
        <section>
          <h3 className="text-xl font-semibold mb-4">⿢ Dietary Preferences</h3>
          <div className="w-full">
            <label className="block mb-2">Preference</label>
            <Select
              value={dietaryPreference}
              onValueChange={(value) => setDietaryPreference(value)}
              // className="bg-secondary text-primary"
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Dietary Preference" />
              </SelectTrigger>
              <SelectContent>
                {dietaryPreferencesOptions.map((option) => (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </section>

        {/* Allergies Selection */}
        <section>
          <h3 className="text-xl font-semibold mb-4">⿣ Allergies Selection</h3>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2">
              <Checkbox
                checked={allergies.gluten}
                onCheckedChange={() => handleAllergyChange('gluten')}
                className="text-primary"
              />
              <span>Gluten</span>
            </label>
            <label className="flex items-center gap-2">
              <Checkbox
                checked={allergies.nuts}
                onCheckedChange={() => handleAllergyChange('nuts')}
                className="text-primary"
              />
              <span>Nuts</span>
            </label>
            <label className="flex items-center gap-2">
              <Checkbox
                checked={allergies.dairy}
                onCheckedChange={() => handleAllergyChange('dairy')}
                className="text-primary"
              />
              <span>Dairy</span>
            </label>
          </div>
        </section>

        {/* Sliders for Easy Selection */}
        <section>
          <h3 className="text-xl font-semibold mb-4">
            ⿤ Sliders for Easy Selection
          </h3>
          <div className="space-y-6">
            <div className="">
              <label className="block mb-2">
                Daily Calorie Intake: {dailyCalories} kcal
              </label>
              <Slider
                value={[dailyCalories]}
                onValueChange={(value: number[]) => setDailyCalories(value[0])}
                min={1000}
                max={4000}
                step={100}
                // className="bg-black text-primary"
              />
            </div>
            <div>
              <label className="block mb-2">
                Activity Level: {activityLevel}{' '}
                {activityLevel === 1
                  ? '(Sedentary)'
                  : activityLevel === 5
                  ? '(Very Active)'
                  : ''}
              </label>
              <Slider
                value={[activityLevel]}
                onValueChange={(value: number[]) => setActivityLevel(value[0])}
                min={1}
                max={5}
                step={1}
                className="bg-secondary text-primary"
              />
            </div>
          </div>
          <div className="w-full flex justify-end pt-5">
            <Button className="">Submit</Button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default DietForm;
