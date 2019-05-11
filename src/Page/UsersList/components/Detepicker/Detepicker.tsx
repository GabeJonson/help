import React, { useState } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

interface UserDate {
  onChange: (value: any) => any;
  value?: string;
  name?: string;
  onBlur?: (event: any) => void;
  onFocus?: (event: any) => void;
}

export const Detepicker: React.FC<UserDate> = ({ onChange }) => {
  const [focus, handleFocus] = useState(false);
  const [date, handleDate] = useState(moment());

  return (
    <SingleDatePicker
      id="datepicker"
      date={date}
      onDateChange={newDate => {
        handleDate(newDate || moment());
        onChange(
          date.toDate().toLocaleDateString() ||
            moment()
              .toDate()
              .toLocaleDateString(),
        );
      }}
      focused={focus}
      onFocusChange={({ focused }) =>
        focused ? handleFocus(focused) : handleFocus(focused || false)
      }
      numberOfMonths={1}
      isOutsideRange={() => false}
      displayFormat="DD.MM.YYYY"
    />
  );
};
