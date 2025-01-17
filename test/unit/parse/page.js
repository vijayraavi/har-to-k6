import test from 'ava'
import page from 'parse/page'
import { result as makeResult } from 'make'

test('main', t => {
  const result = makeResult()
  page({ id: 'page1', title: 'Page 1' }, result)
  t.deepEqual(result.pages, new Map([ [ 'page1', {
    name: 'Page 1'
  } ] ]))
})

test('comment', t => {
  const result = makeResult()
  page(
    { id: 'page1', title: 'Page 1', comment: 'Heavy load' },
    result
  )
  t.deepEqual(result.pages, new Map([ [ 'page1', {
    name: 'Page 1',
    comment: 'Heavy load'
  } ] ]))
})
