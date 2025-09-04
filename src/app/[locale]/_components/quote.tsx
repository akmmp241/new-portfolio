"use client"

import Quote from "@/components/quote";
import {useTranslations} from "next-intl";

const QuoteSection = () => {
  const t = useTranslations("home.quotes")
  return (
    <div className={"px-6 lg:p-0"}>
      <Quote className={"m-auto"} quote={t("quote")} author={t("author")}/>
    </div>
  )
}

export default QuoteSection;