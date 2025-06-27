import { test, expect } from 'vitest';
import { mount } from '@vue/test-utils'
import WelcomeItem from '../../components/WelcomeItem.vue'

test('import vue sfc', () => {
  expect(WelcomeItem).toBeDefined()

  const wrapper = mount(WelcomeItem, {
    slots: {
      // https://test-utils.vuejs.org/api/#slots
      default: 'main content',
      heading: 'title heading',
      icon: 'some icon',
    },
  })



  expect(wrapper.text()).toMatchInlineSnapshot(`"some icontitle headingmain content"`)
})