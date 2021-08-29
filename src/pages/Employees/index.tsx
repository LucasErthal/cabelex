import React, { useEffect, useState } from 'react';
import { FlatList, Route, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Filial, Funcionario } from '../../server/models';
import Branch from '../../components/Branch';
import styles from './styles';
import { ListRenderItem } from 'react-native';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';
import Employee from '../../components/Employee';

const schema = yup.object().shape({
  nome: yup.string().required('Campo Nome obrigatório'),
});

type FormData = {
  nome: string;
};

function Employees(props:Route) {
  const filial = props.route.params.nome;
  const [employees, setEmployees] = useState<Funcionario[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [newEmployee, setNewEmployee] = useState(false);

  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    const object = {
      nome: data.nome,
      filial
    }

    let id: string;

    const ReturnId = () => {
      fetch(`/api/funcionarios/nome/${data.nome}`)
      .then(res => res.json())
      .then(json => id = json.funcionarios[0].id)
      .then(() => console.warn(id))
    }

    const UpdateBranch = () => {
      fetch(`/api/filiais/nome/${filial}`, { method: "PATCH", body: JSON.stringify({ funcionarios: [id] }) })
    }
    
    fetch(`/api/funcionarios`, { method: 'POST', body: JSON.stringify(object)})
    .then(() => ReturnId())
    .then(() => UpdateBranch());
    setRefresh(!refresh);
    setNewEmployee(false);
  }

  const renderItem: ListRenderItem<Funcionario> = ({ item }) => (
    <Employee
      id={item.id}
      nome={item.nome}
      filial={item.filial}
      refresh={() => setRefresh(!refresh)}
    />
  );

  useEffect(() => {
    fetch(`/api/funcionarios/${filial}`)
      .then(res => res.json())
      .then(json => setEmployees(json.funcionarios))
  }, [refresh])

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setNewEmployee(true)}
        >
          <Text style={styles.textButton}>Criar Funcionário</Text>
        </TouchableOpacity>
        <FlatList data={employees} renderItem={renderItem} keyExtractor={item => item.id} style={styles.list} />
      </View>

      {newEmployee &&
        <View style={styles.modalBackground}>
          <View style={styles.modal}>
            <Text style={styles.textModal}>Novo funcionário</Text>

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
                    placeholder='Nome do funcionário'
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
                onPress={() => setNewEmployee(false)}
              >
                <Text style={[styles.buttonModalText, {color: 'red'}]}>Cancelar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      }
    </>
  );
}

export default Employees;