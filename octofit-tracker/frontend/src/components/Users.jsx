import { apiUrl } from '../api'
import ResourceTable from './ResourceTable'

const endpoint = apiUrl('/api/users/')

export default function Users() {
  return (
    <ResourceTable
      endpoint={endpoint}
      responseKey="users"
      title="Users"
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'email', label: 'Email' },
        { key: 'role', label: 'Role' },
        { key: 'team', label: 'Team' },
      ]}
    />
  )
}
