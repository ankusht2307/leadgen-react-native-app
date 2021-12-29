import React from 'react';
import { Picker } from '@react-native-picker/picker';
import { StyleSheet, Text, View } from 'react-native';
import { Controller } from 'react-hook-form';
import Colors from '../../constants/Colors';

const AppPicker = ({ items, name, label, control, errors, rules, ...rest }) => {
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <Picker
            {...rest}
            style={styles.input}
            selectedValue={value}
            onValueChange={(itemValue) => onChange(itemValue)}
          >
            {items
              && items.map((item) => (
                <Picker.Item label={item.label} value={item.value} key={item.value} />
              ))}
          </Picker>
        )}
        name={name}
        defaultValue=""
      />
      {errors[name] && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{errors[name].message}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: '100%',
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: Colors.silver,
    borderBottomWidth: 1,
  },
  errorContainer: {
    marginVertical: 5,
  },
  errorText: {
    fontFamily: 'open-sans',
    color: Colors.red,
    fontSize: 13,
  },
});

export default AppPicker;
