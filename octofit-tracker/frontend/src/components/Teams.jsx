import { apiUrl } from '../api'
import ResourceTable from './ResourceTable'

const endpoint = apiUrl('/api/teams/')

export default function Teams() {
  return (
    <ResourceTable
      endpoint={endpoint}
      title="Teams"
      columns={[
        { key: 'name', label: 'Name' },
        { key: 'members', label: 'Members' },
      ]}
    />
  )
}
