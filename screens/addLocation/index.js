import React, { Component } from "react";

import {
    Text, View, Image, TouchableOpacity, Animated, StyleSheet, ScrollView,
    TextInput, Button
} from 'react-native';
import { Navigation } from 'react-native-navigation'
import metrics from "../../functions/metrics";
import Modal from "react-native-modal";
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import ImagePicker from 'react-native-image-picker';
import { Formik } from 'formik';
import * as Yup from 'yup'

import User from '../../functions/User'
const validationSchema = Yup.object().shape({
    name: Yup.string()
        .label('name')
        .required('Lütfen bu alanı doldurunuz.')
        .min(5, 'En az 5 karakter giriniz.'),
    description: Yup.string()
        .label('description')
        .required('Lütfen bu alanı doldurunuz.')
        .min(20, 'En az 20 karakter giriniz.')
    ,
    country: Yup.string()
        .label('country')
        .required('Lütfen Ülke giriniz.')
    ,
    city: Yup.string()
        .label('city')
        .required('Lütfen şehri giriniz.')
    ,
    town: Yup.string()
        .label('town')
        .required('Lütfen ilçeyi giriniz.'),

    address: Yup.string()
        .label('address')
        .required('Lütfen Adres giriniz.')
})

const options = {
    title: 'Select Avatar',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
export default class DetailScreen extends Component {
    constructor(props) {
        super()
        this.state = {
            isModalVisible: false,
            avatarSource: null
        };


    }
    uploadServer(uri, values) {
        if (uri) {
            
            const data = new FormData();
            var keys = Object.keys(values);
            keys.forEach(element => {
             console.warn(element);
             
                
                data.append(element, values[element]);
            });
            data.append('fileData', {
                uri:uri.uri,
                type: 'image/jpeg',
                name: `photo-${Date.now() + Math.random() * 10000}.jpg`
            });
            const config = {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'multipart/form-data',
                    'authorization': User.getCurrentUser().token
                },
                body: data,
            };
            console.warn(data);

            fetch(`${metrics.URL}/upload/image`, config)
                .then((res) => {
                    console.warn('yükledi');

                }).catch((err) => { console.log(err) });

        } else {
            alert('Fotograf Seçilmedi')
        }
    }
    uploadImage() {
        ImagePicker.showImagePicker(options, (response) => {

            if (response.didCancel) {
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }



    render() {
        return (
            <View style={{
                flex: 1,
                justifyContent: 'flex-start',
            }}>

                <ScrollView style={{ flex: 1 }}>
                    <View style={{ width: '100%', height: '10%', justifyContent: 'center', backgroundColor: 'whitesmoke' }}>
                        <TouchableOpacity onPress={() => { Navigation.dismissAllModals() }}>
                            <AntDesign style={{ alignSelf: 'flex-start', marginLeft: 20 }} name="close" size={28} />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress={() => { this.uploadImage() }}>

                        <View style={{ height: metrics.DEVICE_HEIGHT * 0.25, width: metrics.DEVICE_WIDTH * 0.5, backgroundColor: 'white', alignSelf: 'center', borderRadius: 25, justifyContent: 'center' }}>
                            {this.state.avatarSource ?
                                (
                                    <Image style={{ height: 150, width: 150, alignSelf: 'center' }} source={this.state.avatarSource}></Image>
                                ) : (
                                    <Image style={{ height: 150, width: 150, alignSelf: 'center' }} source={require('../addLocation/upload.png')}></Image>
                                )
                            }

                        </View>
                    </TouchableOpacity>
                    <Formik
                        initialValues={{ name: '', description: '', city: '', town: '', address: '',country:'' }}
                        onSubmit={values => this.uploadServer(this.state.avatarSource, values)}

                        validationSchema={validationSchema}
                    >
                        {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
                            <View>
                                <TextInput onChangeText={handleChange('name')} onBlur={handleBlur('name')} value={values.name} placeholder="Kamp Alanının Adı..." placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                                <Text style={{ color: 'red', alignSelf: 'center' }}>{errors.name}</Text>

                                <TextInput onChangeText={handleChange('description')} onBlur={handleBlur('description')} value={values.description} placeholder="Açıklama" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                                <Text style={{ color: 'red', alignSelf: 'center' }}>{errors.description}</Text>


                                <TextInput onChangeText={handleChange('country')} onBlur={handleBlur('country')} value={values.country} placeholder="Ülke" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                                <Text style={{ color: 'red', alignSelf: 'center' }}>{errors.country}</Text>

                                <TextInput onChangeText={handleChange('city')} onBlur={handleBlur('city')} value={values.city} placeholder="Şehir" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                                <Text style={{ color: 'red', alignSelf: 'center' }}>{errors.city}</Text>

                                <TextInput onChangeText={handleChange('town')} onBlur={handleBlur('town')} value={values.town} placeholder="İlçe" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                                <Text style={{ color: 'red', alignSelf: 'center' }}>{errors.town}</Text>

                                <TextInput onChangeText={handleChange('address')} onBlur={handleBlur('address')} value={values.address} placeholder="Adres" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} />
                                <Text style={{ color: 'red', alignSelf: 'center' }}>{errors.address}</Text>
                                <TouchableOpacity onPress={handleSubmit}>
                                    <View style={{ width: metrics.DEVICE_WIDTH, height: metrics.DEVICE_HEIGHT * 0.1, backgroundColor: 'red' }}>

                                    </View>
                                </TouchableOpacity>



                            </View>
                        )}
                    </Formik>




                </ScrollView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    loginFormTextInput: {

        height: 43,
        fontSize: 14,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#eaeaea',
        backgroundColor: '#fafafa',
        paddingLeft: 10,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 5,


    },

});
