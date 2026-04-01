"use client";

import { useState } from "react";
import {
  sortDominoes,
  countDoubleNumber,
  removeDuplicates,
  flipDominoes,
  removeCardsWithTotal,
} from "../utils/utils";

export default function Home() {
  const defaultDominoes = [
    [6, 1],
    [4, 3],
    [5, 1],
    [1, 5],
    [3, 4],
    [1, 1],
    [3, 4],
    [2, 2],
    [1, 2],
  ];

  const [dominoes, setDominoes] = useState(defaultDominoes);
  const [removeTotal, setRemoveTotal] = useState("");

  const doubleCount = countDoubleNumber(dominoes);

  const handleSortAsc = () => {
    const sorted = sortDominoes(dominoes, "asc");
    setDominoes(sorted);
  };

  const handleSortDesc = () => {
    const sorted = sortDominoes(dominoes, "desc");
    setDominoes(sorted);
  };

  const handleFlip = () => {
    const flipped = flipDominoes(dominoes);
    setDominoes(flipped);
  };

  const handleRemoveDup = () => {
    const removed = removeDuplicates(dominoes);
    setDominoes(removed);
  };

  const handleRemoveByTotal = () => {
    const total = parseInt(removeTotal, 10);
    if (!isNaN(total)) {
      const filtered = removeCardsWithTotal(dominoes, total);
      setDominoes(filtered);
    }
    setRemoveTotal("");
  };

  const handleReset = () => {
    setDominoes(defaultDominoes);
    setRemoveTotal("");
  };

  

  return (
    <div className="max-w-2xl p-8 mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dominoes</h1>

      <div className="border-gray-800 rounded-md shadow-lg mb-4 p-3 bg-gray-100">
        <h2 className="font-semibold mb-2">Source</h2>
        <div className="text-sm text-gray-600">
          {dominoes.map((domino, index) => (
            <span key={index}>{`[${domino[0]}, ${domino[1]}]  `}</span>
          ))}
        </div>
      </div>

      <div className="border-gray-800 rounded-md shadow-lg mb-6 p-3 bg-gray-100">
        <span className="font-semibold">Double numbers : </span>
        <span>{doubleCount}</span>
      </div>

      <div className="flex gap-2 mb-6">
        {dominoes.map((domino, index) => {
          const [top, bottom] = domino;
          return (
            <div
              key={index}
              className="border border-gray-800 rounded-md shadow-lg p-2 w-[40px] h-[80px] flex flex-col items-center justify-center"
            >
              <span className="font-semibold mb-2">{top}</span>
              <span className="border-t border-gray-800 w-full"></span>
              <span className="font-semibold mt-2">{bottom}</span>
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        <button onClick={handleSortAsc} className="bg-blue-400 text-white px-3 py-1 rounded">
          Sort (ASC)
        </button>
        <button onClick={handleSortDesc} className="bg-blue-400 text-white px-3 py-1 rounded">
          Sort (DESC)
        </button>
        <button onClick={handleFlip} className="bg-blue-400 text-white px-3 py-1 rounded">
          Flip
        </button>
        <button onClick={handleRemoveDup} className="bg-blue-400 text-white px-3 py-1 rounded">
          Remove Duplicates
        </button>
        <button onClick={handleReset} className="bg-blue-400 text-white px-3 py-1 rounded">
          Reset
        </button>
      </div>

      <div className="flex flex-col gap-2 w-full max-w-[200px]">
        <input
          type="number"
          placeholder="Input total"
          value={removeTotal}
          onChange={(e) => setRemoveTotal(e.target.value)}
          className="border border-gray-600 px-2 py-1 rounded w-full"
        />
        <button onClick={handleRemoveByTotal} className="bg-blue-400 text-white px-3 py-1 rounded self-start">
          Remove
        </button>
      </div>
    </div>
  );
}
