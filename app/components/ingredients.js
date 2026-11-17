"use client";
import { useRef, useState } from "react";
import { Leaf, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
export default function Ingredients() {
  const input = useRef();
  const [ingredients, setIngredients] = useState([]);
  const [error, setError] = useState("");
  const addIngredient = () => {
    if (input.current.value.length > 0) {
      setIngredients([...ingredients, input.current.value]);
    } else {
      setError("Please enter a valid ingredient.");
    }
    input.current.value = "";
  };
  return (
    <>
      <label htmlFor="ingredient" className="text-sm font-medium">
        Ingredient name
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <Input
          id="ingredient"
          ref={input}
          placeholder="e.g. Fresh tomatoes"
          aria-invalid={!!error}
          aria-describedby={error ? "ingredient-error" : undefined}
        />
        <Button onClick={addIngredient}>
          <Plus aria-hidden="true" />
          Add ingredient
        </Button>
      </div>
      {error && (
        <p
          id="ingredient-error"
          role="alert"
          className="mt-3 text-sm text-destructive"
        >
          {error}
        </p>
      )}
      <div className="mt-8 border-t pt-6">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          Your list
        </h3>
        {ingredients.length === 0 ? (
          <div className="mt-4 flex flex-col items-center rounded-xl border border-dashed border-amber-200 bg-amber-50 px-5 py-10 text-center">
            <Leaf className="mb-3 size-7 text-amber-700" aria-hidden="true" />
            <p className="text-sm font-medium text-amber-950">A fresh start</p>
            <p className="mt-1 text-sm text-amber-800">
              Your ingredients will appear here.
            </p>
          </div>
        ) : (
          <ul className="mt-4 space-y-2">
            {ingredients.map((ingredient, i) => (
              <li
                key={i}
                className="flex items-start gap-3 rounded-lg bg-emerald-50 px-4 py-4 text-sm even:bg-orange-50"
              >
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-primary" />
                <span className="min-w-0 break-words">{ingredient}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}
