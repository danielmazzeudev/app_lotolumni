import { Href, Link, usePathname } from 'expo-router';
import { Dices, Hash, Info, Wand2 } from 'lucide-react-native';
import { memo, useMemo } from 'react';
import { Pressable, Text, View } from 'react-native';
import styles from './Nav.styles';

const NavItem = memo(({ href, label, Icon, isActive, isLast }: { 
    href: string; 
    label: string; 
    Icon: any; 
    isActive: boolean;
    isLast: boolean; 
}) => (
    <Link 
        href={href as Href}
        replace  
        style={[
            styles.links, 
            isActive && styles.linksActive,
            !isLast && styles.borderRight
        ]} 
        asChild
    >
        <Pressable>
            <Icon 
                size={18} 
                strokeWidth={isActive ? 2 : 1.5} 
                style={[styles.icons, isActive && styles.iconsActive]} 
            />
            
            <Text 
                style={[styles.labels, isActive && styles.labelsActive]} 
                allowFontScaling={false}
            >
                {label}
            </Text>
        </Pressable>
    </Link>
));

function Nav() {
    const pathname = usePathname();

    const menuItems = useMemo(() => [
        { id: 'draws', href: "/views/draws/draws", label: "Sorteios", icon: Dices },
        { id: 'numbers', href: "/views/numbers/numbers", label: "Dezenas", icon: Hash },
        { id: 'generator', href: "/views/generator/generator", label: "Gerador", icon: Wand2 },
        { id: 'info', href: "/views/informations/informations", label: "Infos", icon: Info },
    ], []);

    const currentPath = useMemo(() => pathname?.replace(/^\/|\/$/g, '') || "", [pathname]);

    return (
        <View style={styles.nav}>
            {menuItems.map((item, index) => {
                const cleanHref = item.href.replace(/^\/|\/$/g, '');
                const isActive = currentPath === cleanHref || (currentPath === "" && item.id === 'draws');
                const isLast = index === menuItems.length - 1;

                return (
                    <NavItem 
                        key={item.id}
                        href={item.href}
                        label={item.label}
                        Icon={item.icon}
                        isActive={isActive}
                        isLast={isLast}
                    />
                );
            })}
        </View>
    );
}

export default memo(Nav);