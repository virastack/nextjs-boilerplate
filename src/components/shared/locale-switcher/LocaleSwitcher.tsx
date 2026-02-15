"use client";

import { Globe } from "lucide-react";
import { useLocale } from "next-intl";

import { LocaleCode, LOCALES } from "@/constants/i18n.constants";

import { usePathname, useRouter } from "@/i18n/navigation";
import { getLocaleLabel } from "@/lib/locale";

import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@/ui";

export function LocaleSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();
  const locales = Object.keys(LOCALES) as LocaleCode[];

  if (locales.length <= 1) return null;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon" aria-label="Submit">
            <Globe className="size-4" />
            <span className="sr-only">Change language</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {locales.map((code) => (
            <DropdownMenuItem
              key={code}
              disabled={code === (currentLocale as LocaleCode)}
              onClick={() => router.replace(pathname, { locale: code })}
            >
              <span>{LOCALES[code]?.flag ?? "🏳️"}</span>
              {getLocaleLabel(code, currentLocale as LocaleCode)}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
