import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Login from '../../pages/Cadastro/Login/login';
import Caduser from '../../pages/Cadastro/CadUser/caduser';
import CadForn from '../../pages/Cadastro/CadForn/cadforn';
import EsqSenha from '../../pages/Cadastro/EsqSenha/esqsenha';
import Splash from '../../pages/Cadastro/Load';
import Init from '../../pages/User/Init';
import TelaInicial from '../../pages/Cadastro/Inicio/inicio';
import Detalhes from '../../pages/User/Detalhes';
import Catalogo from '../../pages/User/Catalogo';

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
            <Screen name="TelaInicial" component={TelaInicial}/>
            <Screen name="Detalhes" component={Detalhes}/>
            <Screen name="Catalogo" component={Catalogo}/>
        </Navigator>
    )
}