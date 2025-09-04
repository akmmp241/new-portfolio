"use client"

import {cn} from "@/lib/utils";

interface QuoteProps {
  quote: string;
  author: string;
  className?: string;
}

const Quote = ({quote, author, className}: QuoteProps) => {
  return (
    <div className={cn(
      "relative border border-gray-600 rounded p-6 w-2/3 md:w-full max-w-4xl",
      className
    )}>
      <span className="absolute -top-3 -left-1 text-4xl text-gray-400">“</span>
      <p className="text-base md:text-xl font-bold">{quote}</p>
      <span className="absolute -bottom-8 -right-3 text-4xl text-gray-400">”</span>
      <p className="mt-4 text-right text-gray-400 text-sm md:text-lg">- {author}</p>
    </div>
  );
}

export default Quote;