"use client"

import React from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";

type BadgeProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant: "fe" | "be" | "live";
  href: string;
};

const ProjectBadge: React.FC<BadgeProps> = ({
                                              variant,
                                              href,
                                              ...props
                                            }) => {

  const label = {
    fe: "FE Repo ==>",
    be: "BE Repo ==>",
    live: "Live <~>",
  }

  const basedStyle = "flex items-center justify-center gap-0.5 min-w-28 text-sm font-medium border border-primary p-2 hover:text-muted-foreground hover:border-muted-foreground"

  return (
    <Link
      href={href}
      className={cn(
        basedStyle,
      )}
      {...props}
    >
      {label[variant]}
    </Link>
  )
}

export default ProjectBadge;