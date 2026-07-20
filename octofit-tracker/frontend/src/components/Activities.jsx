import { apiUrl } from '../api'
import ResourceTable from './ResourceTable'

const endpoint = apiUrl('/api/activities/')

export default function Activities() {
  return (
    <ResourceTable
      endpoint={endpoint}
      title="Activities"
      columns={[
        { key: 'user', label: 'User' },
        { key: 'activity_type', label: 'Activity' },
        { key: 'duration', label: 'Duration' },
        { key: 'date', label: 'Date' },
      ]}
    />
  )
}
