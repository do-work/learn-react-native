import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, View, Image} from 'react-native';

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {text: '',};
    }


    render() {
        return (
            <View style={{padding: 10}}>
                <Text style={{textAlign: 'center', fontSize: 30}}>
                    What is your name?
                </Text>
                <TextInput
                    style={{marginTop: 20, textAlign: 'center'}}
                    onChangeText={(text) => this.setState({text})}
                />
                <Text style={{padding: 10, fontSize: 42, textAlign: 'center'}}>
                Hello {this.state.text}
                </Text>
            </View>
        );
    }
}

class Blink extends Component {
    constructor(props) {
        super(props);
        this.state = {isShowingText: true};

        setInterval(() => {
            this.setState(previousState => {
                return {isShowingText: !previousState.isShowingText};
            })
        }, 1000);
    }

    render() {
        let display = this.state.isShowingText ? this.props.text : ' ';
        return (
            <Text style={styles.blinker}>{display}</Text>
        )
    }
}

export default class App extends Component {
    render() {
        let pic = {
            uri: "http://a57.foxnews.com/images.foxnews.com/content/fox-news/lifestyle/2017/11/09/how-to-keep-cat-from-scratching-your-sofa-to-shreds/_jcr_content/par/featured_image/media-0.img.jpg/931/524/1510172827500.jpg?ve=1&tl=1&text=big-top-image"
        };
        return (
            <View style={styles.container}>
                <Greeting/>
                <Image source={pic} style={styles.mainImage}/>
                <Blink text="Please feed me!"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },
    heading: {
        fontSize: 30,
        fontWeight: 'bold',
        paddingBottom: 20,
    },
    blinker: {
        color: 'red',
        paddingTop: 20,
    },
    mainImage: {
        width: 400,
        height: 300,
    }
});
