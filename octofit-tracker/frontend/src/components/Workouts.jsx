import { apiUrl } from '../api'
import ResourceTable from './ResourceTable'

const endpoint = apiUrl('/api/workouts/')

export default function Workouts() {
  return (
    <ResourceTable
      endpoint={endpoint}
      responseKey="workouts"
      title="Workouts"
      columns={[
        { key: 'title', label: 'Workout' },
        { key: 'description', label: 'Description' },
        { key: 'difficulty', label: 'Difficulty' },
        {
          key: 'durationMinutes',
          label: 'Duration',
          render: ({ durationMinutes }) => `${durationMinutes} min`,
        },
      ]}
    />
  )
}
