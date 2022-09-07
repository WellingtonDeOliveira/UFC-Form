import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import { useState } from "react";

export default function ModalComp({ data, setData, dataEdit, isOpen, onClose }) {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const [name, setName] = useState(dataEdit.name || "");
  const [cpf, setCpf] = useState(dataEdit.cpf || "");
  const [rg, setRg] = useState(dataEdit.rg || "");
  const [mae, setMae] = useState(dataEdit.mae || "");
  const [data_nascimento, setNascimento] = useState(dataEdit.data_nascimento || "");
  const [cadastro, setCadastro] = useState(today.getFullYear() + "" +
    ((today.getMonth() + 1) <= 9 ? "-0" + (today.getMonth() + 1) : "-" + (today.getMonth() + 1))
    + "" + ((today.getDate()) <= 9 ? "-0" + (today.getDate()) : "-" + (today.getDate())));

  const handleSave = () => {
    if (!name || !cpf || !rg || !data_nascimento || !cadastro || !mae) return alert("Preencha todos os campos!!");

    if (cpfAlreadyExists()) {
      return alert("CPF já cadastrado!");
    }

    if (Object.keys(dataEdit).length) {
      data[dataEdit.index] = { name, cpf, rg, data_nascimento, mae, cadastro };
    }

    const newDataArray = !Object.keys(dataEdit).length
      ? [...(data ? data : []), { name, cpf, rg, data_nascimento, mae, cadastro }]
      : [...(data ? data : [])];

    localStorage.setItem("cad_cliente", JSON.stringify(newDataArray));

    setData(newDataArray);

    onClose();
  };

  const cpfAlreadyExists = () => {
    if (dataEdit.cpf !== cpf && data?.length) {
      return data.find((item) => item.cpf === cpf);
    }

    return false;
  };

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edição de Usuario</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl display="flex" flexDir="column" gap={4}>
              <Box>
                <FormLabel>Nome</FormLabel>
                <Input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>CPF</FormLabel>
                <Input
                  type="text"
                  value={cpf}
                  disabled
                  onChange={(e) => setCpf(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>RG</FormLabel>
                <Input
                  type="text"
                  value={rg}
                  disabled
                  onChange={(e) => setRg(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Mãe</FormLabel>
                <Input
                  type="text"
                  value={mae}
                  onChange={(e) => setMae(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Data Nascimento</FormLabel>
                <Input
                  type="date"
                  value={data_nascimento}
                  max={today.getFullYear()+""+
                    ((today.getMonth()+1) <= 9 ? "-0"+(today.getMonth()+1) : "-"+(today.getMonth()+1))
                    +""+((today.getDate()) <= 9 ? "-0"+(today.getDate()) : "-"+(today.getDate()))}
                  onChange={(e) => setNascimento(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Data Cadastro</FormLabel>
                <Input
                  type="date"
                  value={cadastro}
                  disabled
                  onChange={(e) => setCadastro(e.target.value)}
                />
              </Box>
            </FormControl>
          </ModalBody>

          <ModalFooter justifyContent="start">
            <Button colorScheme="green" mr={3} onClick={handleSave}>
              SALVAR
            </Button>
            <Button colorScheme="red" onClick={onClose}>
              CANCELAR
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

