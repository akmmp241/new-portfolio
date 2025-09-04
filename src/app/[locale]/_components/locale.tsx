"use client"

import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,} from "@/components/ui/dropdown-menu"
import {ChevronDown} from "lucide-react";
import {routing} from "@/i18n/routing";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useCurrentLang} from "@/lib/useLang";

const Locale = () => {
  const currentLang = useCurrentLang();
  const locales = routing.locales
  const path = usePathname()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={"cursor-pointer font-bold flex items-center gap-0.5"}>
        {currentLang.toUpperCase()}
        <ChevronDown width={16} height={16}/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className={"z-[1000] border-muted-foreground bg-background p-0"}>
        {locales.map((locale, index) => (
          <Link key={index} href={path.replace(currentLang, locale)}>
            <DropdownMenuItem
              className={`text-white focus:text-muted-foreground font-bold focus:bg-background cursor-pointer ${currentLang === locale ? "hidden" : ""}`}>
              {locale.toUpperCase()}
            </DropdownMenuItem>

          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Locale;
