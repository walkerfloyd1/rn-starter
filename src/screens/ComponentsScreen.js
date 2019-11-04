import React from 'react';
import { Text, Stylesheet } from 'react-native';

const ComponentsScreen = () => {
    return <Text 
    style={styles.textStyle}>
        Hello, you are on the components screen
    </Text>;
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30
    }
});

export default ComponentsScreen;