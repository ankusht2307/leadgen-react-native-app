import Toast from 'react-native-toast-message';

const Toaster = (message, errorType) => {
  return Toast.show({
    //   type: 'success',
    type: errorType,
    text2: message,
  });
};

export default Toaster;
