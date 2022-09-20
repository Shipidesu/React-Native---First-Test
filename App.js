import * as React from 'react';
import { Button, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
      <Button
        title="Go to Agende"
        onPress={() => navigation.navigate('Agende')}
      />
      <Button
        title="Go to Pensao"
        onPress={() => navigation.navigate('Pensao')}
      />
      <Button
        title="Go to Pericia"
        onPress={() => navigation.navigate('Pericia')}
      />
      <Button
        title="Go to Recadastramento"
        onPress={() => navigation.navigate('Recadastramento')}
        />
      </View>
  );
}

function AgendeScreen ({ navigation }) {
  return (
    <Text> Hi! </Text>
  );
}

function PensaoScreen ({ navigation }) {
  return (
    <View style={{alignItems: 'center', flex: 1, }}>
    <Text> Hi! </Text>
    </View>
  );
}

function PericiaScreen({ navigation }) {
  return (
      <Text> Hi! </Text>
  );
}

function RecadastramentoScreen({ navigation }) {
  return (
    <Text> Hi! </Text>
  );
}


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="" component={Root} options={{ headerShown: false }}  />
      <Stack.Screen name="Home" component={HomeScreen}   />
      <Stack.Screen name="Agende" component={AgendeScreen} />
      <Stack.Screen name="Pensao" component={PensaoScreen} />
      <Stack.Screen name="Pericia" component={PericiaScreen} />
      <Stack.Screen name="Recadastramento" component={RecadastramentoScreen} />
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function Root() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}
