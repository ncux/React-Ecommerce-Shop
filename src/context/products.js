import { createContext, useState } from 'react';

export const ProductsContext = createContext();

export const ProductsState = ({ children }) => {

    const [alluxioAction, setAlluxioAction] = useState('');
    const [createDir, setCreateDir] = useState('');
    const [createFile, setCreateFile] = useState({ path: '', filename: '' });
    const [deleteDir, setDeleteDir] = useState('');
    const [deleteFile, setDeleteFile] = useState({ path: '', filename: '' });
    const [consistencyCheck, setConsistencyCheck] = useState('');

    const resetAlluxioForm = () => {
        setCreateDir('');
        setCreateFile({ path: '', filename: '' });
        setDeleteDir('');
        setDeleteFile({ path: '', filename: '' });
        setConsistencyCheck('');
    };

    return (
        <ProductsContext.Provider value={{
            alluxioAction,
            createDir,
            createFile,
            deleteDir,
            deleteFile,
            consistencyCheck,
            setAlluxioAction,
            setCreateDir,
            setCreateFile,
            setDeleteDir,
            setDeleteFile,
            setConsistencyCheck,
            resetAlluxioForm
        }}>
            { children }
        </ProductsContext.Provider>
    );

};
