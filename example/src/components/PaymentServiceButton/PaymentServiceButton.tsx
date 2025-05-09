import React from 'react';
import { Platform, TouchableOpacity, Text } from 'react-native';
import styles from './styles';

declare module 'react-native' {
  interface ViewProps {
    children?: React.ReactNode;
  }

  interface TouchableOpacityProps {
    children?: React.ReactNode;
  }

  interface TextProps {
    children?: React.ReactNode;
  }
}

interface PaymentServiceButtonProps {
  onPay: () => void;
}

const PaymentServiceButton: React.FC<PaymentServiceButtonProps> = ({
  onPay,
}) => {
  const titleButton = Platform.OS === 'android' ? 'Google Pay' : 'Apple Pay';

  return (
    <TouchableOpacity style={styles.button} onPress={onPay}>
      <Text style={styles.title}>{titleButton}</Text>
    </TouchableOpacity>
  );
};

export default PaymentServiceButton;
