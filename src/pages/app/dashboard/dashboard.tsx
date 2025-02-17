import { Helmet } from 'react-helmet-async'

import { DayOrderAmountCard } from './day-orders-amount-card'
import { MonthCancelOrderAmountCard } from './month-cancel-orders-amount-card'
import { MonthOrderAmountCard } from './month-orders-amount-card'
import { MonthRevenueCard } from './month-revenue-card'
import { PopularProductsChart } from './popular-products-chart'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className="flex gap-4 overflow-x-scroll">
          <MonthRevenueCard />
          <MonthOrderAmountCard />
          <DayOrderAmountCard />
          <MonthCancelOrderAmountCard />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
