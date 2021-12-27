import chai, { expect } from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import { shallowMount, mount } from '@vue/test-utils'
import Uploader from '../../src/uploader'
import http from '../../src/http'


chai.use(sinonChai)

describe('Uploader.vue', () => {
    it('存在.', () => {
        expect(Uploader).to.exist
    })
})
