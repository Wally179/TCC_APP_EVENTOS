import * as React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Login from '../../pages/Cadastro/Login/login';
import Caduser from '../../pages/Cadastro/CadUser/caduser';
import CadForn from '../../pages/Cadastro/CadForn/cadforn';
import EsqSenha from '../../pages/Cadastro/EsqSenha/esqsenha';
import Splash from '../../pages/Cadastro/Load';
import Init from '../../pages/User/Init';
import TelaInicial from '../../pages/Cadastro/Inicio/inicio';
import Detalhes from '../../pages/User/Detalhes';
import Catalogo from '../../pages/User/Catalogo';
import Forn from '../../pages/Forn/Inicial';
import DetalhesForn from '../../pages/Forn/Detalhes';
import AceitarDetalhes from '../../pages/Forn/AceitarDetalhes';
import MenuUser from '../../components/MenuUser';


const { Navigator, Screen} = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawersUser(){
    return(
        <Drawer.Navigator screenOptions={{headerShown: false}} drawerContent={(props) => <MenuUser { ...props}/>}>
            <Drawer.Screen name="InicialUser" component={Init}/>
            <Drawer.Screen name="Detalhes" component={Detalhes}/>
            <Drawer.Screen name="Catalogo" component={Catalogo}/>
        </Drawer.Navigator>
    )
}

export default function(){
    return(
        <Navigator initialRouteName='Caduser' screenOptions={{headerShown: false}}>
            <Screen name="Login" component={Login}/>
            <Screen name="Caduser" component={Caduser}/>
            <Screen name="CadForn" component={CadForn}/>
            <Screen name="EsqSenha" component={EsqSenha}/>
            <Screen name="Splash" component={Splash}/>
            <Screen name="Init" component={DrawersUser}/> 
            <Screen name="TelaInicial" component={TelaInicial}/>
            <Screen name="Forn" component={Forn}/>
            <Screen name="DetalhesForn" component={DetalhesForn}/>
            <Screen name="AceitarDetalhes" component={AceitarDetalhes}/>
        </Navigator>
    )
}