import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

export interface ICard {
  title: string;
  children: React.ReactNode;
}

const Card = ({title, children}: ICard) => (
  <View style={styles.card}>
    <View style={styles.cardHeader}>
      <Text style={styles.cardTitle}>{title}</Text>
    </View>
    <View>{children}</View>
  </View>
);

export default Card;
