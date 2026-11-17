"use client";
import Ingredients from "./components/ingredients";
import FreeInput from "./components/freeInput";
import { useState } from "react";
import { ArrowLeftRight, Leaf, List, Text } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
export default function Home() {
  const [view, setView] = useState("text");
  const changeView = () => setView(view === "input" ? "text" : "input");
  return (
    <main className="mx-auto w-full max-w-3xl px-5 py-14 sm:px-8 sm:py-20">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-100/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        <Leaf className="size-4" aria-hidden="true" /> A little kitchen
        organization
      </div>
      <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
        Good things start
        <br className="hidden sm:block" /> with{" "}
        <span className="text-primary">your ingredients.</span>
      </h1>
      <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
        A simple space to gather what you have. Add ingredients one at a time,
        or write them down in your own way.
      </p>
      <Card className="mt-10 overflow-hidden border-t-4 border-t-primary shadow-xl shadow-emerald-950/5">
        <div className="flex flex-col gap-5 border-b bg-gradient-to-r from-emerald-50 to-lime-50 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div className="flex items-center gap-3">
            <div className="flex size-10 items-center justify-center rounded-xl bg-secondary text-primary">
              {view === "input" ? (
                <List className="size-5" aria-hidden="true" />
              ) : (
                <Text className="size-5" aria-hidden="true" />
              )}
            </div>
            <div>
              <h2 className="font-semibold">
                {view === "input"
                  ? "Your ingredients"
                  : "Your ingredient notes"}
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {view === "input"
                  ? "One ingredient at a time."
                  : "A little room for your own words."}
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={changeView}
            className="h-9 self-start border-orange-200 bg-orange-100 px-3 text-xs text-orange-900 hover:bg-orange-200 sm:self-auto"
          >
            <ArrowLeftRight aria-hidden="true" />
            {view === "input" ? "Free text view" : "Ingredient list view"}
          </Button>
        </div>
        <div className="p-6 sm:p-8">
          {view === "input" ? <Ingredients /> : <FreeInput />}
        </div>
      </Card>
      <p className="mt-6 text-center text-xs text-muted-foreground">
        Simple ingredients. A fresh start.
      </p>
    </main>
  );
}
