import { api } from '@/lib/axios'

export interface GetOrdersDetailsParams {
  orderId: string
}

export interface GetOrdersDetailsResponse {
  id: string
  createdAt: string
  status: 'pending' | 'canceled' | 'processing' | 'delivering' | 'delivered'
  totalInCents: number
  customer: {
    name: string
    email: string
    phone: string | null
  }
  orderItems: {
    id: string
    priceInCents: number
    quantity: number
    product: {
      name: string
    }
  }[]
}

export async function getOrdersDetails({ orderId }: GetOrdersDetailsParams) {
  const response = await api.get<GetOrdersDetailsResponse>(`/orders/${orderId}`)
  return response.data
}
