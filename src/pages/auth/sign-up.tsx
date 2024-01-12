import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'sonner'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
const signUpForm = z.object({
  establishmentName: z.string(),
  managerName: z.string(),
  phone: z.string(),
  email: z.string().email(),
})

type SignUpForm = z.infer<typeof signUpForm>

export function SignUp() {
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SignUpForm>()

  async function handleSignUp(data: SignUpForm) {
    try {
      console.log(data)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      toast.success('Account created successfully!', {
        action: {
          label: 'Sign In',
          onClick: () => navigate('/sign-in'),
        },
      })
    } catch {
      toast.error('Heads up!', {
        description:
          'We had a problem trying to create your account. Please try again.',
        action: {
          label: 'Resend',
          onClick: () => handleSignUp(data),
        },
      })
    }
  }

  return (
    <>
      <Helmet title="Sign Up" />
      <div className="p-8">
        <Button asChild variant={'ghost'} className="absolute right-8 top-8">
          <Link to={'/sign-in'}>Sign In</Link>
        </Button>

        <div className="flex w-[350px] flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create Your Free Account
            </h1>
            <p className="text-sm text-muted-foreground">
              Track your sales through the partner panel!
            </p>
          </div>
          <form
            onSubmit={handleSubmit(handleSignUp)}
            className="flex flex-col gap-4"
          >
            <div className="space-y-2">
              <Label htmlFor="establishmentName">Establishment name</Label>
              <Input
                id="establishmentName"
                type="text"
                placeholder="Enter your establishment name"
                {...register('establishmentName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerName">Your name</Label>
              <Input
                id="managerName"
                type="text"
                placeholder="Enter your name"
                {...register('managerName')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Your email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                {...register('email')}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Your phone</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Enter your phone"
                {...register('phone')}
              />
            </div>

            <Button disabled={isSubmitting} type="submit">
              Create Account
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              By continuing you agree to our{' '}
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                terms of use
              </a>{' '}
              and{' '}
              <a
                href="http://"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                privacy policies
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  )
}
