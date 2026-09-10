"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { navItems } from "@/lib/site-data";

export function MobileMenu() {
  const menuRef = useRef<HTMLDetailsElement>(null);
  useEffect(() => {
    function closeOnOutsidePointer(event: PointerEvent) {
      const menu = menuRef.current;
      if (
        menu?.open &&
        event.target instanceof Node &&
        !menu.contains(event.target)
      ) {
        menu.open = false;
      }
    }
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () =>
      document.removeEventListener("pointerdown", closeOnOutsidePointer);
  }, []);

  function closeMenu(restoreFocus = false) {
    const menu = menuRef.current;
    if (!menu) return;
    menu.open = false;
    if (restoreFocus) menu.querySelector("summary")?.focus();
  }

  return (
    <details
      className="mobile-menu"
      ref={menuRef}
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          closeMenu(true);
          event.preventDefault();
        }
      }}
      onBlur={(event) => {
        // Safari can blur the summary with no next focus target before a link tap.
        if (
          event.relatedTarget &&
          !event.currentTarget.contains(event.relatedTarget)
        ) {
          closeMenu();
        }
      }}
    >
      <summary aria-label="Ana menüyü aç veya kapat">
        <span />
        <span />
      </summary>
      <nav aria-label="Mobil menü">
        {navItems.map((item, index) => (
          <Link key={item.href} href={item.href} onClick={() => closeMenu()}>
            <span>0{index + 1}</span>
            {item.label}
          </Link>
        ))}
      </nav>
    </details>
  );
}
