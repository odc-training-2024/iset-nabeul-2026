"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { generateRecipe } from "../actions/aiAction";
import { useRef, useState } from "react";

export default function FreeInput() {
  const [output, setOutput] = useState("");
  const ref = useRef();
  const generate = async () => {
    const recipe = await generateRecipe(ref.current.value);
    setOutput(recipe);
  };

  return (
    <div>
      <label htmlFor="ingredient-notes" className="text-sm font-medium">
        Write your ingredients
      </label>
      <Textarea
        ref={ref}
        id="ingredient-notes"
        placeholder="Tomatoes, fresh basil, a little olive oil…"
        className="mt-2 resize-y"
      />
      <Button onClick={generate}>Add ingredient</Button>
      <p className="mt-3 text-xs text-muted-foreground">
        Use this space to jot down your ingredients freely.
      </p>

      <div>{output}</div>
    </div>
  );
}
