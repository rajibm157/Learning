import React, {Component} from 'react';
import {Text, View, Button} from 'react-native';
//import PayPal from 'react-native-paypal-gateway';
import RNPaypal from 'react-native-paypal-module';
import styles from './styles';

export interface $1Props {}
export interface $1State {
  email: string;
  password: string;
}

export class SignupScreen extends Component<$1Props, $1State> {
  constructor(props: $1Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handelPayPal = () => {
    /* PayPal.initialize(
      PayPal.SANDBOX,
      'AcbyZ0XCU8WnIZphIlcj_uojbSubHPP8Cy1GURIE-usBpOOIeLZ24HCQ4FK4gj4tocGdKntGvO8EEHiw',
    );
    PayPal.pay({
      price: '40.70',
      currency: 'USD',
      description: 'Your description goes here',
    })
      .then((confirm: any) => console.log('Pay :', confirm))
      .catch((error: any) => console.log(error)); */
    RNPaypal.paymentRequest({
      clientId:
        'AcbyZ0XCU8WnIZphIlcj_uojbSubHPP8Cy1GURIE-usBpOOIeLZ24HCQ4FK4gj4tocGdKntGvO8EEHiw',
      environment: RNPaypal.ENVIRONMENT.SANDBOX,
      intent: RNPaypal.INTENT.SALE,
      price: 60,
      currency: 'USD',
      description: 'Android testing',
      acceptCreditCards: true,
    })
      .then((response: any) => {
        console.log(response);
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={{width: 100, height: 60}}>
            <Button title="PayPal" onPress={this.handelPayPal} />
          </View>
        </View>
      </View>
    );
  }
}

export default SignupScreen;
