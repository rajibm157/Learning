import React, {Component} from 'react';
import {Text, View, FlatList, Image} from 'react-native';
import Toast from 'react-native-simple-toast';
import Services from 'services';
import styles from './styles';

export interface $1Props {}
export interface $1State {
  followers: [];
}

export class HomeScreen extends Component<$1Props, $1State> {
  constructor(props: $1Props) {
    super(props);
    this.state = {
      followers: [],
    };
  }

  componentDidMount() {
    this.getFlowers();
  }

  getFlowers = async () => {
    let {result, error}: any = await Services.getFollowers();
    if (result) {
      this.setState({followers: result});
    } else {
      Toast.show(error);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.rightView}>
            <FlatList
              data={this.state.followers}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item, index) => item + index.toString()}
              renderItem={({item}: any) => (
                <View style={styles.card}>
                  <Image
                    source={{uri: item.avatar_url}}
                    style={styles.avator}
                  />
                  <View style={styles.cardBody}>
                    <Text style={styles.title}>{item.login}</Text>
                    <Text style={styles.description}>{item.type}</Text>
                  </View>
                </View>
              )}
            />
          </View>
        </View>
      </View>
    );
  }
}

export default HomeScreen;
