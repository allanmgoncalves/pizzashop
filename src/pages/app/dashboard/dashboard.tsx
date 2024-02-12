import { Helmet } from 'react-helmet-async'

import { DayOrderAmountCard } from './day-orders-amount-card'
import { MonthlyCancelOrderAmountCard } from './monthly-cancel-orders-amount-card'
import { MonthlyIncomeCard } from './monthly-income-card'
import { MonthlyOrderAmountCard } from './monthly-orders-amount-card'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="grid grid-cols-4 gap-4">
          <MonthlyIncomeCard />
          <MonthlyOrderAmountCard />
          <DayOrderAmountCard />
          <MonthlyCancelOrderAmountCard />
        </div>
      </div>
    </>
  )
}
