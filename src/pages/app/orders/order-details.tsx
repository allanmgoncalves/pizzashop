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

// export interface OrderDetailsProps {}

export function OrderDetails() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Order: 9876eqf87ewfqt68qwd</DialogTitle>
        <DialogDescription>Order details</DialogDescription>

        <div className="space-y-6">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell className="text-muted-foreground">Status</TableCell>
                <TableCell className="flex justify-end">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-slate-400" />
                    <span>Pending</span>
                  </div>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Client</TableCell>
                <TableCell className="flex justify-end">
                  Allan Goncalves
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Phone</TableCell>
                <TableCell className="flex justify-end">
                  (12) 345678901
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Email</TableCell>
                <TableCell className="flex justify-end">
                  allangoncalves.adm@gmail.com
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell className="text-muted-foreground">Held at</TableCell>
                <TableCell className="flex justify-end">
                  15 minutes ago
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
              <TableRow>
                <TableCell>Family peperoni pizza</TableCell>
                <TableCell className="text-right">2</TableCell>
                <TableCell className="text-right">$19.90</TableCell>
                <TableCell className="text-right">$39.80</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Family mozzarella pizza</TableCell>
                <TableCell className="text-right">2</TableCell>
                <TableCell className="text-right">$14.90</TableCell>
                <TableCell className="text-right">$29.80</TableCell>
              </TableRow>
            </TableBody>
            <TableFooter>
              <TableRow>
                <TableCell colSpan={3}>Total order</TableCell>
                <TableCell className="text-right font-medium">$69.60</TableCell>
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </DialogHeader>
    </DialogContent>
  )
}
