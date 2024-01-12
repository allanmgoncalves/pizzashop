import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
const signInForm = z.object({
  email: z.string().email(),
})

type SignInForm = z.infer<typeof signInForm>

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignInForm>()

  async function handleSignIn(data: SignInForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('We send a validation link to your email.')
    } catch {
      toast.error('Heads up!', {
        description:
          'We had a problem sending the validation link to your email. Please try again',
        action: {
          label: 'Resend',
          onClick: () => handleSignIn(data),
        },
      })
    }
  }

  return (
    <>
      <Helmet title="Sign In" />
      <div className="p-8">
        <Button asChild variant={'ghost'} className="absolute right-8 top-8">
          <Link to={'/sign-up'}>Create an Account</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Access Panel
            </h1>
            <p className="text-sm text-muted-foreground">
              Track your sales through the partner panel!
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleSignIn)}
            className="flex flex-col gap-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">Your email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register('email')}
              />
            </div>

            <Button disabled={isSubmitting} type="submit">
              Access Panel
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
