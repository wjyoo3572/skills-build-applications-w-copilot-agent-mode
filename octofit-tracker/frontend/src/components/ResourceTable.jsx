import { useEffect, useState } from 'react'
import { normalizeCollection } from '../api'

function displayValue(value) {
  if (value == null) return '—'
  if (typeof value === 'object') {
    return value.name ?? value.username ?? value.email ?? JSON.stringify(value)
  }
  return String(value)
}

export default function ResourceTable({ endpoint, title, columns }) {
  const [items, setItems] = useState([])
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()

    async function loadItems() {
      try {
        setLoading(true)
        setError('')
        const response = await fetch(endpoint, { signal: controller.signal })
        if (!response.ok) {
          throw new Error(`Request failed with status ${response.status}`)
        }
        setItems(normalizeCollection(await response.json()))
      } catch (requestError) {
        if (requestError.name !== 'AbortError') {
          setError(requestError.message)
        }
      } finally {
        if (!controller.signal.aborted) setLoading(false)
      }
    }

    loadItems()
    return () => controller.abort()
  }, [endpoint])

  if (loading) return <p className="alert alert-info">Loading {title.toLowerCase()}…</p>
  if (error) return <p className="alert alert-danger">Unable to load {title.toLowerCase()}: {error}</p>

  return (
    <section>
      <h1 className="mb-4">{title}</h1>
      {items.length === 0 ? (
        <p className="alert alert-secondary">No {title.toLowerCase()} found.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-dark">
              <tr>
                {columns.map(({ label }) => <th key={label}>{label}</th>)}
              </tr>
            </thead>
            <tbody>
              {items.map((item, index) => (
                <tr key={item.id ?? item._id ?? index}>
                  {columns.map(({ key, render }) => (
                    <td key={key}>{render ? render(item) : displayValue(item[key])}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
