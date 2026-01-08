import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { typographyVariants, type TypographyVariant } from "@/lib/typography"

const typographyComponentVariants = cva("", {
  variants: {
    variant: {
      h1: typographyVariants.h1,
      h2: typographyVariants.h2,
      h3: typographyVariants.h3,
      h4: typographyVariants.h4,
      h5: typographyVariants.h5,
      h6: typographyVariants.h6,
      p: typographyVariants.p,
      lead: typographyVariants.lead,
      large: typographyVariants.large,
      small: typographyVariants.small,
      muted: typographyVariants.muted,
      blockquote: typographyVariants.blockquote,
      list: typographyVariants.list,
      code: typographyVariants.code,
      pre: typographyVariants.pre,
    },
  },
  defaultVariants: {
    variant: "p",
  },
})

export interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyComponentVariants> {
  as?: React.ElementType
}

const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant, as, ...props }, ref) => {
    const getDefaultTag = (variant?: string | null): React.ElementType => {
      if (variant && ["h1", "h2", "h3", "h4", "h5", "h6"].includes(variant)) {
        return variant as React.ElementType
      }
      return "p"
    }
    
    const Component = as || getDefaultTag(variant || undefined)
    
    return (
      <Component
        ref={ref as any}
        className={cn(typographyComponentVariants({ variant, className }))}
        {...props}
      />
    )
  }
)
Typography.displayName = "Typography"

export { Typography, typographyComponentVariants }

