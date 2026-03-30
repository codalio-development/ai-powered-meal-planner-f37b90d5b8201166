
import "./styles.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HeroUIProvider } from "@heroui/react";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import MealPlan from "./pages/MealPlan";
import CurrentMealPlan from "./pages/CurrentMealPlan";
import GenerateMealPlan from "./pages/GenerateMealPlan";
import MealPlanHistory from "./pages/MealPlanHistory";
import Explore from "./pages/Explore";
import Recommended from "./pages/Recommended";
import Search from "./pages/Search";
import RecipeDetail from "./pages/RecipeDetail";
import GroceryList from "./pages/GroceryList";
import Preferences from "./pages/Preferences";
import DietaryPreferences from "./pages/DietaryPreferences";
import DislikedIngredients from "./pages/DislikedIngredients";
import CookingPreferences from "./pages/CookingPreferences";
import Favorites from "./pages/Favorites";
import Profile from "./pages/Profile";

function App() {
  return (
    <HeroUIProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Layout>
          <Routes>
                  <Route path="/" element={<Landing />} />
      <Route path="/meal-plan" element={<MealPlan />} />
      <Route path="/meal-plan/current" element={<CurrentMealPlan />} />
      <Route path="/meal-plan/generate" element={<GenerateMealPlan />} />
      <Route path="/meal-plan/history" element={<MealPlanHistory />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/explore/recommended" element={<Recommended />} />
      <Route path="/explore/search" element={<Search />} />
      <Route path="/explore/recipe-detail/:id" element={<RecipeDetail />} />
      <Route path="/grocery-list" element={<GroceryList />} />
      <Route path="/preferences" element={<Preferences />} />
      <Route path="/preferences/dietary" element={<DietaryPreferences />} />
      <Route path="/preferences/disliked" element={<DislikedIngredients />} />
      <Route path="/preferences/cooking" element={<CookingPreferences />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile" element={<Profile />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HeroUIProvider>
  );
}

export default App;
