import React, { Component } from 'react';
import { View, Button } from 'react-native';

class Boards extends Component {
  static navigationOptions = {
    title: 'My boards',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Access board"
          onPress={() => {
            this.props.navigation.navigate('BoardDetails', {
              itemId: 82,
              otherParam: 'anything you want here',
            });
          }}
        />
      </View>
    );
  }
}

export default Boards;
