import ResourceTable from './ResourceTable'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/workouts/`
  : 'http://localhost:8000/api/workouts/'

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
