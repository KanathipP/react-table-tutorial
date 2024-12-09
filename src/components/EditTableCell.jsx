import { Input } from '@chakra-ui/react'
import React from 'react'
import { useState , useEffect } from 'react';

const EditTableCell = ({getValue, row, column , table ,}) => {
  const initialValue = getValue
  const [value, setValue] = useState('');

  const onBlur = () => {
    table.options.meta?.updateData(
      row.index,
      column.id,
      value
    )
  }

  useEffect(() => {
    setValue(initialValue)
  }, [initialValue]);

  return (
    <Input 
        value={value}
        w="85%"
        overflow="hidden"
        textOverflow="ellipsis"
        whiteSpace="nowrap"
        variant="filled"
        onChange={e => setValue(e.target.value)}
        onBlue={onBlur}
    />
  )
}

export default EditTableCell