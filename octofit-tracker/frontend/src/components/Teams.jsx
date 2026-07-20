import ResourceTable from './ResourceTable'

const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()
const endpoint = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev/api/teams/`
  : 'http://localhost:8000/api/teams/'

export default function Teams() {
  return (
    <ResourceTable
      endpoint={endpoint}
      responseKey="teams"
      title="Teams"
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'description', label: 'Description' },
        {
          key: 'members',
          label: 'Members',
          render: ({ members = [] }) => members
            .map((member) => member.name ?? member)
            .join(', ') || '—',
        },
      ]}
    />
  )
}
