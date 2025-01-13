import { success, notFound } from '../../services/response/'
import { Key } from '.'

export const create = ({ bodymen: { body } }, res, next) =>
  Key.create(body)
    .then((key) => key.view(true))
    .then(success(res, 201))
    .catch(next)

export const index = ({ querymen: { query, select, cursor } }, res, next) =>
  Key.find(query, select, cursor)
    .then((keys) => keys.map((key) => key.view()))
    .then(success(res))
    .catch(next)

export const show = ({ params }, res, next) =>
  Key.findById(params.id)
    .then(notFound(res))
    .then((key) => key ? key.view() : null)
    .then(success(res))
    .catch(next)

export const update = ({ bodymen: { body }, params }, res, next) =>
  Key.findById(params.id)
    .then(notFound(res))
    .then((key) => key ? Object.assign(key, body).save() : null)
    .then((key) => key ? key.view(true) : null)
    .then(success(res))
    .catch(next)

export const destroy = ({ params }, res, next) =>
  Key.findById(params.id)
    .then(notFound(res))
    .then((key) => key ? key.remove() : null)
    .then(success(res, 204))
    .catch(next)
