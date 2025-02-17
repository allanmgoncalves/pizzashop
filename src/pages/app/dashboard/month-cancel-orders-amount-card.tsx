import { DollarSign } from 'lucide-react'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCancelOrderAmountCard() {
  return (
    <Card className="w-full min-w-80">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancellations (month)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        <span className="text-2xl font-bold tracking-tight">16</span>
        <p className="text-xs text-muted-foreground">
          <span className="text-emerald-600 dark:text-emerald-400">-10%</span>{' '}
          from last month
        </p>
      </CardContent>
    </Card>
  )
}
