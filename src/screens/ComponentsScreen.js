import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const greeting = <Text>
        Hello to you!
    </Text>;

    return <View>
                <Text 
                style={styles.textStyle}>
                Hello, you are on the components screen
                </Text>
                {greeting}
            </View>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;