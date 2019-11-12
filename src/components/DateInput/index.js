import React, { useState, useMemo } from 'react';
import { Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, DateButton, DateText, Picker } from './styles';

export default function DateInput({ date, onChange }) {
  const [opened, setOpened] = useState(false);
  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM 'de' yyyy", { locale: ptBr }),
    [date]
  );

  return (
    <Container>
      <DateButton onPress={() => setOpened(!opened)}>
        <Icon name="event" color="#fff" size={20} />
        <DateText>{dateFormatted}</DateText>
      </DateButton>
      {Platform.OS === 'ios' && opened ? (
        <Picker>
          <DateTimePicker
            value={date}
            onChange={(event, newDate) =>
              newDate !== undefined && onChange(newDate)
            }
            minimumDate={new Date()}
            locale="pt-BR"
          />
        </Picker>
      ) : (
        opened && (
          <DateTimePicker
            value={date}
            onChange={(event, newDate) =>
              newDate !== undefined && onChange(newDate)
            }
            minimumDate={new Date()}
            locale="pt-BR"
          />
        )
      )}
    </Container>
  );
}
