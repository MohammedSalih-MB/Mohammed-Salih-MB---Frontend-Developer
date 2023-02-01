export const fieldTypes = {
  input: 'input',
  select: 'select'
};

export const filterFormFields = {
  country: {
    label: 'Country',
    key: 'country',
    type: fieldTypes.select
  },
  active: {
    label: 'Status',
    key: 'active',
    type: fieldTypes.select
  },
  name: {
    label: 'Search',
    key: 'name',
    type: fieldTypes.input
  }
}

export const statusOptions = [
  {
    label: 'Active',
    value: 'true'
  },
  {
    label: 'Inactive',
    value: 'false'
  }
]
