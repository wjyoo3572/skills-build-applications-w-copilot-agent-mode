import { apiUrl } from '../api'
import ResourceTable from './ResourceTable'

const endpoint = apiUrl('/api/teams/')

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
