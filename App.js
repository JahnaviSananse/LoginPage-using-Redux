import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  StatusBar,
  Button,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { setEmail, setPass, submit } from './redux_login/login_auth/login_auth.actions';
import { connect } from 'react-redux';

const App = ({ setEmail, setPass, submit, email_id, password, list }) => {
  
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>

        <Text>yash sanghavi</Text>
        <Text>email-id</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setEmail(text)}
          value={email_id}
        />
        <Text>password</Text>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => setPass(text)}
          value={password}
        />
        <Button
          onPress={(e)=>submit(email_id,password)}
          // onPress={(e)=>alert(list.email)}
          title="LOG IN"
          color="#841584"
        />
        
        {/* <Text>{email_id}</Text> */}
        {

        alert(list.email),
          // buttonsListArr = list.map(item => (
          //  console.log(item)
          // ))
          console.log(list)     
           }

{/* {
  list.forEach(element => {
    <Text> 
          email_id,
          password
      </Text>
  })
} */}
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
});

const mapStateToProps = (state) => ({
  email_id: state.login.email_id,
  password: state.login.password,
  list: state.login.list,
})

const mapDispatchToProps = dispatch => ({
  setEmail: (email) => dispatch(setEmail(email)),
  setPass: (pass) => dispatch(setPass(pass)),
  submit: (email, pass) => dispatch(submit({ email, pass }))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
