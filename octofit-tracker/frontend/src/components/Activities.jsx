import ResourceTable from './ResourceTable'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/activities/`
  : 'http://localhost:8000/api/activities/'

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
