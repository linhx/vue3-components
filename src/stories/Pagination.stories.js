import Pagination from '../components/Pagination.vue';

export default {
  title: 'Example/Pagination',
  component: Pagination,
  argTypes: {
    totalRows: {
      type: 'number',
    },
    rowsPerPage: {
      type: 'number',
    },
    edgeCount: {
      type: 'number',
    },
    modalValue: {
      type: 'number',
    },
    onChange: {
      action: 'change'
    },
    'onUpdate:modelValue': {
      action: 'update:modelValue'
    }
  },
};

const Template = (args) => ({
  components: { Pagination },
  setup() {
    return { args };
  },
  template: `<div>
    <pagination v-bind="args" v-model="args.modalValue" />
  </div>`
});

export const Primary = Template.bind({});
Primary.args = {
  totalRows: 200,
  rowsPerPage: 10,
  edgeCount: 2,
  modalValue: 7
};
