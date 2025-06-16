/* ----------------------------------------------
 * helpers/Typewriter.tsx
 * ---------------------------------------------- */
import { useState, useEffect } from "react";
type Props = {
  words: string[];
  onCycle?: () => void;          // optional, legacy
  onWordIndexChange: (idx: number) => void;  // new callback
  typingSpeed?: number;
  deletingSpeed?: number;
  pause?: number;
};

export default function TypeWriter({
  words,
  onCycle,
  onWordIndexChange,
  typingSpeed = 90,
  deletingSpeed = 50,
  pause = 1800,
}: Props) {
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  const word = words[wordIdx];

  useEffect(() => {
    onWordIndexChange(wordIdx);
  }, [wordIdx, onWordIndexChange]);

  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx <= word.length) {
      t = setTimeout(() => setCharIdx((c) => c + 1), typingSpeed);
      if (charIdx === word.length) {
        t = setTimeout(() => setDeleting(true), pause);
      }
    } else if (deleting && charIdx >= 0) {
      t = setTimeout(() => setCharIdx((c) => c - 1), deletingSpeed);
      if (charIdx === 0) {
        setDeleting(false);
        setWordIdx((i) => (i + 1) % words.length);
        if (onCycle) onCycle();
      }
    }
    return () => clearTimeout(t);
  }, [charIdx, deleting, word, typingSpeed, deletingSpeed, pause, onCycle, words.length]);

  const blink = !deleting && charIdx === word.length;

  return (
    <span className="whitespace-nowrap">
      {word.substring(0, charIdx)}
      <span
        className={`inline-block w-[1ch] bg-[#F49F1C] ${
          blink ? "animate-blink" : ""
        }`}
        style={{ marginLeft: "0.1rem", height: "1.15em" }}
      />
    </span>
  );
}
