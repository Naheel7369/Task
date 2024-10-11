import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ImageBackground,
  Pressable,
  Image,
  Modal,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import PrimaryButton from '../../../../components/primarybutton';
import Title from '../../../../components/Title';
import {SafeAreaView} from 'react-native-safe-area-context';
import fonts from '../../../../android/app/src/main/assets/custom';

const TaskScreen: React.FC = () => {
  const [enterTitle, setEnterTitle] = useState('');
  const [enterDescription, setEnterDescription] = useState('');
  const [enterPriority, setEnterPriority] = useState('');
  const [tasks, setTasks] = useState<
    {id: string; title: string; description: string; priority: string}[]
  >([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [errors, setErrors] = useState<Errors>({});

  function colors(enterPriority) {
    switch (enterPriority) {
      case 'Low':
        return 'green';
        break;
      case 'Medium':
        return 'yellow';
        break;
      case 'High':
        return 'red';
        break;
      default:
        return 'blue'
        break;
    }
  }
  const Validation = (): boolean => {
    const errors: Errors = {};
    if (!enterTitle) {
      errors.enterTitle = 'Enter a Title';
    }
    if (!enterDescription) {
      errors.enterDescription = 'Enter a Description ';
    }
    if (!enterPriority) {
      errors.enterPriority = 'Choose your Priority';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };
  const handlePrioritySelect = (priority: string) => {
    setEnterPriority(priority);
    setModalVisible(false);
  };

  const addTask = () => {
    if (Validation()) {
      if (enterTitle && enterDescription && enterPriority) {
        const newTask = {
          id: Math.random().toString(),
          title: enterTitle,
          description: enterDescription,
          priority: enterPriority,
        };
        setTasks([...tasks, newTask]);
        setEnterTitle('');
        setEnterDescription('');
        setEnterPriority('');
      }
    }
  };

  return (
    <View style={{flex: 1}}>
      <ImageBackground
        source={require('../../images/image.jpg')}
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
        resizeMode="cover">
        <SafeAreaView style={{flex: 1}}>
          <View style={styles.container}>
            <View>
              <Title>Enter Your Task</Title>
            </View>

            <Text style={styles.Textinput}>Title</Text>
            <TextInput
              style={styles.Feilds}
              placeholder="Enter Title"
              value={enterTitle}
              onChangeText={setEnterTitle}
            />
            {errors.enterTitle && (
              <Text style={styles.error}>{errors.enterTitle}</Text>
            )}

            <Text style={styles.Textinput}>Description</Text>
            <TextInput
              style={styles.Feilds}
              placeholder="Enter Description "
              value={enterDescription}
              onChangeText={setEnterDescription}
            />
            {errors.enterDescription && (
              <Text style={styles.error}>{errors.enterDescription}</Text>
            )}

            <Text style={styles.Textinput}>Priority</Text>
            <Pressable
              style={styles.Fields}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.buttonText}>
                {enterPriority ? enterPriority : 'Select Priority'}
              </Text>
            </Pressable>
            {errors.enterPriority && (
              <Text style={styles.error}>{errors.enterPriority}</Text>
            )}

            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}>
              <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                  <Text style={styles.textModal}>Select Your Priority</Text>
                  <TouchableOpacity
                    style={[styles.priorityButton, {backgroundColor: 'red'}]}
                    onPress={() => handlePrioritySelect('High')}>
                    <Text style={styles.buttonText}>High Priority</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.priorityButton, {backgroundColor: 'yellow'}]}
                    onPress={() => handlePrioritySelect('Medium')}>
                    <Text style={styles.buttonText}>Medium Priority</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.priorityButton, {backgroundColor: 'green'}]}
                    onPress={() => handlePrioritySelect('Low')}>
                    <Text style={styles.buttonText}>Low Priority</Text>
                  </TouchableOpacity>
                  <Pressable
                    style={styles.option}
                    onPress={() => {
                      setModalVisible(false);
                    }}>
                    <Image
                      style={styles.images}
                      source={require('../../images/cross.png')}></Image>
                  </Pressable>
                </View>
              </View>
            </Modal>

            <View
              style={{
                marginTop: 20,
                width: 150,
                height: 100,
                alignSelf: 'center',
              }}>
              <PrimaryButton onPress={addTask}>Add Task</PrimaryButton>
            </View>
            <FlatList
              data={tasks}
              renderItem={({item}) => (
                <View style={[styles.taskItem , {backgroundColor: colors(item.priority)}]}>
                  <Text style={styles.taskText}>Title: {item.title}</Text>
                  <Text style={styles.taskText}>Description: {item.description}</Text>
                  <Text style={styles.taskText}>Priority: {item.priority}</Text>
                </View>
              )}
              keyExtractor={item => item.id}
            />
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export default TaskScreen;

const styles = StyleSheet.create({
  container: {
    margin: 10,
    marginVertical: 40,
    flex: 1,
  },
  Feilds: {
    margin: 6,
    borderWidth: 3,
    borderRadius: 4,
    borderColor: 'black',
    padding: 10,
    marginLeft: '2.5%',
    color: 'black',
    fontFamily: fonts.GupterBold,
    fontSize: 18,
  },
  Textinput: {
    margin: 8,
    fontWeight: '500',
    fontFamily: fonts.GupterBold,
    fontSize: 18,
    marginLeft: '2.5%',
    color: 'black',
  },
  rootScreen: {
    flex: 1,
  },
  error: {
    color: 'red',
  },
  backgroundImage: {
    opacity: 0.5,
  },
  style: {
    margin: 6,
    borderWidth: 3,
    borderRadius: 4,
    borderColor: 'black',
    padding: 10,
    marginLeft: '2.5%',
    color: 'black',
    fontFamily: fonts.GupterBold,
    fontSize: 18,
  },
  taskItem: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 2,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: 'black',
  },
  taskText: {
    fontFamily: fonts.GupterBold,
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: 300,
    padding: 20,
    backgroundColor: '#b3afaf',
    borderRadius: 10,
  },
  textModal: {
    fontFamily: fonts.GupterBold,
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttons: {
    marginVertical: 10,
    padding: 10,
    // backgroundColor: '#2196F3',
    borderRadius: 5,
  },
  buttonText: {
    fontFamily: fonts.GupterBold,
    fontSize: 18,
    color: 'black',
  },
  Fields: {
    margin: 6,
    borderWidth: 3,
    borderRadius: 4,
    borderColor: 'black',
    padding: 10,
    marginLeft: '2.5%',
    color: 'black',
    fontFamily: fonts.GupterBold,
    fontSize: 18,
  },
  priorityButton: {
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
  },
  images: {
    height: 25,
    width: 25,
    // marginTop:15,
  },
  option: {
    width: 30,
    height: 30,
    alignSelf: 'center',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 2,
    paddingTop: 1,
  },
});
