import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
    
    useEffect(() => {
        SplashScreen.hideAsync();
    }, []);

    return (
        <>
            <StatusBar style="dark" backgroundColor="#f5f5f5" translucent />
            <Stack
                screenOptions={{
                    animation: 'none',
                    headerShown: false, 
                    contentStyle: { 
                        flex: 1, 
                        backgroundColor: '#f5f5f5'
                    }
                }}
            >
                <Stack.Screen name="views/draws/draws" />
                <Stack.Screen name="views/numbers/numbers" />
                <Stack.Screen name="views/generator/generator" />
                <Stack.Screen name="views/informations/informations" />
            </Stack>
        </>
    );
}