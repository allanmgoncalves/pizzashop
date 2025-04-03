import { useQuery } from '@tanstack/react-query'
import { DollarSign } from 'lucide-react'

import { getMonthCanceledOrdersAmount } from '@/api/get-month-canceled-orders-amount'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export function MonthCancelOrdersAmountCard() {
  const { data: monthCanceledOrdersAmount } = useQuery({
    queryFn: getMonthCanceledOrdersAmount,
    queryKey: ['metrics', 'month-canceled-orders-amount'],
  })

  return (
    <Card className="w-full min-w-80">
      <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-semibold">
          Cancellations (month)
        </CardTitle>
        <DollarSign className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent className="space-y-1">
        {monthCanceledOrdersAmount && (
          <>
            <span className="text-2xl font-bold tracking-tight">
              {monthCanceledOrdersAmount.amount.toLocaleString('pt-BR')}
            </span>
            <p className="text-xs text-muted-foreground">
              {monthCanceledOrdersAmount.diffFromLastMonth < 0 && (
                <>
                  <span className="text-emerald-500 dark:text-emerald-400">
                    {monthCanceledOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  from last month
                </>
              )}

              {monthCanceledOrdersAmount.diffFromLastMonth === 0 && (
                <>
                  <span className="text-text-muted-foreground">
                    {monthCanceledOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  from last month
                </>
              )}

              {monthCanceledOrdersAmount.diffFromLastMonth > 0 && (
                <>
                  <span className="text-rose-600 dark:text-rose-400">
                    +{monthCanceledOrdersAmount.diffFromLastMonth}%
                  </span>{' '}
                  from last month
                </>
              )}
            </p>
          </>
        )}
      </CardContent>
    </Card>
  )
}
