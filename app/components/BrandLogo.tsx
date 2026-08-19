"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  const observer = new MutationObserver(onStoreChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
  return () => observer.disconnect();
}

function getSnapshot() {
  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function getServerSnapshot() {
  return "dark";
}

export default function BrandLogo({ className = "" }: { className?: string }) {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const src = theme === "light" ? "/assets/logo-light.png" : "/assets/logo-dark.png";

  return (
    <Image
      className={`brand-logo ${className}`.trim()}
      src={src}
      alt="Berry Solutions"
      width={280}
      height={220}
      priority
    />
  );
}
