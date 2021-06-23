import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TextInput, Button} from 'components';
import styles from './styles';

export interface $1Props {}
export interface $1State {
  email: string;
  password: string;
}

export class LoginScreen extends Component<$1Props, $1State> {
  constructor(props: $1Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handelSubmit = () => {
    console.log('Email: ', this.state.email);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.mainView}>
            <View style={styles.card}>
              <Text>Login</Text>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Enter your email"
                  value={this.state.email}
                  onChange={(e: string) => this.setState({email: e})}
                />
              </View>
              <View style={styles.inputView}>
                <TextInput
                  placeholder="Enter your Password"
                  value={this.state.password}
                  onChange={(e: string) => this.setState({password: e})}
                />
              </View>
              <View style={styles.buttonView}>
                <Button title="Submit" onPress={this.handelSubmit} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default LoginScreen;
