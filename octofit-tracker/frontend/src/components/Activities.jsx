import { apiUrl } from '../api'
import ResourceTable from './ResourceTable'

const endpoint = apiUrl('/api/activities/')

export default function Activities() {
  return (
    <ResourceTable
      endpoint={endpoint}
      responseKey="activities"
      title="Activities"
      columns={[
        { key: 'user', label: 'User' },
        { key: 'type', label: 'Activity' },
        {
          key: 'durationMinutes',
          label: 'Duration',
          render: ({ durationMinutes }) => `${durationMinutes} min`,
        },
        { key: 'distanceKm', label: 'Distance (km)' },
        {
          key: 'date',
          label: 'Date',
          render: ({ date }) => new Date(date).toLocaleDateString(),
        },
      ]}
    />
  )
}
