import { EditIcon, DeleteIcon, SearchIcon } from "@chakra-ui/icons";
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
import MediaQuery from 'react-responsive';
import { useEffect, useState } from "react";
import ModalComp from "../modal";
import './view.css';

export function View({ pesquisar, data, remover, upd, setUpd, setUser }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [dataEdit, setDataEdit] = useState({});
    const [pesquisa, setPesquisa] = useState('');
    return (
        <div className="viewHome">
            <MediaQuery maxWidth={569}>
                <div className="campo-pesquisa">
                    <input
                        type="text"
                        placeholder="Pesquisar por nome"
                        className="campo-label campo-label-min"
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                    />
                    <SearchIcon className="icon-search" fontSize={30} cursor="pointer" onClick={() => { pesquisar(pesquisa) }} />
                </div>
                <Flex
                    h="100vh"
                    align="center"
                    justify="center"
                    fontSize="20px"
                    fontFamily="poppins"
                >
                    <Box w="100%" h="100vh" py={5} px={0}>
                        <Box overflowY="auto" height="100%">
                            <Table mt="6">
                                <Thead>
                                    <Tr>
                                        <Th fontSize="8pt">
                                            Nome
                                        </Th>
                                        <Th fontSize="8pt">
                                            CPF
                                        </Th>
                                        <Th p={0}></Th>
                                        <Th p={0}></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.map(({ nome, cpf, date_cadastro, rg, date_nascimento, mae }, index) => (
                                        <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                                            <Td fontSize="8pt">{nome}</Td>
                                            <Td fontSize="8pt">{cpf}</Td>
                                            <Td p={0}>
                                                <EditIcon
                                                    fontSize={15}
                                                    onClick={() => [
                                                        setDataEdit({ nome, cpf, date_cadastro, rg, date_nascimento, mae, index }),
                                                        onOpen(),
                                                    ]}
                                                />
                                            </Td>
                                            <Td p={0}>
                                                <DeleteIcon
                                                    fontSize={15}
                                                    onClick={() => remover(cpf)}
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
                            upd={upd}
                            setUser={setUser}
                            setUpd={setUpd}
                            dataEdit={dataEdit}
                            setDataEdit={setDataEdit}
                        />
                    )}
                </Flex>
            </MediaQuery>
            <MediaQuery minWidth={570} maxWidth={899}>
                <div className="campo-pesquisa">
                    <input
                        type="text"
                        placeholder="Pesquisar por nome"
                        className="campo-label"
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                    />
                    <SearchIcon className="icon-search" fontSize={30} cursor="pointer" onClick={() => { pesquisar(pesquisa) }} />
                </div>
                <Flex
                    h="100vh"
                    align="center"
                    justify="center"
                    fontSize="20px"
                    fontFamily="poppins"
                >
                    <Box w="90%" h="100vh" py={5} px={0}>
                        <Box overflowY="auto" height="100%">
                            <Table mt="6">
                                <Thead>
                                    <Tr>
                                        <Th fontSize="8pt">
                                            Nome
                                        </Th>
                                        <Th fontSize="8pt">
                                            CPF
                                        </Th>
                                        <Th fontSize="8pt">
                                            RG
                                        </Th>
                                        <Th p={0}></Th>
                                        <Th p={0}></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.map(({ nome, cpf, date_cadastro, rg, date_nascimento, mae }, index) => (
                                        <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                                            <Td fontSize="9pt">{nome}</Td>
                                            <Td fontSize="9pt">{cpf}</Td>
                                            <Td fontSize="9pt">{date_nascimento}</Td>
                                            <Td p={0}>
                                                <EditIcon
                                                    fontSize={20}
                                                    onClick={() => [
                                                        setDataEdit({ nome, cpf, date_cadastro, rg, date_nascimento, mae, index }),
                                                        onOpen(),
                                                    ]}
                                                />
                                            </Td>
                                            <Td p={0}>
                                                <DeleteIcon
                                                    fontSize={20}
                                                    onClick={() => remover(cpf)}
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
                            upd={upd}
                            setUser={setUser}
                            setUpd={setUpd}
                            dataEdit={dataEdit}
                            setDataEdit={setDataEdit}
                        />
                    )}
                </Flex>
            </MediaQuery>
            <MediaQuery minWidth={900} maxWidth={1259}>
                <div className="campo-pesquisa">
                    <input
                        type="text"
                        placeholder="Pesquisar por nome"
                        className="campo-label"
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                    />
                    <SearchIcon className="icon-search" fontSize={30} cursor="pointer" onClick={() => { pesquisar(pesquisa) }} />
                </div>
                <Flex
                    h="100vh"
                    align="center"
                    justify="center"
                    fontSize="20px"
                    fontFamily="poppins"
                >
                    <Box w="80%" h="100vh" py={5} px={0}>
                        <Box overflowY="auto" height="100%">
                            <Table mt="6">
                                <Thead>
                                    <Tr>
                                        <Th fontSize="10pt">
                                            Nome
                                        </Th>
                                        <Th fontSize="10pt">
                                            CPF
                                        </Th>
                                        <Th fontSize="10pt">
                                            RG
                                        </Th>
                                        <Th fontSize="10pt">
                                            Nome da mãe
                                        </Th>
                                        <Th p={0}></Th>
                                        <Th p={0}></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.map(({ nome, cpf, date_cadastro, rg, date_nascimento, mae }, index) => (
                                        <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                                            <Td fontSize="10pt">{nome}</Td>
                                            <Td fontSize="10pt">{cpf}</Td>
                                            <Td fontSize="10pt">{rg}</Td>
                                            <Td fontSize="10pt">{mae}</Td>
                                            <Td p={0}>
                                                <EditIcon
                                                    fontSize={20}
                                                    onClick={() => [
                                                        setDataEdit({ nome, cpf, date_cadastro, rg, date_nascimento, mae, index }),
                                                        onOpen(),
                                                    ]}
                                                />
                                            </Td>
                                            <Td p={0}>
                                                <DeleteIcon
                                                    fontSize={20}
                                                    onClick={() => remover(cpf)}
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
                            upd={upd}
                            setUser={setUser}
                            setUpd={setUpd}
                            dataEdit={dataEdit}
                            setDataEdit={setDataEdit}
                        />
                    )}
                </Flex>
            </MediaQuery>
            <MediaQuery minWidth={1260}>
                <div className="campo-pesquisa">
                    <input
                        type="text"
                        placeholder="Pesquisar por nome"
                        className="campo-label"
                        value={pesquisa}
                        onChange={(e) => setPesquisa(e.target.value)}
                    />
                    <SearchIcon className="icon-search" fontSize={30} cursor="pointer" onClick={() => { pesquisar(pesquisa)}} />
                </div>
                <Flex
                    h="100vh"
                    align="center"
                    justify="center"
                    fontSize="20px"
                    fontFamily="poppins"
                >
                    <Box w="90%" h="100vh" py={5} px={0}>
                        <Box overflowY="auto" height="100%">
                            <Table mt="6">
                                <Thead>
                                    <Tr>
                                        <Th fontSize="12pt">
                                            Nome
                                        </Th>
                                        <Th fontSize="12pt">
                                            CPF
                                        </Th>
                                        <Th fontSize="12pt">
                                            RG
                                        </Th>
                                        <Th fontSize="12pt">
                                            Data de Nascimento
                                        </Th>
                                        <Th fontSize="12pt">
                                            Nome da mãe
                                        </Th>
                                        <Th fontSize="12pt">
                                            Data de Cadastro
                                        </Th>
                                        <Th p={0}></Th>
                                        <Th p={0}></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data.map(({ nome, cpf, date_cadastro, rg, date_nascimento, mae }, index) => (
                                        <Tr key={index} cursor="pointer " _hover={{ bg: "gray.100" }}>
                                            <Td fontSize="12pt">{nome}</Td>
                                            <Td fontSize="12pt">{cpf}</Td>
                                            <Td fontSize="12pt">{rg}</Td>
                                            <Td fontSize="12pt">{date_nascimento}</Td>
                                            <Td fontSize="12pt">{mae}</Td>
                                            <Td fontSize="12pt">{date_cadastro}</Td>
                                            <Td p={0}>
                                                <EditIcon
                                                    fontSize={20}
                                                    onClick={() => [
                                                        setDataEdit({ nome, cpf, date_cadastro, rg, date_nascimento, mae, index }),
                                                        onOpen(),
                                                    ]}
                                                />
                                            </Td>
                                            <Td p={0}>
                                                <DeleteIcon
                                                    fontSize={20}
                                                    onClick={() => remover(cpf)}
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
                            upd={upd}
                            setUser={setUser}
                            setUpd={setUpd}
                            dataEdit={dataEdit}
                            setDataEdit={setDataEdit}
                        />
                    )}
                </Flex>
            </MediaQuery>
        </div>
    );
};
