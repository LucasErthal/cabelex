import React from 'react';
import { ActivityIndicator, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import useAuth from '../../contexts/auth';
import * as yup from 'yup';
import styles from './styles';
import { useState } from 'react';

const schema = yup.object().shape({
  login: yup.string().required('Campo Login obrigatório'),
  password: yup.string().required('Campo Senha obrigatório')
});

type FormData = {
  login: string
  password: string
};

function Login() {
  const { logIn } = useAuth();
  const [waiting, setWaiting] = useState(false);
  const [isWrongUser, setIsWrongUser] = useState(false);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setWaiting(true);
    const a = await logIn(data.login, data.password);
    if(a == false) {
      setIsWrongUser(!a);
      setWaiting(false);
    }
  }

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>Cabelex</Text>

        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="login"
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder='Login'
              />
            )}
          />
          {errors.login && <Text style={styles.error}>{errors.login.message}</Text>}
          <Controller
            control={control}
            name="password"
            defaultValue=""
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder='Senha'
              />
            )}
          />
          {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}
          <TouchableOpacity
            style={styles.button}
            onPress={handleSubmit(onSubmit)}
          >
            {!waiting &&
              <Text style={styles.textButton}>Entrar</Text>
            }

            {waiting &&
              <ActivityIndicator color='#E9E9E9' size='large' />
            }
          </TouchableOpacity>
        </View>

      </View>
      {isWrongUser &&
        <View style={styles.modalBackground}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>Login e/ou senha incorretos</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={ () => setIsWrongUser(false)}
            >
              <Text style={styles.textButton}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      }
    </>
  );
}

export default Login;