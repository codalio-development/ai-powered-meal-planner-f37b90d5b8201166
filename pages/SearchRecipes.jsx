import RecipeCard from "../components/RecipeCard";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { BreadcrumbItem, Breadcrumbs, Button, Card, CardBody, Input, Pagination, Select, SelectItem } from "@heroui/react";
import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";

export default function SearchRecipes() {
    const [term, setTerm] = useState("");
    const [include, setInclude] = useState("");
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
      title: `Result ${i+1}`,
      image: src,
      time: `${18 + (i%5)*5}m`,
      calories: `${380 + i*25} kcal`
    })), []);
    const [page, setPage] = useState(1);
    const pageSize = 8;
    const totalPages = Math.ceil(recipes.length / pageSize);
    const pagedRecipes = useMemo(() => recipes.slice((page-1)*pageSize, page*pageSize), [page, recipes]);
  return (
   <div className="bg-[var(--color-background)] text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-6">
          <section className="w-full">
      <Breadcrumbs className="text-[var(--color-text)]">
      <BreadcrumbItem><Link to="/explore" className="text-[var(--color-text)]">Explore</Link></BreadcrumbItem>
      <BreadcrumbItem>Search</BreadcrumbItem>
      </Breadcrumbs>
      </section>
  <section className="w-full">
      <Card className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl">
      <CardBody className="p-6 grid grid-cols-1 md:grid-cols-3 gap-3">
      <Input
      label="Search"
      value={term}
      onValueChange={setTerm}
      placeholder="Search recipes..."
      startContent={<MagnifyingGlassIcon className="w-4 h-4 text-[var(--color-text)]" />}
      classNames={{ inputWrapper: "h-11 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", input: "text-[var(--color-text)]", label: "text-[var(--color-text)]" }}
      />
      <Select
      label="Include ingredient"
      selectedKeys={include ? [include] : []}
      onSelectionChange={(keys) => setInclude(Array.from(keys)[0] || "")}
      classNames={{ trigger: "h-11 bg-[var(--color-background)] border border-[var(--color-border)] rounded-xl", popoverContent: "bg-[var(--color-surface)] text-[var(--color-text)] rounded-xl", label: "text-[var(--color-text)]" }}
      >
      <SelectItem key="chicken">Chicken</SelectItem>
      <SelectItem key="tofu">Tofu</SelectItem>
      <SelectItem key="mushroom">Mushroom</SelectItem>
      </Select>
      <div className="flex items-end">
      <Button className="rounded-xl w-full bg-[var(--color-primary)] text-[var(--color-text)]">Search</Button>
      </div>
      </CardBody>
      </Card>
      </section>
  <section className="w-full">
      <h2 className="text-xl font-semibold text-[var(--color-text)] mb-3">Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {pagedRecipes.map((r, idx) => (
      <RecipeCard key={idx} recipe={r} />
      ))}
      </div>
      <div className="flex justify-center pt-4">
      <Pagination page={page} total={totalPages} onChange={setPage} className="text-[var(--color-text)]" />
      </div>
      </section>
      </div>
    </div>
  );
}
