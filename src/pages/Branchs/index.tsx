import React, { useEffect, useState } from 'react';
import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Filial } from '../../server/models';
import Branch from '../../components/Branch';
import styles from './styles';
import { ListRenderItem } from 'react-native';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Controller } from 'react-hook-form';

const schema = yup.object().shape({
  nome: yup.string().required('Campo Nome obrigatório'),
});

type FormData = {
  nome: string;
};

function Branchs() {
  const [branchs, setBranchs] = useState<Filial[]>([]);
  const [refresh, setRefresh] = useState(false);
  const [newBranch, setNewBranch] = useState(false);

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
      funcionarios: []
    }
    fetch(`/api/filiais`, { method: 'POST', body: JSON.stringify(object)});
    setRefresh(!refresh);
    setNewBranch(false);
  }

  const renderItem: ListRenderItem<Filial> = ({ item }) => (
    <Branch
      id={item.id}
      nome={item.nome}
      funcionarios={item.funcionarios}
      refresh={() => setRefresh(!refresh)}
    />
  );

  useEffect(() => {
    fetch(`/api/filiais`)
      .then(res => res.json())
      .then(json => setBranchs(json.filials))
  }, [refresh])

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setNewBranch(true)}
        >
          <Text style={styles.textButton}>Criar Filial</Text>
        </TouchableOpacity>
        <FlatList data={branchs} renderItem={renderItem} keyExtractor={item => item.id} style={styles.list} />
      </View>

      {newBranch &&
        <View style={styles.modalBackground}>
          <View style={styles.modal}>
            <Text style={styles.textModal}>Nova filial</Text>

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
                    placeholder='Nome da filial'
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
                onPress={() => setNewBranch(false)}
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

export default Branchs;