"use client";

import Link from "next/link";

import { useLocale, useTranslations } from "next-intl";

import { Button } from "@/ui";

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const t = useTranslations("Error");
  const locale = useLocale();

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-4 text-center">
      <h2 className="text-2xl font-bold">{t("title")}</h2>
      <p className="text-muted-foreground">{t("message")}</p>
      <div className="flex gap-4">
        <Button onClick={() => reset()}>{t("retry")}</Button>
        <Button asChild variant="outline">
          <Link href={`/${locale}`}>{t("goHome")}</Link>
        </Button>
      </div>
    </div>
  );
}
