import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'
import Popover from '../../src/popover'

chai.use(sinonChai)

describe('Popover', () => {

  it('存在.', () => {
    expect(Popover).to.exist
  })
})