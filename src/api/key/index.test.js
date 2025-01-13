import request from 'supertest'
import { apiRoot } from '../../config'
import express from '../../services/express'
import routes, { Key } from '.'

const app = () => express(apiRoot, routes)

let key

beforeEach(async () => {
  key = await Key.create({})
})

test('POST /keys 201', async () => {
  const { status, body } = await request(app())
    .post(`${apiRoot}`)
    .send({ value: 'test', expiration-date: 'test', max-connections: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.value).toEqual('test')
  expect(body.expiration-date).toEqual('test')
  expect(body.max-connections).toEqual('test')
})

test('GET /keys 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}`)
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /keys/:id 200', async () => {
  const { status, body } = await request(app())
    .get(`${apiRoot}/${key.id}`)
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(key.id)
})

test('GET /keys/:id 404', async () => {
  const { status } = await request(app())
    .get(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})

test('PUT /keys/:id 200', async () => {
  const { status, body } = await request(app())
    .put(`${apiRoot}/${key.id}`)
    .send({ value: 'test', expiration-date: 'test', max-connections: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(key.id)
  expect(body.value).toEqual('test')
  expect(body.expiration-date).toEqual('test')
  expect(body.max-connections).toEqual('test')
})

test('PUT /keys/:id 404', async () => {
  const { status } = await request(app())
    .put(apiRoot + '/123456789098765432123456')
    .send({ value: 'test', expiration-date: 'test', max-connections: 'test' })
  expect(status).toBe(404)
})

test('DELETE /keys/:id 204', async () => {
  const { status } = await request(app())
    .delete(`${apiRoot}/${key.id}`)
  expect(status).toBe(204)
})

test('DELETE /keys/:id 404', async () => {
  const { status } = await request(app())
    .delete(apiRoot + '/123456789098765432123456')
  expect(status).toBe(404)
})
