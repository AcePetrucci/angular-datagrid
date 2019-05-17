export const defaultHeadersAndColumns = (length) => {
  return [
    {
      name: 'firstCell',
      title: 'First Cell',
      type: 'text',
      size: 5,
      left: true,
      toggle: true,
      toggleTargets: ['hiddenFirstCell', 'hiddenSecondCell'],
      toggleType: 'down',
    },
    {
      name: 'hiddenFirstCell',
      title: 'H. F. Cell',
      type: 'text',
      size: 2.5,
      left: true,
      toggle: true,
      toggleTargets: ['firstCell', 'hiddenSecondCell'],
      toggleType: 'up',
      visible: false,
    },
    {
      name: 'hiddenSecondCell',
      title: 'H. S. Cell',
      type: 'text',
      size: 2.5,
      visible: false,
    },
    {
      name: 'secondCell',
      title: 'Second Cell',
      type: 'date',
      size: 2.2,
    },
    {
      name: 'thirdCell',
      title: 'Third Cell',
      type: 'text',
      size: 1.5
    },
    {
      name: 'fourthCell',
      title: 'Fourth Cell',
      type: 'number',
      size: 1.5,
      noBorder: true,
    },
    {
      name: 'fifthCell',
      title: 'Fifth Cell',
      type: 'number',
      size: 1.5
    },
    {
      name: 'sixthCell',
      title: 'sixthCell',
      type: 'number',
      size: 1.5
    },
    {
      name: 'seventhCell',
      title: 'Seventh Cell',
      type: 'currency',
      size: 1.5
    },
    {
      name: 'eigthCell',
      title: 'Eigth Cell',
      type: 'text',
      size: 1.5
    },
    {
      name: 'ninthCell',
      title: 'Ninth Cell',
      type: 'percentage',
      size: 1.5
    },
    {
      name: 'actions',
      title: '',
      type: 'others',
      size: 1.5
    }
  ]
}
