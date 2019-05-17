export const addHeaders = (columns) => {
  const headers = [];

  columns.forEach(column => {
    const currentHeader = {
      title: column.title,
      name: column.name,
      size: column.size,
      type: column.type,
      left: column.left || false,
      toggle: column.toggle || false,
      toggleType: column.toggleType || null,
      toggleTargets: column.toggleTargets || [],
      visible: column.visible === undefined ? true : column.visible,
      noBorder: column.noBorder || false,
      customRender: column.customRender || false,
    };

    headers.push(currentHeader);
  })

  return headers;
}
