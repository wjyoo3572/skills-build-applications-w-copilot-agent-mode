import { apiUrl } from '../api'
import ResourceTable from './ResourceTable'

const endpoint = apiUrl('/api/workouts/')

export default function Workouts() {
  return (
    <ResourceTable
      endpoint={endpoint}
      title="Workouts"
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'description', label: 'Description' },
        { key: 'suggested_for', label: 'Suggested for' },
      ]}
    />
  )
}
