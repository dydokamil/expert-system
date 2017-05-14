import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  TabNavigator,
  Image,
  ScrollView,
} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Narzędzie naprawcze Windows',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{
        flex: 1,
        margin: 15,
      }}>
        <Text>Witaj w programie naprawczym Windows.
        Niniejsze narzędzie ma na celu przeprowadzić Cię przez
        kilka pytań w celu rozwiązania problemu z komputerem.</Text>
        <Button
          onPress={() => navigate('Pytanie')}
          title='Rozpocznij'
        />
      </View>
    );
  }
}

class PytanieScreen extends React.Component {
  static navigationOptions = {
    title: "Ekran komputera"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View
       style={{
        flex: 1,
        margin: 15,
      }} >
        <Text>Czy cokolwiek pojawia się na ekranie?</Text>
        <Button
          onPress={() => navigate('LoginScreen')}
          title="Tak"
        />
        <Button
          onPress={() => navigate('SerwisScreen')}
          title="Nie"
          color='#ff0000'
        />
      </View>
    );
  }
}

class LoginScreen extends React.Component {
  static navigationOptions = {
    title: "Ekran logowania"
  };
  render (){
    const { navigate } = this.props.navigation;
    return (
      <View
       style={{
        flex: 1,
        margin: 15,
      }} >
        <Text>Czy możesz zalogować się do systemu Windows?</Text>
        <Button
          onPress={() => navigate('ErrorScreen')}
          title="Tak"
        />
        <Button
          onPress={() => navigate('TerminalScreen')}
          title="Nie"
          color='#ff0000'
        />
      </View>
    );
  }
}

class TerminalScreen extends React.Component {
  static navigationOptions = {
    title: "Konsola"
  };
  render () {
    const {navigate} = this.props.navigation;
    return (
      <ScrollView
        style={{
          flex: 1,
          margin: 15,
        }}>
        <Text>Czy na ekranie pojawia się poniższy tekst?</Text>
        <ScrollView horizontal>
          <Image
            source={require('./img/missing.png')}
          />
        </ScrollView>
        <Button
          onPress={() => navigate('ProcessorScreen')}
          title="Nie"
          color='#ff0000'
        />
      </ScrollView>
    );
  }
}

class ProcessorScreen extends React.Component {
  static navigationOptions = {
    title: "Procesor"
  };
  render () {
    const {navigate} = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          margin: 15,
        }}>
        <Text>Czy na ekranie pojawia się komunikat UNSUPPORTED PROCESSOR,
        0x0000005D?</Text>
        <Button
            onPress={() => navigate('UnsupportedCPUScreen')}
            title="Tak"
        />
      </View>
    );
  }
}

class UnsupportedCPUScreen extends React.Component {
  static navigationOptions = {
    title: "Niewspierany procesor"
  };
  render () {
    const {navigate} = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          margin: 15,
        }}>
        <Text>Procesor, którego używasz, nie jest wspierany przez ten system
        Windows</Text>
        <Button
          title="Początek"
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

class ErrorScreen extends React.Component {
  static navigationOptions = {
    title: "Ekran błędu"
  };
  render (){
    const { navigate } = this.props.navigation;
    return (
      <ScrollView
       style={{
        flex: 1,
        margin: 15,
      }} >
        <Text>Czy po zalogowaniu, na ekranie pojawia się błąd?</Text>
        <ScrollView horizontal>
        <Image
          source={require('./img/cryptowall.png')}
        />
        </ScrollView>
        <Text>Jeżeli nie, to czy na ekranie pojawia się informacja
        o szyfrowaniu danych?</Text>
        <Button
          onPress={() => navigate('CryptoScreen')}
          title="Tak"
        />
      </ScrollView>
    );
  }
}

class CryptoScreen extends React.Component {
    static navigationOptions = {
      title: "CryptoWall"
    };
    render () {
        const { navigate } = this.props.navigation;
        return (
          <View
          style={{
            flex: 1,
            margin: 15,
          }} >
            <Text>Twój system zainfekowany jest przez wirus CryptoWall.
            Skontaktuj się z administratorem w celu usunięcia go.</Text>
            <Button
                title="Początek"
                onPress={() => navigate('Home')}
            />
          </View>
        );
    }
}

class SerwisScreen extends React.Component {
  static navigationOptions = {
    title: 'Serwis komputera'
  };
  render () {
    const { navigate } = this.props.navigation;
    return (
      <View
      style={{
        flex: 1,
        margin: 15,
      }}>
        <Text>Czy w ostatnim czasie komputer był serwisowany, lub jakakolwiek
        część komputera była wymieniana?</Text>
        <Button
          onPress={() => navigate('ZasilanieScreen')}
          title="Nie"
          color='#ff0000'
        />
      </View>
    );
  }
}

class ZasilanieScreen extends React.Component {
  static navigationOptions = {
    title: "Zasilanie"
  };
  render () {
    const {navigate} = this.props.navigation;
    return(
      <View
        style={{
          flex: 1,
          margin: 15,
        }}>
        <Text>Czy komputer podłączony jest do prądu?</Text>
        <Button
            onPress={() => navigate('HalasScreen')}
            title="Tak"
        />
        <Button
          onPress={() => navigate('PodlaczScreen')}
          title="Nie"
          color='#ff0000'
        />
      </View>
    );
  }
}

class PodlaczScreen extends React.Component {
  static navigationOptions = {
    title: "Zasilanie"
  };
  render () {
    const {navigate} = this.props.navigation;
    return(
      <View
        style={{
          flex: 1,
          margin: 15,
      }}>
        <Text>Podłącz komputer do prądu</Text>
        <Button
          title="Początek"
          onPress={() => navigate('Home')}
        />
      </View>
    );
  }
}

class HalasScreen extends React.Component {
  static navigationOptions = {
    title: "Dźwięki"
  };
  render () {
    const {navigate} = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          margin: 15,
        }}>
        <Text>Czy komputer wydaje z siebie jakiekolwiek dźwięki, na przykład
        dźwięk wiatraka?</Text>
        <Button
            onPress={() => navigate('MonitorScreen')}
            title="Tak"
        />
      </View>
    );
  }
}

class MonitorScreen extends React.Component {
  static navigationOptions = {
    title: "Problem z monitorem"
  };
  render () {
    const {navigate} = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          margin: 15,
        }}>
      <Text>Upewnij się, że komputer jest poprawnie połączony z monitorem.</Text>
      <Button
        title="Początek"
        onPress={() => navigate('Home')}
      />
      </View>
    );
  }
}

const SimpleApp = StackNavigator({
  Home: { screen: HomeScreen },
  Pytanie: { screen: PytanieScreen },
  LoginScreen: { screen: LoginScreen },
  ErrorScreen: { screen: ErrorScreen },
  CryptoScreen: { screen: CryptoScreen },
  SerwisScreen: { screen: SerwisScreen },
  ZasilanieScreen: { screen: ZasilanieScreen },
  PodlaczScreen: { screen: PodlaczScreen },
  HalasScreen: { screen: HalasScreen },
  MonitorScreen: { screen: MonitorScreen },
  TerminalScreen: { screen: TerminalScreen },
  ProcessorScreen: { screen: ProcessorScreen },
  UnsupportedCPUScreen: { screen: UnsupportedCPUScreen },
});

AppRegistry.registerComponent('SimpleApp', () => SimpleApp);
