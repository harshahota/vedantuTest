import React, { Component } from 'react';
import {
  createMaterialTopTabNavigator,
  createAppContainer,
} from 'react-navigation';
import { View, Text, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import Overview from './overview.js';
import Repos from './repos.js';
import Stars from './stars.js';
var { height, width } = Dimensions.get('window');
class Title extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'white' }}>{this.props.name} </Text>
        <View style={{ backgroundColor: 'grey', borderRadius:height/34, height: height/34, width: height/34, alignItems: 'center' }}>
          <Text style={{ color: 'white' }}>{this.props.repoCount}</Text>
        </View>

      </View>
    )
  }
}
const TabNavigator = createMaterialTopTabNavigator(
  {
    overview: Overview,
    repositories: {
      screen: Repos,
      navigationOptions: ({ screenProps }) => ({
        tabBarLabel: () => {
          return (
            <Title name="REPOSITORIES" repoCount={screenProps.repoCount} />
          )
        }
      }),
    },
    stars: Stars,
  },
  {
    initialRouteName: 'repositories',
    tabBarOptions: {
      style: {
        backgroundColor: 'black',
      },
    },
    navigationOptions: ({ navigation, screenProps }) => ({
      title: () => {
        const { routeName } = navigation.state;
        let name;
        if (routeName === 'overview') {
          name = "overview1"
        } else if (routeName === 'repositories') {
          name = "repositories1"
        } else if (routeName === 'stars') {
          name = "stars1"
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
  }
);

export const Tab = createAppContainer(TabNavigator);
// export default createAppContainer(TabNavigator);
export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <Tab screenProps={{ repoCount: this.props.repoCount }} />
    )
  }
}

const mapStateToProps = state => {
  return {
    repoCount: state.repo.repoCount,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // loadRepo: () => dispatch(loadRepo()),
    // searchRepo: value => dispatch(searchRepo(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);