import { Pizza } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export function SignIn() {
  return (
    <>
      <Helmet title="Sign In" />
      <div className="p-8">
        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2">
            <Pizza className="h-12 w-12 text-ring" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Access panel
            </h1>
            <p className="text-sm text-muted-foreground">
              Track your sales through the partner panel!
            </p>
          </div>
          <form className="flex flex-col gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Your email</Label>
              <Input id="email" type="email" placeholder="Enter your email" />
            </div>

            <Button type="submit">Access panel</Button>
          </form>
        </div>
      </div>
    </>
  )
}
