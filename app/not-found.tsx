import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-background to-muted/30 px-4">
      <div className="text-center space-y-6 max-w-2xl">
        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-9xl font-bold text-primary/10 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl">🔍</span>
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold tracking-tight">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button asChild size="lg">
            <Link href="/">
              Go Home
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="javascript:history.back()">
              Go Back
            </Link>
          </Button>
        </div>

        {/* Helpful Links */}
        <div className="pt-8 border-t border-border/50">
          <p className="text-sm text-muted-foreground mb-4">
            Here are some helpful links instead:
          </p>
          <div className="flex flex-wrap gap-4 justify-center text-sm">
            <Link href="/" className="text-primary hover:underline">
              Home
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#insights" className="text-primary hover:underline">
              Insights
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#case-studies" className="text-primary hover:underline">
              Case Studies
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/#news" className="text-primary hover:underline">
              News
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
