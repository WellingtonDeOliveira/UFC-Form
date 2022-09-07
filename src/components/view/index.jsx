import { EditIcon, DeleteIcon, SearchIcon} from "@chakra-ui/icons";
import {
    Box,
    Flex,
    useDisclosure,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ModalComp from "../modal";
import './view.css';

export function View() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [data, setData] = useState([]);
    const [dataEdit, setDataEdit] = useState({});
    const [pesquisa, setPesquisa] = useState('');

    useEffect(() => {
        const db_costumer = localStorage.getItem("cad_cliente")
            ? JSON.parse(localStorage.getItem("cad_cliente"))
            : [];
        setData(db_costumer);
    }, [setData]);

    const handleRemove = (cpf) => {
        const newArray = data.filter((item) => item.cpf !== cpf);

        setData(newArray);

        localStorage.setItem("cad_cliente", JSON.stringify(newArray));
    };

    function searchName(){
        alert("Nome: "+pesquisa+" : Atualizações futuras...");
    }
    return (
        <div className="viewHome">
                <div className="campo-pesquisa">
                    <input
                        type="text"
                        placeholder="Pesquisar por nome"
                        className="campo-label"
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                    />
                    <SearchIcon className="icon-search" fontSize={30} cursor="pointer" onClick={()=>{searchName()}}/>
                </div>
            <Flex
                h="100vh"
                align="center"
                justify="center"
                fontSize="20px"
                fontFamily="poppins"
            >
                <Box maxW={800} w="100%" h="100vh" py={10} px={2}>
                    <Box overflowY="auto" height="100%">
                        <Table mt="6">
                            <Thead>
                                <Tr>
                                    <Th fontSize="15px">
                                        Nome
                                    </Th>
                                    <Th fontSize="15px">
                                        CPF
                                    </Th>
                                    <Th fontSize="15px">
                                        Data de Cadastro
                                    </Th>
                                    <Th p={0}></Th>
                                    <Th p={0}></Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {data.map(({ name, cpf, cadastro, rg, data_nascimento, mae }, index) => (
                                    <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                                        <Td>{name}</Td>
                                        <Td>{cpf}</Td>
                                        <Td>{cadastro}</Td>
                                        <Td p={0}>
                                            <EditIcon
                                                fontSize={20}
                                                onClick={() => [
                                                    setDataEdit({ name, cpf, cadastro, rg, data_nascimento, mae, index }),
                                                    onOpen(),
                                                ]}
                                            />
                                        </Td>
                                        <Td p={0}>
                                            <DeleteIcon
                                                fontSize={20}
                                                onClick={() => handleRemove(cpf)}
                                            />
                                        </Td>
                                    </Tr>
                                ))}
                            </Tbody>
                        </Table>
                    </Box>
                </Box>
                {isOpen && (
                    <ModalComp
                        isOpen={isOpen}
                        onClose={onClose}
                        data={data}
                        setData={setData}
                        dataEdit={dataEdit}
                        setDataEdit={setDataEdit}
                    />
                )}
            </Flex>
        </div>
    );
};
