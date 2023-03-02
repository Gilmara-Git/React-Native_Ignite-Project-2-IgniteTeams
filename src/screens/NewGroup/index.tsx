import { useState } from "react";
import { Alert } from "react-native";
import { Container, GroupIcon, Content } from "./styles";
import { useTheme } from "styled-components/native";
import { groupCreate } from "@storage/group/groupCreate";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootParamList } from "@screens/Groups";

import { Header } from "@components/Header";

import { Button } from "@components/Button";
import { AppError } from "@utils/AppError";
import { Input } from "@components/Input";
import { Highlight } from "@components/Highlight";

type Props = {
  navigation: NativeStackNavigationProp<RootParamList, "new">;
};

export const NewGroup = ({ navigation }: Props) => {
  const [groupName, setGroupName] = useState('');
  const { COLORS } = useTheme();

  const handleNew = async() => {
    try {
      if (groupName.trim().length === 0) {
        return Alert.alert("Blank not allowed", "Please enter a group name!");
      }

      await groupCreate(groupName);
      navigation.navigate("players", { group: groupName });

    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("New Group creation error!", error.message);
        console.log(error);
      }
    }
  };

  return (
    <Container>
      <Header showBackButton />
      <Content>
        <GroupIcon />
        <Highlight title="New Group" subTitle="Create a group to add players" />
        <Input
          placeholder="Type your group name"
          placeholderTextColor={COLORS.GRAY_300}
          onChangeText={setGroupName}
          value={groupName}
        />
        <Button
          buttonText="Create"
          style={{ marginTop: 20 }}
          onPress={handleNew}
        />
      </Content>
    </Container>
  );
};
