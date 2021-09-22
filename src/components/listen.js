import React, { useState, useContext } from 'react';
import 'antd/dist/antd.css';
import { Card, Button } from 'antd';

const themes = { 
    light:{
        id: 1,
        foreground: '#A52A2A',
        background: "#ba9772",
    },
    dark:{
        id: 2,
        foreground: "#FF7F50",
        background: "#6f7549",
    },
};

const ThemeContext = React.createContext(themes.light);

export default function ContextUse(){
    const [theme, setTheme] = useState(themes.dark);
    const changeTheme = () =>{
        if (theme.id === themes.light.id){
            setTheme(themes.dark);
        }
        else{
            setTheme(themes.light);
        }
    };
    return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
        <div style={{ background: theme.background, color: theme.foreground, textAlign:'center', fontFamily:'Roboto', fontSize:'24px', height:'83vh'}}>
            <Card style={{display:'inline-block', margin:'30px', background:'#F5F5F5', boxShadow:'0px 2px 2px', borderRadius:'5%'}}>
            <img style={{maxWidth:'200px', border:'solid #696969', borderRadius:'100%', margin:'2px', boxShadow:'1px 1px 1px'}} src='https://res.cloudinary.com/dn7ckecqn/image/upload/v1631891096/bahan/eunji_oa3xvo.jpg'></img>
                    <p style={{margin:'2px'}}>Azzah Afifah Veronica</p>
                    <p style={{margin:'2px'}}>21120118130049</p>
            </Card>
            <Card style={{display:'inline-block', margin:'30px', background:'#F5F5F5', boxShadow:'0px 2px 2px', borderRadius:'5%'}}>
            <img style={{maxWidth:'200px', border:'solid #696969', borderRadius:'100%', margin:'2px', boxShadow:'1px 1px 1px'}} src='https://res.cloudinary.com/dn7ckecqn/image/upload/v1631890691/bahan/caerel_q4sdp0.jpg'></img>
                    <p style={{margin:'2px'}}>Caerel Steven</p>
                    <p style={{margin:'2px'}}>21120118140090</p>
            </Card>
        <div>
            <ThemedButton />
        </div>
        </div>
    </ThemeContext.Provider>
    );
}

function ThemedButton() {
    const { theme, changeTheme } = useContext(ThemeContext);
    return (
    <Button style={{ background: theme.background,
        color:theme.foreground }}
        onClick={changeTheme}>
            CHANGE THEME
    </Button>
    );
}