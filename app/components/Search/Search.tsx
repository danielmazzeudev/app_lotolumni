import { CloudDownload, RefreshCcw, SearchIcon, XCircle } from 'lucide-react-native';
import { useEffect, useRef, useState } from 'react';
import { Alert, Animated, Easing, Linking, Platform, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './Search.styles';

interface SearchProps {
    value: string;
    onChangeText: (text: string) => void;
    placeholder?: string;
    onPress: () => void;
    isLoading: boolean;
}

export default function Search({ value, onChangeText, placeholder, onPress, isLoading }: SearchProps) {
    const [needsUpdate, setNeedsUpdate] = useState(false);
    
    const spinValue = useRef(new Animated.Value(0)).current;
    const pulseAnim = useRef(new Animated.Value(1)).current;
    const version = '2.0.0';

    useEffect(() => {
        let isMounted = true;
        const checkVersion = async () => {
            try {
                const response = await fetch('https://lotofacil.danielmazzeu.com.br/version');
                const data = await response.json();

                if (isMounted && data.version !== version) {
                    setNeedsUpdate(true);
                }
            } catch (error) {
                console.log("Não foi possível verificar atualizações.");
            }
        };

        checkVersion();
        return () => { isMounted = false; };
    }, []);

    useEffect(() => {
        const spinAnimation = Animated.loop(
            Animated.timing(spinValue, { 
                toValue: 1, 
                duration: 700, 
                easing: Easing.linear, 
                useNativeDriver: true 
            })
        );

        if (isLoading) {
            spinAnimation.start();
        } else {
            spinAnimation.stop();
            Animated.timing(spinValue, { 
                toValue: 0, 
                duration: 300, 
                useNativeDriver: true 
            }).start();
        }

        return () => spinAnimation.stop();
    }, [isLoading]);

    useEffect(() => {
        let pulseAnimation: Animated.CompositeAnimation | null = null;

        if (needsUpdate) {
            pulseAnimation = Animated.loop(
                Animated.sequence([
                    Animated.timing(pulseAnim, { toValue: 1.2, duration: 800, useNativeDriver: true }),
                    Animated.timing(pulseAnim, { toValue: 1, duration: 800, useNativeDriver: true }),
                ])
            );
            pulseAnimation.start();
        }

        return () => pulseAnimation?.stop();
    }, [needsUpdate]);

    const handleClear = () => {
        onChangeText('');
    };

    const handleUpdatePress = () => {
        const appId = 'br.danielmazzeu.lotolumni';
        const url = Platform.OS === 'android' 
            ? `market://details?id=${appId}` 
            : `https://apps.apple.com/app/id${appId}`;

        Alert.alert(
            "Atualização Disponível", 
            "Existe uma nova versão disponível. Deseja atualizar agora?",
            [
                { text: "Depois", style: "cancel" },
                { 
                    text: "Atualizar", 
                    onPress: () => {
                        Linking.openURL(url).catch(() => {
                            Linking.openURL(`https://play.google.com/store/apps/details?id=${appId}`);
                        });
                    } 
                }
            ]
        );
    };

    const spin = spinValue.interpolate({ 
        inputRange: [0, 1], 
        outputRange: ['0deg', '360deg'] 
    });

    return (
        <View style={styles.search}>
            <SearchIcon 
                size={18} 
                color={value.length > 0 ? "#943391" : "#999"} 
                style={styles.icon} 
            />
            
            <TextInput 
                value={value} 
                // AJUSTE AQUI: O trim() remove espaços que o teclado numérico às vezes insere
                onChangeText={(text) => onChangeText(text.trim())} 
                placeholder={placeholder} 
                placeholderTextColor="#999"
                keyboardType="numeric" 
                style={styles.input}
                returnKeyType="search"
                onSubmitEditing={onPress}
                autoCorrect={false}
            />
            
            {value.length > 0 && (
                <TouchableOpacity 
                    onPress={handleClear} 
                    style={styles.button}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <XCircle size={18} color="#999" />
                </TouchableOpacity>
            )}

            <TouchableOpacity 
                onPress={onPress} 
                style={styles.button} 
                disabled={isLoading}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
                <Animated.View style={{ transform: [{ rotate: spin }] }}>
                    <RefreshCcw size={18} color={isLoading ? "#943391" : "#999"} />
                </Animated.View>
            </TouchableOpacity>

            {needsUpdate && (
                <TouchableOpacity 
                    onPress={handleUpdatePress} 
                    style={styles.button}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <Animated.View style={{ transform: [{ scale: pulseAnim }] }}>
                        <CloudDownload size={18} color="#fc9d03" />
                    </Animated.View>
                </TouchableOpacity>
            )}
        </View>
    );
}