import { useQuery } from '@tanstack/react-query'
import { formatDistanceToNow } from 'date-fns'
import { enUS } from 'date-fns/locale'

import { getOrdersDetails } from '@/api/get-order-details'
import { OrderStatus } from '@/components/order-status'
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export interface OrderDetailsProps {
  orderId: string
  open: boolean
}

export function OrderDetails({ orderId, open }: OrderDetailsProps) {
  const { data: order } = useQuery({
    queryKey: ['order', orderId],
    queryFn: () => getOrdersDetails({ orderId }),
    enabled: open,
  })

  if (!order) {
    return null
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order: {orderId}</DialogTitle>
        <DialogDescription>Order details</DialogDescription>

        {order && (
          <div className="space-y-6">
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell className="text-muted-foreground">
                    Status
                  </TableCell>
                  <TableCell className="flex justify-end">
                    <OrderStatus status={order.status} />
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="text-muted-foreground">
                    Client
                  </TableCell>
                  <TableCell className="flex justify-end">
                    {order.customer.name}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="text-muted-foreground">Phone</TableCell>
                  <TableCell className="flex justify-end">
                    {order.customer.phone ?? 'N/A'}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="text-muted-foreground">Email</TableCell>
                  <TableCell className="flex justify-end">
                    {order.customer.email}
                  </TableCell>
                </TableRow>

                <TableRow>
                  <TableCell className="text-muted-foreground">
                    Held at
                  </TableCell>
                  <TableCell className="flex justify-end">
                    {formatDistanceToNow(order.createdAt, {
                      locale: enUS,
                      addSuffix: true,
                    })}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>

            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead className="text-right">Qty</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Subtotal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {order.orderItems.map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.product.name}</TableCell>
                    <TableCell className="text-right">
                      {item.quantity}
                    </TableCell>
                    <TableCell className="text-right">
                      {(item.priceInCents / 100).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </TableCell>
                    <TableCell className="text-right">
                      {(
                        (item.priceInCents / 100) *
                        item.quantity
                      ).toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell colSpan={3}>Total order</TableCell>
                  <TableCell className="text-right font-medium">
                    {(order.totalInCents / 100).toLocaleString('en-US', {
                      style: 'currency',
                      currency: 'USD',
                    })}
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </div>
        )}
      </DialogHeader>
    </DialogContent>
  )
}
