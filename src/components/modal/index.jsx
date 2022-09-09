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

export default function ModalComp({ data, setUser, upd, setUpd, dataEdit, isOpen, onClose }) {
  const timeElapsed = Date.now();
  const today = new Date(timeElapsed);

  const [nome, setNome] = useState(dataEdit.nome || "");
  const [cpf, setCpf] = useState(dataEdit.cpf || "");
  const [rg, setRg] = useState(dataEdit.rg || "");
  const [mae, setMae] = useState(dataEdit.mae || "");
  const [date_nascimento, setNascimento] = useState(dataEdit.date_nascimento || "");
  const [date_cadastro, setCadastro] = useState(today.getFullYear() + "" +
    ((today.getMonth() + 1) <= 9 ? "-0" + (today.getMonth() + 1) : "-" + (today.getMonth() + 1))
    + "" + ((today.getDate()) <= 9 ? "-0" + (today.getDate()) : "-" + (today.getDate())));

  const handleSave = () => {
    if (!nome || !cpf || !rg || !date_nascimento || !date_cadastro || !mae) return alert("Preencha todos os campos!!");

    
    setUser(nome, cpf, rg, date_nascimento, mae, date_cadastro)
    setUpd(!upd);

    onClose();
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
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
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
                  value={date_nascimento}
                  max={today.getFullYear()+""+
                    ((today.getMonth()+1) <= 9 ? "-0"+(today.getMonth()+1) : "-"+(today.getMonth()+1))
                    +""+((today.getDate()) <= 9 ? "-0"+(today.getDate()) : "-"+(today.getDate()))}
                  onChange={(e) => setNascimento(e.target.value)}
                />
              </Box>
              <Box>
                <FormLabel>Data date_Cadastro</FormLabel>
                <Input
                  type="date"
                  value={date_cadastro}
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

