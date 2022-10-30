import * as React from 'react';
import { List } from 'react-native-paper';
 
 const MyComponent  = () => {
  const [expanded, setExpanded] = React.useState(true);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section title="Conteudos">
      <List.Accordion
        title="Videos"
        left={props => <List.Icon {...props} icon="folder" />}>
        <List.Item title="Videoaula 1" />
        <List.Item title="Videoaula 2" />
      </List.Accordion>

      <List.Accordion
        title="Textos"
        left={props => <List.Icon {...props} icon="folder" />}
        expanded={expanded}
        onPress={handlePress}>
        <List.Item title="Aula 1" />
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
