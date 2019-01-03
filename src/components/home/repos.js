import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions, TextInput, ScrollView,
  ActivityIndicator
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import { connect } from 'react-redux';
import { loadRepo, searchRepo } from '../../redux/actions';

var { height, width } = Dimensions.get('window');

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: this.props.repos,
      loading: this.props.loading,
      filteredRepos: this.props.repos,
      searchValue: ""
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps !== this.props) {
      this.setState({ repos: nextProps.repos, loading: nextProps.loading, filteredRepos: nextProps.repos })
    }
  }
  componentDidMount() {
    this.props.loadRepo();

  }
  renderSingleRepo = (repo) => {
    const iconName = (repo.fork ? "fork" : "book")
    return (
      <View style={styles.singleRepoContainer}>
        <View style={styles.iconContainer}>
          <Icon name={iconName} size={width / 17} color="black" />
        </View>
        <View style={{ width: 0.85 * width }}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ ...styles.nameText, color: "#31a6f9" }}>{repo.owner.login}/</Text>
            <Text style={{ ...styles.nameText, color: "#035399" }}>{repo.name}</Text>
          </View>
          {
            repo.description ? <Text style={{ marginTop: width / 35, fontSize: width / 25 }}>{repo.description}</Text> : null
          }
          <View style={styles.starLang}>
            <View style={styles.star}>
              <Icon name="star" theme="filled" size={width / 20} color="grey" />
              <Text style={{ marginLeft: width / 75 }}>{repo.stargazers_count}</Text>
            </View>
            <Text style={{ marginLeft: width / 35 }}>{repo.language}</Text>
          </View>
        </View>
      </View>
    )
  }
  renderRepoList = () => {
    return (
      <ScrollView>
        {
          this.state.filteredRepos.map((repo) => {
            return (
              <View>
                {this.renderSingleRepo(repo)}
              </View>
            )
          })
        }
      </ScrollView>
    )
  }
  handleChange = (searchValue) => {
    const repos = this.state.repos;
    const filteredRepos = repos.filter((repo) => {
      return repo.name.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    })
    this.setState({ searchValue, filteredRepos })
  }
  renderRepos = () => {
    return (
      <View>
        <TextInput
          style={styles.searchBar}
          onChangeText={(searchValue) => this.handleChange(searchValue)}
          value={this.state.searchValue}
          placeholder="Search by Repository name"
        />
        {this.renderRepoList()}
      </View>
    )
  }
  render() {
    console.log('the props are is ', this.props)
    if (this.state.loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )
    }
    else {
      if (this.props.repoCount === 0) {
        return (
          <View style={styles.container}>
            <Text>No Repositories Avialable</Text>
          </View>
        )
      }
      else {
        return (
          <View style={styles.repoContainer}>
            {this.renderRepos()}
          </View>
        )
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    loading: state.repo.loading,
    repoCount: state.repo.repoCount,
    repos: state.repo.repos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadRepo: () => dispatch(loadRepo()),
    searchRepo: value => dispatch(searchRepo(value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  repoContainer: {
    // alignItems: 'center',
  },
  iconContainer: {
    width: width / 10,
    alignItems: 'center',
    padding: width / 60
  },
  nameText: {
    fontSize: width / 23
  },
  starLang: {
    flexDirection: 'row',
    marginTop: width / 35
  },
  star: {
    flexDirection: 'row',
    width: width / 10
  },
  singleRepoContainer: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  searchBar: {
    height: width / 10, width: 0.95 * width, borderColor: 'gray', borderWidth: 1, margin: width / 35
  }
});
