import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from '../../pages/Login/login';
import Caduser from '../../pages/CadUser/caduser';
import CadForn from '../../pages/CadForn/cadforn';
import EsqSenha from '../../pages/EsqSenha/esqsenha';
import Splash from '../../pages/Load';
import Init from '../../pages/Init';
const { Navigator, Screen} = createNativeStackNavigator()

export default function(){
    return(
        <Navigator initialRouteName='Init' screenOptions={{headerShown: false}}>
            <Screen name="Login" component={Login}/>
            <Screen name="Caduser" component={Caduser}/>
            <Screen name="CadForn" component={CadForn}/>
            <Screen name="EsqSenha" component={EsqSenha}/>
            <Screen name="Splash" component={Splash}/>
            <Screen name="Init" component={Init}/>
        </Navigator>
    )
}