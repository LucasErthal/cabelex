import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const schema = yup.object().shape({
  nome: yup.string().required('Campo Nome obrigatório'),
});

interface EmployeeProps {
  id: string;
  nome: string;
  filial: string;
  refresh(): void;
}

type FormData = {
  nome: string;
};

const Employee: React.FC<EmployeeProps> = ({ id, nome, filial, refresh }) => {
  const [isEdit, setIsEdit] = useState(false);
  const { navigate }:any = useNavigation();

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    Update(data.nome)
  }

  const Delete = () => {
    fetch(`/api/funcionarios/${id}`, { method: 'DELETE' })
      .then(() => refresh())
  }

  const Update = (nome: string) => {
    fetch(`/api/funcionarios/${id}`, { method: "PATCH", body: JSON.stringify({ nome }) })
      .then(() => refresh())
      .then( () => setIsEdit(false))
  }

  return (
    <>
      <View style={styles.container}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{nome}</Text>
          <Text>ID: {id}</Text>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setIsEdit(true)}
          >
            <Text style={styles.buttonText}>Editar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { borderRightWidth: 0 }]}
            onPress={Delete}
          >
            <Text style={[styles.buttonText, { color: 'red' }]}>Excluir</Text>
          </TouchableOpacity>
        </View>

        {isEdit &&
          <View style={styles.modal}>
            <Text style={styles.textModal}>Editar</Text>
            <View style={styles.inputContainer}>
              <Controller
                control={control}
                name="nome"
                defaultValue=""
                render={({ field: { onChange, onBlur, value } }) => (
                  <TextInput
                    style={styles.input}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder='Nome do funcionario'
                  />
                )}
              />
              {errors.nome && <Text style={styles.error}>{errors.nome.message}</Text>}
            </View>

            <View style={styles.buttonsContainer}>
              <TouchableOpacity
                style={styles.buttonModal}
                onPress={handleSubmit(onSubmit)}
              >
                <Text style={styles.buttonModalText}>Confirmar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.buttonModal}
                onPress={() => setIsEdit(false)}
              >
                <Text style={[styles.buttonModalText, { color: 'red' }]}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      </View>
    </>
  );
};

export default Employee;