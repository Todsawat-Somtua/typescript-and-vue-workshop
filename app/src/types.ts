import type { restaurantStatusList, dietList } from '@/constants'

export type Restaurant = {
  id: String
  name: String
  address: String
  website: String
  status: Status
  diet?: Diet
}

export type Dish = {
  id: String
  name: String
  status: Status
  diet?: Diet
}

type Status = typeof restaurantStatusList[number]
type Diet = typeof dietList[number]
