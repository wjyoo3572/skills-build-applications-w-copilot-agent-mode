import { apiUrl } from '../api'
import ResourceTable from './ResourceTable'

const endpoint = apiUrl('/api/users/')

export default function Users() {
  return (
    <ResourceTable
      endpoint={endpoint}
      title="Users"
      columns={[
        { key: 'username', label: 'Username' },
        { key: 'email', label: 'Email' },
        { key: 'team', label: 'Team' },
      ]}
    />
  )
}
