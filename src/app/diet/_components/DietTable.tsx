import React from 'react';

const DietTable = () => {
  // Sample meal plan data - this could be passed as props in a real application
  const mealPlanData = [
    {
      meal: 'Breakfast',
      foodItems: 'Oatmeal with Almond Butter & Berries',
      calories: 350,
      carbs: 45,
      protein: 10,
      fats: 12,
    },
    {
      meal: 'Lunch',
      foodItems: 'Grilled Chicken Salad with Quinoa',
      calories: 500,
      carbs: 50,
      protein: 35,
      fats: 15,
    },
    {
      meal: 'Dinner',
      foodItems: 'Baked Salmon with Steamed Veggies',
      calories: 600,
      carbs: 40,
      protein: 45,
      fats: 20,
    },
    {
      meal: 'Snacks',
      foodItems: 'Greek Yogurt with Nuts & Honey',
      calories: 250,
      carbs: 30,
      protein: 15,
      fats: 8,
    },
  ];

  // Calculate total macros
  const totalCalories = mealPlanData.reduce(
    (sum, meal) => sum + meal.calories,
    0
  );
  const totalCarbs = mealPlanData.reduce((sum, meal) => sum + meal.carbs, 0);
  const totalProtein = mealPlanData.reduce(
    (sum, meal) => sum + meal.protein,
    0
  );
  const totalFats = mealPlanData.reduce((sum, meal) => sum + meal.fats, 0);

  return (
    <div className="bg-primary text-secondary max-w-7xl mx-auto w-full p-6 font-exo">
      <h2 className="text-3xl font-bold mb-6 text-center">
        AI-Generated Diet Plan
      </h2>

      {/* Meal Plan Table */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">
          ⿡ Meal Plan Table Layout
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-[#eaeaea21] rounded-lg overflow-hidden">
            <thead className="bg-[#ffffff15]">
              <tr>
                <th className="px-4 py-3 text-left">Meal</th>
                <th className="px-4 py-3 text-left">Food Items</th>
                <th className="px-4 py-3 text-right">Calories</th>
                <th className="px-4 py-3 text-right">Carbs (g)</th>
                <th className="px-4 py-3 text-right">Protein (g)</th>
                <th className="px-4 py-3 text-right">Fats (g)</th>
              </tr>
            </thead>
            <tbody>
              {mealPlanData.map((meal, index) => (
                <tr
                  key={index}
                  className={
                    index % 2 === 0 ? 'bg-[#ffffff08]' : 'bg-[#ffffff04]'
                  }
                >
                  <td className="px-4 py-3 font-medium">{meal.meal}</td>
                  <td className="px-4 py-3">{meal.foodItems}</td>
                  <td className="px-4 py-3 text-right">{meal.calories}</td>
                  <td className="px-4 py-3 text-right">{meal.carbs}</td>
                  <td className="px-4 py-3 text-right">{meal.protein}</td>
                  <td className="px-4 py-3 text-right">{meal.fats}</td>
                </tr>
              ))}
              <tr className="bg-[#ffffff15] font-bold">
                <td className="px-4 py-3" colSpan={2}>
                  Daily Total
                </td>
                <td className="px-4 py-3 text-right">{totalCalories}</td>
                <td className="px-4 py-3 text-right">{totalCarbs}</td>
                <td className="px-4 py-3 text-right">{totalProtein}</td>
                <td className="px-4 py-3 text-right">{totalFats}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Macronutrient Breakdown */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-4">
          ⿢ Macronutrient Breakdown
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#eaeaea21] p-5 rounded-lg">
          <div className="p-4 bg-[#ffffff08] rounded-md">
            <h4 className="font-medium mb-2">
              Carbs: {Math.round(((totalCarbs * 4) / totalCalories) * 100)}%
            </h4>
            <p>
              Total: {totalCarbs}g ({totalCarbs * 4} calories)
            </p>
            <p className="text-sm mt-2">
              Primary energy source for daily activities
            </p>
          </div>
          <div className="p-4 bg-[#ffffff08] rounded-md">
            <h4 className="font-medium mb-2">
              Protein: {Math.round(((totalProtein * 4) / totalCalories) * 100)}%
            </h4>
            <p>
              Total: {totalProtein}g ({totalProtein * 4} calories)
            </p>
            <p className="text-sm mt-2">
              Essential for muscle maintenance and recovery
            </p>
          </div>
          <div className="p-4 bg-[#ffffff08] rounded-md">
            <h4 className="font-medium mb-2">
              Fats: {Math.round(((totalFats * 9) / totalCalories) * 100)}%
            </h4>
            <p>
              Total: {totalFats}g ({totalFats * 9} calories)
            </p>
            <p className="text-sm mt-2">
              Important for hormone production and nutrient absorption
            </p>
          </div>
        </div>
      </section>

      {/* Modify Meal Plan Feature */}
      <section>
        <h3 className="text-xl font-semibold mb-4">
          ⿣ Modify Meal Plan Feature
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 bg-[#eaeaea21] p-5 rounded-lg">
          <div className="p-4 bg-[#ffffff08] rounded-md">
            <h4 className="font-medium mb-2">Swap Meals</h4>
            <p>Replace items with alternatives that match your preferences</p>
          </div>
          <div className="p-4 bg-[#ffffff08] rounded-md">
            <h4 className="font-medium mb-2">Allergy Adjustments</h4>
            <p>
              Automatically remove or replace ingredients you're allergic to
            </p>
          </div>
          <div className="p-4 bg-[#ffffff08] rounded-md">
            <h4 className="font-medium mb-2">Caloric Goals</h4>
            <p>Adjust portion sizes to meet your specific calorie targets</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DietTable;
