import * as React from 'react';
import { List } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';


 const MyComponent  = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);
  const navigation = useNavigation(); 
  return (
    <List.Section title="Conteudos">
      <List.Accordion
        title="Videos"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item onPress={() => navigation.navigate("TelaIntroducao")} title="Videoaula 1" />
        <List.Item onPress={() => navigation.navigate("home")} title="Videoaula 2" />
      </List.Accordion>

      <List.Accordion
        title="Textos"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item onPress={() => navigation.navigate("Conteudo")} title="Aula 1" />
        <List.Item title="Aula 2" />
      </List.Accordion>

      <List.Accordion
        title="Atividades"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Atividade 1" />
        <List.Item title="Atividade 2" />
      </List.Accordion>
    </List.Section>
  );
};

export default MyComponent;
