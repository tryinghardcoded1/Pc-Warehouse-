
export interface Driver {
  name: string;
  rating: number;
  vehicle: string;
  plate: string;
  photo: string;
  deliverySchedule?: string;
  distance?: string;
  departureTime?: string;
}

export interface TrackingState {
  embedCode: string | null;
  status: 'pending' | 'active' | 'delivered';
  estimatedTime: string;
}
