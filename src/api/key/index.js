import { Router } from 'express'
import { middleware as query } from 'querymen'
import { middleware as body } from 'bodymen'
import { create, index, show, update, destroy } from './controller'
import { schema } from './model'
export Key, { schema } from './model'

const router = new Router()
const { value, expiration-date, max-connections } = schema.tree

/**
 * @api {post} /keys Create key
 * @apiName CreateKey
 * @apiGroup Key
 * @apiParam value Key's value.
 * @apiParam expiration-date Key's expiration-date.
 * @apiParam max-connections Key's max-connections.
 * @apiSuccess {Object} key Key's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Key not found.
 */
router.post('/',
  body({ value, expiration-date, max-connections }),
  create)

/**
 * @api {get} /keys Retrieve keys
 * @apiName RetrieveKeys
 * @apiGroup Key
 * @apiUse listParams
 * @apiSuccess {Object[]} keys List of keys.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 */
router.get('/',
  query(),
  index)

/**
 * @api {get} /keys/:id Retrieve key
 * @apiName RetrieveKey
 * @apiGroup Key
 * @apiSuccess {Object} key Key's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Key not found.
 */
router.get('/:id',
  show)

/**
 * @api {put} /keys/:id Update key
 * @apiName UpdateKey
 * @apiGroup Key
 * @apiParam value Key's value.
 * @apiParam expiration-date Key's expiration-date.
 * @apiParam max-connections Key's max-connections.
 * @apiSuccess {Object} key Key's data.
 * @apiError {Object} 400 Some parameters may contain invalid values.
 * @apiError 404 Key not found.
 */
router.put('/:id',
  body({ value, expiration-date, max-connections }),
  update)

/**
 * @api {delete} /keys/:id Delete key
 * @apiName DeleteKey
 * @apiGroup Key
 * @apiSuccess (Success 204) 204 No Content.
 * @apiError 404 Key not found.
 */
router.delete('/:id',
  destroy)

export default router
