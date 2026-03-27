import RecipeCard from "../components/RecipeCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Accordion, AccordionItem, Button, Card, CardBody, Checkbox, Chip, Input, Pagination } from "@heroui/react";
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
    const [heroSearch, setHeroSearch] = useState("");
    const options = ["Vegetarian", "Vegan", "Keto", "Gluten-free", "Paleo", "Mediterranean"];
    const [selected, setSelected] = useState(new Set());
    const [lowCarb, setLowCarb] = useState(false);
    const [highProtein, setHighProtein] = useState(false);
    const [dairyFree, setDairyFree] = useState(false);
    const toggle = (opt) => {
      setSelected((prev) => {
        const next = new Set(prev);
        if (next.has(opt)) next.delete(opt); else next.add(opt);
        return next;
      });
    };
    const applyPrefs = () => {
      // placeholder: would trigger fetch/update
      console.log("Applied:", { selected: Array.from(selected), lowCarb, highProtein, dairyFree });
    };
    const images = [
      "https://pixabay.com/get/g945726eb1b17d6332973acb582958d210785e963ece7c6cc3c84247d983a5210bb4038d660e105058d0e302e03842295f4713576d411a115acc4a3536191c18f_640.jpg",
      "https://pixabay.com/get/g21ea07a0a65da1ae8883d388e3aff8e34b6fbafedc67c085e27dce3c261aa2d6691b5ed5defada6a8f45c3cfb81606cb0f3db12b3911df9b1e05251981c8e3e6_640.jpg",
      "https://pixabay.com/get/g95bf2c7dfb88ae707aa790d990d6791c9f9ce5bc0fb38749472fee876780d523d0267d7043906cbcee30ccd29e69c783f4af4793dca4a6c1d55c1838ebd7bd60_640.jpg",
      "https://pixabay.com/get/g14d02b03eece64dcb0a6b79685a622e78c7858c199c8b88eff81419938723572e06d4a8f56ad77cbe91f1de5499c6f39b28404fcee408f105559875004b39d60_640.jpg",
      "https://pixabay.com/get/g0a7bc48b30e1f4aba5592d3658c0029fd71247e4bbd8ab9611926af445e0cf8afedb704b8a9348923ac07eb5a89fc78b922c11bd3053d461f32d60fd9893aef6_640.jpg",
      "https://pixabay.com/get/g8ba993eba052f364bcb7f176b48a9ed9d98ff942fad52b47b4dd26d95846e5f2e71a490e0b4cf5f053fb31f68563e7407ce4f6f467ecbb8193d306902cc2a91b_640.jpg",
      "https://pixabay.com/get/g1d5a01c1b2577bec70ec8c05e86db9b4f4e67947d34ffb33003afdd7bfa07f94332a1edcce711d4395a502304aebfb538b408bb481cbea5e4ca202198d08cf3e_640.jpg",
      "https://pixabay.com/get/gbf4fd5cf7f475543998abca69e6a8dc6f45adaa91b6b3770b951261254507bc18cda170adb85c047d8ad3553bbc578557ae44ce6eff86493a593018f399c977b_640.jpg"
    ];
    const recipes = useMemo(() => images.map((src, i) => ({
      title: `Tasty Recipe ${i+1}`,
      image: src,
      time: `${20 + (i%5)*5}m`,
      calories: `${400 + i*20} kcal`
    })), []);
    const [page, setPage] = useState(1);
    const pageSize = 8;
    const totalPages = Math.ceil(recipes.length / pageSize);
    const pagedRecipes = useMemo(() => recipes.slice((page-1)*pageSize, page*pageSize), [page, recipes]);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] p-8 sm:p-12">
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[var(--color-text)]">Eat better with AI-powered planning</h1>
      <p className="text-base sm:text-lg text-[var(--color-text)]/90 max-w-2xl mx-auto">Personalized meal plans, smart grocery lists, and recipes you’ll actually love — all in one place.</p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
      <Input
      aria-label="Search recipes"
      value={heroSearch}
      onValueChange={setHeroSearch}
      placeholder="Search recipes or ingredients"
      startContent={<MagnifyingGlassIcon className="w-5 h-5 text-[var(--color-text)]" />}
      classNames={{
      base: "w-full sm:w-96",
      inputWrapper: "h-12 bg-[var(--color-background)]/90 rounded-full border border-[var(--color-border)]",
      input: "text-[var(--color-text)] placeholder:text-[var(--color-text)]/70"
      }}
      />
      <Link to="/meal-plan/generate">
      <Button size="md" className="rounded-full bg-[var(--color-accent-light)] text-[var(--color-background)] font-semibold px-6">Get started</Button>
      </Link>
      <Link to="/explore">
      <Button size="md" variant="bordered" className="rounded-full border-[var(--color-text)] text-[var(--color-text)] px-6">Explore recipes</Button>
      </Link>
      </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.15),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(0,0,0,0.2),transparent_40%)]" />
      </section>

  <section className="w-full">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-6 space-y-4">
      <h2 className="text-xl font-semibold text-[var(--color-text)]">Set your preferences</h2>
      <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
      <Chip
      key={opt}
      onClick={() => toggle(opt)}
      variant={selected.has(opt) ? "solid" : "flat"}
      className={selected.has(opt) ? "bg-[var(--color-primary)] text-[var(--color-text)] rounded-full" : "bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full"}
      >
      <span className={selected.has(opt) ? "text-[var(--color-text)]" : "text-[var(--color-primary)]"}>{opt}</span>
      </Chip>
      ))}
      </div>
      <div className="flex flex-wrap gap-4 pt-2">
      <Checkbox isSelected={lowCarb} onValueChange={setLowCarb} className="text-[var(--color-text)]">Low carb</Checkbox>
      <Checkbox isSelected={highProtein} onValueChange={setHighProtein} className="text-[var(--color-text)]">High protein</Checkbox>
      <Checkbox isSelected={dairyFree} onValueChange={setDairyFree} className="text-[var(--color-text)]">Dairy-free</Checkbox>
      </div>
      <div className="pt-2">
      <Button size="sm" className="rounded-xl bg-[var(--color-primary)] text-[var(--color-text)]" onClick={applyPrefs}>Apply preferences</Button>
      </div>
      </CardBody>
      </Card>
      </section>
  <section className="w-full">
      <div className="flex items-center justify-between mb-3">
      <h2 className="text-xl font-semibold text-[var(--color-text)]">Recommended for you</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {pagedRecipes.map((r, idx) => (
      <RecipeCard key={idx} recipe={r} />
      ))}
      </div>
      <div className="flex justify-center pt-4">
      <Pagination page={page} total={totalPages} onChange={setPage} className="text-[var(--color-text)]" />
      </div>
      </section>
  <section className="w-full">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-6">
      <h2 className="text-xl font-semibold text-[var(--color-text)] mb-4">How it works</h2>
      <Accordion className="bg-transparent">
      <AccordionItem key="1" title={<span className="text-[var(--color-text)]">1. Tell us your preferences</span>} className="text-[var(--color-text)]">
      <p className="text-sm text-[var(--color-text)]">Pick diets, disliked ingredients, time constraints, and more.</p>
      </AccordionItem>
      <AccordionItem key="2" title={<span className="text-[var(--color-text)]">2. Generate your plan</span>} className="text-[var(--color-text)]">
      <p className="text-sm text-[var(--color-text)]">Our AI creates a balanced weekly plan tailored to you.</p>
      </AccordionItem>
      <AccordionItem key="3" title={<span className="text-[var(--color-text)]">3. Shop smarter</span>} className="text-[var(--color-text)]">
      <p className="text-sm text-[var(--color-text)]">Auto-generate a grocery list organized by aisles.</p>
      </AccordionItem>
      </Accordion>
      </CardBody>
      </Card>
      </section>
      </div>
    </div>
  );
}
