import { Key } from '.'

let key

beforeEach(async () => {
  key = await Key.create({ value: 'test', expiration-date: 'test', max-connections: 'test' })
})

describe('view', () => {
  it('returns simple view', () => {
    const view = key.view()
    expect(typeof view).toBe('object')
    expect(view.id).toBe(key.id)
    expect(view.value).toBe(key.value)
    expect(view.expiration-date).toBe(key.expiration-date)
    expect(view.max-connections).toBe(key.max-connections)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })

  it('returns full view', () => {
    const view = key.view(true)
    expect(typeof view).toBe('object')
    expect(view.id).toBe(key.id)
    expect(view.value).toBe(key.value)
    expect(view.expiration-date).toBe(key.expiration-date)
    expect(view.max-connections).toBe(key.max-connections)
    expect(view.createdAt).toBeTruthy()
    expect(view.updatedAt).toBeTruthy()
  })
})
