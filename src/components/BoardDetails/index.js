import React, { Component } from 'react';
import { View, Text, Button, StatusBar } from 'react-native';

class BoardDetails extends Component {
  static navigationOptions = {
    title: 'Details',
  };

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'some default value');

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar backgroundColor="orange" barStyle="light-content" />
        
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details..."
          onPress={() =>
            this.props.navigation.push('BoardDetails', {
              itemId: Math.floor(Math.random() * 100),
            }
          )}
        />
      </View>
    );
  }
}

export default BoardDetails;
